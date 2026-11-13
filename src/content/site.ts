import { pending, type Content, type ContentLink } from "@/lib/content";

/**
 * Site-wide identity, navigation and contact details.
 * Edit this file to update anything that appears in the header, footer, metadata or contact section.
 */

export const site = {
  name: "Elham",
  nameArabic: "إلهام",
  /** Shown under her name in the hero and used in metadata once supplied. */
  title: pending("Professional title", "Her exact title, e.g. as it appears on LinkedIn") as Content,
  /** One or two sentences for the hero. */
  intro: pending(
    "Hero introduction",
    "1–2 sentences: who she is and what she does, in her own voice",
  ) as Content,
  /** Used for <meta name="description"> once supplied. */
  metaDescription: pending("Meta description", "~150 characters for search results") as Content,
  /** Short line in the footer. */
  brandStatement: pending("Footer brand statement", "Optional, one short line") as Content,
  /** Location / timezone line in the contact section (optional). */
  location: pending("Location or timezone", "Optional") as Content,
} as const;

export type NavItem = { label: string; href: string; id: string };

export const navigation: NavItem[] = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Expertise", href: "/#expertise", id: "expertise" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Journey", href: "/#journey", id: "journey" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export const contact = {
  invitation: pending(
    "Invitation to connect",
    "One or two sentences on what kind of conversations she welcomes",
  ) as Content,
  email: pending("Email address") as Content,
  availability: pending("Availability", "Optional, e.g. 'Open to new projects from March'") as Content,
};

/**
 * Social / professional profiles. A profile only becomes a link once its href is a real URL.
 * Remove any entry she does not use.
 */
export const socials: ContentLink[] = [
  { label: "LinkedIn", href: pending("LinkedIn URL") },
  { label: "Instagram", href: pending("Instagram URL", "Only if used professionally") },
  { label: "Behance / Portfolio", href: pending("Other profile URL", "Rename or remove") },
];
