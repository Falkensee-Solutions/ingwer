import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { withBasePath } from "@/lib/basePath";
import {
  KATEGORIE_LABEL,
  MATERIALIEN,
  STATUS_LABEL,
  ZIELGRUPPE_LABEL,
  getMaterialBySlug,
} from "@/data/materialien";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return MATERIALIEN.filter((m) => m.status !== "entwurf").map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMaterialBySlug(slug);
  if (!m) return { title: "Material nicht gefunden" };
  return { title: m.titel, description: m.kurzbeschreibung };
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);
  if (!material) notFound();

  const verwandte = (material.verwandte ?? [])
    .map(getMaterialBySlug)
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <Hero
        eyebrow={KATEGORIE_LABEL[material.kategorie]}
        titel={material.titel}
        lead={material.kurzbeschreibung}
      />

      <Container padding="lg">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {material.ziel ? (
              <Section titel="Ziel">
                <p>{material.ziel}</p>
              </Section>
            ) : null}

            {material.bezug ? (
              <Section titel="Religiöser und weltanschaulicher Bezug">
                <p>{material.bezug}</p>
              </Section>
            ) : null}

            {material.vorbereitung && material.vorbereitung.length > 0 ? (
              <Section titel="Vorbereitung">
                <BulletList items={material.vorbereitung} />
              </Section>
            ) : null}

            {material.ablauf && material.ablauf.length > 0 ? (
              <Section titel="Ablauf">
                <OrderedList items={material.ablauf} />
              </Section>
            ) : null}

            {material.tipps && material.tipps.length > 0 ? (
              <Section titel="Tipps für die Durchführung">
                <BulletList items={material.tipps} />
              </Section>
            ) : null}

            {material.sensibilitaet && material.sensibilitaet.length > 0 ? (
              <Section titel="Sensibilität und Schutz">
                <BulletList items={material.sensibilitaet} />
              </Section>
            ) : null}

            {material.benoetigteMaterialien && material.benoetigteMaterialien.length > 0 ? (
              <Section titel="Benötigte Materialien">
                <BulletList items={material.benoetigteMaterialien} />
              </Section>
            ) : null}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                <h2 className="text-base font-bold text-[color:var(--color-ink)]">
                  Eckdaten
                </h2>
                <dl className="mt-3 space-y-2 text-sm">
                  <Meta label="Kategorie" wert={KATEGORIE_LABEL[material.kategorie]} />
                  <Meta label="Status" wert={STATUS_LABEL[material.status]} />
                  <Meta label="Dauer" wert={material.dauer} />
                  {material.gruppengroesse ? (
                    <Meta label="Gruppengröße" wert={material.gruppengroesse} />
                  ) : null}
                  <Meta
                    label="Zielgruppe"
                    wert={material.zielgruppen.map((z) => ZIELGRUPPE_LABEL[z]).join(", ")}
                  />
                  {material.dateiFormat ? (
                    <Meta label="Format" wert={material.dateiFormat} />
                  ) : null}
                  <Meta label="Sprache" wert={material.sprache} />
                </dl>

                <div className="mt-5">
                  {material.download ? (
                    <a
                      href={withBasePath(material.download)}
                      download
                      className="inline-flex w-full items-center justify-center rounded-md bg-[color:var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-[color:var(--color-primary-hover)]"
                    >
                      Download
                    </a>
                  ) : (
                    <p className="rounded-md bg-[color:var(--color-surface-alt)] px-3 py-2 text-center text-sm text-[color:var(--color-ink-muted)]">
                      {material.status === "in-ueberarbeitung"
                        ? "Material in Überarbeitung"
                        : material.status === "auf-anfrage"
                        ? "Auf Anfrage verfügbar"
                        : "Download folgt"}
                    </p>
                  )}
                </div>
              </div>

              {verwandte.length > 0 ? (
                <div className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                  <h2 className="text-base font-bold text-[color:var(--color-ink)]">
                    Verwandte Materialien
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {verwandte.map((v) => (
                      <li key={v.slug}>
                        <Link
                          href={`/materialien/${v.slug}`}
                          className="text-sm text-[color:var(--color-primary)]"
                        >
                          {v.titel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
        </div>

        <p className="mt-12 border-t border-[color:var(--color-line)] pt-6">
          <Link href="/materialien" className="text-sm font-semibold text-[color:var(--color-primary)]">
            ← Zurück zur Materialübersicht
          </Link>
        </p>
      </Container>
    </>
  );
}

function Section({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-[color:var(--color-ink)] md:text-2xl">{titel}</h2>
      <div className="mt-3 text-[15px] text-[color:var(--color-ink-soft)]">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--color-accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function OrderedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-xs font-bold text-white"
          >
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Meta({ label, wert }: { label: string; wert: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-ink-muted)]">
        {label}
      </dt>
      <dd className="text-[color:var(--color-ink)]">{wert}</dd>
    </div>
  );
}
