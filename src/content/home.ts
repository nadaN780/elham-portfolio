import { pending, type Content, type ContentImage } from "@/lib/content";

/**
 * Copy for the home-page sections that are not lists
 * (lists live in expertise.ts, projects.ts, journey.ts, testimonials.ts, beyond.ts).
 *
 * Section `eyebrow` labels carry the narrative ("the thought" → "the next idea").
 * Section `title`s stay plain, so visitors always know where they are.
 */

export const hero = {
  portrait: {
    alt: pending("Portrait alt text"),
    caption: "Portrait",
    // src: "/images/elham-portrait.jpg", width: 1600, height: 2400,
  } satisfies ContentImage,
  primaryCta: { label: "Explore the work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

export const introduction = {
  number: "02",
  eyebrow: "The thought",
  title: "Introduction",
  /** The meaning of the name, stated plainly once. This is a fact, not a claim about her. */
  definition: {
    term: "Elham",
    termArabic: "إلهام",
    origin: "Arabic, noun",
    meaning: "inspiration",
  },
  philosophy: pending(
    "Personal philosophy",
    "2–4 sentences in Elham's own words: how she sees her work and what drives it",
  ) as Content,
};

export const about = {
  number: "03",
  eyebrow: "The curiosity",
  title: "About Elham",
  portrait: {
    alt: pending("Secondary portrait alt text"),
    caption: "At work",
  } satisfies ContentImage,
  lede: pending("About lede", "One strong sentence that opens her story") as Content,
  blocks: [
    { heading: "Background", body: pending("Background", "Where she comes from; 2–3 sentences") as Content },
    {
      heading: "Professional journey",
      body: pending("Professional journey summary", "How she got to where she is; 2–3 sentences") as Content,
    },
    {
      heading: "What makes her approach distinctive",
      body: pending("Distinctive approach", "What she does differently; 2–3 sentences") as Content,
    },
  ],
  valuesHeading: "Values",
  values: [
    pending("Value 1", "One word or a short phrase, optionally with a line of explanation"),
    pending("Value 2"),
    pending("Value 3"),
  ] as Content[],
};

export const sections = {
  expertise: {
    number: "04",
    eyebrow: "The craft",
    title: "Expertise & capabilities",
    lede: pending("Expertise intro", "Optional, one sentence") as Content,
  },
  work: {
    number: "05",
    eyebrow: "The form",
    title: "Selected work",
    lede: pending("Selected work intro", "Optional, one sentence on how the work is chosen") as Content,
  },
  journey: {
    number: "06",
    eyebrow: "The path",
    title: "Experience & journey",
  },
  testimonials: {
    number: "07",
    eyebrow: "The impression",
    title: "Kind words",
  },
  beyond: {
    number: "08",
    eyebrow: "Beyond the work",
    title: "The personal side",
    lede: pending("Beyond work intro", "Optional, one sentence about life outside work") as Content,
    /** Set to false to hide the section entirely. */
    enabled: true,
  },
  contact: {
    number: "09",
    eyebrow: "The next idea",
    title: "Let's talk",
  },
};
