/**
 * Auflösung des Next.js basePath für GitHub Pages (Project-Page-Hosting).
 *
 * `next/link`, `next/image` & Co. setzen den basePath automatisch davor.
 * Für rohe `<a href>` / `<img src>` auf statische Assets aus `public/`
 * (z. B. Downloads, Logos) muss der Pfad manuell präfigiert werden,
 * sonst zielt der Browser auf die Domain-Root statt auf `/ingwer/...`.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Präfigiert absolute Public-Pfade (`/downloads/...`, `/logos/...`) mit
 * dem konfigurierten basePath. Externe URLs und relative Pfade werden
 * unverändert zurückgegeben.
 */
export function withBasePath(path: string): string {
  if (!path) return path;
  if (/^(?:[a-z]+:)?\/\//i.test(path)) return path; // absolute URL
  if (path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  if (!path.startsWith("/")) return path;
  if (!BASE_PATH) return path;
  if (path.startsWith(BASE_PATH + "/") || path === BASE_PATH) return path;
  return `${BASE_PATH}${path}`;
}
