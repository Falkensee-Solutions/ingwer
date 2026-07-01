import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";
import { SectionHeader } from "@/components/SectionHeader";
import { TerminCard } from "@/components/TerminCard";
import {
  STATUS_REIHENFOLGE,
  STATUS_TERMIN_BESCHREIBUNG,
  STATUS_TERMIN_LABEL,
  getTermineNachStatus,
  type TerminStatus,
} from "@/data/termine";

export const metadata: Metadata = {
  title: "Mitmachen",
  description:
    "Bei einer Interreligiösen Werkstatt mitmachen: Begegnung, gemeinsamer Alltag, sichtbare religiöse Praxis und aktuelle Termine.",
};

const STATUS_FARBE: Record<TerminStatus, { bg: string; ink: string; bar: string }> = {
  fix: {
    bg: "var(--color-sage-soft)",
    ink: "var(--color-sage-ink)",
    bar: "var(--color-sage)",
  },
  geplant: {
    bg: "var(--color-orange-soft)",
    ink: "var(--color-orange-ink)",
    bar: "var(--color-orange)",
  },
  "in-klaerung": {
    bg: "var(--color-sunny-soft)",
    ink: "var(--color-sunny-ink)",
    bar: "var(--color-sunny)",
  },
  abgeschlossen: {
    bg: "var(--color-surface-alt)",
    ink: "var(--color-ink-muted)",
    bar: "var(--color-line)",
  },
};

const MITMACHEN_GRUENDE = [
  {
    titel: "Glauben und Alltag sichtbar teilen",
    text: "In der Werkstatt geht es nicht nur um Wissen über Religion. Teilnehmende erleben Gebet, Stille, Speiseregeln, Gespräche und Alltag nebeneinander.",
  },
  {
    titel: "Fragen stellen, ohne bewertet zu werden",
    text: "Begleitete Dialogrunden, Frageformate und Reflexionen schaffen einen geschützten Rahmen für ehrliche Fragen und persönliche Perspektiven.",
  },
  {
    titel: "Gemeinschaft über Grenzen hinweg erleben",
    text: "Die mehrtägige gemeinsame Zeit verbindet junge Menschen aus Gemeinden, Gruppen und Institutionen und macht interreligiöse Begegnung persönlich erfahrbar.",
  },
];

export default function MitmachenPage() {
  const groups = getTermineNachStatus();

  return (
    <>
      <Hero
        eyebrow="Mitmachen"
        titel="Teil der Interreligiösen Werkstatt werden"
        claim="Dialog wird lebendig, wenn Menschen sich begegnen."
        lead="Die Werkstatt lädt Menschen ein, mehrere Tage gemeinsam zu leben, Fragen zu stellen, religiöse und spirituelle Praxis sichtbar werden zu lassen und die eigene Haltung im Austausch mit anderen zu reflektieren. Wer Interesse an Religion, Glauben, Gemeinschaft und gesellschaftlicher Verantwortung mitbringt, kann hier Dialog nicht nur besprechen, sondern erleben."
        ctas={[
          { href: "#termine", label: "Termine ansehen", variant: "primary" },
          { href: "/kontakt", label: "Interesse anmelden", variant: "ghost" },
        ]}
      />

      <Container as="section" padding="lg" ariaLabelledby="warum-titel">
        <SectionHeader
          id="warum-titel"
          eyebrow="Warum mitmachen?"
          titel="Mehr als eine Veranstaltung"
          lead="Das Konzepthandbuch beschreibt die Werkstatt als gemeinsamen Erfahrungsraum: Teilnehmende wohnen, essen, lernen, fragen und reflektieren miteinander. So entsteht Vertrauen, ohne Unterschiede zu verwischen."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {MITMACHEN_GRUENDE.map((grund) => (
            <article
              key={grund.titel}
              className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-bold text-[color:var(--color-ink)]">
                {grund.titel}
              </h3>
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
            lead="Die konkrete Zielgruppe hängt vom jeweiligen Format ab. Besonders geeignet sind junge Erwachsene, Jugendliche aus Gemeinden und Jugendgruppen, Studierende sowie Menschen, die ihre religiöse oder weltanschauliche Perspektive reflektieren und anderen offen begegnen möchten."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <HinweisBox titel="Gemeinsam oder einzeln anmelden">
              Die Erfahrung aus dem Konzept zeigt: Der Einstieg fällt oft leichter, wenn
              sich Freund:innen, Jugendgruppen oder Gemeindemitglieder gemeinsam
              anmelden. Einzelne Interessierte sind ebenso willkommen.
            </HinweisBox>
            <HinweisBox variante="info" titel="Was Sie mitbringen sollten">
              Wichtig sind Neugier, Verbindlichkeit, Respekt vor religiöser Praxis und
              die Bereitschaft, eigene Erfahrungen einzubringen, ohne andere zu
              missionieren oder abzuwerten.
            </HinweisBox>
          </div>
        </Container>
      </section>

      <Container as="section" id="termine" padding="lg" ariaLabelledby="termine-titel">
        <SectionHeader
          id="termine-titel"
          eyebrow="Termine"
          titel="Aktuelle und geplante Werkstätten"
          lead="Hier finden Sie Werkstätten, die bereits feststehen, geplant sind oder sich noch in Klärung befinden. Vorläufige Termine werden bewusst nicht als verbindliche Anmeldung dargestellt."
        />

        <div className="mt-8">
          <HinweisBox variante="warnung" titel="Hinweis">
            Termine mit Status <em>geplant</em> oder <em>in Klärung</em> sind vorläufig.
            Eine Anmeldung ist erst möglich, sobald die jeweilige Werkstatt öffentlich
            freigegeben ist.
          </HinweisBox>
        </div>

        <div className="mt-12 space-y-10">
          {STATUS_REIHENFOLGE.map((status) => {
            const items = groups[status];
            if (items.length === 0) return null;
            const farbe = STATUS_FARBE[status];
            return (
              <section
                key={status}
                aria-labelledby={`status-${status}`}
                className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] p-7 md:p-10"
                style={{
                  background: `color-mix(in srgb, ${farbe.bg} 55%, var(--color-bg))`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-full w-1.5"
                  style={{ background: farbe.bar }}
                />
                <div className="mb-6 max-w-2xl">
                  <p
                    className="eyebrow mb-2 inline-flex items-center gap-2"
                    style={{ color: farbe.ink }}
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-[1px] w-6"
                      style={{ background: farbe.ink, opacity: 0.55 }}
                    />
                    Status
                  </p>
                  <h3
                    id={`status-${status}`}
                    className="text-2xl font-bold text-[color:var(--color-ink)] md:text-[1.7rem]"
                  >
                    {STATUS_TERMIN_LABEL[status]}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
                    {STATUS_TERMIN_BESCHREIBUNG[status]}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {items.map((t) => (
                    <TerminCard key={t.slug} termin={t} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>

      <Container padding="md">
        <CTASection
          variant="primary"
          eyebrow="Interesse"
          titel="Sie möchten bei einer Werkstatt dabei sein?"
          text="Schreiben Sie uns kurz, ob Sie einzeln, mit Freund:innen oder als Gruppe aus einer Gemeinde oder Institution teilnehmen möchten."
          primaryCta={{ href: "/kontakt", label: "Interesse anmelden" }}
          secondaryCta={{ href: "/regelwerk", label: "Regelwerk lesen" }}
        />
      </Container>
    </>
  );
}
