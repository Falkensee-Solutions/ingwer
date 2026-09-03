import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Angebote",
  description:
    "Vorbereitende Workshops und anpassbare Angebote der Interreligiösen Werkstatt für Schulen, Hochschulen, Gemeinden und Institutionen.",
};

const WORKSHOPS = [
  "Sensibilisierung für Diskriminierung",
  "Grundlagen zum muslimischen Glauben",
  "Grundlagen des katholischen und evangelischen Glaubens",
  "Dialog aus muslimischer Perspektive",
  "Dialog aus katholischer Perspektive",
  "Dialog aus evangelischer Perspektive",
];

export default function AngebotePage() {
  return (
    <>
      <section
        id="workshop-anfragen"
        className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-deep)]"
      >
        <Container padding="lg">
          <SectionHeader
            eyebrow="Vorbereitung"
            titel="Workshops und Besuche"
            lead="Folgende Angebote bieten wir als Vorbereitung für die mehrtägige Werkstatt an:"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKSHOPS.map((titel) => (
              <article
                key={titel}
                className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
              >
                <h2 className="text-lg font-bold text-[color:var(--color-ink)]">{titel}</h2>
                <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
                  Methoden und Ablaufpläne werden zunächst nicht veröffentlicht.
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/kontakt" variant="primary" size="lg">
              Workshop anfragen
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Container as="section" id="mitplanen" padding="lg" ariaLabelledby="mitplanen-titel">
        <SectionHeader
          id="mitplanen-titel"
          eyebrow="Werkstatt planen"
          titel="Eine Interreligiöse Werkstatt gemeinsam vorbereiten"
          lead="Das Projekt der Interreligiösen Werkstatt ist modular gedacht. Je nach Institution unterscheiden sich Zielgruppe, Vorbereitung, Einbindung und Werkstattprodukt – das Kernformat bleibt bestehen, wenngleich Inhalt und Aufbau je individuell nach Absprache angepasst werden können. Die Bedürfnisse und Voraussetzungen der jeweiligen Gruppe werden in jedem Fall berücksichtigt."
        />
        <div className="mt-8">
          <ButtonLink href="/kontakt" variant="plan" size="lg">
            Werkstatt planen
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
