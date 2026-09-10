import type { NextConfig } from "next";

// Export-Modus und URL-Unterpfad sind getrennt: Eine GitHub-Pages-Seite mit
// eigener Domain wird statisch exportiert, liegt aber direkt unter `/`.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStaticExport = process.env.NEXT_OUTPUT_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        // Nur GitHub Project Pages benötigen einen Unterpfad wie /repo.
        output: "export",
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
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
