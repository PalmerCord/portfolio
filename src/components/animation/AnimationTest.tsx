"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeDollarSign,
  Boxes,
  Check,
  ChevronRight,
  Gauge,
  Layers3,
  MousePointer2,
  PackageCheck,
  Paintbrush,
  Play,
  Plus,
  Sparkles,
  Trash2,
  Wand2,
} from "lucide-react";
import { useRef, useState } from "react";

const cardBase =
  "group relative isolate min-h-[21rem] overflow-hidden rounded-[1.25rem] border border-border/70 bg-card/82 p-5 text-left shadow-[0_22px_60px_rgba(15,23,42,0.09)] backdrop-blur transition-colors dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_22px_70px_rgba(0,0,0,0.32)] lg:col-span-2";

function TileHeader({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="relative z-10 flex items-start justify-between gap-4">
      <div>
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
        <h2 className="text-foreground mt-2 text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-cyan-500/20 bg-cyan-400/10 text-cyan-700 dark:border-cyan-300/18 dark:text-cyan-100">
        <Icon className="size-5" />
      </div>
    </div>
  );
}

function GradientWash() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.18),transparent_38%),radial-gradient(circle_at_86%_72%,rgba(14,165,233,0.16),transparent_42%),linear-gradient(140deg,rgba(255,255,255,0.6),transparent_48%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.2),transparent_40%),radial-gradient(circle_at_86%_72%,rgba(59,130,246,0.16),transparent_42%),linear-gradient(140deg,rgba(15,23,42,0.4),transparent_48%)]"
    />
  );
}

function ComponentInsightPanel({
  summary,
  useCases,
  deliverables,
  seoAngle,
}: {
  summary: string;
  useCases: string[];
  deliverables: string[];
  seoAngle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 mt-6">
      <button
        type="button"
        aria-expanded={isOpen}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 text-sm font-semibold transition-colors hover:border-cyan-500/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "Hide details" : "Learn more"}
        <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.22 }}>
          <ChevronRight className="size-4" />
        </motion.span>
      </button>

      <motion.div
        aria-hidden={!isOpen}
        className="overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{
          height: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: isOpen ? 0.24 : 0.16, ease: "easeOut" },
        }}
      >
        <div className="grid gap-4 pt-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.08fr)]">
          <section className="rounded-2xl border border-border/70 bg-background/50 p-4">
            <h3 className="text-sm font-semibold">Client value</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">{summary}</p>
          </section>

          <section className="rounded-2xl border border-border/70 bg-background/50 p-4">
            <h3 className="text-sm font-semibold">Helpful use cases</h3>
            <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-6">
              {useCases.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 size-4 shrink-0 text-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-border/70 bg-background/50 p-4">
            <h3 className="text-sm font-semibold">Build-ready details</h3>
            <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-6">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <ArrowRight className="mt-1 size-4 shrink-0 text-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-cyan-500/20 bg-cyan-500/8 p-4 xl:col-span-3">
            <h3 className="text-sm font-semibold">SEO and conversion angle</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">{seoAngle}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

function MagneticCtaTile() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 24 });
  const buttonX = useTransform(smoothX, [0, 100], [-16, 16]);
  const buttonY = useTransform(smoothY, [0, 100], [-10, 10]);
  const spotlight = useMotionTemplate`radial-gradient(18rem circle at ${smoothX}% ${smoothY}%, rgba(6, 182, 212, 0.24), transparent 64%)`;

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  function handlePointerLeave() {
    pointerX.set(50);
    pointerY.set(50);
  }

  return (
    <motion.article
      className={cardBase}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <GradientWash />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ backgroundImage: spotlight }}
      />
      <TileHeader icon={MousePointer2} eyebrow="Conversion" title="Magnetic call to action" />

      <div className="relative z-10 mt-14 flex items-center justify-center">
        <motion.button
          type="button"
          className="inline-flex min-h-14 items-center gap-3 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.22)] transition-colors hover:bg-cyan-700 dark:bg-cyan-300 dark:text-slate-950"
          style={prefersReducedMotion ? undefined : { x: buttonX, y: buttonY }}
          whileTap={{ scale: 0.96 }}
        >
          Start a project
          <ArrowRight className="size-4" />
        </motion.button>
      </div>

      <div className="relative z-10 mt-12 grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
        {["Landing", "Checkout", "Booking"].map((item) => (
          <span key={item} className="rounded-full border border-border/70 bg-background/70 px-2 py-2">
            {item}
          </span>
        ))}
      </div>

      <ComponentInsightPanel
        summary="A magnetic call to action turns the primary button into a focused conversion moment. The interaction can make a service inquiry, ecommerce checkout, booking request, or quote form feel more intentional without adding another pop-up or distracting animation."
        useCases={["Hero section CTAs", "Service quote forms", "Checkout and booking prompts"]}
        deliverables={["Pointer-aware button motion", "Reduced-motion fallback", "Analytics-ready CTA events"]}
        seoAngle="The supporting copy around the component can target conversion-focused web design, landing page optimization, ecommerce checkout design, and high-converting website CTA searches while the visible button gives visitors a clear next step."
      />
    </motion.article>
  );
}

function TiltProductTile() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateX = useTransform(pointerY, [0, 100], [8, -8]);
  const rotateY = useTransform(pointerX, [0, 100], [-10, 10]);
  const shine = useMotionTemplate`radial-gradient(14rem circle at ${pointerX}% ${pointerY}%, rgba(255,255,255,0.5), transparent 62%)`;

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  function handlePointerLeave() {
    pointerX.set(50);
    pointerY.set(50);
  }

  return (
    <article className={cardBase} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <GradientWash />
      <TileHeader icon={PackageCheck} eyebrow="Product" title="Dimensional product surface" />

      <div className="relative z-10 mt-10 flex justify-center [perspective:900px]">
        <motion.div
          className="relative h-44 w-64 overflow-hidden rounded-2xl border border-white/60 bg-[linear-gradient(145deg,#ffffff,#dff8f4_42%,#dbeafe)] p-4 shadow-[0_28px_70px_rgba(8,47,73,0.18)] dark:border-white/10 dark:bg-[linear-gradient(145deg,#0f172a,#12333c_48%,#172554)]"
          style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <motion.div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: shine }} />
          <div className="relative z-10 flex items-center justify-between">
            <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white dark:bg-cyan-300 dark:text-slate-950">
              Pro
            </span>
            <Sparkles className="size-5 text-cyan-700 dark:text-cyan-100" />
          </div>
          <div className="relative z-10 mt-8 h-14 rounded-xl bg-white/74 shadow-inner dark:bg-white/10" />
          <div className="relative z-10 mt-4 grid grid-cols-3 gap-2">
            {[70, 52, 86].map((height) => (
              <div key={height} className="rounded-full bg-cyan-800/30 dark:bg-cyan-200/30" style={{ height: `${height}%`, minHeight: "1.9rem" }} />
            ))}
          </div>
        </motion.div>
      </div>

      <ComponentInsightPanel
        summary="A dimensional product surface gives featured products, service packages, memberships, or portfolio work a premium tactile feel. It is useful when clients need users to inspect value quickly instead of scrolling through flat cards."
        useCases={["Featured product cards", "Service package comparisons", "Portfolio case study previews"]}
        deliverables={["Pointer-based tilt system", "Responsive product surface", "Accessible static fallback"]}
        seoAngle="This section can support searches around ecommerce web design, product card UX, interactive product pages, service package design, and custom React components for premium websites."
      />
    </article>
  );
}

function StackRevealTile() {
  const [active, setActive] = useState<number | null>(1);
  const items = [
    {
      label: "Discover",
      value: "Search strategy audit",
      color: "bg-teal-500",
      description:
        "Map high-intent searches, local competitors, and technical SEO gaps so the site can attract qualified leads before design starts.",
      tags: ["Technical SEO", "Local search", "Content gaps"],
    },
    {
      label: "Design",
      value: "Conversion-focused web design",
      color: "bg-sky-500",
      description:
        "Shape landing pages, ecommerce paths, and service sections around the keywords and calls to action customers use when they are ready to buy.",
      tags: ["Landing pages", "Ecommerce UX", "Lead generation"],
    },
    {
      label: "Launch",
      value: "Performance and growth rollout",
      color: "bg-violet-500",
      description:
        "Ship a fast, accessible, mobile-friendly website with metadata, analytics events, and reusable content blocks ready for ongoing SEO campaigns.",
      tags: ["Core Web Vitals", "Schema-ready copy", "Analytics"],
    },
  ];

  return (
    <article className={cardBase}>
      <GradientWash />
      <TileHeader icon={Layers3} eyebrow="Content" title="Expandable service stack" />

      <div className="relative z-10 mt-8 space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            layout
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors",
              active === index
                ? "border-cyan-500/30 bg-background/90 shadow-[0_16px_42px_rgba(8,47,73,0.12)]"
                : "border-border/70 bg-background/48"
            )}
            transition={{ layout: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } }}
          >
            <motion.button
              layout="position"
              type="button"
              className="flex min-h-16 w-full items-center justify-between gap-4 px-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-expanded={active === index}
              onClick={() => setActive((current) => (current === index ? null : index))}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>
                <span className="block text-sm font-semibold">{item.label}</span>
                <span className="text-muted-foreground mt-1 block text-sm">{item.value}</span>
              </span>
              <span className={cn("grid size-9 shrink-0 place-items-center rounded-full text-white", item.color)}>
                <motion.span animate={{ rotate: active === index ? 90 : 0 }}>
                  <ChevronRight className="size-4" />
                </motion.span>
              </span>
            </motion.button>

            <AnimatePresence initial={false}>
              {active === index && (
                <motion.div
                  layout
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.44, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.22, ease: "easeOut" },
                  }}
                >
                  <div className="px-4 pb-4">
                    <motion.p
                      className="text-muted-foreground border-t border-border/60 pt-4 text-sm leading-6"
                      initial={{ y: -8 }}
                      animate={{ y: 0 }}
                      exit={{ y: -6 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.description}
                    </motion.p>
                    <motion.div
                      className="mt-4 flex flex-wrap gap-2"
                      initial={{ y: -6 }}
                      animate={{ y: 0 }}
                      exit={{ y: -4 }}
                      transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-900 dark:text-cyan-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <ComponentInsightPanel
        summary="An expandable service stack lets a client explain process, pricing tiers, technical capabilities, or campaign phases without overwhelming the page. It keeps the interface compact while still exposing keyword-rich content when sections expand."
        useCases={["SEO service pages", "Agency process sections", "Technical capability breakdowns"]}
        deliverables={["Accordion content model", "Accessible expand/collapse states", "Schema-ready service copy"]}
        seoAngle="Expandable sections can carry crawlable language for web design services, technical SEO, ecommerce development, local SEO, landing page design, and ongoing growth campaigns while giving visitors a cleaner reading path."
      />
    </article>
  );
}

function PipelineTile() {
  const stages = ["Lead", "Quote", "Build", "Ship"] as const;
  type Stage = (typeof stages)[number];
  type BoardItem = { id: number; title: string };

  const [activeStage, setActiveStage] = useState<Stage>("Lead");
  const [nextItemId, setNextItemId] = useState(13);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [boards, setBoards] = useState<Record<Stage, BoardItem[]>>({
    Lead: [
      { id: 1, title: "Discovery Call" },
      { id: 2, title: "SEO Audit" },
      { id: 3, title: "Cannabis Menu" },
    ],
    Quote: [
      { id: 4, title: "Retainer Scope" },
      { id: 5, title: "Landing Page" },
      { id: 6, title: "Checkout Flow" },
    ],
    Build: [
      { id: 7, title: "Campaign" },
      { id: 8, title: "Menu" },
      { id: 9, title: "POS Sync" },
    ],
    Ship: [
      { id: 10, title: "QA Pass" },
      { id: 11, title: "Analytics" },
      { id: 12, title: "Launch Notes" },
    ],
  });

  function handleAddItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = newItemTitle.trim();

    if (!title) {
      return;
    }

    const itemId = nextItemId;
    setBoards((current) => ({
      ...current,
      [activeStage]: [...current[activeStage], { id: itemId, title }],
    }));
    setNextItemId((current) => current + 1);
    setNewItemTitle("");
  }

  function handleDeleteItem(itemId: number) {
    setBoards((current) => ({
      ...current,
      [activeStage]: current[activeStage].filter((item) => item.id !== itemId),
    }));
  }

  return (
    <article className={cardBase}>
      <GradientWash />
      <TileHeader icon={Boxes} eyebrow="Workflow" title="Draggable pipeline pieces" />

      <div className="relative z-10 mt-8 grid grid-cols-4 gap-2">
        {stages.map((stage) => (
          <button
            key={stage}
            type="button"
            className={cn(
              "relative min-h-11 rounded-xl border px-2 text-center text-xs font-semibold transition-colors",
              activeStage === stage
                ? "border-cyan-500/30 bg-cyan-500/14 text-foreground"
                : "border-border/70 bg-background/60 text-muted-foreground hover:text-foreground"
            )}
            aria-pressed={activeStage === stage}
            onClick={() => setActiveStage(stage)}
          >
            {activeStage === stage && (
              <motion.span
                layoutId="pipeline-active-stage"
                className="absolute inset-0 rounded-xl bg-cyan-500/12"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">{stage}</span>
          </button>
        ))}
      </div>

      <div className="relative z-10 mt-5 overflow-hidden rounded-2xl border border-border/70 bg-background/50 p-3">
        <form onSubmit={handleAddItem} className="flex gap-2">
          <input
            aria-label={`Add item to ${activeStage}`}
            className="min-h-10 min-w-0 flex-1 rounded-xl border border-border/70 bg-background/78 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cyan-500/50"
            placeholder={`${activeStage} item`}
            value={newItemTitle}
            onChange={(event) => setNewItemTitle(event.target.value)}
          />
          <button
            type="submit"
            className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan-600 text-white shadow-[0_12px_28px_rgba(8,145,178,0.22)] transition-colors hover:bg-cyan-700 dark:bg-cyan-300 dark:text-slate-950"
            aria-label={`Add item to ${activeStage}`}
          >
            <Plus className="size-4" />
          </button>
        </form>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            className="mt-4 grid min-h-36 grid-cols-1 content-start gap-2 sm:grid-cols-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {boards[activeStage].map((item) => (
              <motion.div
                key={item.id}
                layout
                drag
                dragMomentum={false}
                whileDrag={{ scale: 1.05, zIndex: 20 }}
                className="flex min-h-12 cursor-grab items-center justify-between gap-2 rounded-2xl border border-cyan-500/20 bg-white/86 px-3 py-2 text-sm font-semibold shadow-[0_12px_34px_rgba(15,23,42,0.12)] active:cursor-grabbing dark:bg-slate-900/90"
              >
                <span className="truncate">{item.title}</span>
                <button
                  type="button"
                  className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-red-500/10 hover:text-red-500"
                  aria-label={`Delete ${item.title}`}
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <Trash2 className="size-4" />
                </button>
              </motion.div>
            ))}

            {boards[activeStage].length === 0 && (
              <motion.div
                className="col-span-full grid min-h-24 place-items-center rounded-2xl border border-dashed border-border/80 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {activeStage} board is clear
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <ComponentInsightPanel
        summary="A draggable pipeline can turn a static workflow into a working planning tool. Clients can use this pattern for lead stages, quote builders, production boards, content calendars, inventory planning, or campaign launch checklists."
        useCases={["CRM-style lead boards", "Project planning dashboards", "Editable launch workflows"]}
        deliverables={["Stage switching", "Add and delete controls", "Drag-friendly task cards"]}
        seoAngle="The copy around this component can reinforce searches for custom dashboards, workflow automation, CRM website tools, lead management boards, and interactive business process components."
      />
    </article>
  );
}

function LiquidTabsTile() {
  const tabs = ["Brand", "Shop", "Data"] as const;
  const [active, setActive] = useState<(typeof tabs)[number]>("Brand");
  const activeIndex = tabs.indexOf(active);

  return (
    <article className={cardBase}>
      <GradientWash />
      <TileHeader icon={Paintbrush} eyebrow="Navigation" title="Liquid segmented control" />

      <div className="relative z-10 mt-10 rounded-2xl border border-border/70 bg-background/62 p-2">
        <div className="relative grid grid-cols-3 overflow-hidden rounded-xl">
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1/3 rounded-xl bg-cyan-300/60 dark:bg-cyan-500/35"
            animate={{ x: `${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              aria-pressed={active === tab}
              className={cn(
                "relative z-10 min-h-11 rounded-xl text-sm font-semibold transition-colors",
                active === tab ? "text-slate-950 dark:text-white" : "text-muted-foreground"
              )}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={active}
        className="relative z-10 mt-8 rounded-2xl border border-border/70 bg-background/64 p-5"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-2xl font-semibold tracking-tight">{active}</p>
        <div className="mt-4 h-2 rounded-full bg-cyan-500/20">
          <motion.div
            className="h-full rounded-full bg-cyan-600 dark:bg-cyan-300"
            initial={{ width: "22%" }}
            animate={{ width: active === "Brand" ? "33.333%" : active === "Shop" ? "66.666%" : "100%" }}
          />
        </div>
      </motion.div>

      <ComponentInsightPanel
        summary="A liquid segmented control is a polished way to move between related content without sending visitors to a new page. It can organize brand stories, product categories, location details, membership benefits, or analytics views."
        useCases={["Product category switches", "Brand/shop/data content groups", "Service comparison controls"]}
        deliverables={["Equal-width tab states", "Animated active indicator", "Keyboard-friendly selection pattern"]}
        seoAngle="Visible tab copy can support searches for ecommerce navigation, product filtering UX, interactive website navigation, service comparison sections, and conversion-focused content organization."
      />
    </article>
  );
}

function BurstTile() {
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [count, setCount] = useState(12);

  function addBurst(event: React.MouseEvent<HTMLButtonElement>) {
    const id = Date.now();
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setBursts((current) => [...current.slice(-3), { id, x, y }]);
    setCount((current) => current + 7);
    window.setTimeout(() => {
      setBursts((current) => current.filter((burst) => burst.id !== id));
    }, 900);
  }

  return (
    <article className={cardBase}>
      <GradientWash />
      <TileHeader icon={BadgeDollarSign} eyebrow="Feedback" title="Reward burst interaction" />

      <div className="relative z-10 mt-10 grid place-items-center">
        <button
          type="button"
          onClick={addBurst}
          className="relative grid size-36 place-items-center rounded-full bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition-[background-color,box-shadow,color,translate,scale,transform] duration-500 ease-in-out will-change-transform hover:-translate-y-1 hover:bg-cyan-800 hover:shadow-[0_28px_80px_rgba(8,145,178,0.34)] active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-600 dark:hover:text-white dark:hover:shadow-[0_28px_90px_rgba(6,182,212,0.35)]"
        >
          <span className="text-4xl font-bold">{count}</span>
          <span className="text-center text-xs font-semibold tracking-[0.16em] uppercase">
            Click the button
          </span>
          <AnimatePresence>
            {bursts.map((burst) => (
              <motion.span key={burst.id} className="pointer-events-none absolute inset-0">
                {Array.from({ length: 10 }, (_, index) => (
                  <motion.span
                    key={index}
                    className="absolute size-2 rounded-full bg-cyan-400"
                    style={{ left: burst.x, top: burst.y }}
                    initial={{ x: -4, y: -4, opacity: 1, scale: 0.4 }}
                    animate={{
                      x: Math.cos((index / 10) * Math.PI * 2) * 78 - 4,
                      y: Math.sin((index / 10) * Math.PI * 2) * 78 - 4,
                      opacity: 0,
                      scale: 1,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  />
                ))}
              </motion.span>
            ))}
          </AnimatePresence>
        </button>
      </div>

      <ComponentInsightPanel
        summary="A reward burst makes a completed action feel satisfying. This pattern works for loyalty points, add-to-cart feedback, referral rewards, form completion, newsletter signups, and account milestones."
        useCases={["Loyalty point feedback", "Cart and checkout confirmations", "Form completion rewards"]}
        deliverables={["Click-origin particle burst", "Hover and press states", "Motion that respects interaction context"]}
        seoAngle="The section can naturally target ecommerce UX, loyalty program interfaces, conversion feedback, animated button interactions, and custom frontend development for higher-engagement websites."
      />
    </article>
  );
}

function ScrubberTile() {
  const [value, setValue] = useState(58);

  return (
    <article className={cardBase}>
      <GradientWash />
      <TileHeader icon={Gauge} eyebrow="Configurator" title="Live visual scrubber" />

      <div className="relative z-10 mt-10 overflow-hidden rounded-2xl border border-border/70 bg-background/64 p-4">
        <div className="relative h-36 rounded-xl bg-[linear-gradient(135deg,#d9f99d,#67e8f9)] dark:bg-[linear-gradient(135deg,#164e63,#4c1d95)]">
          <div
            className="absolute inset-y-0 left-0 rounded-l-xl bg-[linear-gradient(135deg,#0f766e,#0369a1)] dark:bg-[linear-gradient(135deg,#22d3ee,#a78bfa)]"
            style={{ width: `${value}%` }}
          />
          <div
            className="absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]"
            style={{ left: `${value}%` }}
          />
        </div>
        <input
          aria-label="Visual intensity"
          className="mt-5 w-full accent-cyan-700"
          min="12"
          max="88"
          type="range"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </div>

      <ComponentInsightPanel
        summary="A live visual scrubber helps visitors understand customization, intensity, pricing, product options, or before-and-after states by letting them manipulate the result directly."
        useCases={["Product customization", "Pricing and package sliders", "Before-and-after previews"]}
        deliverables={["Accessible range input", "Real-time visual feedback", "Responsive configuration surface"]}
        seoAngle="This copy can support searches around product configurators, interactive pricing calculators, ecommerce customization tools, and conversion-focused website components."
      />
    </article>
  );
}

function GsapTimelineTile() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scopeRef.current) return;

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
      timeline
        .fromTo(".gsap-node", { y: 18, opacity: 0, scale: 0.7 }, { y: 0, opacity: 1, scale: 1, stagger: 0.14, duration: 0.42, ease: "back.out(1.8)" })
        .to(".gsap-line", { scaleX: 1, transformOrigin: "left", duration: 0.75, ease: "power2.out" }, "-=0.25")
        .to(".gsap-node", { boxShadow: "0 0 0 10px rgba(34, 211, 238, 0)", stagger: 0.12, duration: 0.5 }, "-=0.3")
        .to(".gsap-node", { y: -8, stagger: 0.08, duration: 0.25, yoyo: true, repeat: 1 }, "+=0.2");

      return () => timeline.kill();
    },
    { scope: scopeRef }
  );

  return (
    <article className={cardBase}>
      <GradientWash />
      <TileHeader icon={Play} eyebrow="Timeline" title="Sequenced campaign motion" />

      <div ref={scopeRef} className="relative z-10 mt-16 px-4">
        <div className="gsap-line absolute left-8 right-8 top-1/2 h-1 origin-left scale-x-0 rounded-full bg-cyan-500/40" />
        <div className="relative flex items-center justify-between">
          {["Brief", "Build", "Launch", "Learn"].map((step) => (
            <div key={step} className="gsap-node grid size-16 place-items-center rounded-2xl border border-cyan-500/20 bg-background text-center text-xs font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
              {step}
            </div>
          ))}
        </div>
      </div>

      <ComponentInsightPanel
        summary="Sequenced campaign motion is useful when a client needs to explain a multi-step launch, onboarding process, fulfillment path, or marketing workflow in a way that feels alive and easy to follow."
        useCases={["Campaign launch timelines", "Onboarding explainers", "Fulfillment and delivery flows"]}
        deliverables={["GSAP timeline animation", "Looping story sequence", "Performance-conscious motion layer"]}
        seoAngle="This content can target animated website timelines, campaign landing pages, ecommerce launch flows, onboarding UX, and motion design for conversion-focused websites."
      />
    </article>
  );
}

function ChecklistTile() {
  const [complete, setComplete] = useState([true, false, false]);
  const items = ["Fast path", "Motion layer", "Conversion hook"];

  function toggle(index: number) {
    setComplete((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)));
  }

  return (
    <article className={cardBase}>
      <GradientWash />
      <TileHeader icon={Wand2} eyebrow="Onboarding" title="Satisfying checklist states" />

      <div className="relative z-10 mt-8 space-y-3">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() => toggle(index)}
            className="flex min-h-14 w-full items-center gap-3 rounded-2xl border border-border/70 bg-background/64 px-4 text-left"
          >
            <motion.span
              className={cn(
                "grid size-8 shrink-0 place-items-center rounded-full border",
                complete[index]
                  ? "border-cyan-500 bg-cyan-500 text-white"
                  : "border-border bg-background text-muted-foreground"
              )}
              animate={complete[index] ? { scale: [1, 1.18, 1] } : { scale: 1 }}
            >
              {complete[index] && <Check className="size-4" />}
            </motion.span>
            <span className="text-sm font-semibold">{item}</span>
          </button>
        ))}
      </div>

      <ComponentInsightPanel
        summary="Satisfying checklist states help users understand progress and reduce uncertainty. They are useful in onboarding, checkout, quote intake, account setup, application flows, and launch-readiness checklists."
        useCases={["Client onboarding", "Checkout progress", "Setup and launch checklists"]}
        deliverables={["Animated completion state", "Accessible toggle controls", "Reusable task list pattern"]}
        seoAngle="The surrounding copy can support searches for onboarding UX, checkout progress design, interactive forms, launch checklist tools, and user-friendly web application interfaces."
      />
    </article>
  );
}

function DockTile() {
  const actions = [
    {
      label: "Plan",
      icon: Layers3,
      kicker: "Conversion strategy",
      headline: "Plan the right action path before the interface gets built.",
      description:
        "An elastic action dock can guide visitors toward high-intent actions like booking a consultation, comparing services, saving products, or jumping to pricing without crowding the page. It works well for SEO-focused service pages, ecommerce product pages, cannabis dispensary menus, and landing pages that need clear conversion paths.",
      useCases: ["Service page CTAs", "Booking funnels", "Internal link hubs"],
      deliverables: ["CTA hierarchy", "Search-intent map", "Analytics event plan"],
      seoAngle:
        "Crawlable labels, relevant service copy, and descriptive nearby content help search engines understand the page topic while the dock gives users a faster path to action.",
    },
    {
      label: "Build",
      icon: Wand2,
      kicker: "Interactive component design",
      headline: "Build a premium animated web component that still feels practical.",
      description:
        "This type of dock is useful when a site needs compact controls for product filters, account actions, quote builders, shopping tools, service packages, or dashboard shortcuts. The motion can be built with Framer Motion, GSAP, CSS transitions, and accessible React patterns so the component feels custom without sacrificing performance.",
      useCases: ["Product configurators", "Quote builders", "Navigation shortcuts"],
      deliverables: ["Responsive React component", "Keyboard states", "Reusable variants"],
      seoAngle:
        "Strong component copy can target searches around custom web design, interactive website components, ecommerce UX, product configurators, and conversion-focused development.",
    },
    {
      label: "Tune",
      icon: Gauge,
      kicker: "Performance and conversion optimization",
      headline: "Tune the interaction so it supports Core Web Vitals and real conversions.",
      description:
        "A polished dock should feel fast, but it also needs to be measurable. Hover states, active states, reduced-motion support, tap targets, contrast, and event tracking can all be tuned so the component helps visitors move forward instead of becoming a distracting animation.",
      useCases: ["A/B test CTAs", "Mobile action bars", "Performance audits"],
      deliverables: ["Core Web Vitals review", "Reduced-motion support", "Click tracking"],
      seoAngle:
        "Performance, accessibility, and conversion language supports long-tail searches for fast websites, accessible web design, animated ecommerce UX, and conversion rate optimization.",
    },
    {
      label: "Ship",
      icon: PackageCheck,
      kicker: "Launch-ready implementation",
      headline: "Ship the dock with the metadata, tracking, and content around it.",
      description:
        "The component is only one part of the system. A launch-ready version can include internal links, schema-ready service copy, analytics events, CMS-friendly labels, QA-tested responsive states, and content blocks that explain the feature to prospects and search engines.",
      useCases: ["Launch pages", "Service packages", "Post-launch growth"],
      deliverables: ["Metadata checklist", "QA handoff", "Growth backlog"],
      seoAngle:
        "The surrounding copy can reinforce terms like custom website development, interactive web design, ecommerce development, SEO-friendly React components, and high-converting landing pages.",
    },
  ];
  type DockAction = (typeof actions)[number];
  type DockActionLabel = DockAction["label"];
  const [selected, setSelected] = useState<DockActionLabel>("Build");
  const selectedAction = actions.find((action) => action.label === selected) ?? actions[1];

  return (
    <article className={cn(cardBase, "lg:col-span-2")}>
      <GradientWash />
      <TileHeader icon={Sparkles} eyebrow="Utility" title="Elastic action dock" />

      <div className="relative z-10 mt-10 grid gap-6 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <div className="space-y-5">
          <p className="text-muted-foreground max-w-xl text-sm leading-6">
            A compact action dock gives visitors quick access to the next best step while keeping a
            premium page clean. It can become a sticky conversion tool, ecommerce shortcut, product
            configurator control, or service navigation pattern.
          </p>

          <div className="flex items-end justify-center gap-3 rounded-3xl border border-border/70 bg-background/64 px-4 py-6">
            {actions.map(({ label, icon: Icon }) => {
              const isSelected = selected === label;

              return (
                <motion.button
                  key={label}
                  type="button"
                  aria-label={`Show ${label} action dock details`}
                  aria-pressed={isSelected}
                  className={cn(
                    "group relative grid size-14 place-items-center rounded-2xl border transition-colors",
                    isSelected
                      ? "border-cyan-500/30 bg-cyan-500 text-white shadow-[0_18px_44px_rgba(8,145,178,0.24)]"
                      : "border-border/70 bg-card text-muted-foreground hover:border-cyan-500/40 hover:text-foreground"
                  )}
                  onClick={() => setSelected(label)}
                  whileHover={{ y: -10, scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Icon className="size-5" />
                  <span className="sr-only">{label}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {actions.map((action) => (
              <button
                key={action.label}
                type="button"
                className={cn(
                  "rounded-2xl border border-border/70 bg-background/55 px-3 py-3 text-left transition-colors hover:border-cyan-500/45",
                  selected === action.label && "border-cyan-500/55 bg-cyan-500/12"
                )}
                onClick={() => setSelected(action.label)}
              >
                <span className="block font-semibold">{action.label}</span>
                <span className="text-muted-foreground mt-1 block text-xs leading-5">
                  {action.kicker}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAction.label}
            className="rounded-3xl border border-border/70 bg-background/64 p-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <p className="text-[0.68rem] font-semibold tracking-[0.24em] text-cyan-700 uppercase dark:text-cyan-300">
              {selectedAction.kicker}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              {selectedAction.headline}
            </h3>
            <p className="text-muted-foreground mt-4 text-sm leading-6">
              {selectedAction.description}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold">Helpful client use cases</h4>
                <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-6">
                  {selectedAction.useCases.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0 text-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold">What can be included</h4>
                <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-6">
                  {selectedAction.deliverables.map((item) => (
                    <li key={item} className="flex gap-2">
                      <ArrowRight className="mt-1 size-4 shrink-0 text-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/8 p-4">
              <h4 className="text-sm font-semibold">SEO and conversion angle</h4>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {selectedAction.seoAngle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => (
          <section
            key={action.label}
            className="rounded-2xl border border-border/70 bg-background/45 p-4"
          >
            <h3 className="text-sm font-semibold">{action.label} action dock example</h3>
            <p className="text-muted-foreground mt-2 text-xs leading-5">{action.description}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

export function AnimationTest() {
  const sections = [
    { key: "magnetic-cta", label: "Magnetic CTA", Component: MagneticCtaTile },
    { key: "product-surface", label: "Product Surface", Component: TiltProductTile },
    { key: "service-stack", label: "Service Stack", Component: StackRevealTile },
    { key: "pipeline", label: "Pipeline Board", Component: PipelineTile },
    { key: "liquid-tabs", label: "Liquid Tabs", Component: LiquidTabsTile },
    { key: "reward-burst", label: "Reward Burst", Component: BurstTile },
    { key: "scrubber", label: "Visual Scrubber", Component: ScrubberTile },
    { key: "timeline", label: "Timeline Motion", Component: GsapTimelineTile },
    { key: "checklist", label: "Checklist States", Component: ChecklistTile },
    { key: "action-dock", label: "Action Dock", Component: DockTile },
  ];
  const sectionsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const paginationTopRef = useRef<HTMLDivElement>(null);
  const prefersReducedPaginationMotion = useReducedMotion();
  const pageCount = Math.ceil(sections.length / sectionsPerPage);
  const startIndex = currentPage * sectionsPerPage;
  const visibleSections = sections.slice(startIndex, startIndex + sectionsPerPage);
  const showingStart = startIndex + 1;
  const showingEnd = Math.min(startIndex + sectionsPerPage, sections.length);
  const canGoPrevious = currentPage > 0;
  const canGoNext = currentPage < pageCount - 1;

  function goToPage(page: number) {
    const nextPage = Math.min(Math.max(page, 0), pageCount - 1);
    setCurrentPage(nextPage);
    window.requestAnimationFrame(() => {
      paginationTopRef.current?.scrollIntoView({
        behavior: prefersReducedPaginationMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  return (
    <div ref={paginationTopRef} className="mt-10 scroll-mt-[5.25rem] space-y-6">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentPage}
          className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
        >
          {visibleSections.map(({ key, Component }) => (
            <Component key={key} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="rounded-[1.25rem] border border-border/70 bg-card/82 p-4 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">
              Showing {showingStart}-{showingEnd} of {sections.length} component sections
            </p>
            <p className="text-muted-foreground mt-1 text-xs leading-5">
              {visibleSections.map((section) => section.label).join(" / ")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={!canGoPrevious}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 text-sm font-semibold transition-colors hover:border-cyan-500/40 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-45"
              onClick={() => goToPage(currentPage - 1)}
            >
              <ArrowLeft className="size-4" />
              Previous
            </button>

            <nav className="flex items-center gap-1 px-1" aria-label="Component page indicator">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show component page ${index + 1}`}
                  aria-current={currentPage === index ? "page" : undefined}
                  className={cn(
                    "size-2.5 rounded-full transition-colors",
                    currentPage === index ? "bg-cyan-500" : "bg-muted-foreground/25 hover:bg-cyan-500/50"
                  )}
                  onClick={() => goToPage(index)}
                />
              ))}
            </nav>

            <button
              type="button"
              disabled={!canGoNext}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cyan-600 px-4 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(8,145,178,0.24)] transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-45 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              onClick={() => goToPage(currentPage + 1)}
            >
              Next 3 sections
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
