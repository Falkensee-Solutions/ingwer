import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";
import { SectionHeader } from "@/components/SectionHeader";
import { TerminCard } from "@/components/TerminCard";
import { getKommendeTermine } from "@/data/termine";

export const metadata: Metadata = {
  title: "Aktuell",
  description: "Anstehende Workshops und Werkstätten der Interreligiösen Werkstatt.",
};

const WORKSHOPS = [
  "Sensibilisierung für Diskriminierung",
  "Grundlagen zum muslimischen Glauben",
  "Grundlagen des katholischen und evangelischen Glaubens",
  "Dialog aus muslimischer Perspektive",
  "Dialog aus katholischer Perspektive",
  "Dialog aus evangelischer Perspektive",
];

export default function AktuellPage() {
  const termine = getKommendeTermine(6);
  return (
    <>
      <Hero eyebrow="Aktuelles" titel="Anstehende Veranstaltungen" />

      <Container as="section" id="teilnehmen" padding="lg" ariaLabelledby="teilnehmen-titel">
        <SectionHeader id="teilnehmen-titel" eyebrow="Teilnehmen" titel="An aktuellen Workshops und Werkstätten teilnehmen" lead="Hier finden Sie aktuelle Workshops und Werkstätten, an denen Sie teilnehmen oder für die Sie Ihr Interesse anmelden können." />
        <div className="mt-8">
          <HinweisBox variante="warnung" titel="Hinweis">
            Vorläufige Termine werden nicht als verbindliche Anmeldung dargestellt. Eine Anmeldung ist erst möglich, sobald die jeweilige Werkstatt öffentlich freigegeben ist.
          </HinweisBox>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {termine.map((termin) => <TerminCard key={termin.slug} termin={termin} />)}
        </div>
      </Container>

      <section id="workshop-anfragen" className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-deep)]">
        <Container padding="lg">
          <SectionHeader eyebrow="Workshop" titel="Vorbereitende Workshops" lead="Die Interreligiöse Werkstatt ist modular gedacht. Je nach Institution unterscheiden sich Zielgruppe, Vorbereitung, Einbindung und Inhalt. Die Bedürfnisse und Voraussetzungen der jeweiligen Gruppe werden berücksichtigt." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKSHOPS.map((titel) => (
              <article key={titel} className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
                <h3 className="text-lg font-bold text-[color:var(--color-ink)]">{titel}</h3>
                <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">Methoden und Ablaufpläne werden zunächst nicht veröffentlicht.</p>
              </article>
            ))}
          </div>
          <div className="mt-10"><CTASection eyebrow="Workshop" titel="Workshop anfragen" text="Die Bedürfnisse und Voraussetzungen der jeweiligen Gruppe werden berücksichtigt." primaryCta={{ href: "/kontakt", label: "Workshop anfragen" }} /></div>
        </Container>
      </section>

      <Container as="section" id="mitplanen" padding="lg" ariaLabelledby="mitplanen-titel">
        <SectionHeader id="mitplanen-titel" eyebrow="Werkstatt mitplanen" titel="Eine Interreligiöse Werkstatt gemeinsam vorbereiten" lead="Das Projekt der Interreligiösen Werkstatt ist modular gedacht. Je nach Institution unterscheiden sich Zielgruppe, Vorbereitung, Einbindung und Werkstattprodukt – das Kernformat bleibt bestehen, wenngleich Inhalt und Aufbau je individuell nach Absprache angepasst werden können. Die Bedürfnisse und Voraussetzungen der jeweiligen Gruppe werden in jedem Fall berücksichtigt." />
        <div className="mt-8"><CTASection variant="primary" eyebrow="Mitplanen" titel="Werkstatt mitplanen" text="" primaryCta={{ href: "/kontakt", label: "Werkstatt mitplanen" }} /></div>
      </Container>
    </>
  );
}
