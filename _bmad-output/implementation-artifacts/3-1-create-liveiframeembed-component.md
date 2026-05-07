# Story 3.1: Create LiveIframeEmbed Component

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to interact with a live embedded version of a project,
So that I can verify the quality of the actual production site.

---

## Acceptance Criteria Coverage

- Added reusable `LiveIframeEmbed` component for rendering live project previews
- Iframe supports interaction (scroll/click/navigation) in a sandboxed context
- Loading skeleton is shown while iframe is loading
- Iframe `title` attribute is descriptive for accessibility
- Iframe has a minimum height of `500px` on desktop (`md:h-[500px]`)
- Included direct “Open in new tab” link for full-site access

---

## Implementation Summary

- Created component:
  - `src/components/projects/LiveIframeEmbed.tsx`
- Implemented internal states:
  - `loading` state with subtle pulse skeleton
  - `error` state with fallback messaging when embed fails
- Added secure iframe attributes:
  - `sandbox` permissions for safe interaction
  - `referrerPolicy="strict-origin-when-cross-origin"`
  - `loading="lazy"`
- Added accessible status announcements via `aria-live` and `aria-busy`

---

## Validation

- `npm run lint` passes

---

## Files Created/Modified

- `src/components/projects/LiveIframeEmbed.tsx`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/3-1-create-liveiframeembed-component.md`
