# Story 2.5: Create Projects Page

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want a dedicated projects page with the full grid and filters,
So that I can explore all portfolio work in one place.

---

## Acceptance Criteria Coverage

- Added dedicated route: `/projects`
- Page includes:
  - Title "Projects" and StatsCounter
  - Project filter component
  - Project grid of all projects
- Added page-specific SEO metadata (title + description)
- Direct URL access works with params (e.g. `/projects?tech=next.js`)
- Filter state restores from URL through existing search-param-driven filter logic
- Page is statically generated (`○ /projects` in build output)

---

## Implementation Summary

- Created new route component:
  - `src/app/projects/page.tsx`
  - Fetches project data at build time via `getProjects()`
  - Renders `StatsCounter` and `FilterableProjectsGrid`
  - Uses Suspense boundary for client filter component
- Updated primary nav to include functional Projects link:
  - `src/components/layout/Header.tsx`

---

## Validation

- `npm run format` passes
- `npm run lint` passes
- `npm run build` passes
- Build output confirms static route generation for `/projects`
- Direct URL check passes: `/projects?tech=next.js` → HTTP 200

---

## Files Created/Modified

- `src/app/projects/page.tsx`
- `src/components/layout/Header.tsx`
