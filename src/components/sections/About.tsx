import { about } from "@/content/home";
import { Media, MediaCaption } from "@/components/ui/Media";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Text } from "@/components/ui/Text";

export function About() {
  return (
    <section id="about" className="section section--surface" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader id="about" number={about.number} eyebrow={about.eyebrow} title={about.title} />

        <div className="about__grid">
          <figure className="about__figure" data-reveal>
            <Media image={about.portrait} ratio="4 / 5" sizes="(min-width: 960px) 30vw, 90vw" emptyLabel="Secondary portrait" />
            <MediaCaption caption={about.portrait.caption} index="Fig. 2" />
          </figure>

          <div className="about__body">
            <Text value={about.lede} as="p" className="about__lede" block />

            <div className="about__blocks">
              {about.blocks.map((b) => (
                <article key={b.heading} className="about__block" data-reveal>
                  <h3 className="h-small">{b.heading}</h3>
                  <Text value={b.body} as="p" block />
                </article>
              ))}
            </div>

            <div className="values" data-reveal>
              <h3 className="h-small">{about.valuesHeading}</h3>
              <ol className="values__list">
                {about.values.map((v, i) => (
                  <li key={i} className="values__item">
                    <span className="values__index" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Text value={v} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
