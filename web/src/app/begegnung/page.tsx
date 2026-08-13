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
    titel: "Kontaktaufnahme",
    text: "Am Anfang stehen Gemeinden, Institutionen und Gruppen, die bereit sind, ihren Bekanntenkreis für eine solche Veranstaltung zu öffnen, für die Teilnahme zu werben und das Format gemeinsam zu tragen. Gerade die persönliche Ansprache schafft Vertrauen und ermöglicht es, Fragen, Erwartungen und mögliche Vorbehalte frühzeitig zu besprechen. Von Beginn an sollte offen kommuniziert werden, dass es um Dialog und nicht um Missionierung geht.",
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
    titel: "Nachbereitung und Weiterentwicklung",
    text: "Die Erfahrungen aus der Werkstatt werden gemeinsam ausgewertet. Tägliche Reflexionsrunden, religionsinterne Gespräche, persönliche Rückmeldungen und eine abschließende Evaluation können miteinander verbunden werden. Die Erfahrungen werden dokumentiert und für weitere Werkstätten genutzt. So wird das Format Schritt für Schritt weiterentwickelt und kann langfristige Beziehungen und weitere gemeinsame Projekte ermöglichen.",
  },
];

export default function BegegnungPage() {
  return (
    <>
      <Hero
        eyebrow="Begegnung"
        titel="Von der Kontaktaufnahme zur gemeinsamen Werkstatt"
        lead="Die Interreligiöse Werkstatt ist ein mehrtägiges Format, in dem Menschen verschiedener religiöser Hintergründe zusammenkommen, ihre religiöse Identität sichtbar leben und sich über Glaubenspraxis austauschen. Der Ablauf dient als Orientierung und kann an Gemeinden, Institutionen, Zielgruppe, Veranstaltungsort und verfügbare Zeit angepasst werden."
        ctas={[
          { href: "/aktuell#teilnehmen", label: "Teilnehmen", variant: "primary" },
          { href: "/aktuell#mitplanen", label: "Werkstatt mitplanen", variant: "ghost" },
        ]}
      />

      <Container as="section" padding="lg" ariaLabelledby="vorbereitung-titel">
        <SectionHeader
          id="vorbereitung-titel"
          eyebrow="Vorbereitung"
          titel="Begegnung braucht Vorbereitung"
          lead="Die Interreligiöse Werkstatt beginnt nicht erst mit der mehrtägigen gemeinsamen Zeit. Bereits im Vorfeld entstehen Kontakte, werden Vertrauen und Kooperation aufgebaut und die Teilnehmenden auf die Begegnung vorbereitet."
        />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
          Das Konzepthandbuch richtet sich an Gemeinden, Kirchen, Moscheevereine,
          Jugendgruppen und weitere religiöse Institutionen, die eine eigene
          Interreligiöse Werkstatt planen möchten.
        </p>
      </Container>

      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-deep)]">
        <Container padding="lg">
          <SectionHeader eyebrow="Ablauf" titel="Die fünf Phasen" />
          <ol className="mt-10 space-y-6">
            {PHASEN.map((phase, index) => (
              <li key={phase.titel} className="grid gap-5 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:grid-cols-[5rem_1fr] md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-sage)] text-lg font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="text-xl font-bold text-[color:var(--color-ink)]">{phase.titel}</h3>
                  <p className="mt-3 leading-relaxed text-[color:var(--color-ink-soft)]">{phase.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container as="section" padding="lg" ariaLabelledby="zielgruppen-titel">
        <SectionHeader id="zielgruppen-titel" eyebrow="Anpassung" titel="Anpassung an unterschiedliche Zielgruppen" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["Junge Erwachsene aus Gemeinden", "Persönliche Ansprache und der Aufbau langfristiger Beziehungen können im Mittelpunkt stehen."],
            ["Schulen", "Vorbereitung, Aufsicht, Schutz, Elterninformation und Unterbringung können besonders berücksichtigt werden."],
            ["Hochschulen", "Die Werkstatt kann in Seminare, Module oder Studienangebote eingebunden werden."],
            ["Ausbildungsinstitutionen", "Der Transfer in die pädagogische und soziale Berufspraxis kann stärker betont werden."],
          ].map(([titel, text]) => (
            <article key={titel} className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
              <h3 className="text-lg font-bold text-[color:var(--color-ink)]">{titel}</h3>
              <p className="mt-2 text-[color:var(--color-ink-soft)]">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
          Der Kern bleibt die mehrtägige Begegnung, in der religiöse und weltanschauliche Perspektiven sichtbar werden und Menschen miteinander ins Gespräch kommen.
        </p>
      </Container>
    </>
  );
}
