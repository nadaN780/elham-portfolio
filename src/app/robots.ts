import type { MetadataRoute } from "next";
import { getSiteUrl, isProductionDeployment } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  if (!isProductionDeployment()) {
    // Preview deployments: keep crawlers out entirely.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
