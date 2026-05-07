# Story 3.3: Implement Screenshot Fallback

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to see a screenshot when a live embed is unavailable,
So that I can still assess the project's visual quality.

---

## Acceptance Criteria Coverage

- If `iframeAllowed: false`, project detail now shows screenshot fallback instead of iframe
- If iframe fails/blocks/times out, `LiveIframeEmbed` switches to screenshot fallback
- Fallback message now explicitly states: **"This site cannot be embedded"**
- “Open in new tab” action is more prominent in fallback state (primary button)
- Experience is seamless without raw error output

---

## Implementation Summary

- Updated `LiveIframeEmbed`:
  - Added `fallbackImage` prop
  - Added fallback rendering with project screenshot and required message
  - Added graceful timeout fallback (8s) for blocked/non-loading embeds
  - Kept loading skeleton while pending
  - Elevated external link to button style when fallback is active
- Updated `ProjectDetailPanel`:
  - Passes screenshot into `LiveIframeEmbed`
  - Aligned non-embeddable (`iframeAllowed: false`) branch with same required message
  - Made fallback external action prominent via primary button

---

## Validation

- `npm run lint` passes

---

## Files Created/Modified

- `src/components/projects/LiveIframeEmbed.tsx`
- `src/components/projects/ProjectDetailPanel.tsx`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/3-3-implement-screenshot-fallback.md`
