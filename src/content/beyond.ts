import { pending, type Content, type ContentImage } from "@/lib/content";

/**
 * Beyond work: a small set of real interests, each with a short note in her voice.
 * Prefer 3–5 meaningful entries over a long list. Images are optional.
 */

export type Interest = {
  title: Content;
  note: Content;
  image?: ContentImage;
};

export const interests: Interest[] = [
  {
    title: pending("Interest or inspiration"),
    note: pending("A sentence or two on why it matters to her"),
    image: { alt: pending("Image alt text") },
  },
  {
    title: pending("Interest or inspiration"),
    note: pending("A sentence or two on why it matters to her"),
  },
  {
    title: pending("Interest or inspiration"),
    note: pending("A sentence or two on why it matters to her"),
  },
];
