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
} from "@/data/termine";

export const metadata: Metadata = {
  title: "Termine",
  description:
    "Aktuelle und geplante Interreligiöse Werkstätten – inklusive Status (fix, geplant, in Klärung, abgeschlossen).",
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

        <div className="mt-12 space-y-12">
          {STATUS_REIHENFOLGE.map((status) => {
            const items = groups[status];
            if (items.length === 0) return null;
            return (
              <section key={status} aria-labelledby={`status-${status}`}>
                <div className="mb-5 flex flex-wrap items-baseline gap-3">
                  <h2
                    id={`status-${status}`}
                    className="text-2xl font-bold text-[color:var(--color-ink)]"
                  >
                    {STATUS_TERMIN_LABEL[status]}
                  </h2>
                  <p className="text-sm text-[color:var(--color-ink-soft)]">
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
