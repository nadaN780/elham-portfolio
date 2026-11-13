import type { ReactNode } from "react";
import { Spark } from "./Spark";

/**
 * A tall arched frame (2:3) with a double hairline that draws itself once on load.
 * The spark sits at its apex: the visual origin of the whole site.
 */
export function ArchFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={["arch", className].filter(Boolean).join(" ")}>
      <div className="arch__window">{children}</div>
      <svg className="arch__lines" viewBox="0 0 200 300" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path className="arch__line arch__line--outer" d="M-10,310 V100 A110,110 0 0 1 210,100 V310" pathLength={1} />
        <path className="arch__line arch__line--inner" d="M8,300 V100 A92,92 0 0 1 192,100 V300" pathLength={1} />
      </svg>
      <Spark className="arch__spark" size={22} />
      <span className="arch__thread" aria-hidden="true" />
    </div>
  );
}
