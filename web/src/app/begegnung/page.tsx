import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Begegnung",
  description: "Von der Kontaktaufnahme zur gemeinsamen Interreligiösen Werkstatt.",
};

const PHASEN = [
  {
    titel: "Zueinadner finden",
    text: "x",
  },
  {
    titel: "Individuelle Planung",
    text: "Die erste Planung findet auf zwei Ebenen statt: Die beteiligten Gemeinden oder Institutionen öffnen ihren Bekanntenkreis und ermöglichen Teilnahme; zugleich bildet sich ein möglichst paritätisch besetztes Organisationsteam. In der Planung werden unter anderem Zielgruppe, Gruppengröße, Zeitraum, Veranstaltungsort, Unterkunft, religiöse Bedürfnisse, Verpflegung, Schutz und Dialogregeln berücksichtigt.",
  },
  {
    titel: "Vorbereitende Workshops",
    text: "Die vorbereitenden Workshops sensibilisieren die Teilnehmenden und bereiten sie auf die gemeinsame Zeit vor. Sie ermöglichen einen fundierten Einstieg in das christliche und muslimische Glaubensverständnis, schaffen Raum für Begegnung und Austausch, machen für Diskriminierung und Fremdzuschreibungen sensibel und vermitteln Regeln und Grenzen der Interreligiösen Werkstatt. Auswahl und Reihenfolge können an Zielgruppe und Schwerpunkt angepasst werden.",
  },
  {
    titel: "Die mehrtägige Werkstatt",
    text: "Die Interreligiöse Werkstatt ist eine mehrtägige Begegnung mit gemeinsamer Unterkunft. Die Teilnehmenden teilen Alltag und Mahlzeiten, erleben religiöse und spirituelle Praxis und kommen über Glauben, Weltanschauung, Werte und gesellschaftliche Verantwortung ins Gespräch. Zur Werkstatt gehören je nach Zielgruppe und Rahmen gemeinsames Ankommen, thematische Einheiten, Dialogrunden, Gespräche, Besuche von Gotteshäusern, Mahlzeiten, Zeiten für Gebet, Stille und Besinnung sowie gemeinsame Auswertung.",
  },
  {
    titel: "Nachbereitung",
    text: "Die Erfahrungen aus der Werkstatt werden gemeinsam ausgewertet. Tägliche Reflexionsrunden, religionsinterne Gespräche, persönliche Rückmeldungen und eine abschließende Evaluation können miteinander verbunden werden. Die Erfahrungen werden dokumentiert und für weitere Werkstätten genutzt. So wird das Format Schritt für Schritt weiterentwickelt und kann langfristige Beziehungen und weitere gemeinsame Projekte ermöglichen.",
  },
];

export default function BegegnungPage() {
  return (
    <>
      <Hero
        eyebrow="Begegnung"
        titel="Begegnung braucht Vorbereitung"
        lead="Die gemeinsamen Zeit beginnt nicht mit der Werkstatt. Bereits im Vorfeld müssen Kontakte entstehen und vertrauen aufgebaut werden. Hierfür gehen wir in Phasen vor."
      />

      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-deep)]">
        <Container padding="lg">
          <SectionHeader eyebrow="Ablauf" titel="Unsere fünf Phasen" />
          <ol className="mt-10 space-y-6">
            {PHASEN.map((phase, index) => (
              <li key={phase.titel}>
                <details className="group rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-8">
                  <summary className="grid cursor-pointer list-none gap-5 md:grid-cols-[5rem_1fr_auto] md:items-center [&::-webkit-details-marker]:hidden">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-sage)] text-lg font-bold text-white">{index + 1}</span>
                    <h3 className="text-xl font-bold text-[color:var(--color-ink)]">{phase.titel}</h3>
                    <span aria-hidden="true" className="text-2xl font-light leading-none text-[color:var(--color-primary)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-6 leading-relaxed text-[color:var(--color-ink-soft)] md:ml-[5rem]">{phase.text}</p>
                </details>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container as="section" padding="lg" ariaLabelledby="zielgruppen-titel">
        <SectionHeader id="zielgruppen-titel" eyebrow="Anpassung" titel="Anpassung an unterschiedliche Zielgruppen" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
          Die Werkstatt kann an unterschiedliche Zielgruppen und Rahmenbedingungen angepasst werden. Der Kern bleibt die mehrtägige Begegnung, in der religiöse und weltanschauliche Perspektiven sichtbar werden und Menschen miteinander ins Gespräch kommen.
        </p>
      </Container>
    </>
  );
}
