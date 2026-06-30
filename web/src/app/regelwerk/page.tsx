import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { RuleAccordion } from "@/components/RuleAccordion";
import { SectionHeader } from "@/components/SectionHeader";
import { REGELN, SCHUTZ_ABSCHNITTE } from "@/data/regelwerk";

export const metadata: Metadata = {
  title: "Regelwerk",
  description:
    "Würde, Selbstbeschreibung statt Zuschreibung, keine Missionierung, Vertraulichkeit, Schutzauftrag – die Grundlagen der Interreligiösen Werkstatt.",
};

export default function RegelwerkPage() {
  return (
    <>
      <Hero
        eyebrow="Regelwerk"
        titel="Regeln, Schutz und Haltung"
        lead="Unsere Werkstatt ist ein Raum der Begegnung, des Lernens und des Austauschs. Menschen mit unterschiedlichen religiösen, weltanschaulichen, kulturellen und persönlichen Hintergründen kommen zusammen. Damit dieser Austausch gelingen kann, gelten gemeinsame Regeln."
      />

      <Container padding="lg">
        <SectionHeader
          eyebrow="Regeln"
          titel="Die 17 Regeln im Überblick"
          lead="Klicken Sie auf eine Regel, um die ausführliche Fassung zu lesen."
        />
        <div className="mt-10">
          <RuleAccordion regeln={REGELN} />
        </div>
      </Container>

      <Container padding="lg" className="border-t border-[color:var(--color-line)]">
        <SectionHeader
          eyebrow="Schutzkonzept"
          titel="Räume, Unterbringung, Verpflegung und Beschwerdewege"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SCHUTZ_ABSCHNITTE.map((s) => (
            <article
              key={s.titel}
              className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-bold text-[color:var(--color-ink)]">{s.titel}</h3>
              <p className="mt-2 text-[15px] text-[color:var(--color-ink-soft)]">{s.text}</p>
              {s.punkte ? (
                <ul className="mt-3 space-y-1.5 text-[15px] text-[color:var(--color-ink-soft)]">
                  {s.punkte.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--color-accent)]"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
