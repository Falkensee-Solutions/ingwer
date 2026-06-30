import data from "../../content/regelwerk.json";

export type Regel = {
  nr: number;
  titel: string;
  kurz: string;
  lang: string;
};

export type SchutzAbschnitt = {
  titel: string;
  text: string;
  punkte?: string[];
};

type RegelwerkContent = {
  regeln: Regel[];
  schutzAbschnitte: SchutzAbschnitt[];
};

const content = data as RegelwerkContent;

export const REGELN: Regel[] = content.regeln;
export const SCHUTZ_ABSCHNITTE: SchutzAbschnitt[] = content.schutzAbschnitte;
