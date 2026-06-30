import data from "../../content/formate.json";

export type FormatSlug = "universitaeten" | "schulen" | "ausbildung" | "gemeinden";

export type Format = {
  slug: FormatSlug;
  titel: string;
  kurz: string;
  zielgruppe: string;
  einleitung: string;
  ziele: string[];
  ablauf: string[];
  voraussetzungen: string[];
  institutionsrolle: string[];
  besonderheiten?: string[];
  zertifikat?: string;
  cta: string;
};

export const FORMATE: Format[] = data as Format[];

export function getFormatBySlug(slug: string): Format | undefined {
  return FORMATE.find((f) => f.slug === slug);
}
