# Story 3.4: Add Project Navigation

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to navigate between projects without closing the panel,
So that I can efficiently browse multiple projects.

---

## Acceptance Criteria Coverage

- Project detail panel remains open while moving to next/previous projects
- Next/previous controls now navigate adjacent items in the filtered project list
- Navigation wraps correctly:
  - last → first
  - first → last
- URL updates with current project using `?project={slug}`
- Left/right arrow keys navigate prev/next while panel is focused

---

## Implementation Summary

- Updated card-to-panel interaction:
  - `ProjectCard` now opens detail panel via click callback instead of external link
- Updated grid wiring:
  - `ProjectsGrid` now forwards selection callback to cards
- Added URL-driven panel state and navigation logic in `FilterableProjectsGrid`:
  - Uses `project` search param as source of truth
  - Opens/closes panel by adding/removing `project` in URL
  - Next/prev actions update URL and wrap across boundaries
  - Preserves existing filter query params while updating selected project
- Enhanced `ProjectDetailPanel` keyboard behavior:
  - Added ArrowLeft / ArrowRight handling for prev/next when panel has focus

---

## Validation

- `npm run lint` passes

---

## Files Created/Modified

- `src/components/projects/ProjectCard.tsx`
- `src/components/projects/ProjectsGrid.tsx`
- `src/components/projects/FilterableProjectsGrid.tsx`
- `src/components/projects/ProjectDetailPanel.tsx`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/3-4-add-project-navigation.md`
