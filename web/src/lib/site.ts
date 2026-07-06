import siteData from "../../content/site.json";

type SiteContent = {
  name: string;
  claim: string;
  description: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string | null;
};

export const SITE: SiteContent = siteData as SiteContent;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const MAIN_NAV: NavItem[] = [
  { href: "/konzept", label: "Konzept" },
  {
    href: "/formate",
    label: "Formate",
    children: [
      { href: "/formate/universitaeten", label: "Universitäten & Hochschulen" },
      { href: "/formate/schulen", label: "Schulen" },
      { href: "/formate/ausbildung", label: "Ausbildung" },
      { href: "/formate/gemeinden", label: "Gemeinden" },
    ],
  },
  {
    href: "/teilnehmen",
    label: "Teilnehmen",
    children: [
      { href: "/teilnehmen", label: "Teilnahme-Infos" },
      { href: "/termine", label: "Termine" },
    ],
  },
  {
    href: "/materialien",
    label: "Materialien",
    children: [
      { href: "/materialien", label: "Alle Materialien" },
      { href: "/werkstattprodukte", label: "Werkstattprodukte" },
    ],
  },
];

export const SECONDARY_NAV: NavItem[] = [
  {
    href: "/kontakt",
    label: "Kontakt",
    children: [
      { href: "/kontakt", label: "Kontaktformular" },
      { href: "/partner", label: "Partner" },
      { href: "/ueber-uns", label: "Über uns" },
    ],
  },
];

export const FOOTER_NAV = [
  { href: "/kontakt", label: "Kontakt" },
  { href: "/regelwerk", label: "Regelwerk" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/partner", label: "Partner" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;
