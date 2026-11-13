import { capabilities } from "@/content/expertise";
import { sections } from "@/content/home";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Text } from "@/components/ui/Text";

export function Expertise() {
  const s = sections.expertise;
  if (capabilities.length === 0) return null;

  return (
    <section id="expertise" className="section" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHeader id="expertise" number={s.number} eyebrow={s.eyebrow} title={s.title} lede={s.lede} />

        <ol className="capabilities" data-count={capabilities.length}>
          {capabilities.map((group, i) => (
            <li key={i} className="capability" data-reveal>
              <span className="capability__index" aria-hidden="true">
                {toRoman(i + 1)}
              </span>
              <Text value={group.name} as="h3" className="capability__name" />
              <Text value={group.description} as="p" className="capability__desc" />
              {group.skills.length > 0 ? (
                <ul className="capability__skills" aria-label="Skills">
                  {group.skills.map((skill, j) => (
                    <li key={j}>
                      <Text value={skill} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function toRoman(n: number) {
  return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][n - 1] ?? String(n);
}
