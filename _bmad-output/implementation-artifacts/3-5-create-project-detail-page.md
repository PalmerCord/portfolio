# Story 3.5: Create Project Detail Page

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **visitor**,
I want to access a project directly via URL,
So that I can share specific projects with others.

---

## Acceptance Criteria Coverage

- Added direct route support at `/projects/[slug]`
- Full project detail view renders:
  - title, description, metadata chips, technology list
  - live iframe embed with fallback behavior
- Metadata implemented per project:
  - unique title: `{Project Title} | Cord Palmer`
  - description derived from project content
  - Open Graph title/description/image/url
  - canonical URL
- Breadcrumb included on detail page: `Projects > {Project Title}`
- Static generation implemented with `generateStaticParams`

---

## Implementation Summary

- Added dynamic route page:
  - `src/app/projects/[slug]/page.tsx`
  - Uses `getProjectBySlug` and `notFound()` for invalid slugs
  - Exports `generateStaticParams` for SSG
  - Exports `generateMetadata` for SEO and social tags
- Added metadata base URL handling:
  - `src/app/layout.tsx`
  - Sets `metadataBase` using `NEXT_PUBLIC_SITE_URL` fallback to localhost
  - Resolves Next.js metadata warning for OG/canonical URL generation

---

## Validation

- `npm run lint` passes
- `npm run build` passes
- Build output confirms static generation for dynamic detail pages:
  - `/projects/swrv-creative-studio`
  - `/projects/la-vida-gardens`
  - `/projects/native-sun-cannabis`

---

## Files Created/Modified

- `src/app/projects/[slug]/page.tsx`
- `src/app/layout.tsx`
- `_bmad-output/implementation-artifacts/sprint-status.yaml`
- `_bmad-output/implementation-artifacts/3-5-create-project-detail-page.md`
