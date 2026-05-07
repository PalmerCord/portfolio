"use client";

import type { Project } from "@/types/project";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  onOpen?: (slug: string, trigger: HTMLButtonElement) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const visibleTech = project.tech.slice(0, 3);
  const hiddenTechCount = Math.max(project.tech.length - visibleTech.length, 0);
  const primaryIndustry = project.industry[0] ?? "project";

  function handleOpen(event: React.MouseEvent<HTMLButtonElement>) {
    onOpen?.(project.slug, event.currentTarget);
  }

  return (
    <motion.article
      className="group h-full"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
    >
      <button
        type="button"
        onClick={handleOpen}
        className="flex h-full min-h-[16.75rem] w-full flex-col overflow-hidden rounded-[1.45rem] border border-slate-200/80 bg-white/90 text-left shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur transition-all duration-300 hover:border-cyan-500/35 hover:shadow-[0_24px_56px_rgba(15,23,42,0.16)] focus-visible:ring-2 focus-visible:ring-cyan-500/55 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(10,16,30,0.96)_0%,rgba(13,20,38,0.98)_100%)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.34)] dark:hover:border-cyan-300/24 dark:hover:shadow-[0_24px_56px_rgba(0,0,0,0.44)] dark:focus-visible:ring-cyan-300/70 dark:focus-visible:ring-offset-slate-950"
      >
        <div className="relative isolate aspect-[16/8.5] w-full overflow-hidden border-b border-slate-200/80 bg-slate-100 dark:border-white/10 dark:bg-slate-950">
          <div className="absolute -inset-px h-[calc(100%+2px)] w-[calc(100%+2px)] transform-gpu transition-transform duration-700 ease-out [backface-visibility:hidden] group-hover:scale-110">
            <Image
              src={project.screenshot}
              alt={`${project.title} website screenshot for ${primaryIndustry} industry`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-white/10 dark:from-slate-950 dark:via-slate-950/45 dark:to-slate-950/[0.18]" />
          </div>
          <span className="absolute top-3 left-3 rounded-full border border-cyan-600/18 bg-white/88 px-2.5 py-1 text-[0.7rem] font-medium text-slate-800 capitalize shadow-[0_8px_24px_rgba(15,23,42,0.16)] backdrop-blur dark:border-cyan-300/20 dark:bg-slate-950/88 dark:text-slate-100 dark:shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
            {primaryIndustry}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <h3 className="line-clamp-2 min-h-[3rem] text-[1.05rem] font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            {project.title}
          </h3>

          <div className="mt-auto flex flex-wrap items-center gap-2">
            {visibleTech.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cyan-600/20 bg-cyan-50 px-2.5 py-1 text-[0.72rem] font-medium text-slate-700 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-slate-200"
              >
                {technology}
              </span>
            ))}
            {hiddenTechCount > 0 && (
              <span className="rounded-full border border-violet-500/20 bg-violet-50 px-2.5 py-1 text-[0.72rem] font-medium text-slate-700 dark:border-violet-300/20 dark:bg-violet-400/10 dark:text-slate-300">
                +{hiddenTechCount}
              </span>
            )}
          </div>
        </div>
      </button>
    </motion.article>
  );
}
