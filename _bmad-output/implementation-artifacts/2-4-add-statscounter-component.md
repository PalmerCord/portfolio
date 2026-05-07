# Story 2.4: Add StatsCounter Component

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to see the total project count prominently displayed,
So that I immediately understand the volume of work completed.

---

## Acceptance Criteria Coverage

- Counter is visible on site and tied to project section context
- Animates from `0` to `150+` over `2000ms`
- Uses ease-out animation (`easeOutCubic`)
- Displays the label "Sites Built" below the number
- Respects `prefers-reduced-motion` by showing final value immediately
- Static value is available via `aria-label` for screen readers

---

## Implementation Summary

- Added `StatsCounter` component:
  - `src/components/projects/StatsCounter.tsx`
  - IntersectionObserver starts animation on viewport entry
  - requestAnimationFrame-driven count animation with ease-out curve
  - reduced-motion branch via `useReducedMotion`
  - semantic accessible labeling with static final value
- Integrated counter into projects section header on home:
  - `src/app/page.tsx`

---

## Validation

- `npm run format` passes
- `npm run lint` passes
- `npm run build` passes
- Local route `/` returns HTTP 200

---

## Files Created/Modified

- `src/components/projects/StatsCounter.tsx`
- `src/app/page.tsx`
