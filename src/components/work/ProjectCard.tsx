import Link from "next/link";
import type { Project } from "@/content/projects";
import { Media } from "@/components/ui/Media";
import { Text } from "@/components/ui/Text";

type ProjectCardProps = {
  project: Project;
  index: number;
  layout?: "feature" | "standard";
  headingLevel?: "h2" | "h3";
};

/**
 * Project card. The whole card is one link (to the case study) with a single accessible name.
 */
export function ProjectCard({ project, index, layout = "standard", headingLevel = "h3" }: ProjectCardProps) {
  const Heading = headingLevel;
  const num = String(index).padStart(2, "0");

  return (
    <article className={`project-card project-card--${layout}`} data-reveal>
      <div className="project-card__media">
        <Media
          image={project.cover}
          ratio={layout === "feature" ? "16 / 10" : "4 / 3"}
          sizes={layout === "feature" ? "(min-width: 960px) 60vw, 100vw" : "(min-width: 960px) 45vw, 100vw"}
          emptyLabel="Visual preview"
        />
      </div>
      <div className="project-card__body">
        <p className="project-card__meta">
          <span className="project-card__num">{num}</span>
          <Text value={project.category} />
          {project.year ? (
            <>
              <span aria-hidden="true">·</span>
              <Text value={project.year} />
            </>
          ) : null}
        </p>
        <Heading className="project-card__title">
          <Link href={`/work/${project.slug}`} className="project-card__link">
            <Text value={project.title} />
          </Link>
        </Heading>
        <Text value={project.summary} as="p" className="project-card__summary" />
        <p className="project-card__cta" aria-hidden="true">
          {project.placeholder ? "View case-study template" : "Read the case study"} <span className="btn__arrow">→</span>
        </p>
      </div>
    </article>
  );
}
