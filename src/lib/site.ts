/**
 * Resolves the public base URL of the site.
 * Priority: NEXT_PUBLIC_SITE_URL → Vercel production domain → Vercel deployment URL → localhost.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`;

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

/** True only for the production deployment, so previews stay out of search engines. */
export function isProductionDeployment(): boolean {
  const env = process.env.VERCEL_ENV;
  return env ? env === "production" : process.env.NODE_ENV === "production";
}
