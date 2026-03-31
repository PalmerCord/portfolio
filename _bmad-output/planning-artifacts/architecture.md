---
stepsCompleted: ['step-01-init', 'step-02-context', 'step-03-starter', 'step-04-decisions', 'step-05-patterns', 'step-06-structure', 'step-07-validation', 'step-08-complete']
inputDocuments: ['prd.md', 'ux-design-specification.md', 'product-brief.md', 'brainstorming-session-2026-03-30.md']
workflowType: 'architecture'
project_name: 'Portfolio'
user_name: 'Cord'
date: '2026-03-30'
status: complete
completedAt: '2026-03-30'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

---

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
- 37 total requirements across 7 categories
- Core: animated flyby, 150+ project showcase, live iframe embeds, dual-mode toggle
- Phase 2: Admin dashboard for content management

**Non-Functional Requirements:**
- 23 requirements across 4 categories
- Performance: Lighthouse 90+, LCP < 2.5s, 60fps animations
- Accessibility: WCAG 2.1 AA, 100% keyboard navigation
- SEO: Lighthouse SEO 95+, structured data, unique meta per page

**Scale & Complexity:**
- Primary domain: Static Site Generation with rich client interactions
- Complexity level: Medium-High
- Estimated architectural components: 5 pages, 12 core features, ~30 UI components

### Technical Constraints & Dependencies

| Constraint | Impact |
|------------|--------|
| 150+ project images | Image optimization pipeline, lazy loading strategy |
| X-Frame-Options blocking | Iframe fallback to screenshots required |
| 60fps animation target | GSAP with GPU acceleration, preloading |
| Dual-domain deployment | Environment-based mode detection |
| WCAG AA compliance | Reduced motion, focus management, semantic HTML |

### Cross-Cutting Concerns Identified

1. **Image Pipeline** — Central to performance and content delivery
2. **Animation System** — GSAP for hero, Framer Motion for interactions
3. **State Management** — Mode toggle, filters, theme (URL + localStorage)
4. **SEO Foundation** — Meta generation, structured data, sitemap
5. **Accessibility Layer** — Focus trapping, live regions, keyboard nav

---

## Starter Template Evaluation

### Primary Technology Domain

**Web Application (SSG with Rich Interactions)** — Static site generation with client-side interactivity for the 150+ project showcase and flyby animation.

### Starter Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **create-next-app** | Official, minimal, highly customizable | Requires manual shadcn/ui setup |
| **create-t3-app** | Full-stack with tRPC, Prisma | Overkill for SSG portfolio, adds backend complexity |
| **shadcn/ui starter** | Includes design system presets | Less official, may lag Next.js versions |
| **Vercel templates** | Pre-configured for Vercel | Often opinionated, harder to customize |

### Selected Starter: create-next-app + shadcn/ui init

**Rationale for Selection:**
1. Official Next.js starter ensures compatibility with latest features
2. Minimal base allows precise control over animation libraries (GSAP)
3. shadcn/ui CLI adds exactly the components needed without bloat
4. Matches PRD tech stack exactly

**Initialization Commands:**

```bash
# 1. Create Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Initialize shadcn/ui
cd portfolio
npx shadcn@latest init

# 3. Add animation libraries
npm install gsap @gsap/react framer-motion

# 4. Add Geist fonts (Vercel's font family)
npm install geist
```

### Architectural Decisions Provided by Starter

**Language & Runtime:**
- TypeScript strict mode
- Node.js 18+
- React 18+

**Styling Solution:**
- Tailwind CSS with JIT compilation
- CSS variables for theming (shadcn/ui approach)
- `globals.css` for base styles and CSS custom properties

**Build Tooling:**
- Turbopack for development (fast HMR)
- Next.js production build with automatic optimization
- Automatic code splitting per route

**Code Organization:**
```
src/
├── app/                 # App Router pages and layouts
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   └── ui/              # shadcn/ui components
├── lib/                 # Utility functions
│   └── utils.ts         # cn() helper from shadcn
└── hooks/               # Custom React hooks
```

**Development Experience:**
- Fast Refresh (instant feedback)
- TypeScript error overlay
- ESLint with Next.js rules
- Path aliases (`@/components/*`)

### Post-Init Configuration Required

| Item | Purpose |
|------|---------|
| `next.config.js` images | Remote image domains for project screenshots |
| Geist font setup | Typography in `tailwind.config.ts` |
| GSAP registration | Register GSAP plugins in client layout |
| Dark mode config | shadcn/ui `darkMode: "class"` in Tailwind |

**Note:** Project initialization using these commands should be the first implementation story.

---

## Core Architectural Decisions

### Decision Priority

**Already Decided (PRD + Starter):**
- Framework: Next.js 14+ App Router
- Language: TypeScript strict mode
- UI: shadcn/ui + Tailwind CSS
- Animations: GSAP (hero) + Framer Motion (micro-interactions)
- Deployment: Vercel
- Fonts: Geist Sans/Mono

**Decided in This Step:**

### Data Architecture

**Decision:** MDX files for project content

**Rationale:** Git-versioned, SSG-friendly, no external dependencies

**Structure:**
```
content/
└── projects/
    ├── la-vida-gardens.mdx
    ├── native-sun-cannabis.mdx
    └── ...
```

**Project Frontmatter Schema:**
```yaml
---
title: "La Vida Gardens"
url: "https://lavidagardens.com"
screenshot: "/projects/la-vida-gardens.jpg"
industry: ["cannabis", "ecommerce"]
tech: ["React", "Next.js", "Tailwind"]
year: 2024
featured: true
showInPersonal: true
showInAgency: true
iframeAllowed: true
---
```

### Image Pipeline

**Decision:** Local images in `public/projects/`

**Rationale:** Simplest approach, no external service, Next.js Image handles optimization

**Strategy:**
- Screenshots stored in `public/projects/{slug}.jpg`
- Next.js `<Image>` component for automatic optimization
- Lazy loading via `loading="lazy"`
- Blur placeholders via `placeholder="blur"`
- Responsive sizes via `sizes` prop

**Note:** For 150+ images (~100MB), acceptable repo size for portfolio project.

### State Management

**Decision:** URL params + React Context (no external library)

**Rationale:** Built-in patterns, shareable URLs, minimal complexity

| State | Storage | Why |
|-------|---------|-----|
| Filters (tech, industry) | URL params | Shareable links |
| Mode (Personal/Agency) | URL or subdomain | SEO-friendly |
| Theme (dark/light) | Context + localStorage | Persistence |
| Animation state | Local component state | No sharing needed |

**URL Structure:**
```
cordpalmer.com/projects?tech=react,nextjs&industry=cannabis
swrv.tech/projects?type=ecommerce
```

### Contact Form

**Decision:** Formspree

**Rationale:** Zero backend code, paste action URL, free tier sufficient

**Implementation:**
```tsx
<form action="https://formspree.io/f/{form_id}" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required />
  <button type="submit">Send</button>
</form>
```

### Analytics

**Decision:** Vercel Analytics + Speed Insights

**Rationale:** Built into Vercel, one toggle to enable, no external setup

**Tracking:**
- Page views (automatic)
- Core Web Vitals (automatic)
- Custom events via `@vercel/analytics` for: flyby completion, project clicks, contact submissions

### Deferred Decisions (Phase 2)

| Decision | Deferred Until |
|----------|----------------|
| Database for admin | Admin dashboard implementation |
| CMS integration | If manual MDX editing becomes painful |
| Email service (Resend) | If Formspree limits hit |
| CDN for images | If build times become issue |

---

## Implementation Patterns & Consistency Rules

### Naming Patterns

**Files & Directories:**

| Type | Pattern | Example |
|------|---------|--------|
| Components | PascalCase | `ProjectCard.tsx` |
| Pages | kebab-case folders | `app/projects/[slug]/page.tsx` |
| Utilities | camelCase | `lib/getProjects.ts` |
| Content | kebab-case | `content/projects/la-vida-gardens.mdx` |
| Images | kebab-case | `public/projects/la-vida-gardens.jpg` |

**Components:**

| Element | Pattern | Example |
|---------|---------|--------|
| Component name | PascalCase | `FlybyHero` |
| Props interface | `{ComponentName}Props` | `FlybyHeroProps` |
| Event handlers | `on{Event}` | `onSkip`, `onComplete` |
| Boolean props | `is/has/should` prefix | `isLoading`, `hasError` |

**CSS/Tailwind:**

| Element | Pattern | Example |
|---------|---------|--------|
| Custom classes | kebab-case | `flyby-container` |
| CSS variables | `--{category}-{name}` | `--color-primary` |

### Structure Patterns

**Project Structure:**
```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Route group for public pages
│   │   ├── page.tsx        # Home
│   │   ├── about/
│   │   └── contact/
│   ├── projects/
│   │   ├── page.tsx        # Project list
│   │   └── [slug]/page.tsx # Project detail
│   ├── layout.tsx          # Root layout
│   └── globals.css
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer, Nav
│   ├── projects/           # ProjectCard, ProjectGrid, etc.
│   └── shared/             # Reusable components
├── lib/
│   ├── utils.ts            # cn() and helpers
│   └── projects.ts         # Project data fetching
├── hooks/
│   └── use-reduced-motion.ts
└── types/
    └── project.ts          # TypeScript interfaces
content/
└── projects/               # MDX files
public/
└── projects/               # Screenshots
```

**Component File Structure:**
```tsx
// Single file per component (simple components)
// components/projects/ProjectCard.tsx

// Multi-file for complex components
// components/projects/FlybyHero/
//   ├── index.tsx          # Main export
//   ├── FlybyHero.tsx      # Implementation
//   ├── useFlybyAnimation.ts # Hook
//   └── types.ts           # Types
```

### Format Patterns

**TypeScript Interfaces:**
```typescript
// types/project.ts
export interface Project {
  slug: string;
  title: string;
  url: string;
  screenshot: string;
  industry: string[];
  tech: string[];
  year: number;
  featured: boolean;
  showInPersonal: boolean;
  showInAgency: boolean;
  iframeAllowed: boolean;
  description?: string;
}
```

**MDX Frontmatter Schema:**
```yaml
---
title: "Project Title"           # Required
url: "https://example.com"       # Required
screenshot: "/projects/slug.jpg" # Required
industry: ["cannabis"]           # Required, array
tech: ["React", "Next.js"]       # Required, array
year: 2024                       # Required, number
featured: false                  # Optional, default false
showInPersonal: true             # Optional, default true
showInAgency: true               # Optional, default true
iframeAllowed: true              # Optional, default true
---
```

### Process Patterns

**Loading States:**
```tsx
// Use Suspense + loading.tsx for route-level
// Use local state for component-level
const [isLoading, setIsLoading] = useState(true);

// Skeleton pattern for content
{isLoading ? <ProjectCardSkeleton /> : <ProjectCard />}
```

**Error Handling:**
```tsx
// Route-level: error.tsx boundary
// Component-level: try/catch with fallback UI
// Iframe errors: onError fallback to screenshot
```

**Animation Reduced Motion:**
```tsx
// Always check prefers-reduced-motion
const prefersReducedMotion = useReducedMotion();
if (prefersReducedMotion) return <StaticGrid />;
```

### Enforcement Guidelines

**All AI Agents MUST:**
1. Use TypeScript strict mode (no `any` types without justification)
2. Follow file naming conventions above
3. Use shadcn/ui components before creating custom
4. Respect `prefers-reduced-motion` for all animations
5. Include `alt` text on all images
6. Use semantic HTML elements

**Anti-Patterns to Avoid:**
- ❌ `any` type without comment explaining why
- ❌ Inline styles (use Tailwind classes)
- ❌ Direct DOM manipulation (use React state)
- ❌ Hardcoded strings (use constants or content files)
- ❌ Console.log in production code
- ❌ Non-semantic divs when semantic elements exist

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
portfolio/
├── README.md
├── package.json
├── package-lock.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── components.json                # shadcn/ui config
├── .env.local                     # Formspree ID, etc.
├── .env.example
├── .gitignore
├── .eslintrc.json
├── .prettierrc
│
├── content/
│   └── projects/                  # MDX project files
│       ├── la-vida-gardens.mdx
│       ├── native-sun-cannabis.mdx
│       ├── elevated-roots-ma.mdx
│       └── ...                    # 150+ project files
│
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg               # Default OG image
│   ├── projects/                  # Project screenshots
│   │   ├── la-vida-gardens.jpg
│   │   ├── native-sun-cannabis.jpg
│   │   └── ...
│   └── fonts/                     # Local fonts (if needed)
│
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind + CSS variables
│   │   ├── layout.tsx             # Root layout (fonts, providers)
│   │   ├── page.tsx               # Home (flyby hero + featured)
│   │   ├── loading.tsx            # Root loading state
│   │   ├── error.tsx              # Root error boundary
│   │   ├── not-found.tsx          # 404 page
│   │   │
│   │   ├── projects/
│   │   │   ├── page.tsx           # Project grid with filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Project detail
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx           # About/skills
│   │   │
│   │   └── contact/
│   │       └── page.tsx           # Contact form + calendar
│   │
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── command.tsx
│   │   │   └── toast.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Nav + mode toggle + theme
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx      # Sheet-based mobile nav
│   │   │   └── SkipLink.tsx       # Accessibility skip link
│   │   │
│   │   ├── projects/
│   │   │   ├── FlybyHero/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── FlybyHero.tsx
│   │   │   │   ├── useFlybyAnimation.ts
│   │   │   │   └── FlybyHeroStatic.tsx   # Reduced motion fallback
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectCardSkeleton.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   ├── ProjectFilter.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   ├── LiveIframeEmbed.tsx
│   │   │   └── StatsCounter.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── ModeToggle.tsx     # Personal ↔ Agency
│   │   │   ├── ThemeToggle.tsx    # Dark ↔ Light
│   │   │   ├── ContactForm.tsx
│   │   │   └── CalendarEmbed.tsx
│   │   │
│   │   └── providers/
│   │       ├── ThemeProvider.tsx
│   │       └── ModeProvider.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts               # cn() helper
│   │   ├── projects.ts            # getProjects(), getProjectBySlug()
│   │   ├── filters.ts             # Filter logic and URL parsing
│   │   └── constants.ts           # Tech tags, industries, etc.
│   │
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   ├── useMode.ts             # Personal/Agency mode
│   │   ├── useFilters.ts          # URL-synced filter state
│   │   └── useIframeLoaded.ts
│   │
│   └── types/
│       ├── project.ts             # Project interface
│       └── index.ts               # Re-exports
│
└── .github/
    └── workflows/
        └── ci.yml                 # Lint + type check on PR
```

### Architectural Boundaries

**Page Boundaries:**

| Page | Responsibility | Data Source |
|------|---------------|-------------|
| `/` (Home) | Flyby animation, featured projects | Static MDX at build |
| `/projects` | Filterable grid, all projects | Static MDX at build |
| `/projects/[slug]` | Single project detail, iframe | Static MDX at build |
| `/about` | Skills, experience | Static content |
| `/contact` | Form, calendar | Formspree external |

**Component Boundaries:**

| Component | Owns State | Receives Props |
|-----------|-----------|----------------|
| `FlybyHero` | Animation state, skip state | Projects array, onComplete |
| `ProjectGrid` | None | Filtered projects |
| `ProjectFilter` | None (URL state) | Filter options, onChange |
| `LiveIframeEmbed` | Load state, error state | URL, fallback image |
| `ModeToggle` | None (context) | None |

**Data Flow:**
```
MDX Files → getProjects() → Page Component → Child Components
                ↓
         Build-time only (SSG)
```

### Requirements to Structure Mapping

| PRD Requirement | Files |
|-----------------|-------|
| FR1: Flyby animation | `components/projects/FlybyHero/` |
| FR2: Skip animation | `useFlybyAnimation.ts` → onSkip handler |
| FR3-7: Project grid + filters | `ProjectGrid.tsx`, `ProjectFilter.tsx`, `lib/filters.ts` |
| FR9-12: Live iframes | `LiveIframeEmbed.tsx` |
| FR13-16: Mode switching | `ModeProvider.tsx`, `ModeToggle.tsx`, `useMode.ts` |
| FR27-28: Dark/light mode | `ThemeProvider.tsx`, `ThemeToggle.tsx` |
| FR29: Reduced motion | `useReducedMotion.ts`, `FlybyHeroStatic.tsx` |

### Integration Points

**External Services:**

| Service | Integration Point | Config |
|---------|------------------|--------|
| Formspree | `ContactForm.tsx` | `.env.local` → `NEXT_PUBLIC_FORMSPREE_ID` |
| Cal.com | `CalendarEmbed.tsx` | Embed URL in component |
| Vercel Analytics | `layout.tsx` | `@vercel/analytics` import |

**Internal Communication:**
```
URL Params ↔ useFilters() ↔ ProjectFilter
     ↓
ProjectGrid ← filtered projects

Context ↔ useMode() ↔ ModeToggle
     ↓
All components read mode for content switching
```

---

## Architecture Validation Results

### Coherence Validation ✅

| Check | Status | Notes |
|-------|--------|-------|
| **Decision Compatibility** | ✅ Pass | Next.js 14+ + shadcn/ui + Tailwind + GSAP all compatible |
| **Version Compatibility** | ✅ Pass | All specified versions are current and work together |
| **Pattern Alignment** | ✅ Pass | Naming patterns match Next.js/React conventions |
| **No Contradictions** | ✅ Pass | SSG approach consistent throughout |

### Requirements Coverage Validation ✅

**Functional Requirements (37 total):**

| Category | Status | Architecture Support |
|----------|--------|---------------------|
| FR1-8: Portfolio Showcase | ✅ | `FlybyHero/`, `ProjectGrid.tsx`, `ProjectFilter.tsx` |
| FR9-12: Live Iframes | ✅ | `LiveIframeEmbed.tsx` with fallback |
| FR13-16: Mode Switching | ✅ | `ModeProvider.tsx`, `useMode.ts` |
| FR17-22: Engagement | ✅ | `ContactForm.tsx`, `CalendarEmbed.tsx` |
| FR23-26: Discovery | ✅ | App Router pages, static generation |
| FR27-31: Accessibility | ✅ | `useReducedMotion.ts`, semantic HTML rules |
| FR32-37: Admin (Phase 2) | ⏳ | Deferred — MDX manual editing for MVP |

**Non-Functional Requirements (23 total):**

| Category | Target | Architecture Support |
|----------|--------|---------------------|
| NFR1-8: Performance | Lighthouse 90+ | SSG, Next.js Image, code splitting |
| NFR9-14: Accessibility | WCAG AA | Semantic HTML, reduced motion, focus management |
| NFR15-20: SEO | SEO 95+ | Static pages, meta per route, structured data |
| NFR21-23: Security | HTTPS, sanitized | Formspree handles, Vercel HTTPS |

### Implementation Readiness ✅

| Check | Status |
|-------|--------|
| All tech decisions documented with rationale | ✅ |
| Complete project structure with file paths | ✅ |
| Naming conventions with examples | ✅ |
| Component boundaries defined | ✅ |
| Data flow documented | ✅ |
| Integration points specified | ✅ |

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context analyzed
- [x] Scale assessed (150+ projects, SSG-friendly)
- [x] Constraints identified (iframe blocking, animation performance)
- [x] Cross-cutting concerns mapped

**✅ Technology Decisions**
- [x] Framework: Next.js 14+ App Router
- [x] UI: shadcn/ui + Tailwind CSS
- [x] Animation: GSAP + Framer Motion
- [x] Data: MDX files
- [x] Forms: Formspree
- [x] Analytics: Vercel Analytics
- [x] Deployment: Vercel

**✅ Implementation Patterns**
- [x] File naming conventions
- [x] Component patterns
- [x] TypeScript interfaces
- [x] Error handling
- [x] Loading states
- [x] Accessibility patterns

**✅ Project Structure**
- [x] Complete directory tree
- [x] All components mapped to requirements
- [x] Integration points defined

### Architecture Readiness Assessment

**Overall Status:** ✅ READY FOR IMPLEMENTATION

**Confidence Level:** High

**Strengths:**
- Simple, proven tech stack (Next.js + shadcn)
- SSG eliminates runtime complexity
- Clear component boundaries
- Comprehensive patterns prevent agent conflicts

**Future Enhancements (Phase 2):**
- Admin dashboard with database
- Automated testing suite
- Advanced CI/CD pipeline

