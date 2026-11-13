import { sections } from "@/content/home";
import { testimonials } from "@/content/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Text } from "@/components/ui/Text";

export function Testimonials() {
  const s = sections.testimonials;
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section section--blush" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeader id="testimonials" number={s.number} eyebrow={s.eyebrow} title={s.title} />

        <ul className="testimonials" data-count={testimonials.length}>
          {testimonials.map((t, i) => (
            <li key={i} data-reveal>
              <figure className="testimonial">
                <span className="testimonial__mark" aria-hidden="true">
                  “
                </span>
                <blockquote className="testimonial__quote">
                  <Text value={t.quote} as="p" block />
                </blockquote>
                <figcaption className="testimonial__by">
                  <Text value={t.name} as="span" className="testimonial__name" />
                  <span className="testimonial__role">
                    <Text value={t.role} />
                    {t.organization ? (
                      <>
                        <span aria-hidden="true">, </span>
                        <Text value={t.organization} />
                      </>
                    ) : null}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
