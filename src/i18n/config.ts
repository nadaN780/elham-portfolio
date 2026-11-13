/**
 * Localization groundwork.
 *
 * The site currently ships in English only. The final language setup
 * (English only, or English + Arabic) has not been decided yet.
 *
 * If Arabic is added:
 *   1. Add "ar" to `locales`.
 *   2. Move content to src/content/en and src/content/ar (same shapes).
 *   3. Move routes under app/[locale]/ and read `dir` from `localeMeta`.
 * The fonts (Amiri, IBM Plex Sans Arabic) and RTL-aware CSS are already in place.
 */

export const locales = ["en"] as const;
export type Locale = (typeof locales)[number] | "ar";

export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { label: string; dir: "ltr" | "rtl"; ogLocale: string }> = {
  en: { label: "English", dir: "ltr", ogLocale: "en_US" },
  ar: { label: "العربية", dir: "rtl", ogLocale: "ar_AR" },
};
