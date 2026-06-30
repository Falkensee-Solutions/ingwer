import data from "../../content/termine.json";

export type TerminStatus = "fix" | "geplant" | "in-klaerung" | "abgeschlossen";

export type TerminDownload = {
  label: string;
  /** Pfad relativ zu /public oder externe URL. */
  href: string;
};

export type Termin = {
  slug: string;
  titel: string;
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
  fix: "Fix bestätigt",
  geplant: "Geplant",
  "in-klaerung": "In Klärung",
  abgeschlossen: "Abgeschlossen",
};

export const STATUS_TERMIN_BESCHREIBUNG: Record<TerminStatus, string> = {
  fix: "Termin ist verbindlich bestätigt.",
  geplant: "Termin ist geplant, jedoch noch nicht final freigegeben.",
  "in-klaerung":
    "Termin und Rahmenbedingungen werden derzeit zwischen den Beteiligten geklärt.",
  abgeschlossen: "Werkstatt wurde bereits durchgeführt.",
};

export const TERMINE: Termin[] = data as Termin[];

/** Reihenfolge für die Anzeige auf /termine. */
export const STATUS_REIHENFOLGE: TerminStatus[] = [
  "fix",
  "geplant",
  "in-klaerung",
  "abgeschlossen",
];

export function getTermineNachStatus(): Record<TerminStatus, Termin[]> {
  const groups: Record<TerminStatus, Termin[]> = {
    fix: [],
    geplant: [],
    "in-klaerung": [],
    abgeschlossen: [],
  };
  for (const t of TERMINE) groups[t.status].push(t);
  // innerhalb der Gruppen nach Datum sortieren (null ans Ende)
  for (const status of STATUS_REIHENFOLGE) {
    groups[status].sort((a, b) => {
      if (!a.sortDate && !b.sortDate) return 0;
      if (!a.sortDate) return 1;
      if (!b.sortDate) return -1;
      return a.sortDate.localeCompare(b.sortDate);
    });
  }
  return groups;
}

/** Kommende Termine für den Startseiten-Teaser (alles außer "abgeschlossen"). */
export function getKommendeTermine(limit = 3): Termin[] {
  return TERMINE.filter((t) => t.status !== "abgeschlossen")
    .sort((a, b) => {
      if (!a.sortDate && !b.sortDate) return 0;
      if (!a.sortDate) return 1;
      if (!b.sortDate) return -1;
      return a.sortDate.localeCompare(b.sortDate);
    })
    .slice(0, limit);
}
