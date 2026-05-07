# Story 1.3: Install Animation Libraries

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **developer**,
I want GSAP and Framer Motion installed,
So that I can implement the flyby animation and micro-interactions.

---

## Acceptance Criteria

1. `gsap`, `@gsap/react`, and `framer-motion` are in dependencies
2. GSAP is registered in a client component wrapper
3. A simple animation test component verifies both libraries work
4. Bundle impact remains controlled by isolating animation test loading to a dedicated route

---

## Implementation Summary

- Installed `gsap`, `@gsap/react`, and `framer-motion`
- Added GSAP client wrapper in `src/components/animation/AnimationProvider.tsx`
  - Registers `useGSAP` plugin
  - Defines baseline GSAP defaults
- Added `src/components/animation/AnimationTest.tsx`
  - Framer Motion animated card
  - GSAP animated card via `useGSAP` + ref
- Added dedicated route `src/app/animation-test/page.tsx`
  - Uses the animation provider and test component
- Updated homepage to link to `/animation-test` instead of eagerly importing animation libraries

---

## Validation

- `npm run build` passes
- Route generation includes `/animation-test`
- Local preview route available at `/animation-test`

---

## Files Created/Modified

- `package.json`
- `package-lock.json`
- `src/components/animation/AnimationProvider.tsx`
- `src/components/animation/AnimationTest.tsx`
- `src/app/animation-test/page.tsx`
- `src/app/page.tsx`
