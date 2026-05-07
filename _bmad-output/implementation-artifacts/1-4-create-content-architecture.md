# Story 1.4: Create Content Architecture

**Status:** done
**Completed:** 2026-03-31

---

## Story

As a **developer**,
I want MDX content structure with TypeScript interfaces,
So that project data is type-safe and easy to manage.

---

## Acceptance Criteria

1. `content/projects/` directory exists
2. `src/types/project.ts` defines a Project interface matching frontmatter schema
3. `src/lib/projects.ts` has `getProjects()` and `getProjectBySlug()` functions
4. 3 sample MDX project files exist with valid frontmatter
5. TypeScript validates frontmatter against the interface

---

## Implementation Summary

- Added typed content models in `src/types/project.ts`
  - `ProjectFrontmatter`
  - `Project`
- Added MDX project loader in `src/lib/projects.ts`
  - Runtime frontmatter assertions aligned to project schema
  - `getProjects()` with deterministic sorting by year desc
  - `getProjectBySlug()` with null fallback for missing files
- Added three sample MDX files under `content/projects/`
  - `la-vida-gardens.mdx`
  - `native-sun-cannabis.mdx`
  - `swrv-creative-studio.mdx`
- Installed `gray-matter` for frontmatter parsing

---

## Validation

- `npm run build` passes
- TypeScript check passes during production build

---

## Files Created/Modified

- `package.json`
- `package-lock.json`
- `src/types/project.ts`
- `src/lib/projects.ts`
- `content/projects/la-vida-gardens.mdx`
- `content/projects/native-sun-cannabis.mdx`
- `content/projects/swrv-creative-studio.mdx`
