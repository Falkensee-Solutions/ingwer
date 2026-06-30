export type WerkstattProdukt = {
  slug: string;
  titel: string;
  art: "text" | "kunst" | "musik" | "video" | "gebet" | "plakat" | "reflexion";
  werkstatt: string;
  jahr: number;
  beschreibung: string;
  /** Freigegebene Bilddatei in /public oder null. Keine erkennbaren Gesichter. */
  bildPfad: string | null;
  /** Anonymisiertes Zitat ohne Personenangabe. */
  zitat?: string;
};

/**
 * Werkstattprodukte werden erst veröffentlicht, wenn die Teilnehmenden
 * der jeweiligen Werkstatt schriftlich zugestimmt haben.
 * Die Liste startet bewusst leer.
 */
export const WERKSTATTPRODUKTE: WerkstattProdukt[] = [];
