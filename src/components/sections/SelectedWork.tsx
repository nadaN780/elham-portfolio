import { sections } from "@/content/home";
import { getFeaturedProjects, projects } from "@/lib/projects";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/work/ProjectCard";

export function SelectedWork() {
  const s = sections.work;
  const featured = getFeaturedProjects();
  if (featured.length === 0) return null;

  return (
    <section id="work" className="section section--surface" aria-labelledby="work-title">
      <div className="container">
        <SectionHeader id="work" number={s.number} eyebrow={s.eyebrow} title={s.title} lede={s.lede} />

        <ol className="work-list">
          {featured.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard project={project} index={i + 1} layout={i === 0 ? "feature" : "standard"} />
            </li>
          ))}
        </ol>

        {projects.length > featured.length ? (
          <div className="work-list__more">
            <Button href="/work" variant="secondary">
              View all work
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
