import type { MetadataRoute } from "next";
import { TERMINE } from "@/data/termine";

// Notwendig für `output: "export"` (statischer Export für GitHub Pages).
export const dynamic = "force-static";

// Aus dem Build-Env (GitHub Actions) befüllt. Fallback bleibt Platzhalter,
// solange noch keine endgültige Domain feststeht.
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const statisch = [
    "/",
    "/begegnung",
    "/aktuell",
    "/archiv",
    "/archiv/2024",
    "/archiv/2025",
    "/archiv/2026",
    "/faq",
    "/kontakt",
    "/regelwerk",
    "/impressum",
    "/datenschutz",
  ];

  const termine = TERMINE.map((t) => `/termine/${t.slug}`);

  return [...statisch, ...termine].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
