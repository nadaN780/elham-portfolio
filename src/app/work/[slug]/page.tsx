import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { plain } from "@/lib/content";
import { getAdjacentProjects, getProject, projects } from "@/lib/projects";
import { CaseStudy } from "@/components/work/CaseStudy";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = plain(project.title, "Case study template");
  return {
    title,
    description: plain(project.summary) || `A case study by Elham.`,
    alternates: { canonical: `/work/${project.slug}` },
    // Placeholder case studies are structural previews: keep them out of search.
    ...(project.placeholder ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { next } = getAdjacentProjects(slug);
  return <CaseStudy project={project} next={next} />;
}
