# Story 2.6: Add Skeleton Loading States

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to see placeholder content while projects load,
So that I understand content is coming and the layout doesn't shift.

---

## Acceptance Criteria Coverage

- Added route-level loading UI for `/projects` using `loading.tsx`
- Skeleton cards mirror the same grid and card structure as real project cards
- Skeletons use subtle pulse animation (`animate-pulse`)
- Displays at least 6 skeleton cards for first viewport coverage
- Skeleton blocks are marked `aria-hidden` for screen reader safety
- Loading layout preserves card geometry (`aspect-[16/10]`) to minimize CLS

---

## Implementation Summary

- Added reusable skeleton grid component:
  - `src/components/projects/ProjectsGridSkeleton.tsx`
  - Includes card image area, badge, title line, and tech badge placeholders
- Added dedicated route fallback:
  - `src/app/projects/loading.tsx`
  - Includes page header placeholders, filter bar placeholders, and 6-card skeleton grid
- Simplified projects page rendering:
  - `src/app/projects/page.tsx`
  - Removed local `Suspense` fallback text in favor of route-level loading state

---

## Validation

- `npm run lint` passes

---

## Files Created/Modified

- `src/components/projects/ProjectsGridSkeleton.tsx`
- `src/app/projects/loading.tsx`
- `src/app/projects/page.tsx`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/2-6-add-skeleton-loading-states.md`
