import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Amiri, Bodoni_Moda, IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import { site } from "@/content/site";
import { plain } from "@/lib/content";
import { getSiteUrl, isProductionDeployment } from "@/lib/site";
import { defaultLocale, localeMeta } from "@/i18n/config";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PlaceholderNotice } from "@/components/layout/PlaceholderNotice";
import { RevealObserver } from "@/components/ui/RevealObserver";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/components.css";
import "@/styles/sections.css";

// Latin display: high-contrast Didone with optical sizing.
const display = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

// Latin text: clean, open sans for body and navigation.
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Arabic display: classical Naskh, selected independently of the Latin pairing.
const arabicDisplay = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-display",
  display: "swap",
});

// Arabic text: for future Arabic body copy.
const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500"],
  variable: "--font-arabic-sans",
  display: "swap",
  preload: false,
});

const title = plain(site.title);
const description =
  plain(site.metaDescription) || `The portfolio of ${site.name} (${site.nameArabic}).`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: title ? `${site.name}, ${title}` : `${site.name} | ${site.nameArabic}`,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.nameArabic}`,
    description,
    locale: localeMeta[defaultLocale].ogLocale,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.nameArabic}`,
    description,
  },
  // Preview deployments stay out of search engines.
  robots: isProductionDeployment() ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#FBF7F2",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const meta = localeMeta[defaultLocale];
  return (
    <html
      lang={defaultLocale}
      dir={meta.dir}
      className={`${display.variable} ${sans.variable} ${arabicDisplay.variable} ${arabicSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables reveal-on-scroll styles only when JavaScript runs. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <PlaceholderNotice />
        <RevealObserver />
      </body>
    </html>
  );
}
