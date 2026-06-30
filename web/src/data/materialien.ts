import data from "../../content/materialien.json";

export type MaterialKategorie =
  | "workshop"
  | "werkstatt"
  | "jugendarbeit"
  | "ablaufplan"
  | "regelwerk"
  | "evaluation"
  | "finanzierung"
  | "vorlage"
  | "praesentation"
  | "produkt";

export type MaterialStatus =
  | "oeffentlich"
  | "in-ueberarbeitung"
  | "auf-anfrage"
  | "entwurf";

export type MaterialZielgruppe =
  | "alle"
  | "muslimisch"
  | "christlich-evangelisch"
  | "christlich-katholisch"
  | "konfessionslos"
  | "jugendliche"
  | "junge-erwachsene"
  | "fachkraefte";

export type Material = {
  slug: string;
  titel: string;
  kategorie: MaterialKategorie;
  zielgruppen: MaterialZielgruppe[];
  dauer: string;
  gruppengroesse?: string;
  bezug?: string;
  kurzbeschreibung: string;
  ziel?: string;
  vorbereitung?: string[];
  ablauf?: string[];
  tipps?: string[];
  sensibilitaet?: string[];
  benoetigteMaterialien?: string[];
  status: MaterialStatus;
  /** Pfad zu einer Datei in /public, oder null wenn nicht öffentlich verfügbar. */
  download: string | null;
  dateiFormat?: "PDF" | "Markdown" | "Word" | "Präsentation";
  sprache: "Deutsch";
  verwandte?: string[]; // Slugs verwandter Materialien
};

export const KATEGORIE_LABEL: Record<MaterialKategorie, string> = {
  workshop: "Workshop-Material",
  werkstatt: "Werkstatt-Material",
  jugendarbeit: "Jugendarbeit",
  ablaufplan: "Ablaufplan",
  regelwerk: "Regelwerk",
  evaluation: "Evaluation",
  finanzierung: "Finanzierung",
  vorlage: "Vorlage",
  praesentation: "Präsentation",
  produkt: "Werkstattprodukt",
};

export const STATUS_LABEL: Record<MaterialStatus, string> = {
  oeffentlich: "Verfügbar",
  "in-ueberarbeitung": "In Überarbeitung",
  "auf-anfrage": "Auf Anfrage",
  entwurf: "Entwurf",
};

export const ZIELGRUPPE_LABEL: Record<MaterialZielgruppe, string> = {
  alle: "Alle Teilnehmenden",
  muslimisch: "Muslimische Teilnehmende",
  "christlich-evangelisch": "Evangelische Teilnehmende",
  "christlich-katholisch": "Katholische Teilnehmende",
  konfessionslos: "Konfessionslose Teilnehmende",
  jugendliche: "Jugendliche",
  "junge-erwachsene": "Junge Erwachsene",
  fachkraefte: "Fachkräfte und Lehrende",
};

export const MATERIALIEN: Material[] = data as Material[];

export function getMaterialBySlug(slug: string): Material | undefined {
  return MATERIALIEN.find((m) => m.slug === slug);
}

/** Materialien, die auf der öffentlichen Übersicht erscheinen dürfen. */
export const SICHTBARE_STATUS: MaterialStatus[] = [
  "oeffentlich",
  "in-ueberarbeitung",
  "auf-anfrage",
];
