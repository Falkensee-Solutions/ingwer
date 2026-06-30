import Link from "next/link";
import type { Format } from "@/data/formate";

// Pro Format eine eigene Akzentfarbe → Karten werden auf einen Blick unterscheidbar.
const ACCENT_BAR: Record<string, string> = {
  universitaeten: "var(--color-primary)",
  schulen: "var(--color-accent)",
  ausbildung: "var(--color-lavender)",
  gemeinden: "var(--color-sage)",
};

export function FormatCard({ format }: { format: Format }) {
  const bar = ACCENT_BAR[format.slug] ?? "var(--color-primary)";
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 pt-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary)]/40 hover:shadow-[var(--shadow-card-hover)]">
      {/* Format-Akzent oben – immer sichtbar, ersetzt den Hover-Streifen. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
        style={{ background: bar }}
      />
      <h3 className="text-[1.45rem] font-bold leading-tight tracking-[-0.015em] text-[color:var(--color-ink)]">
        <Link
          href={`/formate/${format.slug}`}
          className="no-underline transition-colors group-hover:text-[color:var(--color-primary)]"
        >
          {format.titel}
        </Link>
      </h3>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-[color:var(--color-ink-soft)]">
        {format.kurz}
      </p>
      <p className="mt-auto pt-6">
        <Link
          href={`/formate/${format.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-primary)] no-underline"
          aria-label={`Format ${format.titel} ansehen`}
        >
          Format ansehen
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </p>
    </article>
  );
}
