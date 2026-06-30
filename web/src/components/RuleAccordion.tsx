import type { Regel } from "@/data/regelwerk";

// 17 Regeln → 4 thematische Farbgruppen, damit das Akkordeon visuell ordnet.
function farbeFuerRegel(nr: number): string {
  if (nr <= 4) return "var(--color-sage)"; // Würde, Selbstbeschreibung, Respekt
  if (nr <= 8) return "var(--color-lavender)"; // Dialog, keine Missionierung
  if (nr <= 12) return "var(--color-orange)"; // Praxis, Vertraulichkeit
  return "var(--color-accent)"; // Schutz und Sicherheit (13–17)
}

export function RuleAccordion({ regeln }: { regeln: Regel[] }) {
  return (
    <ol className="space-y-3" aria-label="Liste der Regeln">
      {regeln.map((r) => {
        const farbe = farbeFuerRegel(r.nr);
        return (
          <li key={r.nr}>
            <details className="group rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] transition-colors open:border-[color:var(--color-primary)]/30">
              <summary className="flex cursor-pointer list-none items-start gap-4 p-5 [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[0.95rem] font-bold text-white shadow-[0_4px_10px_-6px_rgba(28,30,30,0.5)]"
                  style={{ background: farbe }}
                >
                  {r.nr}
                </span>
                <span className="flex-1">
                  <span className="block text-[1.02rem] font-semibold tracking-[-0.005em] text-[color:var(--color-ink)]">
                    {r.titel}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {r.kurz}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="ml-2 mt-1 text-[color:var(--color-ink-muted)] transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <div className="border-t border-[color:var(--color-line)]/70 px-5 py-5">
                <p className="text-[0.97rem] leading-relaxed text-[color:var(--color-ink-soft)]">
                  {r.lang}
                </p>
              </div>
            </details>
          </li>
        );
      })}
    </ol>
  );
}
