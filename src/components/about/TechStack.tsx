"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const CATEGORIES = ["All", "Frontend", "Backend", "Ecommerce", "Tooling"] as const;
type Category = (typeof CATEGORIES)[number];

type TechItem = {
  name: string;
  category: Exclude<Category, "All">;
  highlight?: boolean;
};

const TECH: TechItem[] = [
  { name: "React", category: "Frontend", highlight: true },
  { name: "Next.js", category: "Frontend", highlight: true },
  { name: "TypeScript", category: "Frontend", highlight: true },
  { name: "Tailwind CSS", category: "Frontend", highlight: true },
  { name: "Framer Motion", category: "Frontend" },
  { name: "GSAP", category: "Frontend" },
  { name: "Radix UI", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },
  { name: "Node.js", category: "Backend", highlight: true },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Prisma ORM", category: "Backend" },
  { name: "tRPC", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Auth.js", category: "Backend" },
  { name: "Edge Functions", category: "Backend" },
  { name: "WordPress", category: "Ecommerce", highlight: true },
  { name: "Elementor", category: "Ecommerce", highlight: true },
  { name: "WooCommerce", category: "Ecommerce" },
  { name: "Shopify", category: "Ecommerce" },
  { name: "Stripe", category: "Ecommerce" },
  { name: "Age Verification", category: "Ecommerce" },
  { name: "Cannabis Compliance", category: "Ecommerce" },
  { name: "Vercel", category: "Tooling", highlight: true },
  { name: "Git / GitHub", category: "Tooling" },
  { name: "Figma", category: "Tooling" },
  { name: "Storybook", category: "Tooling" },
  { name: "ESLint + Prettier", category: "Tooling" },
];

export function TechStack() {
  const [active, setActive] = useState<Category>("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered = active === "All" ? TECH : TECH.filter((t) => t.category === active);

  return (
    <div className="space-y-5">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter technologies by category"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout={!prefersReducedMotion}
        className="flex flex-wrap gap-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((tech) => (
            <motion.span
              key={tech.name}
              layout={!prefersReducedMotion}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium",
                tech.highlight
                  ? "border-primary/30 bg-primary/10 text-primary dark:border-primary/25 dark:bg-primary/12"
                  : "border-border bg-card text-foreground/80"
              )}
            >
              {tech.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
