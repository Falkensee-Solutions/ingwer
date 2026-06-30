import Link from "next/link";
import {
  KATEGORIE_LABEL,
  STATUS_LABEL,
  ZIELGRUPPE_LABEL,
  type Material,
  type MaterialKategorie,
} from "@/data/materialien";
import { cn } from "@/lib/cn";

// Pro Kategorie eine eigene Farbe → schnelle visuelle Orientierung im Grid.
const KATEGORIE_FARBE: Record<MaterialKategorie, { bg: string; ink: string }> = {
  workshop: { bg: "var(--color-primary-soft)", ink: "var(--color-primary-ink)" },
  werkstatt: { bg: "var(--color-lavender-soft)", ink: "var(--color-lavender-ink)" },
  jugendarbeit: { bg: "var(--color-sunny-soft)", ink: "var(--color-sunny-ink)" },
  ablaufplan: { bg: "var(--color-orange-soft)", ink: "var(--color-orange-ink)" },
  regelwerk: { bg: "var(--color-sage-soft)", ink: "var(--color-sage-ink)" },
  evaluation: { bg: "var(--color-accent-soft)", ink: "var(--color-accent-ink)" },
  finanzierung: { bg: "var(--color-orange-soft)", ink: "var(--color-orange-ink)" },
  vorlage: { bg: "var(--color-lavender-soft)", ink: "var(--color-lavender-ink)" },
  praesentation: { bg: "var(--color-sunny-soft)", ink: "var(--color-sunny-ink)" },
  produkt: { bg: "var(--color-accent-soft)", ink: "var(--color-accent-ink)" },
};

function StatusBadge({ status }: { status: Material["status"] }) {
  const map: Record<Material["status"], string> = {
    oeffentlich:
      "bg-[color:var(--color-sage-soft)] text-[color:var(--color-sage-ink)]",
    "in-ueberarbeitung":
      "bg-[color:var(--color-orange-soft)] text-[color:var(--color-orange-ink)]",
    "auf-anfrage":
      "bg-[color:var(--color-sunny-soft)] text-[color:var(--color-sunny-ink)]",
    entwurf:
      "bg-[color:var(--color-surface-alt)] text-[color:var(--color-ink-muted)]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        map[status]
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

export function MaterialCard({ material }: { material: Material }) {
  const downloadLabel = downloadLabelFor(material);
  const farbe = KATEGORIE_FARBE[material.kategorie];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary)]/40 hover:shadow-[var(--shadow-card-hover)]">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center rounded-full px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider"
          style={{ background: farbe.bg, color: farbe.ink }}
        >
          {KATEGORIE_LABEL[material.kategorie]}
        </span>
        <StatusBadge status={material.status} />
        {material.dateiFormat ? (
          <span className="inline-flex items-center rounded-full bg-[color:var(--color-surface-alt)] px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-[color:var(--color-ink-muted)]">
            {material.dateiFormat}
          </span>
        ) : null}
      </div>

      <h3 className="text-[1.2rem] font-bold leading-snug tracking-[-0.01em] text-[color:var(--color-ink)]">
        <Link
          href={`/materialien/${material.slug}`}
          className="no-underline transition-colors hover:text-[color:var(--color-primary)]"
        >
          {material.titel}
        </Link>
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
        {material.kurzbeschreibung}
      </p>

      <dl className="mt-5 space-y-1.5 border-t border-[color:var(--color-line)]/60 pt-4 text-xs text-[color:var(--color-ink-muted)]">
        <div className="flex gap-2">
          <dt className="font-semibold">Zielgruppe:</dt>
          <dd>{material.zielgruppen.map((z) => ZIELGRUPPE_LABEL[z]).join(", ")}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold">Dauer:</dt>
          <dd>{material.dauer}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <Link
          href={`/materialien/${material.slug}`}
          className="inline-flex items-center rounded-full border border-[color:var(--color-primary)] px-4 py-1.5 text-sm font-semibold text-[color:var(--color-primary)] no-underline transition-colors hover:bg-[color:var(--color-primary-soft)]"
        >
          Details
        </Link>
        {material.download ? (
          <a
            href={material.download}
            className="inline-flex items-center rounded-full bg-[color:var(--color-primary)] px-4 py-1.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[color:var(--color-primary-hover)]"
            download
          >
            Download
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full bg-[color:var(--color-bg-deep)] px-4 py-1.5 text-sm font-medium text-[color:var(--color-ink-muted)]">
            {downloadLabel}
          </span>
        )}
      </div>
    </article>
  );
}

function downloadLabelFor(m: Material): string {
  switch (m.status) {
    case "in-ueberarbeitung":
      return "Material in Überarbeitung";
    case "auf-anfrage":
      return "Auf Anfrage verfügbar";
    case "entwurf":
      return "Entwurf";
    default:
      return "Download folgt";
  }
}
