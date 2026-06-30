type Props = {
  variante?: "info" | "warnung";
  titel?: string;
  children: React.ReactNode;
};

export function HinweisBox({ variante = "info", titel, children }: Props) {
  const styles =
    variante === "warnung"
      ? "border-[color:var(--color-accent)]/60 bg-[color:var(--color-accent-soft)]/70"
      : "border-[color:var(--color-sage)]/40 bg-[color:var(--color-sage-soft)]/60";

  return (
    <aside
      className={`rounded-2xl border ${styles} px-6 py-5`}
      role={variante === "warnung" ? "note" : undefined}
    >
      {titel ? (
        <p className="eyebrow mb-2">{titel}</p>
      ) : null}
      <div className="text-[0.97rem] leading-relaxed text-[color:var(--color-ink-soft)]">
        {children}
      </div>
    </aside>
  );
}
