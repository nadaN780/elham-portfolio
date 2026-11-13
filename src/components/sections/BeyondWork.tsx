import { interests } from "@/content/beyond";
import { sections } from "@/content/home";
import { Media } from "@/components/ui/Media";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Text } from "@/components/ui/Text";

export function BeyondWork() {
  const s = sections.beyond;
  if (!s.enabled || interests.length === 0) return null;

  return (
    <section id="beyond" className="section" aria-labelledby="beyond-title">
      <div className="container">
        <SectionHeader id="beyond" number={s.number} eyebrow={s.eyebrow} title={s.title} lede={s.lede} />

        <ul className="interests">
          {interests.map((item, i) => (
            <li key={i} className={["interest", item.image ? "interest--image" : ""].join(" ")} data-reveal>
              {item.image ? (
                <Media image={item.image} ratio="4 / 5" sizes="(min-width: 960px) 28vw, 90vw" emptyLabel="Personal photograph" />
              ) : null}
              <div className="interest__text">
                <span className="interest__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Text value={item.title} as="h3" className="interest__title" />
                <Text value={item.note} as="p" className="interest__note" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
