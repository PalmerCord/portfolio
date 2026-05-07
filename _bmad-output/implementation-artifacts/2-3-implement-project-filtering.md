# Story 2.3: Implement Project Filtering

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to filter projects by industry, technology, and year,
So that I can find work relevant to my interests.

---

## Acceptance Criteria Coverage

- Clicking a filter chip updates grid results instantly
- Active filters are visually indicated (filled chip with `×`)
- `Clear all` appears when filters are active
- URL updates with filter params (`industry`, `tech`, `year`)
- Filtered count is shown (`X of Y projects`)
- Filter changes are announced through an `aria-live` region

---

## Implementation Summary

- Added `FilterableProjectsGrid` client component:
  - `src/components/projects/FilterableProjectsGrid.tsx`
  - Reads and writes URL search params via App Router navigation hooks
  - Supports multi-select chips per filter category using comma-delimited params
  - Filters projects by industry/tech/year and renders filtered result set
  - Includes clear-all behavior and live region announcements
- Updated homepage projects section to use filterable grid:
  - `src/app/page.tsx`
  - Wrapped filterable client component in `Suspense` for static build compatibility

---

## Validation

- `npm run format` passes
- `npm run lint` passes
- `npm run build` passes
- Local route `/` returns HTTP 200

---

## Files Created/Modified

- `src/components/projects/FilterableProjectsGrid.tsx`
- `src/app/page.tsx`
