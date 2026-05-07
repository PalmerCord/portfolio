# Story 3.2: Build ProjectDetailPanel Component

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to see detailed information about a project in a panel,
So that I can learn more without leaving the grid context.

---

## Acceptance Criteria Coverage

- Added slide-in detail panel from right
  - Mobile: full width (`w-full`)
  - Desktop: ~60% width (`md:w-[60vw]`)
- Backdrop blur implemented with click-to-close behavior
- Panel displays:
  - Project title, description/content, tech stack, year, industry tags
  - `LiveIframeEmbed` when `iframeAllowed` is true
  - Screenshot fallback plus “Open in new tab” when embedding is disabled
- Persistent external “Open in new tab” action is available through embed/fallback sections
- Previous/next navigation controls included in panel footer
- Focus trap while open (Tab/Shift+Tab cycling)
- Escape key closes the panel
- Focus restoration support on close via `returnFocusRef`

---

## Implementation Summary

- Created component:
  - `src/components/projects/ProjectDetailPanel.tsx`
- Accessibility and interaction details:
  - `role="dialog"`, `aria-modal="true"`, labeled title id
  - Keyboard handling for Escape and focus trap boundaries
  - Body scroll lock while panel is open
  - Screen reader live announcement for opened project context
- Included responsive and token-consistent styling with existing design system classes

---

## Validation

- `npm run lint` passes

---

## Files Created/Modified

- `src/components/projects/ProjectDetailPanel.tsx`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/3-2-build-projectdetailpanel-component.md`
