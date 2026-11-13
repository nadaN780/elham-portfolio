/**
 * Content primitives.
 *
 * Every piece of copy about Elham is either a real value supplied by us,
 * or a `pending()` placeholder. Placeholders render as clearly marked
 * "to be provided" chips. They are never hidden, and never made to look real.
 *
 * To add real content: replace `pending("…")` with the actual string.
 */

export type Pending = {
  readonly __pending: true;
  /** What belongs here, e.g. "Professional title". */
  readonly label: string;
  /** Optional guidance for whoever supplies the content. */
  readonly hint?: string;
};

export type Content<T = string> = T | Pending;

export function pending(label: string, hint?: string): Pending {
  return { __pending: true, label, hint };
}

export function isPending(value: unknown): value is Pending {
  return typeof value === "object" && value !== null && (value as Pending).__pending === true;
}

/** Returns the real value, or undefined when the field is still pending. */
export function resolved<T>(value: Content<T> | undefined): T | undefined {
  return value === undefined || isPending(value) ? undefined : value;
}

/** Plain-text version for metadata (titles, descriptions, alt text). */
export function plain(value: Content | undefined, fallback = ""): string {
  const v = resolved(value);
  return v ?? fallback;
}

/** A link that only becomes clickable once its href is real. */
export type ContentLink = {
  label: string;
  href: Content;
};

/** An image that may not exist yet. */
export type ContentImage = {
  src?: string; // path under /public, e.g. "/images/portrait.jpg"
  alt: Content;
  width?: number;
  height?: number;
  caption?: Content;
};
