import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { TerminBadge } from "@/components/TerminCard";
import { FORMATE, getFormatBySlug } from "@/data/formate";
import {
  STATUS_TERMIN_BESCHREIBUNG,
  TERMINE,
  getTerminBySlug,
} from "@/data/termine";
import { buildMailto } from "@/lib/mailto";
import { withBasePath } from "@/lib/basePath";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return TERMINE.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const termin = getTerminBySlug(slug);
  if (!termin) return { title: "Termin nicht gefunden" };
  return {
    title: termin.titel,
    description: `${termin.zeitraum} – ${termin.zielgruppe}`,
  };
}

export default async function TerminDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const termin = getTerminBySlug(slug);
  if (!termin) notFound();

  const format = getFormatBySlug(termin.formatSlug);
  if (!format) notFound();

  const mailto = buildMailto({
    format: format.titel,
    zeitraum: termin.zeitraum,
    anliegen: `Ich interessiere mich für den Termin „${termin.titel}“ und möchte weitere Informationen zur Teilnahme oder Anmeldung erhalten.`,
  });
  const anmeldungLabel =
    termin.status === "fix"
      ? "Anmeldung anfragen"
      : termin.status === "abgeschlossen"
        ? null
        : "Interesse bekunden";
  const weitereFormate = FORMATE.filter((f) => f.slug !== format.slug);

  return (
    <>
      <Hero
        eyebrow="Termin"
        titel={termin.titel}
        lead={`${termin.zeitraum}${termin.ort ? ` · ${termin.ort}` : ""}`}
        ctas={[
          ...(anmeldungLabel
            ? [{ href: mailto, label: anmeldungLabel, variant: "primary" as const }]
            : []),
          { href: `/formate/${format.slug}#termine`, label: "Zum Format", variant: "ghost" },
        ]}
      />

      <Container padding="lg">
        <div className="grid gap-10 lg:grid-cols-3">
          <main className="space-y-8 lg:col-span-2">
            <section className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-card)] md:p-9">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <TerminBadge status={termin.status} />
                <Link
                  href={`/formate/${format.slug}`}
                  className="rounded-full bg-[color:var(--color-primary-soft)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-[color:var(--color-primary-ink)] no-underline hover:bg-[color:var(--color-primary)] hover:text-white"
                >
                  {format.titel}
                </Link>
              </div>

              <dl className="grid gap-4 border-y border-[color:var(--color-line)] py-5 sm:grid-cols-2">
                <DetailItem label="Zeitraum" value={termin.zeitraum} />
                {termin.ort ? <DetailItem label="Ort" value={termin.ort} /> : null}
                <DetailItem label="Zielgruppe" value={termin.zielgruppe} />
                <DetailItem label="Status" value={STATUS_TERMIN_BESCHREIBUNG[termin.status]} />
              </dl>

              <div className="mt-6 space-y-5 text-[color:var(--color-ink-soft)]">
                <div>
                  <h2 className="text-2xl font-bold text-[color:var(--color-ink)]">
                    Details
                  </h2>
                  <p className="mt-2 leading-relaxed">{termin.beschreibung}</p>
                </div>
                {termin.hinweis ? (
                  <div className="rounded-2xl bg-[color:var(--color-bg-deep)] p-5">
                    <h3 className="font-semibold text-[color:var(--color-ink)]">Hinweis</h3>
                    <p className="mt-1 text-sm leading-relaxed">{termin.hinweis}</p>
                  </div>
                ) : null}
              </div>
            </section>

            {termin.downloads && termin.downloads.length > 0 ? (
              <section className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[color:var(--color-ink)]">
                  Downloads
                </h2>
                <ul className="mt-4 space-y-2">
                  {termin.downloads.map((download) => (
                    <li key={download.href}>
                      <a
                        href={withBasePath(download.href)}
                        className="font-semibold text-[color:var(--color-primary)]"
                        download
                      >
                        {download.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </main>

          <aside className="space-y-6 lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-card)]">
              <p className="eyebrow mb-2">Teilnahme</p>
              <h2 className="text-xl font-bold text-[color:var(--color-ink)]">
                Anmeldung und Rückfragen
              </h2>
              {anmeldungLabel ? (
                <>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    Öffnen Sie einen vorbereiteten E-Mail-Entwurf mit Termin,
                    Format und Zeitraum. Es werden keine Daten auf der Website gespeichert.
                  </p>
                  <a
                    href={mailto}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-[color:var(--color-primary-hover)]"
                  >
                    {anmeldungLabel}
                  </a>
                </>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                  Diese Werkstatt ist abgeschlossen. Eine Anmeldung ist nicht mehr möglich;
                  verfügbare Materialien und Dokumentationen erscheinen hier, sobald sie
                  veröffentlicht sind.
                </p>
              )}

              <div className="mt-6 border-t border-[color:var(--color-line)] pt-5">
                <Link
                  href={`/formate/${format.slug}#termine`}
                  className="text-sm font-semibold text-[color:var(--color-primary)] no-underline"
                >
                  Alle Termine dieses Formats ansehen →
                </Link>
              </div>
            </div>

            {weitereFormate.length > 0 ? (
              <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7">
                <h2 className="font-bold text-[color:var(--color-ink)]">Weitere Formate</h2>
                <ul className="mt-3 space-y-2">
                  {weitereFormate.map((f) => (
                    <li key={f.slug}>
                      <Link
                        href={`/formate/${f.slug}`}
                        className="text-sm text-[color:var(--color-primary)] no-underline"
                      >
                        {f.titel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Container>
    </>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-ink-muted)]">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium leading-relaxed text-[color:var(--color-ink)]">
        {value}
      </dd>
    </div>
  );
}