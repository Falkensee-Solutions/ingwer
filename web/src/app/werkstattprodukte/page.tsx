import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { QuoteBox } from "@/components/QuoteBox";
import { CTASection } from "@/components/CTASection";
import { WERKSTATTPRODUKTE } from "@/data/werkstattprodukte";

export const metadata: Metadata = {
  title: "Werkstattprodukte",
  description:
    "Ergebnisse aus Interreligiösen Werkstätten: Texte, künstlerische Arbeiten, Musik, Videos, Gebete, Plakate.",
};

export default function WerkstattproduktePage() {
  const hatProdukte = WERKSTATTPRODUKTE.length > 0;

  return (
    <>
      <Hero
        eyebrow="Ergebnisse"
        titel="Werkstattprodukte"
        lead="In den Werkstätten entstehen gemeinsame Produkte: Texte, künstlerische Arbeiten, Musik, Videos, Gebete, Plakate oder andere Formen des Ausdrucks. Die Ergebnisse werden dokumentiert und – datenschutzsensibel und nur mit Zustimmung – auf dieser Seite präsentiert."
      />

      <Container padding="lg">
        {!hatProdukte ? (
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] bg-gradient-to-br from-[color:var(--color-lavender-soft)]/45 to-[color:var(--color-sage-soft)]/35 p-10 text-center md:p-14">
            {/* Brand-Blobs analog zum Hero */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--color-sunny-soft)]/70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-[color:var(--color-accent-soft)]/60"
            />

            <p className="eyebrow relative mb-3 inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-[1px] w-6 bg-[color:var(--color-accent-hover)]"
              />
              In Vorbereitung
            </p>
            <h2 className="relative text-2xl font-bold text-[color:var(--color-ink)] md:text-[1.85rem]">
              Werkstattprodukte folgen mit Zustimmung
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-[color:var(--color-ink-soft)]">
              Sobald Teilnehmende schriftlich zugestimmt haben, veröffentlichen wir hier
              Texte, anonymisierte Zitate, künstlerische Arbeiten, Plakate oder Bilder von
              Workshops und Methoden. Bevorzugt werden Inhalte ohne erkennbare Gesichter.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-[color:var(--color-primary-hover)]"
              >
                Werkstatt anfragen
              </Link>
              <Link
                href="/materialien"
                className="inline-flex items-center rounded-full border border-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-primary)] no-underline hover:bg-[color:var(--color-primary-soft)]"
              >
                Zu den Workshops
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WERKSTATTPRODUKTE.map((p) => (
              <article
                key={p.slug}
                className="group rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary)]/40 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className="inline-flex items-center rounded-full bg-[color:var(--color-primary-soft)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[color:var(--color-primary-ink)]">
                  {p.art}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[color:var(--color-ink)]">{p.titel}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)]">
                  {p.werkstatt} · {p.jahr}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-soft)]">{p.beschreibung}</p>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12">
          <QuoteBox
            zitat="Erst wenn man miteinander isst, schweigt und betet, versteht man, wie wenig man bisher voneinander wusste."
            quelle="Anonym, Teilnehmende:r einer Pilot-Werkstatt"
          />
        </div>
      </Container>

      <Container padding="md">
        <CTASection
          eyebrow="Werkstatt anfragen"
          titel="Eigene Werkstatt mit Ergebnis"
          text="Wir unterstützen Institutionen dabei, ein eigenes Werkstattprodukt zu erarbeiten – ob Text, Kunst, Musik oder Video."
          primaryCta={{ href: "/kontakt", label: "Kontakt aufnehmen" }}
        />
      </Container>
    </>
  );
}
