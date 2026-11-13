import type { ReactNode } from "react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { isPending } from "@/lib/content";
import { Media, MediaCaption } from "@/components/ui/Media";
import { Spark } from "@/components/ui/Spark";
import { Text } from "@/components/ui/Text";

type CaseStudyProps = { project: Project; next?: Project };

/**
 * Reusable case-study template. Every block is driven by data in src/content/projects.ts.
 * The contribution block separates Elham's own work from collaborative work.
 */
export function CaseStudy({ project, next }: CaseStudyProps) {
  const cs = project.caseStudy;
  const images = cs.media.filter((m) => m.kind === "image");
  const videos = cs.media.filter((m) => m.kind === "video");

  return (
    <article className="case" aria-labelledby="case-title">
      <header className="case__hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li aria-current="page">Case study</li>
            </ol>
          </nav>

          {project.placeholder ? (
            <p className="case__template-note">
              <span className="pending__tag">Template preview</span> This page shows the case-study structure. Every field
              below is waiting for real project content.
            </p>
          ) : null}

          <p className="eyebrow">
            <Text value={project.category} />
            {project.year ? (
              <>
                <span className="eyebrow__sep" aria-hidden="true">
                  —
                </span>
                <Text value={project.year} />
              </>
            ) : null}
          </p>
          <h1 id="case-title" className="case__title">
            <Text value={project.title} />
          </h1>
          <Text value={project.summary} as="p" className="case__summary" />
        </div>
        <figure className="container case__cover">
          <Media image={project.cover} ratio="16 / 9" priority sizes="(min-width: 1240px) 1160px, 100vw" emptyLabel="Cover image" />
          <MediaCaption caption={project.cover.caption} />
        </figure>
      </header>

      <div className="container case__layout">
        <aside className="case__facts" aria-label="Project facts">
          <dl>
            <div>
              <dt>Role</dt>
              <dd>
                <Text value={cs.role} />
              </dd>
            </div>
            <div>
              <dt>Deliverables</dt>
              <dd>
                <ul>
                  {cs.deliverables.map((d, i) => (
                    <li key={i}>
                      <Text value={d} />
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            {cs.links.length > 0 ? (
              <div>
                <dt>Links</dt>
                <dd>
                  <ul>
                    {cs.links.map((l) => (
                      <li key={l.label}>
                        {isPending(l.href) ? (
                          <span className="social-links__pending" data-pending="">
                            {l.label}
                            <span className="social-links__note">link to be provided</span>
                          </span>
                        ) : (
                          <a href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label} <span aria-hidden="true">↗</span>
                            <span className="visually-hidden"> (opens in a new tab)</span>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ) : null}
          </dl>
        </aside>

        <div className="case__content">
          <CaseBlock n="01" title="Overview">
            <Text value={cs.overview} as="p" className="case__lead" block />
          </CaseBlock>

          <CaseBlock n="02" title="Background & context">
            <Text value={cs.context} as="p" block />
          </CaseBlock>

          <CaseBlock n="03" title="The challenge">
            <Text value={cs.challenge} as="p" block />
          </CaseBlock>

          <CaseBlock n="04" title="Objectives">
            <ol className="case__list">
              {cs.objectives.map((o, i) => (
                <li key={i}>
                  <Text value={o} />
                </li>
              ))}
            </ol>
          </CaseBlock>

          <CaseBlock n="05" title="Her role & contribution">
            <div className="contribution">
              <div className="contribution__col contribution__col--own">
                <h4 className="contribution__heading">
                  <Spark size={12} /> Elham&rsquo;s own work
                </h4>
                <ul>
                  {cs.contribution.individual.map((c, i) => (
                    <li key={i}>
                      <Text value={c} />
                    </li>
                  ))}
                </ul>
              </div>
              {cs.contribution.collaborative?.length ? (
                <div className="contribution__col">
                  <h4 className="contribution__heading">With the team</h4>
                  <ul>
                    {cs.contribution.collaborative.map((c, i) => (
                      <li key={i}>
                        <Text value={c} />
                      </li>
                    ))}
                  </ul>
                  {cs.contribution.collaborators?.length ? (
                    <p className="contribution__credits">
                      <span className="contribution__credits-label">Credits</span>
                      {cs.contribution.collaborators.map((p, i) => (
                        <span key={i} className="contribution__credit">
                          <Text value={p.name} />, <Text value={p.role} />
                        </span>
                      ))}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </CaseBlock>

          <CaseBlock n="06" title="Approach & process">
            <ol className="process">
              {cs.process.map((step, i) => (
                <li key={i} className="process__step">
                  <span className="process__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Text value={step.title} as="h4" className="process__title" />
                  <Text value={step.body} as="p" />
                </li>
              ))}
            </ol>
          </CaseBlock>

          <CaseBlock n="07" title="Execution">
            <Text value={cs.execution} as="p" block />
          </CaseBlock>

          {images.length > 0 ? (
            <div className="case__gallery">
              {images.map((m, i) =>
                m.kind === "image" ? (
                  <figure key={i}>
                    <Media image={m} ratio={i === 0 && images.length % 2 === 1 ? "16 / 9" : "4 / 3"} emptyLabel="Supporting image" />
                    <MediaCaption caption={m.caption} index={`Fig. ${i + 1}`} />
                  </figure>
                ) : null,
              )}
            </div>
          ) : null}

          {videos.map((v, i) =>
            v.kind === "video" ? (
              <figure key={i} className="case__video">
                {v.src ? (
                  <video controls preload="metadata" poster={v.poster} className="case__video-el">
                    <source src={v.src} />
                  </video>
                ) : (
                  <div className="media media--empty" style={{ aspectRatio: "16 / 9" }}>
                    <div className="media__empty" role="img" aria-label="Video, to be provided">
                      <span className="media__empty-tag">To be provided</span>
                      <span className="media__empty-label">Video</span>
                    </div>
                  </div>
                )}
                <MediaCaption caption={v.caption ?? v.title} />
              </figure>
            ) : null,
          )}

          <CaseBlock n="08" title="Outcomes">
            {cs.outcomes.length > 0 ? (
              <ul className="outcomes">
                {cs.outcomes.map((o, i) => (
                  <li key={i} className="outcome">
                    <Text value={o.value} as="p" className="outcome__value" />
                    <Text value={o.label} as="p" className="outcome__label" />
                    {o.source ? (
                      <p className="outcome__source">
                        Source: <Text value={o.source} />
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="case__note">Figures are shown only when they have been verified.</p>
            {cs.reflection ? <Text value={cs.reflection} as="p" block /> : null}
          </CaseBlock>
        </div>
      </div>

      <footer className="container case__footer">
        <Link href="/work" className="case__back">
          <span aria-hidden="true">←</span> All work
        </Link>
        {next && next.slug !== project.slug ? (
          <Link href={`/work/${next.slug}`} className="case__next">
            <span className="case__next-label">Next project</span>
            <span className="case__next-title">
              <Text value={next.title} /> <span aria-hidden="true">→</span>
            </span>
          </Link>
        ) : null}
      </footer>
    </article>
  );
}

function CaseBlock({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  const id = `case-${n}`;
  return (
    <section className="case-block" aria-labelledby={id} data-reveal>
      <h2 id={id} className="case-block__title">
        <span className="case-block__num">{n}</span>
        {title}
      </h2>
      <div className="case-block__body">{children}</div>
    </section>
  );
}
