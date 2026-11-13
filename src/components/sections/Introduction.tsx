import { introduction } from "@/content/home";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Text } from "@/components/ui/Text";

export function Introduction() {
  const d = introduction.definition;
  return (
    <section id="introduction" className="section section--intro" aria-labelledby="introduction-title">
      <div className="container">
        <SectionHeader id="introduction" number={introduction.number} eyebrow={introduction.eyebrow} title={introduction.title} />

        <div className="intro__grid">
          <dl className="definition" data-reveal>
            <dt className="definition__term">
              <span>{d.term}</span>
              <span className="definition__dot" aria-hidden="true">
                ·
              </span>
              <span lang="ar" dir="rtl" className="definition__arabic">
                {d.termArabic}
              </span>
            </dt>
            <dd className="definition__origin">{d.origin}</dd>
            <dd className="definition__meaning">
              <span className="definition__num" aria-hidden="true">
                1.
              </span>
              {d.meaning}
            </dd>
          </dl>

          <div className="intro__philosophy" data-reveal>
            <Text value={introduction.philosophy} as="p" className="statement" block />
          </div>
        </div>
      </div>
    </section>
  );
}
