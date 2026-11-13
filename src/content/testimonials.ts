import { pending, type Content } from "@/lib/content";

/**
 * Testimonials. Only add a quote when we have the original words AND the person's
 * permission to publish them with their name. Never paraphrase into a quote.
 */

export type Testimonial = {
  quote: Content;
  name: Content;
  role: Content;
  organization?: Content;
  /** Internal note: where/when permission was given. Not rendered. */
  permission?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: pending("Testimonial quote", "Verbatim words, with permission"),
    name: pending("Name"),
    role: pending("Role"),
    organization: pending("Organization"),
  },
  {
    quote: pending("Testimonial quote", "Verbatim words, with permission"),
    name: pending("Name"),
    role: pending("Role"),
    organization: pending("Organization"),
  },
];
