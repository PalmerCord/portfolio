"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type HeroCursorAuraProps = {
  children: React.ReactNode;
};

export function HeroCursorAura({ children }: HeroCursorAuraProps) {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const glowOpacity = useSpring(0.22, { stiffness: 120, damping: 18, mass: 0.8 });
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 22, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 22, mass: 0.7 });
  const lightFlowOpacity = useTransform(glowOpacity, [0.22, 1], [0.22, 0.46]);
  const lightCursorOpacity = useTransform(glowOpacity, [0.22, 1], [0.1, 0.3]);

  const lightCursorGradient = useMotionTemplate`
    radial-gradient(34rem circle at ${smoothX}% ${smoothY}%, rgba(13, 148, 136, 0.3), transparent 62%),
    radial-gradient(28rem circle at calc(${smoothX}% + 12%) calc(${smoothY}% + 8%), rgba(2, 132, 199, 0.26), transparent 64%)
  `;
  const lightFlowGradient = `
    radial-gradient(36rem circle at 18% 28%, rgba(13, 148, 136, 0.3), transparent 62%),
    radial-gradient(34rem circle at 84% 70%, rgba(2, 132, 199, 0.28), transparent 64%),
    linear-gradient(118deg, rgba(255, 255, 255, 0.38), transparent 34%, rgba(147, 51, 234, 0.14), transparent 72%)
  `;

  const interactiveGradient = useMotionTemplate`
    radial-gradient(42rem circle at ${smoothX}% ${smoothY}%, color-mix(in oklab, var(--hero-glow-secondary) 34%, transparent), transparent 50%),
    radial-gradient(30rem circle at calc(${smoothX}% - 18%) calc(${smoothY}% + 10%), color-mix(in oklab, var(--hero-glow-primary) 30%, transparent), transparent 54%),
    radial-gradient(16rem circle at ${smoothX}% ${smoothY}%, rgba(255,255,255,0.12), transparent 58%)
  `;
  const ambientGradient = useMotionTemplate`
    radial-gradient(36rem circle at calc(${smoothX}% + 24%) calc(${smoothY}% - 18%), color-mix(in oklab, var(--hero-glow-secondary) 22%, transparent), transparent 62%),
    radial-gradient(30rem circle at calc(${smoothX}% - 30%) calc(${smoothY}% + 24%), color-mix(in oklab, var(--hero-glow-primary) 18%, transparent), transparent 62%)
  `;

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - bounds.left) / bounds.width) * 100;
    const nextY = ((event.clientY - bounds.top) / bounds.height) * 100;

    pointerX.set(Math.min(100, Math.max(0, nextX)));
    pointerY.set(Math.min(100, Math.max(0, nextY)));
    glowOpacity.set(1);
  }

  function handlePointerLeave() {
    pointerX.set(50);
    pointerY.set(50);
    glowOpacity.set(0.22);
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-[2rem]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[18%] z-20 mix-blend-multiply blur-2xl dark:hidden"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: ["-2%", "3%", "-1%", "-2%"],
                y: ["1%", "-3%", "2%", "1%"],
                scale: [1, 1.06, 1.02, 1],
              }
        }
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          opacity: lightFlowOpacity,
          backgroundImage: lightFlowGradient,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 mix-blend-multiply dark:hidden"
        style={{
          opacity: lightCursorOpacity,
          backgroundImage: lightCursorGradient,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          opacity: glowOpacity,
          backgroundImage: interactiveGradient,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden mix-blend-screen dark:block"
        style={{
          opacity: 0.72,
          backgroundImage: ambientGradient,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] top-[12%] h-32 rounded-full bg-[color:var(--hero-glow-secondary)]/16 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 bottom-12 h-52 w-52 rounded-full border border-white/20 bg-white/12 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] bottom-[18%] h-44 w-44 rounded-full bg-[color:var(--hero-glow-primary)]/16 blur-3xl"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
