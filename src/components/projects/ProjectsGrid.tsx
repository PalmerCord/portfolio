import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

type ProjectsGridProps = {
  projects: Project[];
  limit?: number;
  desktopLimit?: number;
  onProjectSelect?: (slug: string, trigger: HTMLButtonElement) => void;
};

export function ProjectsGrid({
  projects,
  limit = 12,
  desktopLimit,
  onProjectSelect,
}: ProjectsGridProps) {
  const maxVisibleProjects = Math.max(limit, desktopLimit ?? limit);
  const visibleProjects = projects.slice(0, maxVisibleProjects);

  return (
    <div className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {visibleProjects.map((project, index) => (
        <div
          key={project.slug}
          className={desktopLimit && index >= limit ? "hidden xl:block" : undefined}
        >
          <ProjectCard project={project} onOpen={onProjectSelect} />
        </div>
      ))}
    </div>
  );
}
