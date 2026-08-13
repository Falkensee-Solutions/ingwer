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
  { href: "/begegnung", label: "Begegnung" },
  { href: "/aktuell", label: "Aktuell" },
  { href: "/archiv", label: "Archiv" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export const SECONDARY_NAV: NavItem[] = [];

export const FOOTER_NAV = [
  { href: "/kontakt", label: "Kontakt" },
  { href: "/regelwerk", label: "Regelwerk" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/faq", label: "FAQ" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;
