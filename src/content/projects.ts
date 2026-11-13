import { pending, type Content, type ContentImage, type ContentLink } from "@/lib/content";

/**
 * Projects and their case studies.
 *
 * Each project gets a card on the home page (if `featured`), a card on /work,
 * and a full case-study page at /work/[slug].
 *
 * Entries with `placeholder: true` are structural previews: they are labelled
 * on the page, marked noindex, and left out of the sitemap. Replace them with real projects.
 */

export type Contribution = {
  /** What Elham did herself. */
  individual: Content[];
  /** What was done with or by others; credit collaborators here. */
  collaborative?: Content[];
  collaborators?: { name: Content; role: Content }[];
};

export type Outcome = {
  /** e.g. "+38%" or "12 cities". Only include verified figures. */
  value: Content;
  label: Content;
  /** Where the figure comes from (report, client, analytics). Required for numbers. */
  source?: Content;
};

export type MediaItem =
  | ({ kind: "image" } & ContentImage)
  | { kind: "video"; src?: string; poster?: string; caption?: Content; title: Content };

export type Project = {
  slug: string;
  placeholder?: boolean;
  featured?: boolean;
  title: Content;
  category: Content;
  year?: Content;
  summary: Content;
  cover: ContentImage;
  caseStudy: {
    overview: Content;
    context: Content;
    challenge: Content;
    objectives: Content[];
    role: Content;
    contribution: Contribution;
    process: { title: Content; body: Content }[];
    execution: Content;
    deliverables: Content[];
    outcomes: Outcome[];
    /** Qualitative results, if numbers are not available or not verified. */
    reflection?: Content;
    media: MediaItem[];
    links: ContentLink[];
  };
};

function placeholderProject(slug: string, n: number): Project {
  return {
    slug,
    placeholder: true,
    featured: true,
    title: pending(`Project ${n} title`),
    category: pending("Category"),
    year: pending("Year"),
    summary: pending("Short description", "One or two sentences about what this project is"),
    cover: { alt: pending("Cover image alt text"), caption: pending("Cover caption", "Optional") },
    caseStudy: {
      overview: pending("Project overview", "2–3 sentences: what it is and why it matters"),
      context: pending("Background & context", "Who it was for, when, under what circumstances"),
      challenge: pending("The challenge", "The core problem to solve"),
      objectives: [pending("Objective"), pending("Objective"), pending("Objective")],
      role: pending("Her role", "Her title on the project and her responsibilities"),
      contribution: {
        individual: [pending("What Elham did herself"), pending("What Elham did herself")],
        collaborative: [pending("What was done together with the team")],
        collaborators: [{ name: pending("Collaborator name"), role: pending("Their role") }],
      },
      process: [
        { title: pending("Step title"), body: pending("What happened in this step") },
        { title: pending("Step title"), body: pending("What happened in this step") },
        { title: pending("Step title"), body: pending("What happened in this step") },
      ],
      execution: pending("Execution", "How the work was carried out and delivered"),
      deliverables: [pending("Deliverable"), pending("Deliverable"), pending("Deliverable")],
      outcomes: [
        { value: pending("Figure"), label: pending("What it measures"), source: pending("Source of the figure") },
        { value: pending("Figure"), label: pending("What it measures"), source: pending("Source of the figure") },
      ],
      reflection: pending("Reflection or qualitative result", "Optional"),
      media: [
        { kind: "image", alt: pending("Supporting image alt text"), caption: pending("Image caption") },
        { kind: "image", alt: pending("Supporting image alt text"), caption: pending("Image caption") },
        { kind: "video", title: pending("Video title"), caption: pending("Video caption", "Optional") },
      ],
      links: [{ label: "View the live project", href: pending("External link URL") }],
    },
  };
}

export const projects: Project[] = [
  placeholderProject("project-one", 1),
  placeholderProject("project-two", 2),
  placeholderProject("project-three", 3),
];
