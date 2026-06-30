import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { FORMATE, getFormatBySlug } from "@/data/formate";
import { buildMailto } from "@/lib/mailto";

type Params = { slug: string };

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

  return (
    <>
      <Hero
        eyebrow="Format"
        titel={format.titel}
        lead={format.einleitung}
        ctas={[
          { href: mailto, label: format.cta, variant: "primary" },
          { href: "/formate", label: "Alle Formate", variant: "ghost" },
        ]}
      />

      <Container padding="lg">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <Section titel="Zielgruppe">
              <p>{format.zielgruppe}</p>
            </Section>

            <Section titel="Ziele">
              <BulletList items={format.ziele} />
            </Section>

            <Section titel="Typischer Ablauf">
              <BulletList items={format.ablauf} />
            </Section>

            <Section titel="Voraussetzungen">
              <BulletList items={format.voraussetzungen} />
            </Section>

            <Section titel="Rolle der Institution">
              <BulletList items={format.institutionsrolle} />
            </Section>

            {format.besonderheiten && format.besonderheiten.length > 0 ? (
              <Section titel="Besonderheiten">
                <BulletList items={format.besonderheiten} />
              </Section>
            ) : null}

            {format.zertifikat ? (
              <Section titel="Zertifikat und Anerkennung">
                <p>{format.zertifikat}</p>
              </Section>
            ) : null}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
              <h2 className="text-lg font-bold text-[color:var(--color-ink)]">
                Format anfragen
              </h2>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
                Schreiben Sie uns mit Angaben zu Institution, Zielgruppe und
                gewünschtem Zeitraum.
              </p>
              <a
                href={mailto}
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[color:var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-[color:var(--color-primary-hover)]"
              >
                {format.cta}
              </a>
            </div>
          </aside>
        </div>
      </Container>

      <Container padding="md">
        <CTASection
          eyebrow="Materialien"
          titel="Praxismaterialien zur Vorbereitung ansehen"
          text="Workshops, Methoden, Ablaufpläne und Reflexionsfragen – als Unterstützung für die Vorbereitung in Ihrer Institution."
          primaryCta={{ href: "/materialien", label: "Materialien öffnen" }}
        />
      </Container>
    </>
  );
}

function Section({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[color:var(--color-ink)]">{titel}</h2>
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
