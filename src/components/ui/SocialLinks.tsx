import { isPending, type ContentLink } from "@/lib/content";

/** A link renders as a link only once its URL is real; until then it is a marked placeholder. */
export function SocialLinks({ links, className }: { links: ContentLink[]; className?: string }) {
  if (links.length === 0) return null;
  return (
    <ul className={["social-links", className].filter(Boolean).join(" ")}>
      {links.map((link) => (
        <li key={link.label}>
          {isPending(link.href) ? (
            <span className="social-links__pending" data-pending="">
              {link.label}
              <span className="social-links__note">link to be provided</span>
            </span>
          ) : (
            <a href={link.href} target="_blank" rel="noopener noreferrer me">
              {link.label}
              <span aria-hidden="true"> ↗</span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
