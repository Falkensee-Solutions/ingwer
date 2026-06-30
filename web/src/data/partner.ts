import data from "../../content/partner.json";

export type Partner = {
  slug: string;
  name: string;
  rolle: string;
  beschreibung: string;
  /** Logo-Pfad relativ zu /public. Datei muss separat eingefügt werden. */
  logoPfad: string | null;
  url: string | null;
};

export const PARTNER: Partner[] = data as Partner[];
