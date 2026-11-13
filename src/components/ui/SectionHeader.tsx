import type { ReactNode } from "react";
import type { Content } from "@/lib/content";
import { Spark } from "./Spark";
import { Text } from "./Text";

type SectionHeaderProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lede?: Content;
  tone?: "light" | "dark";
  aside?: ReactNode;
};

/**
 * Shared section opening. The thread drops into every chapter and ends at the spark,
 * so the page reads as one continuous line. The plain title keeps orientation clear;
 * the eyebrow carries the story.
 */
export function SectionHeader({ id, number, eyebrow, title, lede, tone = "light", aside }: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${tone}`} data-reveal>
      <div className="section-header__marker">
        <span className="section-header__thread" aria-hidden="true" />
        <Spark size={16} />
        <p className="eyebrow">
          <span className="eyebrow__number">{number}</span>
          <span className="eyebrow__sep" aria-hidden="true">
            —
          </span>
          <span>{eyebrow}</span>
        </p>
      </div>
      <div className="section-header__main">
        <h2 id={`${id}-title`} className="section-header__title">
          {title}
        </h2>
        {lede ? <Text value={lede} as="p" className="section-header__lede" /> : null}
      </div>
      {aside ? <div className="section-header__aside">{aside}</div> : null}
    </header>
  );
}
