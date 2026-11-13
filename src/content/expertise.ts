import { pending, type Content } from "@/lib/content";

/**
 * Capability groups. Rename, add or remove freely: the layout adapts to 1–6 groups.
 * Do not list a skill until Elham confirms it.
 */

export type CapabilityGroup = {
  name: Content;
  description: Content;
  skills: Content[];
};

export const capabilities: CapabilityGroup[] = [
  {
    name: pending("Capability group 1", "e.g. a discipline or area of practice"),
    description: pending("One-line description"),
    skills: [pending("Skill or tool"), pending("Skill or tool"), pending("Skill or tool")],
  },
  {
    name: pending("Capability group 2"),
    description: pending("One-line description"),
    skills: [pending("Skill or tool"), pending("Skill or tool")],
  },
  {
    name: pending("Capability group 3"),
    description: pending("One-line description"),
    skills: [pending("Skill or tool"), pending("Skill or tool")],
  },
];
