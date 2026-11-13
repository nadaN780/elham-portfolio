import { hero } from "@/content/home";
import { site } from "@/content/site";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { Text } from "@/components/ui/Text";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow hero__eyebrow">
            <span>Portfolio</span>
          </p>

          <h1 id="hero-title" className="hero__name">
            <span className="hero__latin">{site.name}</span>
            <span className="hero__arabic" lang="ar" dir="rtl">
              {site.nameArabic}
            </span>
          </h1>

          <div className="hero__rule" aria-hidden="true" />

          <Text value={site.title} as="p" className="hero__title" />
          <Text value={site.intro} as="p" className="hero__intro" block />

          <div className="hero__actions">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <figure className="hero__figure">
          <ArchFrame>
            <Media image={hero.portrait} ratio="2 / 3" priority sizes="(min-width: 960px) 34vw, 80vw" emptyLabel="Portrait" />
          </ArchFrame>
          <figcaption className="caption hero__caption">
            <span className="caption__index">Fig. 1</span>
            {hero.portrait.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
