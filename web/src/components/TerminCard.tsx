import { STATUS_TERMIN_LABEL, type Termin, type TerminStatus } from "@/data/termine";
import { cn } from "@/lib/cn";
import { withBasePath } from "@/lib/basePath";

const STATUS_STYLE: Record<TerminStatus, string> = {
  fix: "bg-[color:var(--color-sage-soft)] text-[color:var(--color-sage-ink)]",
  geplant:
    "bg-[color:var(--color-orange-soft)] text-[color:var(--color-orange-ink)]",
  "in-klaerung":
    "bg-[color:var(--color-sunny-soft)] text-[color:var(--color-sunny-ink)]",
  abgeschlossen:
    "bg-[color:var(--color-surface-alt)] text-[color:var(--color-ink-muted)]",
};

export function TerminBadge({ status }: { status: TerminStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider",
        STATUS_STYLE[status]
      )}
    >
      {/* Punktmarker + Text – Information also nicht nur über Farbe */}
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {STATUS_TERMIN_LABEL[status]}
    </span>
  );
}

export function TerminCard({ termin }: { termin: Termin }) {
  return (
    <article className="group rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary)]/40 hover:shadow-[var(--shadow-card-hover)]">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <TerminBadge status={termin.status} />
        <span className="text-sm font-semibold text-[color:var(--color-ink-soft)]">
          {termin.zeitraum}
        </span>
      </div>
      <h3 className="text-[1.3rem] font-bold leading-snug tracking-[-0.015em] text-[color:var(--color-ink)]">
        {termin.titel}
      </h3>
      {termin.ort ? (
        <p className="mt-1.5 text-sm text-[color:var(--color-ink-muted)]">Ort: {termin.ort}</p>
      ) : null}
      <p className="mt-3 text-sm font-medium text-[color:var(--color-ink-soft)]">
        Zielgruppe: {termin.zielgruppe}
      </p>
      <p className="mt-3 text-[0.97rem] leading-relaxed text-[color:var(--color-ink-soft)]">
        {termin.beschreibung}
      </p>
      {termin.hinweis ? (
        <p className="mt-4 rounded-lg bg-[color:var(--color-bg-deep)] px-3.5 py-2.5 text-xs leading-relaxed text-[color:var(--color-ink-muted)]">
          {termin.hinweis}
        </p>
      ) : null}
      {termin.downloads && termin.downloads.length > 0 ? (
        <div className="mt-5 border-t border-[color:var(--color-line)]/60 pt-4">
          <p className="eyebrow text-[0.65rem]">Downloads</p>
          <ul className="mt-2.5 space-y-1.5">
            {termin.downloads.map((d) => (
              <li key={d.href}>
                <a
                  href={withBasePath(d.href)}
                  className="text-sm text-[color:var(--color-primary)]"
                  download
                >
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-[color:var(--color-ink-muted)]">
            Hinweis: PDF-Dateien werden vor Veröffentlichung in
            <code className="mx-1 rounded bg-[color:var(--color-bg-deep)] px-1 py-0.5 text-[11px]">/public/downloads/</code>
            abgelegt.
          </p>
        </div>
      ) : null}
    </article>
  );
}
