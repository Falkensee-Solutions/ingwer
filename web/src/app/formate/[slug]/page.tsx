import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { TerminCard } from "@/components/TerminCard";
import { FORMATE, getFormatBySlug } from "@/data/formate";
import { getTermineByFormatSlug } from "@/data/termine";
import { buildMailto } from "@/lib/mailto";

type Params = { slug: string };

// Pro Format eine eigene Akzentpalette → Detailseite ist visuell einer Familie zuzuordnen.
const FORMAT_ACCENT: Record<string, { bar: string; bg: string; ink: string }> = {
  universitaeten: {
    bar: "var(--color-primary)",
    bg: "var(--color-primary-soft)",
    ink: "var(--color-primary-ink)",
  },
  schulen: {
    bar: "var(--color-accent)",
    bg: "var(--color-accent-soft)",
    ink: "var(--color-accent-ink)",
  },
  ausbildung: {
    bar: "var(--color-lavender)",
    bg: "var(--color-lavender-soft)",
    ink: "var(--color-lavender-ink)",
  },
  gemeinden: {
    bar: "var(--color-sage)",
    bg: "var(--color-sage-soft)",
    ink: "var(--color-sage-ink)",
  },
};

export function generateStaticParams(): Params[] {
  return FORMATE.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const format = getFormatBySlug(slug);
  if (!format) return { title: "Format nicht gefunden" };
  return {
    title: format.titel,
    description: format.kurz,
  };
}

export default async function FormatDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const format = getFormatBySlug(slug);
  if (!format) notFound();

  const mailto = buildMailto({ format: format.titel });
  const accent = FORMAT_ACCENT[format.slug] ?? FORMAT_ACCENT.universitaeten;
  const termine = getTermineByFormatSlug(format.slug);

  return (
    <>
      <Hero
        eyebrow="Format"
        titel={format.titel}
        lead={format.einleitung}
        ctas={[
          { href: mailto, label: format.cta, variant: "primary" },
          { href: "/konzept#formate", label: "Alle Formate", variant: "ghost" },
        ]}
      />

      <Container padding="lg">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <Section titel="Zielgruppe" accent={accent.bar}>
              <p>{format.zielgruppe}</p>
            </Section>

            <Section titel="Ziele" accent={accent.bar}>
              <BulletList items={format.ziele} accent={accent.bar} />
            </Section>

            <Section titel="Typischer Ablauf" accent={accent.bar}>
              <BulletList items={format.ablauf} accent={accent.bar} />
            </Section>

            <Section titel="Voraussetzungen" accent={accent.bar}>
              <BulletList items={format.voraussetzungen} accent={accent.bar} />
            </Section>

            <Section titel="Rolle der Institution" accent={accent.bar}>
              <BulletList items={format.institutionsrolle} accent={accent.bar} />
            </Section>

            {format.besonderheiten && format.besonderheiten.length > 0 ? (
              <Section titel="Besonderheiten" accent={accent.bar}>
                <BulletList items={format.besonderheiten} accent={accent.bar} />
              </Section>
            ) : null}

            {format.zertifikat ? (
              <Section titel="Zertifikat und Anerkennung" accent={accent.bar}>
                <p>{format.zertifikat}</p>
              </Section>
            ) : null}
          </div>

          <aside className="lg:col-span-1">
            <div
              className="sticky top-24 relative overflow-hidden rounded-2xl border p-7"
              style={{
                borderColor: `color-mix(in srgb, ${accent.bar} 25%, transparent)`,
                background: `color-mix(in srgb, ${accent.bg} 60%, var(--color-surface))`,
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/40"
              />
              <p
                className="eyebrow relative mb-2 inline-flex items-center gap-2"
                style={{ color: accent.ink }}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-[1px] w-6"
                  style={{ background: accent.ink, opacity: 0.55 }}
                />
                Nächster Schritt
              </p>
              <h2
                className="relative text-lg font-bold"
                style={{ color: accent.ink }}
              >
                Format anfragen
              </h2>
              <p className="relative mt-2 text-sm text-[color:var(--color-ink-soft)]">
                Schreiben Sie uns mit Angaben zu Institution, Zielgruppe und
                gewünschtem Zeitraum.
              </p>
              <a
                href={mailto}
                className="relative mt-5 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-[color:var(--color-primary-hover)]"
              >
                {format.cta}
              </a>
            </div>
          </aside>
        </div>
      </Container>

      <Container padding="md">
        <section
          id="termine"
          aria-labelledby="format-termine"
          className="rounded-3xl border border-[color:var(--color-line)] p-7 md:p-10"
          style={{
            background: `color-mix(in srgb, ${accent.bg} 45%, var(--color-bg))`,
          }}
        >
          <div className="mb-7 max-w-2xl">
            <p className="eyebrow mb-2" style={{ color: accent.ink }}>
              Termine
            </p>
            <h2
              id="format-termine"
              className="text-2xl font-bold text-[color:var(--color-ink)] md:text-[1.7rem]"
            >
              Termine für dieses Format
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
              Hier finden Sie geplante, bestätigte und abgeschlossene Werkstätten,
              die diesem Format zugeordnet sind. Über die Detailseite erhalten Sie
              weitere Informationen; bei freigegebenen oder geplanten Terminen können
              Sie direkt eine Anmeldung oder Interessenbekundung anfragen.
            </p>
          </div>

          {termine.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {termine.map((termin) => (
                <TerminCard key={termin.slug} termin={termin} showFormat={false} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
              <p className="text-sm text-[color:var(--color-ink-soft)]">
                Für dieses Format sind aktuell keine öffentlichen Termine eingetragen.
                Schreiben Sie uns gern, wenn Sie eine Werkstatt planen möchten.
              </p>
              <a
                href={mailto}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--color-primary)] px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-[color:var(--color-primary-hover)]"
              >
                {format.cta}
              </a>
            </div>
          )}
        </section>
      </Container>

      <Container padding="md">
        <CTASection
          eyebrow="Workshops"
          titel="Workshops und Methoden zur Vorbereitung ansehen"
          text="Workshops, Methoden, Ablaufpläne und Reflexionsfragen – als Unterstützung für die Vorbereitung in Ihrer Institution."
          primaryCta={{ href: "/materialien", label: "Workshops öffnen" }}
        />
      </Container>
    </>
  );
}

function Section({
  titel,
  children,
  accent,
}: {
  titel: string;
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <section>
      <h2 className="flex items-center gap-3 text-2xl font-bold text-[color:var(--color-ink)]">
        <span
          aria-hidden="true"
          className="inline-block h-6 w-1 flex-shrink-0 rounded-full"
          style={{ background: accent }}
        />
        {titel}
      </h2>
      <div className="mt-3 text-[15px] text-[color:var(--color-ink-soft)]">{children}</div>
    </section>
  );
}

function BulletList({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
            style={{ background: accent }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
