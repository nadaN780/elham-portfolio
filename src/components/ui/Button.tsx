import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className, external }: ButtonProps) {
  const cls = ["btn", `btn--${variant}`, className].filter(Boolean).join(" ");
  const arrow = (
    <span className="btn__arrow" aria-hidden="true">
      {external ? "↗" : "→"}
    </span>
  );

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        {arrow}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      <span>{children}</span>
      {arrow}
    </Link>
  );
}
