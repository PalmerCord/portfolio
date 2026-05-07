import { ProjectsGridSkeleton } from "@/components/projects/ProjectsGridSkeleton";

export default function ProjectsLoading() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-2">
          <div aria-hidden="true" className="bg-muted h-10 w-40 animate-pulse rounded" />
          <div aria-hidden="true" className="bg-muted h-4 w-80 animate-pulse rounded" />
        </div>
        <div aria-hidden="true" className="bg-muted h-8 w-32 animate-pulse rounded" />
      </div>

      <div className="space-y-6">
        <div aria-hidden="true" className="space-y-4">
          <div className="space-y-2">
            <div className="bg-muted h-4 w-16 animate-pulse rounded" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={`industry-${index}`} className="bg-muted h-9 w-20 animate-pulse rounded-md" />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-muted h-4 w-20 animate-pulse rounded" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={`tech-${index}`} className="bg-muted h-9 w-24 animate-pulse rounded-md" />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-muted h-4 w-10 animate-pulse rounded" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={`year-${index}`} className="bg-muted h-9 w-16 animate-pulse rounded-md" />
              ))}
            </div>
          </div>

          <div className="bg-muted h-4 w-40 animate-pulse rounded" />
        </div>

        <ProjectsGridSkeleton count={6} />
      </div>
    </section>
  );
}
