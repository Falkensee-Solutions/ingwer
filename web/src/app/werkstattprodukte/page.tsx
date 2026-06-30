import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";
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
          <HinweisBox titel="In Vorbereitung">
            <p>
              Werkstattprodukte werden hier veröffentlicht, sobald die Teilnehmenden
              schriftlich zugestimmt haben. Bis dahin werden keine Inhalte gezeigt, die
              nicht eindeutig freigegeben sind.
            </p>
            <p className="mt-2">
              Bevorzugt werden Inhalte ohne erkennbare Gesichter: Texte, anonymisierte
              Zitate, künstlerische Arbeiten, Plakate, Bilder von Materialien oder Räumen.
            </p>
          </HinweisBox>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WERKSTATTPRODUKTE.map((p) => (
              <article
                key={p.slug}
                className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
              >
                <h3 className="text-lg font-bold text-[color:var(--color-ink)]">{p.titel}</h3>
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
