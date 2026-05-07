import { FilterableProjectsGrid } from "@/components/projects/FilterableProjectsGrid";
import { StatsCounter } from "@/components/projects/StatsCounter";
import { getProjects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Projects | Cord Palmer",
  description: "Browse Cord Palmer's portfolio projects across ecommerce, cannabis, and web product work.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
          <p className="text-muted-foreground text-sm">
            Explore the full portfolio archive.
          </p>
        </div>
        <StatsCounter value={150} suffix="+" label="Sites Built" durationMs={2000} />
      </div>

      <FilterableProjectsGrid projects={projects} limit={projects.length} />
    </section>
  );
}
