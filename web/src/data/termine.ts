import content from "../../content/termine.json";
import type { FormatSlug } from "./formate";

export type TerminStatus = "bestätigt" | "geplant" | "in-vorbereitung" | "abgeschlossen";

export type TerminDownload = {
  label: string;
  /** Pfad relativ zu /public oder externe URL. */
  href: string;
};

export type Termin = {
  slug: string;
  titel: string;
  /** Zugehöriges Werkstattformat für Filterung und Detailseiten. */
  formatSlug: FormatSlug;
  /** Anzeige-Zeitraum, z. B. "29.01.–02.02.2027". Wird nicht maschinell sortiert. */
  zeitraum: string;
  /** Für Sortierung: ISO-Datum (Startdatum) oder null bei unklarem Datum. */
  sortDate: string | null;
  ort?: string;
  status: TerminStatus;
  zielgruppe: string;
  beschreibung: string;
  hinweis?: string;
  downloads?: TerminDownload[];
};

export const STATUS_TERMIN_LABEL: Record<TerminStatus, string> = {
  bestätigt: "Bestätigt",
  geplant: "Geplant",
  "in-vorbereitung": "in Vorbereitung",
  abgeschlossen: "Abgeschlossen",
};

export const STATUS_TERMIN_BESCHREIBUNG: Record<TerminStatus, string> = {
  bestätigt: "Termin ist verbindlich bestätigt.",
  geplant: "Termin ist geplant, jedoch noch nicht final freigegeben.",
  "in-vorbereitung":
    "Termin und Rahmenbedingungen werden derzeit vorbereitet und abgestimmt.",
  abgeschlossen: "Werkstatt wurde bereits durchgeführt.",
};

export const TERMINE: Termin[] = content.termine as Termin[];

function sortiereTermine(a: Termin, b: Termin): number {
  if (!a.sortDate && !b.sortDate) return 0;
  if (!a.sortDate) return 1;
  if (!b.sortDate) return -1;
  return a.sortDate.localeCompare(b.sortDate);
}

export function getTerminBySlug(slug: string): Termin | undefined {
  return TERMINE.find((t) => t.slug === slug);
}

export function getTermineByFormatSlug(formatSlug: FormatSlug): Termin[] {
  return TERMINE.filter((t) => t.formatSlug === formatSlug).sort(sortiereTermine);
}

/** Kommende Termine für den Startseiten-Teaser (alles außer "abgeschlossen"). */
export function getKommendeTermine(limit = 3): Termin[] {
  return TERMINE.filter((t) => t.status !== "abgeschlossen")
    .sort(sortiereTermine)
    .slice(0, limit);
}
