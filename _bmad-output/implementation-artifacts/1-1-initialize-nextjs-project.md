# Story 1.1: Initialize Next.js Project

**Status:** done
**Completed:** 2026-03-30

---

## Story

As a **developer**,
I want a properly configured Next.js project with TypeScript and Tailwind,
So that I can begin building the portfolio with modern tooling.

---

## Acceptance Criteria

1. **AC1:** Next.js 14+ project created with TypeScript strict mode enabled
2. **AC2:** Tailwind CSS configured and working
3. **AC3:** ESLint enabled with Next.js recommended rules
4. **AC4:** App Router structure with `src/app` directory
5. **AC5:** Import aliases configured (`@/*`)
6. **AC6:** Project runs successfully with `npm run dev`
7. **AC7:** `npm run build` completes without errors

---

## Tasks / Subtasks

- [x] **Task 1: Create Next.js project** (AC: 1, 2, 3, 4, 5)
  - [x] Run `npx create-next-app@latest` with correct flags
  - [x] Verify TypeScript strict mode in `tsconfig.json`
  - [x] Verify Tailwind configured in `tailwind.config.ts`
  - [x] Verify ESLint configured in `.eslintrc.json`
  - [x] Verify `src/app` directory structure exists
  - [x] Verify `@/*` alias in `tsconfig.json`

- [x] **Task 2: Verify development server** (AC: 6)
  - [x] Run `npm run dev`
  - [x] Confirm page loads at `http://localhost:3000`
  - [x] Verify no console errors

- [x] **Task 3: Verify production build** (AC: 7)
  - [x] Run `npm run build`
  - [x] Confirm build completes successfully
  - [x] Review build output for any warnings

- [x] **Task 4: Clean up boilerplate** (AC: 1-7)
  - [x] Remove default Next.js homepage content
  - [x] Keep minimal working page structure
  - [x] Preserve Tailwind and TypeScript configuration

---

## Dev Notes

### Initialization Command

**CRITICAL:** Use this exact command in the workspace root:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**Flag breakdown:**
- `.` — Install in current directory (Portfolio workspace)
- `--typescript` — Enable TypeScript
- `--tailwind` — Configure Tailwind CSS
- `--eslint` — Set up ESLint
- `--app` — Use App Router (not Pages Router)
- `--src-dir` — Put code in `src/` directory
- `--import-alias "@/*"` — Configure path aliases

### Expected Directory Structure After Init

```
Portfolio/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page
│       └── globals.css     # Global styles + Tailwind
├── public/
│   └── (static assets)
├── node_modules/
├── .eslintrc.json
├── .gitignore
├── next.config.ts          # Next.js 15 uses .ts by default
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

### TypeScript Configuration

Verify `tsconfig.json` has strict mode:
```json
{
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Tailwind Configuration

Verify `tailwind.config.ts` includes content paths:
```typescript
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ...
}
```

### Clean Up Boilerplate

After initialization, simplify `src/app/page.tsx`:
```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <p className="mt-4 text-lg text-muted-foreground">Coming soon...</p>
    </main>
  );
}
```

### Anti-Patterns to Avoid

- ❌ Do NOT use Pages Router (`pages/` directory)
- ❌ Do NOT skip the `--src-dir` flag
- ❌ Do NOT use a different import alias pattern
- ❌ Do NOT install additional packages yet (that's Story 1.2+)

### Project Structure Notes

- This story creates the foundation that all other stories build upon
- The `src/` directory keeps application code separate from config files
- Path aliases (`@/`) prevent messy relative imports like `../../../`

---

## Architecture Compliance

| Decision | Requirement | Verified By |
|----------|-------------|-------------|
| Framework | Next.js 14+ App Router | `package.json` version |
| Language | TypeScript strict | `tsconfig.json` strict: true |
| Styling | Tailwind CSS | `tailwind.config.ts` exists |
| Structure | src/app directory | Directory exists |
| Aliases | @/* paths | `tsconfig.json` paths |

**Source:** [architecture.md - Starter Template Evaluation](_bmad-output/planning-artifacts/architecture.md)

---

## Testing Checklist

- [ ] `npm run dev` starts without errors
- [ ] `http://localhost:3000` loads the page
- [ ] `npm run build` completes successfully
- [ ] `npm run lint` passes with no errors
- [ ] TypeScript compilation has no errors
- [ ] Tailwind classes render correctly (visible styling)

---

## References

- [Architecture: Starter Template](_bmad-output/planning-artifacts/architecture.md#starter-template-evaluation)
- [Architecture: Initialization Commands](_bmad-output/planning-artifacts/architecture.md#initialization-commands)
- [Epics: Story 1.1](_bmad-output/planning-artifacts/epics.md#story-11-initialize-nextjs-project)
- [Next.js Documentation](https://nextjs.org/docs)

---

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Completion Notes

_To be filled after implementation_

### Files Created/Modified

_To be filled after implementation_

Expected files:
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `tailwind.config.ts`
- `tsconfig.json`
- `next.config.ts`
- `package.json`
- `.eslintrc.json`
- `postcss.config.mjs`
