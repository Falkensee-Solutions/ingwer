import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Mitmachen",
  description:
    "Der richtige Einstieg in die Interreligiöse Werkstatt: Teilnahme für Personen und Gruppen oder Mitorganisation für Institutionen.",
};

const WEGE = [
  {
    eyebrow: "Für Institutionen",
    titel: "Werkstatt mitorganisieren",
    text: "Für Schulen, Hochschulen, Ausbildungsstätten, Gemeinden, Träger und Partner, die eine Werkstatt ermöglichen, Räume öffnen, Teilnehmende gewinnen oder Verantwortung im Orgateam übernehmen möchten.",
    href: "/mitorganisieren",
    label: "Mitorganisieren",
    hinweis: "Passend, wenn Sie für eine Institution, Gemeinde oder Organisation anfragen.",
  },
  {
    eyebrow: "Für Personen und Gruppen",
    titel: "An einer Werkstatt teilnehmen",
    text: "Für Einzelpersonen, Freund:innen, Jugendgruppen, Seminargruppen, Studierende und Gemeindemitglieder, die selbst an einer Interreligiösen Werkstatt teilnehmen möchten.",
    href: "/teilnehmen",
    label: "Teilnehmen",
    hinweis: "Passend, wenn Sie selbst dabei sein oder eine Gruppe anmelden möchten.",
  },
];

export default function MitmachenPage() {
  return (
    <>
      <Hero
        eyebrow="Mitmachen"
        titel="Der richtige Einstieg in die Interreligiöse Werkstatt"
        claim="Mitmachen heißt: entweder ermöglichen oder teilnehmen."
        lead="Die Website unterscheidet zwei Wege: Institutionen können eine Werkstatt mitorganisieren, Personen und Gruppen können an einer Werkstatt teilnehmen. Wählen Sie den passenden Einstieg."
        ctas={[
          { href: "/mitorganisieren", label: "Für Institutionen", variant: "primary" },
          { href: "/teilnehmen", label: "Für Teilnehmende", variant: "ghost" },
        ]}
      />

      <Container as="section" padding="lg" ariaLabelledby="wege-titel">
        <SectionHeader
          id="wege-titel"
          eyebrow="Zwei Wege"
          titel="Was möchten Sie tun?"
          lead="Der frühere Begriff „Mitmachen“ fasst zwei unterschiedliche Anliegen zusammen. Deshalb führen die neuen Seiten gezielt weiter."
        />

        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {WEGE.map((weg) => (
            <article
              key={weg.href}
              className="flex flex-col rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-card)] md:p-9"
            >
              <p className="eyebrow mb-3">{weg.eyebrow}</p>
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-[color:var(--color-ink)]">
                {weg.titel}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                {weg.text}
              </p>
              <div className="mt-6">
                <HinweisBox variante="info" titel="Orientierung">
                  {weg.hinweis}
                </HinweisBox>
              </div>
              <div className="mt-7">
                <ButtonLink href={weg.href} size="lg">
                  {weg.label}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <Container padding="md">
        <CTASection
          eyebrow="Unsicher?"
          titel="Sie wissen noch nicht, welcher Weg passt?"
          text="Schreiben Sie uns kurz Ihr Anliegen. Wir klären gemeinsam, ob es um Teilnahme, Kooperation oder die Planung einer eigenen Werkstatt geht."
          primaryCta={{ href: "/kontakt", label: "Kontakt aufnehmen" }}
        />
      </Container>
    </>
  );
}
