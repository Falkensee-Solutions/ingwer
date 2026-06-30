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

export const MAIN_NAV = [
  { href: "/", label: "Start" },
  { href: "/konzept", label: "Konzept" },
  { href: "/formate", label: "Formate" },
  { href: "/materialien", label: "Materialien" },
  { href: "/werkstattprodukte", label: "Werkstattprodukte" },
  { href: "/termine", label: "Termine" },
  { href: "/partner", label: "Partner" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const FOOTER_NAV = [
  { href: "/kontakt", label: "Kontakt" },
  { href: "/regelwerk", label: "Regelwerk" },
  { href: "/partner", label: "Partner" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;
