import { sections } from "@/content/home";
import { cv, journey } from "@/content/journey";
import { isPending } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Text } from "@/components/ui/Text";

export function Journey() {
  const s = sections.journey;
  const groups = journey.filter((g) => g.entries.length > 0);
  if (groups.length === 0) return null;

  const cvValue = cv;
  const cvAside = isPending(cvValue) ? (
    <Text value={cvValue} />
  ) : (
    <Button href={cvValue} variant="quiet" external>
      Download CV
    </Button>
  );

  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeader id="journey" number={s.number} eyebrow={s.eyebrow} title={s.title} aside={cvAside} />

        <div className="journey">
          {groups.map((group) => (
            <section key={group.id} className="journey__group" aria-labelledby={`journey-${group.id}`} data-reveal>
              <h3 id={`journey-${group.id}`} className="journey__heading">
                {group.heading}
              </h3>
              <ol className="timeline">
                {group.entries.map((e, i) => (
                  <li key={i} className="timeline__item">
                    <Text value={e.dates} as="p" className="timeline__dates" />
                    <div className="timeline__body">
                      <Text value={e.title} as="h4" className="timeline__title" />
                      <Text value={e.organization} as="p" className="timeline__org" />
                      {e.description ? <Text value={e.description} as="p" className="timeline__desc" /> : null}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
