type ProjectsGridSkeletonProps = {
  count?: number;
};

function ProjectCardSkeleton() {
  return (
    <article aria-hidden="true" className="group">
      <div className="border-border bg-card block overflow-hidden rounded-2xl border">
        <div className="border-border/70 relative aspect-[16/10] w-full overflow-hidden border-b">
          <div className="bg-muted h-full w-full animate-pulse" />
          <div className="bg-background/90 absolute top-3 left-3 h-6 w-20 animate-pulse rounded-full" />
        </div>

        <div className="space-y-4 p-4">
          <div className="bg-muted h-5 w-3/4 animate-pulse rounded" />

          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-muted h-6 w-16 animate-pulse rounded-md" />
            <div className="bg-muted h-6 w-20 animate-pulse rounded-md" />
            <div className="bg-muted h-6 w-14 animate-pulse rounded-md" />
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectsGridSkeleton({ count = 6 }: ProjectsGridSkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6"
    >
      {Array.from({ length: count }, (_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
}
