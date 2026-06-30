import type { MetadataRoute } from "next";

// Notwendig für `output: "export"` (statischer Export für GitHub Pages).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
