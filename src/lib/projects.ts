import { projects, type Project } from "@/content/projects";

export { projects };

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Neighbours for "next project" navigation at the end of a case study. */
export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1 || projects.length < 2) return { next: undefined };
  return { next: projects[(i + 1) % projects.length] };
}
