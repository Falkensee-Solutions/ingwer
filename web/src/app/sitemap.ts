import type { MetadataRoute } from "next";
import { TERMINE } from "@/data/termine";

// Notwendig für `output: "export"` (statischer Export für GitHub Pages).
export const dynamic = "force-static";

// Aus dem Build-Env befüllt; die Produktionsdomain ist der sichere Fallback.
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://werkstatt.forumdialog.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const statisch = [
    "/",
    "/begegnung",
    "/aktuell",
    "/angebote",
    "/archiv",
    "/archiv/2024",
    "/archiv/2025",
    "/archiv/2026",
    "/kontakt",
    "/regelwerk",
    "/impressum",
    "/datenschutz",
  ];

  const termine = TERMINE.map((t) => `/aktuell/${t.slug}`);

  return [...statisch, ...termine].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
