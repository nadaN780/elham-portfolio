import { sections } from "@/content/home";
import { contact, site, socials } from "@/content/site";
import { isPending } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Text } from "@/components/ui/Text";

export function Contact() {
  const s = sections.contact;

  return (
    <section id="contact" className="section section--dark" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader id="contact" number={s.number} eyebrow={s.eyebrow} title={s.title} tone="dark" />

        <div className="contact__grid">
          <div className="contact__invite" data-reveal>
            <Text value={contact.invitation} as="p" className="contact__lead" block />
            <Text value={contact.availability} as="p" className="contact__availability" />
          </div>

          <dl className="contact__channels" data-reveal>
            <div className="contact__row">
              <dt>Email</dt>
              <dd>
                {isPending(contact.email) ? (
                  <Text value={contact.email} />
                ) : (
                  <a className="contact__email" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                )}
              </dd>
            </div>
            <div className="contact__row">
              <dt>Profiles</dt>
              <dd>
                <SocialLinks links={socials} className="social-links--stacked" />
              </dd>
            </div>
            <div className="contact__row">
              <dt>Based in</dt>
              <dd>
                <Text value={site.location} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
