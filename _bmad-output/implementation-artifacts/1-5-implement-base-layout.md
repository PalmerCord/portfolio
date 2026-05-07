# Story 1.5: Implement Base Layout

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want a consistent site layout with header and footer,
So that I can navigate the site and understand where I am.

---

## Acceptance Criteria

1. Fixed Header is visible with:
   - Logo/site title
   - Placeholder navigation links
   - Placeholder theme toggle
2. Footer is visible with:
   - Copyright text
   - Social link placeholders
3. SkipLink appears on focus for accessibility
4. Layout uses semantic HTML (`header`, `main`, `footer`)
5. Fonts are applied consistently

---

## Implementation Summary

- Added shared layout components:
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/layout/SkipLink.tsx`
- Updated `src/app/layout.tsx`:
  - Integrates SkipLink, Header, semantic `main` with `id="main-content"`, and Footer
  - Keeps Geist font variables at the root and ensures global consistency
  - Updated metadata for portfolio branding
- Updated pages to render section content inside shared `main`:
  - `src/app/page.tsx`
  - `src/app/animation-test/page.tsx`

---

## Validation

- `npm run build` passes
- `/` returns HTTP 200
- `/animation-test` returns HTTP 200

---

## Files Created/Modified

- `src/components/layout/SkipLink.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/animation-test/page.tsx`
