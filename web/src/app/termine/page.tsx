import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { TerminCard } from "@/components/TerminCard";
import { HinweisBox } from "@/components/HinweisBox";
import {
  STATUS_REIHENFOLGE,
  STATUS_TERMIN_BESCHREIBUNG,
  STATUS_TERMIN_LABEL,
  getTermineNachStatus,
  type TerminStatus,
} from "@/data/termine";

export const metadata: Metadata = {
  title: "Termine",
  description:
    "Aktuelle und geplante Interreligiöse Werkstätten – inklusive Status (fix, geplant, in Klärung, abgeschlossen).",
};

// Pro Status eine eigene Farbpalette (passend zu TerminBadge-Farben).
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

export default function TerminePage() {
  const groups = getTermineNachStatus();

  return (
    <>
      <Hero
        eyebrow="Termine"
        titel="Termine"
        lead="Werkstätten werden in unterschiedlichen Status angezeigt. Termine, die noch nicht freigegeben sind, werden bewusst nicht als verbindlich dargestellt."
      />

      <Container padding="lg">
        <HinweisBox variante="warnung" titel="Hinweis">
          Termine mit Status <em>geplant</em> oder <em>in Klärung</em> sind vorläufig.
          Eine Anmeldung ist erst möglich, sobald die jeweilige Werkstatt öffentlich
          freigegeben ist.
        </HinweisBox>

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
                  <h2
                    id={`status-${status}`}
                    className="text-2xl font-bold text-[color:var(--color-ink)] md:text-[1.7rem]"
                  >
                    {STATUS_TERMIN_LABEL[status]}
                  </h2>
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
    </>
  );
}
