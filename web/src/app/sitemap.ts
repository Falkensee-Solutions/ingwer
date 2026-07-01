import type { MetadataRoute } from "next";
import { FORMATE } from "@/data/formate";
import { MATERIALIEN } from "@/data/materialien";

// Notwendig für `output: "export"` (statischer Export für GitHub Pages).
export const dynamic = "force-static";

// Aus dem Build-Env (GitHub Actions) befüllt. Fallback bleibt Platzhalter,
// solange noch keine endgültige Domain feststeht.
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const statisch = [
    "/",
    "/konzept",
    "/formate",
    "/materialien",
    "/werkstattprodukte",
    "/mitmachen",
    "/mitorganisieren",
    "/termine",
    "/partner",
    "/kontakt",
    "/regelwerk",
    "/impressum",
    "/datenschutz",
  ];

  const formate = FORMATE.map((f) => `/formate/${f.slug}`);
  const materialien = MATERIALIEN.filter((m) => m.status !== "entwurf").map(
    (m) => `/materialien/${m.slug}`
  );

  return [...statisch, ...formate, ...materialien].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
