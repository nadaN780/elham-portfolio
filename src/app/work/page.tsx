import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Spark } from "@/components/ui/Spark";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies by Elham.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  return (
    <div className="page">
      <div className="container">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Work</li>
          </ol>
        </nav>
        <header className="page__header">
          <p className="eyebrow">
            <Spark size={16} />
            <span>The form</span>
          </p>
          <h1 className="page__title">All work</h1>
        </header>

        {projects.length > 0 ? (
          <ol className="work-grid">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <ProjectCard project={p} index={i + 1} headingLevel="h2" />
              </li>
            ))}
          </ol>
        ) : (
          <p className="empty-state">Projects will appear here soon.</p>
        )}
      </div>
    </div>
  );
}
