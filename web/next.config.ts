import type { NextConfig } from "next";

// Statischer Export wird über die Env-Variable NEXT_PUBLIC_BASE_PATH
// (gesetzt im GitHub-Actions-Workflow) aktiviert. Lokal (`npm run dev`)
// bleibt der klassische Next-Server inkl. Rewrites aktiv.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStaticExport = basePath.length > 0;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        // GitHub Pages serviert statische Dateien aus /<repo>/...
        output: "export",
        basePath,
        assetPrefix: basePath,
        // GH Pages liefert /pfad/ → /pfad/index.html aus; trailingSlash sorgt
        // dafür, dass Next.js entsprechende Verzeichnisstruktur generiert.
        trailingSlash: true,
        // next/image Optimizer ist auf statischem Hosting nicht verfügbar.
        images: { unoptimized: true },
      }
    : {
        // Sveltia CMS liegt als statische Datei in public/admin/index.html.
        // Next.js würde /admin/ standardmäßig auf /admin redirecten und dort 404 zeigen,
        // weil keine App-Route existiert. Diese Rewrites stellen sicher,
        // dass beide URL-Varianten die Admin-UI ausliefern.
        async rewrites() {
          return [
            { source: "/admin", destination: "/admin/index.html" },
            { source: "/admin/", destination: "/admin/index.html" },
          ];
        },
      }),
};

export default nextConfig;
