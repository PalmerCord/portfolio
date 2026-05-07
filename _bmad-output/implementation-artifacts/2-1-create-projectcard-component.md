# Story 2.1: Create ProjectCard Component

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to see project cards with key information at a glance,
So that I can quickly assess which projects interest me.

---

## Acceptance Criteria Coverage

- Project screenshot thumbnail using Next.js `Image`
- Project title rendered prominently
- Technology badges capped to 3 with `+N` overflow indicator
- Industry tag shown on card
- Hover elevation with shadow transition
- Keyboard-focusable card with visible focus ring
- Descriptive image alt text

---

## Implementation Summary

- Added reusable `ProjectCard` component at `src/components/projects/ProjectCard.tsx`
  - Uses semantic `<article>` and linked card pattern
  - Uses `next/image` with responsive `sizes`
  - Includes accessible focus states and hover elevation
- Integrated component on homepage with real content data:
  - `src/app/page.tsx` now loads typed MDX projects via `getProjects()`
  - Renders a `Featured Projects` section previewing first 3 cards

---

## Validation

- `npm run format` passes
- `npm run lint` passes
- `npm run build` passes
- Local route `/` returns HTTP 200

---

## Files Created/Modified

- `src/components/projects/ProjectCard.tsx`
- `src/app/page.tsx`
