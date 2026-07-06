import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";
import { SectionHeader } from "@/components/SectionHeader";
import { TerminCard } from "@/components/TerminCard";
import { getKommendeTermine } from "@/data/termine";

export const metadata: Metadata = {
  title: "Teilnehmen",
  description:
    "An einer Interreligiösen Werkstatt teilnehmen: Informationen für Einzelpersonen, Gruppen, Jugendgruppen, Studierende und Gemeindemitglieder.",
};

const GRUENDE = [
  {
    titel: "Glauben und Alltag sichtbar erleben",
    text: "Teilnehmende erleben Gebet, Stille, Speiseregeln, Gespräche und Alltag nicht abstrakt, sondern im gemeinsamen Erfahrungsraum.",
  },
  {
    titel: "Fragen stellen dürfen",
    text: "Begleitete Dialogrunden schaffen einen geschützten Rahmen für ehrliche Fragen, persönliche Perspektiven und respektvolle Auseinandersetzung.",
  },
  {
    titel: "Gemeinschaft erfahren",
    text: "Die mehrtägige Zeit verbindet Menschen aus Gemeinden, Gruppen und Institutionen und macht Dialog persönlich erfahrbar.",
  },
];

const ABLAUF = [
  "Interesse zeigen und passenden Rahmen klären",
  "Informationen zu Ablauf, Regelwerk und Unterkunft erhalten",
  "Werkstatt mit Alltag, Dialog, Reflexion und Praxis erleben",
  "Erfahrungen auswerten und in die eigene Gruppe zurücktragen",
];

export default function TeilnehmenPage() {
  const termine = getKommendeTermine(6);

  return (
    <>
      <Hero
        eyebrow="Teilnehmen"
        titel="An einer Interreligiösen Werkstatt teilnehmen"
        claim="''Dialog wird lebendig, wenn Menschen sich begegnen.''"
        lead="Diese Seite richtet sich an Menschen, die selbst bei einer Werkstatt dabei sein möchten: einzeln, mit Freund:innen, als Jugendgruppe, Seminargruppe oder aus einer Gemeinde heraus."
        ctas={[
          { href: "#termine", label: "Termine ansehen", variant: "primary" },
          { href: "/kontakt", label: "Interesse anmelden", variant: "ghost" },
        ]}
      />

      <Container as="section" padding="lg" ariaLabelledby="warum-titel">
        <SectionHeader
          id="warum-titel"
          eyebrow="Warum teilnehmen?"
          titel="Mehr als eine Veranstaltung"
          lead="Die Werkstatt ist ein gemeinsamer Erfahrungsraum: Teilnehmende wohnen, essen, lernen, fragen und reflektieren miteinander."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {GRUENDE.map((grund) => (
            <article
              key={grund.titel}
              className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-bold text-[color:var(--color-ink)]">{grund.titel}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                {grund.text}
              </p>
            </article>
          ))}
        </div>
      </Container>

      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-deep)]">
        <Container as="section" padding="lg" ariaLabelledby="wer-titel">
          <SectionHeader
            id="wer-titel"
            eyebrow="Wer kann teilnehmen?"
            titel="Menschen mit Interesse an Religion und Begegnung"
            lead="Die konkrete Zielgruppe hängt vom jeweiligen Format ab. Geeignet sind junge Erwachsene, Jugendgruppen, Studierende, Gemeindemitglieder und interessierte Gruppen."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <HinweisBox titel="Gemeinsam oder einzeln anmelden">
              Freund:innen, Jugendgruppen, Seminargruppen oder Gemeindemitglieder können
              sich gemeinsam melden. Einzelne Interessierte sind ebenso willkommen.
            </HinweisBox>
            <HinweisBox variante="info" titel="Was Sie mitbringen sollten">
              Wichtig sind Neugier, Verbindlichkeit, Respekt vor religiöser Praxis und
              die Bereitschaft, eigene Erfahrungen einzubringen.
            </HinweisBox>
          </div>
        </Container>
      </section>

      <Container as="section" padding="lg" ariaLabelledby="ablauf-titel">
        <SectionHeader
          id="ablauf-titel"
          eyebrow="Weg zur Teilnahme"
          titel="Vom Interesse zur Werkstatt"
          lead="Teilnahme soll transparent und gut vorbereitet sein. Rahmen, Erwartungen und Schutzregeln werden vorab geklärt."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ABLAUF.map((text, index) => (
            <li
              key={text}
              className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-sage)] text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">{text}</p>
            </li>
          ))}
        </ol>
      </Container>

      <Container as="section" id="termine" padding="lg" ariaLabelledby="termine-titel">
        <SectionHeader
          id="termine-titel"
          eyebrow="Termine"
          titel="Aktuelle und geplante Werkstätten"
          lead="Hier finden Sie die nächsten Werkstätten. Vorläufige Termine werden nicht als verbindliche Anmeldung dargestellt."
        />
        <div className="mt-8">
          <HinweisBox variante="warnung" titel="Hinweis">
            Eine Anmeldung ist erst möglich, sobald die jeweilige Werkstatt öffentlich
            freigegeben ist.
          </HinweisBox>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {termine.map((termin) => (
            <TerminCard key={termin.slug} termin={termin} />
          ))}
        </div>
      </Container>

      <Container padding="md">
        <CTASection
          variant="primary"
          eyebrow="Interesse"
          titel="Sie möchten bei einer Werkstatt dabei sein?"
          text="Schreiben Sie uns kurz, ob Sie einzeln, mit Freund:innen oder als Gruppe teilnehmen möchten."
          primaryCta={{ href: "/kontakt", label: "Interesse anmelden" }}
          secondaryCta={{ href: "/regelwerk", label: "Regelwerk lesen" }}
        />
      </Container>
    </>
  );
}
