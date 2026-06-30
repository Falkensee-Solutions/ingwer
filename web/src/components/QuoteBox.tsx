export function QuoteBox({
  zitat,
  quelle,
}: {
  zitat: string;
  quelle?: string;
}) {
  return (
    <figure className="relative rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-8 pl-12 shadow-[var(--shadow-card)]">
      <span
        aria-hidden="true"
        className="absolute left-5 top-5 font-serif text-[3.5rem] leading-none text-[color:var(--color-accent)]/55"
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
      >
        „
      </span>
      <blockquote
        className="font-serif text-[1.2rem] leading-relaxed italic text-[color:var(--color-ink)] md:text-[1.35rem]"
        style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60' }}
      >
        {zitat}
      </blockquote>
      {quelle ? (
        <figcaption className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
          — {quelle}
        </figcaption>
      ) : null}
    </figure>
  );
}
