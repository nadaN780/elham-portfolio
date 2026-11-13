import type { ElementType, ReactNode } from "react";
import { isPending, type Content } from "@/lib/content";

/**
 * Renders a content value. Pending values become a visibly marked placeholder:
 *  - inline: a small chip ("To be provided · Professional title")
 *  - block:  a dashed note with the label and an optional hint
 */

type TextProps = {
  value: Content | undefined;
  /** Wrapper element for real values (and for block placeholders). */
  as?: ElementType;
  className?: string;
  block?: boolean;
  children?: (value: string) => ReactNode;
};

export function Text({ value, as, className, block = false, children }: TextProps) {
  if (value === undefined) return null;

  if (isPending(value)) {
    const Tag = (as ?? (block ? "div" : "span")) as ElementType;
    return (
      <Tag
        className={["pending", block ? "pending--block" : "pending--inline", className].filter(Boolean).join(" ")}
        data-pending=""
      >
        <span className="pending__tag">To be provided</span>
        <span className="pending__label">{value.label}</span>
        {block && value.hint ? <span className="pending__hint">{value.hint}</span> : null}
      </Tag>
    );
  }

  const content = children ? children(value) : value;
  if (!as) return <>{content}</>;
  const Tag = as;
  return <Tag className={className}>{content}</Tag>;
}
