"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatsCounterProps = {
  value: number;
  suffix?: string;
  label?: string;
  durationMs?: number;
};

function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}

export function StatsCounter({
  value,
  suffix = "+",
  label = "Sites Built",
  durationMs = 2000,
}: StatsCounterProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    if (prefersReducedMotion) {
      return;
    }

    let animationFrame = 0;
    const startedAt = performance.now();

    const step = (now: number) => {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(progress);
      const nextValue = Math.round(value * eased);
      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, value, durationMs, prefersReducedMotion]);

  const renderedValue = hasStarted && prefersReducedMotion ? value : displayValue;

  return (
    <motion.div
      ref={containerRef}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22, scale: 0.96 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex min-w-[9rem] flex-col items-center rounded-[1.5rem] border border-slate-200/80 bg-white/90 px-5 py-4 text-center shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur dark:border-cyan-300/18 dark:bg-[linear-gradient(180deg,rgba(10,16,30,0.96)_0%,rgba(13,20,38,0.98)_100%)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.34)]"
      aria-label={`${value}${suffix} ${label}`}
    >
      <span className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
        {renderedValue}
        {suffix}
      </span>
      <span className="mt-1 text-xs font-medium tracking-[0.14em] text-cyan-800/70 uppercase dark:text-cyan-100/55">
        {label}
      </span>
    </motion.div>
  );
}
