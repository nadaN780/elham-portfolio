import { pending, type Content } from "@/lib/content";

/**
 * Experience & journey. Groups render in this order; empty groups are hidden.
 * Dates are free text so they can read "2021 — Present", "Spring 2019", etc.
 */

export type JourneyEntry = {
  title: Content;
  organization: Content;
  dates: Content;
  description?: Content;
  href?: Content;
};

export type JourneyGroup = {
  id: "experience" | "milestones" | "education" | "certifications" | "achievements";
  heading: string;
  entries: JourneyEntry[];
};

const entry = (kind: string): JourneyEntry => ({
  title: pending(`${kind} title`),
  organization: pending("Organization"),
  dates: pending("Dates"),
  description: pending("One or two lines", "Optional"),
});

export const journey: JourneyGroup[] = [
  { id: "experience", heading: "Experience", entries: [entry("Role"), entry("Role")] },
  { id: "milestones", heading: "Milestones", entries: [entry("Milestone")] },
  { id: "education", heading: "Education", entries: [entry("Degree or programme")] },
  { id: "certifications", heading: "Certifications", entries: [entry("Certification")] },
  { id: "achievements", heading: "Achievements", entries: [entry("Achievement")] },
];

/** Optional downloadable CV, e.g. "/elham-cv.pdf" placed in /public. */
export const cv: Content = pending("CV (PDF)", "Optional");
