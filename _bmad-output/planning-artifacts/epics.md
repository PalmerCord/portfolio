---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories', 'step-04-final-validation']
inputDocuments: ['prd.md', 'ux-design-specification.md', 'architecture.md']
project_name: 'Portfolio'
date: '2026-03-30'
status: complete
completedAt: '2026-03-30'
---

# Portfolio - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for the Portfolio project, decomposing requirements from the PRD, UX Design Specification, and Architecture into implementable stories.

---

## Requirements Inventory

### Functional Requirements

**Portfolio Showcase (FR1-FR8)**
| ID | Requirement |
|----|-------------|
| FR1 | Visitor can view an animated flyby of project screenshots on initial page load |
| FR2 | Visitor can skip or bypass the flyby animation |
| FR3 | Visitor can view all projects in a browsable grid layout |
| FR4 | Visitor can filter projects by industry (cannabis, e-commerce, etc.) |
| FR5 | Visitor can filter projects by technology stack |
| FR6 | Visitor can filter projects by year built |
| FR7 | Visitor can see the total count of projects (150+) prominently displayed |
| FR8 | Visitor can view a project detail page with metadata and description |

**Live Project Interaction (FR9-FR12)**
| ID | Requirement |
|----|-------------|
| FR9 | Visitor can view featured projects as interactive iframe embeds |
| FR10 | Visitor can interact with live embedded sites (scroll, click, navigate) |
| FR11 | System displays static screenshot fallback when iframe is blocked |
| FR12 | Visitor can open the live site in a new tab from the embed |

**Mode Switching (FR13-FR16)**
| ID | Requirement |
|----|-------------|
| FR13 | Visitor can toggle between Personal mode and Agency mode |
| FR14 | System displays appropriate branding based on current mode (cordpalmer.com vs swrv.tech) |
| FR15 | System displays appropriate tagline based on current mode |
| FR16 | System maintains mode selection across page navigation |

**Visitor Engagement (FR17-FR22)**
| ID | Requirement |
|----|-------------|
| FR17 | Visitor can view an about section with professional summary |
| FR18 | Visitor can view skills and technology expertise |
| FR19 | Visitor can view work experience and background |
| FR20 | Visitor can submit a contact form inquiry |
| FR21 | Visitor can book a meeting via embedded calendar widget |
| FR22 | Visitor can access social links and professional profiles |

**Content Discovery (FR23-FR26)**
| ID | Requirement |
|----|-------------|
| FR23 | Visitor can navigate between sections via primary navigation |
| FR24 | Visitor can access any page via direct URL (shareable links) |
| FR25 | System provides breadcrumb or context indicators on project pages |
| FR26 | Search engines can crawl and index all public pages |

**Appearance & Accessibility (FR27-FR31)**
| ID | Requirement |
|----|-------------|
| FR27 | Visitor can toggle between dark mode and light mode |
| FR28 | System respects user's system preference for color scheme |
| FR29 | System respects user's preference for reduced motion |
| FR30 | Visitor can navigate all functionality via keyboard |
| FR31 | Screen readers can access all content and interactive elements |

**Content Management - Admin Phase 2 (FR32-FR37)**
| ID | Requirement |
|----|-------------|
| FR32 | Admin can add new projects with metadata |
| FR33 | Admin can edit existing project information |
| FR34 | Admin can archive or remove projects |
| FR35 | Admin can upload and manage project screenshots |
| FR36 | Admin can preview changes before publishing |
| FR37 | Admin can view portfolio analytics summary |

---

### Non-Functional Requirements

**Performance (NFR1-NFR8)**
| ID | Requirement | Target |
|----|-------------|--------|
| NFR1 | Lighthouse Performance Score | ≥ 90 |
| NFR2 | Largest Contentful Paint (LCP) | < 2.5s |
| NFR3 | First Input Delay (FID) | < 100ms |
| NFR4 | Cumulative Layout Shift (CLS) | < 0.1 |
| NFR5 | Time to Interactive (TTI) | < 3.8s |
| NFR6 | Initial bundle size (gzipped JS) | < 200KB |
| NFR7 | Flyby animation maintains 60fps | ≥ 60fps |
| NFR8 | Project grid loads progressively | First 12 visible < 1s |

**Accessibility (NFR9-NFR14)**
| ID | Requirement | Target |
|----|-------------|--------|
| NFR9 | WCAG 2.1 AA compliance | 100% |
| NFR10 | Color contrast ratio (text) | ≥ 4.5:1 |
| NFR11 | Color contrast ratio (large text) | ≥ 3:1 |
| NFR12 | Keyboard navigation coverage | 100% of interactive elements |
| NFR13 | Screen reader compatibility | VoiceOver + NVDA tested |
| NFR14 | Reduced motion support | Animation disabled when preference set |

**SEO (NFR15-NFR20)**
| ID | Requirement | Target |
|----|-------------|--------|
| NFR15 | Lighthouse SEO Score | ≥ 95 |
| NFR16 | All pages have unique meta titles | 100% |
| NFR17 | All pages have meta descriptions | 100% |
| NFR18 | All images have alt text | 100% |
| NFR19 | Sitemap generated and submitted | Present + indexed |
| NFR20 | Structured data valid | No errors |

**Security (NFR21-NFR23)**
| ID | Requirement | Target |
|----|-------------|--------|
| NFR21 | HTTPS enforced | 100% of requests |
| NFR22 | Contact form data sanitized | No injection vulnerabilities |
| NFR23 | No sensitive data in client bundle | 0 API keys/secrets exposed |

---

### Additional Requirements (Architecture)

**AR1: Project Initialization**
- Use `create-next-app@latest` with TypeScript, Tailwind, ESLint, App Router, src directory
- Initialize shadcn/ui via CLI
- Install GSAP, @gsap/react, framer-motion
- Install Geist fonts

**AR2: Data Architecture**
- MDX files for project content in `content/projects/`
- Frontmatter schema: title, url, screenshot, industry[], tech[], year, featured, showInPersonal, showInAgency, iframeAllowed

**AR3: Image Pipeline**
- Local images in `public/projects/`
- Next.js Image component with automatic optimization
- Lazy loading, blur placeholders, responsive sizes

**AR4: State Management**
- URL params for filters (shareable)
- React Context + localStorage for theme
- URL/subdomain for mode detection

**AR5: Contact Form**
- Formspree integration (zero backend)
- Fields: name, email, project type, message

**AR6: Analytics**
- Vercel Analytics + Speed Insights
- Custom events for flyby completion, project clicks, contact submissions

**AR7: Naming Conventions**
- Components: PascalCase (`ProjectCard.tsx`)
- Pages: kebab-case folders (`app/projects/[slug]/page.tsx`)
- Utilities: camelCase (`lib/getProjects.ts`)
- Content: kebab-case (`content/projects/la-vida-gardens.mdx`)

**AR8: Project Structure**
```
portfolio/
├── content/projects/          # MDX project files
├── public/projects/           # Screenshots
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── projects/          # Project pages
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   ├── components/
│   │   ├── ui/                # shadcn/ui
│   │   ├── layout/            # Header, Footer
│   │   ├── projects/          # ProjectCard, FlybyHero
│   │   └── shared/            # Reusable components
│   ├── lib/                   # Utilities
│   ├── hooks/                 # Custom hooks
│   └── types/                 # TypeScript interfaces
```

**AR9: Anti-Patterns to Avoid**
- No `any` types without justification
- No inline styles (use Tailwind)
- No direct DOM manipulation
- No hardcoded strings
- No console.log in production

---

### UX Design Requirements

**UX-DR1: FlybyHero Component**
- Choreographed GSAP animation showing projects flying into grid
- Skip button visible immediately
- Duration toggle (5s normal, 3s returning visitor)
- Reduced motion: instant grid reveal
- 60fps performance target

**UX-DR2: ProjectCard Component**
- Thumbnail, title, tech badges, hover to expand details
- States: default, hover, active, loading
- Variants: compact (grid), expanded (detail preview)
- Alt text on all images

**UX-DR3: LiveIframeEmbed Component**
- Interactive iframe for featured projects
- Loading state with skeleton
- Error fallback to screenshot
- "Open in new tab" link
- Sandbox attribute for security

**UX-DR4: ModeToggle Component**
- Personal ↔ Agency toggle with animated transition
- Persists via URL or localStorage
- Visual differentiation between modes
- `aria-pressed` state

**UX-DR5: ProjectFilter Component**
- Filter chips for Technology, Industry, Year
- Horizontal bar (desktop), bottom sheet (mobile)
- URL synced for shareability
- Clear all button when filters active
- Results count announced to screen readers

**UX-DR6: StatsCounter Component**
- Animated counter for "150+ Sites Built"
- Count-up animation (2000ms)
- Static number in `aria-label` for accessibility
- Reduced motion: show final value immediately

**UX-DR7: ProjectDetailPanel Component**
- Slide-in panel from right (60% width desktop, 100% mobile)
- Live iframe + metadata display
- Previous/next navigation
- Focus trap while open
- Escape key closes

**UX-DR8: Design Token Consistency**
- All components use shadcn/ui CSS variables
- `--background`, `--foreground`, `--primary`, `--secondary`
- `--muted`, `--accent`, `--destructive`, `--border`, `--ring`

**UX-DR9: Button Hierarchy**
- Primary: Solid fill, one per view (CTAs)
- Secondary: Outline (supporting actions)
- Ghost: Text only (tertiary)
- Icon: Icon only (theme toggle, close)
- Sizes: sm, default, lg

**UX-DR10: Toast/Feedback System**
- Success (green), Error (red), Warning (amber), Info (blue)
- Position: bottom-right desktop, bottom-center mobile
- Max 3 visible, auto-dismiss timing based on type

**UX-DR11: Skeleton Loading**
- Match exact layout of content
- Subtle pulse animation
- 3 placeholder cards minimum

**UX-DR12: Responsive Breakpoints**
- Mobile (320px+): 2-column grid, no flyby, bottom sheet details
- Tablet (768px+): 3-column grid, simplified flyby, full-screen details
- Desktop (1024px+): 4-column grid, full 3D flyby, side panel details
- Large (1440px+): 6-column grid

**UX-DR13: Keyboard Navigation**
- Tab through all interactive elements
- Escape closes any overlay
- ⌘K / Ctrl+K opens search
- Arrow keys navigate in detail view
- Skip link to main content

**UX-DR14: Focus Indicators**
- 2px ring, offset 2px
- Uses `--ring` color token
- Never remove focus styles

---

### FR Coverage Map

| Requirement | Epic | Description |
|-------------|------|-------------|
| AR1-AR9 | Epic 1 | Project Foundation & Setup |
| FR3 | Epic 2 | Browsable grid layout |
| FR4 | Epic 2 | Filter by industry |
| FR5 | Epic 2 | Filter by technology |
| FR6 | Epic 2 | Filter by year |
| FR7 | Epic 2 | Project count display |
| FR8 | Epic 2, 3 | Project detail page |
| FR9 | Epic 3 | Interactive iframe embeds |
| FR10 | Epic 3 | Live site interaction |
| FR11 | Epic 3 | Screenshot fallback |
| FR12 | Epic 3 | Open in new tab |
| FR23 | Epic 4 | Primary navigation |
| FR24 | Epic 4 | Direct URL access |
| FR25 | Epic 4 | Breadcrumb indicators |
| FR26 | Epic 4 | SEO crawlability |
| FR27 | Epic 5 | Dark/light toggle |
| FR28 | Epic 5 | System color preference |
| FR29 | Epic 5 | Reduced motion preference |
| FR30 | Epic 5 | Keyboard navigation |
| FR31 | Epic 5 | Screen reader access |
| FR13 | Epic 6 | Mode toggle |
| FR14 | Epic 6 | Mode-based branding |
| FR15 | Epic 6 | Mode-based tagline |
| FR16 | Epic 6 | Mode persistence |
| FR17 | Epic 7 | About section |
| FR18 | Epic 7 | Skills display |
| FR19 | Epic 7 | Work experience |
| FR20 | Epic 7 | Contact form |
| FR21 | Epic 7 | Calendar embed |
| FR22 | Epic 7 | Social links |
| FR1 | Epic 8 | Flyby animation |
| FR2 | Epic 8 | Skip animation |
| NFR1-NFR8 | Epic 9 | Performance optimization |
| FR32-FR37 | Epic 10 | Admin dashboard (Phase 2) |
| UX-DR2, UX-DR5, UX-DR6, UX-DR11 | Epic 2 | Grid components |
| UX-DR3, UX-DR7 | Epic 3 | Detail/embed components |
| NFR15-NFR20 | Epic 4 | SEO requirements |
| NFR9-NFR14, UX-DR8-DR10, UX-DR13-DR14 | Epic 5 | Accessibility |
| UX-DR4 | Epic 6 | ModeToggle component |
| AR5, AR6 | Epic 7 | Contact form, analytics |
| NFR7, UX-DR1 | Epic 8 | Animation performance |
| UX-DR12 | Epic 9 | Responsive breakpoints |

---

## Epic List

### Epic 1: Project Foundation & Setup
Establish the development environment with Next.js, shadcn/ui, GSAP, and content architecture so that development can proceed efficiently with proper tooling and structure.

**Requirements covered:** AR1, AR2, AR3, AR4, AR5, AR6, AR7, AR8, AR9

---

### Epic 2: Project Grid & Browsing
Enable visitors to browse and filter the 150+ project portfolio through an intuitive grid interface with filtering capabilities.

**Requirements covered:** FR3, FR4, FR5, FR6, FR7, FR8 | UX-DR2, UX-DR5, UX-DR6, UX-DR11

---

### Epic 3: Project Detail & Live Embeds
Allow visitors to view detailed project information and interact with live embedded websites to verify the quality of work.

**Requirements covered:** FR8, FR9, FR10, FR11, FR12 | UX-DR3, UX-DR7

---

### Epic 4: Site Navigation & SEO
Make the site discoverable by search engines and easy to navigate with proper routing, meta tags, and structured data.

**Requirements covered:** FR23, FR24, FR25, FR26 | NFR15, NFR16, NFR17, NFR18, NFR19, NFR20

---

### Epic 5: Theme & Accessibility
Ensure the site works for all users regardless of their visual preferences, motion sensitivity, or assistive technology needs.

**Requirements covered:** FR27, FR28, FR29, FR30, FR31 | NFR9, NFR10, NFR11, NFR12, NFR13, NFR14 | UX-DR8, UX-DR9, UX-DR10, UX-DR13, UX-DR14

---

### Epic 6: Mode Switching (Personal ↔ Agency)
Enable the site to serve dual purposes with appropriate branding, content, and messaging based on whether visitors arrive at cordpalmer.com or swrv.tech.

**Requirements covered:** FR13, FR14, FR15, FR16 | UX-DR4

---

### Epic 7: About & Contact
Allow visitors to learn about Cord's background, skills, and experience, and easily initiate contact via form or calendar booking.

**Requirements covered:** FR17, FR18, FR19, FR20, FR21, FR22 | AR5, AR6

---

### Epic 8: Flyby Hero Animation
Create an impressive first impression with a choreographed GSAP animation that showcases the volume of work and differentiates from typical portfolios.

**Requirements covered:** FR1, FR2 | NFR7 | UX-DR1

---

### Epic 9: Performance & Polish
Optimize the site for speed, smooth interactions, and delightful micro-animations to meet performance targets and create a premium feel.

**Requirements covered:** NFR1, NFR2, NFR3, NFR4, NFR5, NFR6, NFR8 | UX-DR12

---

### Epic 10: Admin Dashboard (Phase 2 - Deferred)
Enable Cord to manage projects, upload images, and view analytics without editing code directly.

**Requirements covered:** FR32, FR33, FR34, FR35, FR36, FR37

**Note:** This epic is deferred to Phase 2 per PRD scope. MVP uses direct MDX file editing.

---

## Epic 1: Project Foundation & Setup

Establish the development environment with Next.js, shadcn/ui, GSAP, and content architecture so that development can proceed efficiently with proper tooling and structure.

### Story 1.1: Initialize Next.js Project

As a **developer**,
I want a properly configured Next.js project with TypeScript and Tailwind,
So that I can begin building the portfolio with modern tooling.

**Acceptance Criteria:**

**Given** I have Node.js 18+ installed
**When** I run the initialization command
**Then** a Next.js 14+ project is created with:
- TypeScript strict mode enabled
- Tailwind CSS configured
- ESLint enabled
- App Router (src/app directory)
- Import aliases (`@/*`)

**And** the project runs successfully with `npm run dev`
**And** Lighthouse performance baseline is established

---

### Story 1.2: Setup shadcn/ui & Fonts

As a **developer**,
I want shadcn/ui initialized with Geist fonts,
So that I have a consistent design system foundation.

**Acceptance Criteria:**

**Given** the Next.js project from Story 1.1 exists
**When** I run shadcn/ui init and configure fonts
**Then** components.json is created with proper configuration
**And** Geist Sans and Geist Mono fonts are installed and configured in Tailwind
**And** CSS variables for theming are in globals.css
**And** the cn() utility function is available in lib/utils.ts

---

### Story 1.3: Install Animation Libraries

As a **developer**,
I want GSAP and Framer Motion installed,
So that I can implement the flyby animation and micro-interactions.

**Acceptance Criteria:**

**Given** the project has shadcn/ui configured
**When** I install the animation packages
**Then** gsap, @gsap/react, and framer-motion are in dependencies
**And** GSAP is registered in a client component wrapper
**And** a simple animation test component verifies both libraries work
**And** bundle size remains reasonable (< 50KB added gzipped)

---

### Story 1.4: Create Content Architecture

As a **developer**,
I want MDX content structure with TypeScript interfaces,
So that project data is type-safe and easy to manage.

**Acceptance Criteria:**

**Given** the animation libraries are installed
**When** I set up the content architecture
**Then** `content/projects/` directory exists
**And** `types/project.ts` defines the Project interface matching frontmatter schema
**And** `lib/projects.ts` has getProjects() and getProjectBySlug() functions
**And** 3 sample MDX project files exist with valid frontmatter
**And** TypeScript validates frontmatter against the interface

---

### Story 1.5: Implement Base Layout

As a **visitor**,
I want a consistent site layout with header and footer,
So that I can navigate the site and understand where I am.

**Acceptance Criteria:**

**Given** content architecture exists
**When** I view any page on the site
**Then** a fixed Header component is visible with:
- Logo/site title
- Placeholder navigation links
- Placeholder theme toggle

**And** a Footer component is visible with:
- Copyright text
- Social link placeholders

**And** a SkipLink component appears on focus for accessibility
**And** the layout uses semantic HTML (header, main, footer elements)
**And** fonts are applied consistently

---

### Story 1.6: Configure Development Tooling

As a **developer**,
I want proper linting, formatting, and environment setup,
So that code quality is consistent and deployment is ready.

**Acceptance Criteria:**

**Given** the base layout is implemented
**When** I check the project configuration
**Then** ESLint extends Next.js recommended rules
**And** Prettier is configured for consistent formatting
**And** `.env.example` documents required environment variables
**And** `.env.local` is in .gitignore
**And** Path aliases work (`@/components/*`, `@/lib/*`)
**And** `npm run lint` passes with no errors
**And** `npm run build` completes successfully

---

## Epic 2: Project Grid & Browsing

Enable visitors to browse and filter the 150+ project portfolio through an intuitive grid interface with filtering capabilities.

### Story 2.1: Create ProjectCard Component

As a **visitor**,
I want to see project cards with key information at a glance,
So that I can quickly assess which projects interest me.

**Acceptance Criteria:**

**Given** I am viewing the project grid
**When** I look at a project card
**Then** I see:
- Project screenshot thumbnail (optimized with Next.js Image)
- Project title
- Technology badges (max 3 visible, +N indicator)
- Industry tag

**And** on hover, the card elevates with shadow
**And** the card is keyboard focusable with visible focus ring
**And** all images have descriptive alt text

---

### Story 2.2: Build Project Grid Layout

As a **visitor**,
I want to see all projects in an organized grid,
So that I can browse the full portfolio visually.

**Acceptance Criteria:**

**Given** I navigate to the projects section
**When** the page loads
**Then** projects are displayed in a responsive grid:
- Mobile: 2 columns
- Tablet: 3 columns
- Desktop: 4 columns
- Large: 6 columns

**And** the grid uses CSS Grid for layout
**And** cards maintain consistent aspect ratio
**And** the first 12 projects are visible without scrolling (above fold)

---

### Story 2.3: Implement Project Filtering

As a **visitor**,
I want to filter projects by industry, technology, and year,
So that I can find work relevant to my interests.

**Acceptance Criteria:**

**Given** I am viewing the project grid
**When** I click a filter chip (e.g., "Cannabis", "React", "2024")
**Then** the grid updates instantly to show only matching projects
**And** active filters are visually indicated (filled chip with × icon)
**And** a "Clear all" button appears when any filter is active
**And** the URL updates with filter params (e.g., `?tech=react&industry=cannabis`)
**And** the filtered count is displayed (e.g., "47 of 150+ projects")
**And** filter changes are announced to screen readers via live region

---

### Story 2.4: Add StatsCounter Component

As a **visitor**,
I want to see the total project count prominently displayed,
So that I immediately understand the volume of work completed.

**Acceptance Criteria:**

**Given** I land on the site or projects page
**When** the counter enters the viewport
**Then** the number animates from 0 to 150+ over 2 seconds
**And** the animation uses ease-out easing
**And** the label "Sites Built" appears below the number
**And** if `prefers-reduced-motion` is set, the final value displays immediately
**And** the static value is available in `aria-label` for screen readers

---

### Story 2.5: Create Projects Page

As a **visitor**,
I want a dedicated projects page with the full grid and filters,
So that I can explore all portfolio work in one place.

**Acceptance Criteria:**

**Given** I navigate to `/projects`
**When** the page loads
**Then** I see:
- Page title "Projects" with StatsCounter
- ProjectFilter component with all filter options
- ProjectGrid displaying all projects
- Proper meta title and description for SEO

**And** direct URL access works (e.g., `/projects?tech=nextjs`)
**And** filter state is restored from URL params on page load
**And** page is statically generated at build time

---

### Story 2.6: Add Skeleton Loading States

As a **visitor**,
I want to see placeholder content while projects load,
So that I understand content is coming and the layout doesn't shift.

**Acceptance Criteria:**

**Given** I navigate to the projects page
**When** content is loading
**Then** skeleton cards appear matching the exact layout of real cards
**And** skeletons have a subtle pulse animation
**And** at least 6 skeleton cards are shown (first viewport)
**And** CLS (Cumulative Layout Shift) remains < 0.1
**And** skeletons are hidden from screen readers with `aria-hidden`

---

## Epic 3: Project Detail & Live Embeds

Allow visitors to view detailed project information and interact with live embedded websites to verify the quality of work.

### Story 3.1: Create LiveIframeEmbed Component

As a **visitor**,
I want to interact with a live embedded version of a project,
So that I can verify the quality of the actual production site.

**Acceptance Criteria:**

**Given** I am viewing a featured project detail
**When** the iframe loads
**Then** I can scroll, click, and navigate within the embedded site
**And** the iframe has proper sandbox attributes for security
**And** a loading skeleton appears while the iframe loads
**And** the iframe title attribute describes the embedded content
**And** the iframe has a minimum height of 500px on desktop

---

### Story 3.2: Build ProjectDetailPanel Component

As a **visitor**,
I want to see detailed information about a project in a panel,
So that I can learn more without leaving the grid context.

**Acceptance Criteria:**

**Given** I click on a project card
**When** the detail panel opens
**Then** the panel slides in from the right (60% width on desktop, 100% on mobile)
**And** a backdrop blur appears behind the panel
**And** I see: project title, description, tech stack, year, industry tags
**And** the LiveIframeEmbed (or fallback) is displayed
**And** an "Open in New Tab" link is visible
**And** focus is trapped within the panel while open
**And** pressing Escape closes the panel
**And** focus returns to the trigger element on close

---

### Story 3.3: Implement Screenshot Fallback

As a **visitor**,
I want to see a screenshot when a live embed is unavailable,
So that I can still assess the project's visual quality.

**Acceptance Criteria:**

**Given** a project has `iframeAllowed: false` or the iframe fails to load
**When** I view the project detail
**Then** a high-quality screenshot is displayed instead of the iframe
**And** a message explains "This site cannot be embedded"
**And** the "Open in New Tab" link is more prominently displayed
**And** the experience is seamless with no error messages

---

### Story 3.4: Add Project Navigation

As a **visitor**,
I want to navigate between projects without closing the panel,
So that I can efficiently browse multiple projects.

**Acceptance Criteria:**

**Given** the project detail panel is open
**When** I click the next/previous buttons or press arrow keys
**Then** the panel content transitions to the adjacent project
**And** the panel remains open during transition
**And** the URL updates to reflect the current project
**And** navigation wraps (last → first, first → last)
**And** left/right arrow keyboard navigation works when panel is focused

---

### Story 3.5: Create Project Detail Page

As a **visitor**,
I want to access a project directly via URL,
So that I can share specific projects with others.

**Acceptance Criteria:**

**Given** I navigate to `/projects/[slug]` directly
**When** the page loads
**Then** the full project detail view is displayed
**And** the page has unique meta title: "{Project Title} | Cord Palmer"
**And** the page has a meta description from the project content
**And** Open Graph tags are populated for social sharing
**And** a breadcrumb shows: Projects > {Project Title}
**And** the page is statically generated at build time for all projects

---

## Epic 4: Site Navigation & SEO

Make the site discoverable by search engines and easy to navigate with proper routing, meta tags, and structured data.

### Story 4.1: Implement Primary Navigation

As a **visitor**,
I want clear navigation between site sections,
So that I can easily find what I'm looking for.

**Acceptance Criteria:**

**Given** I am on any page
**When** I look at the header
**Then** I see navigation links: Projects, About, Contact
**And** the current page link is visually indicated (underline)
**And** on mobile, a hamburger menu reveals a sheet overlay
**And** mobile nav items are full-width and easy to tap (44px+ touch target)
**And** navigation is keyboard accessible with visible focus states
**And** `aria-current="page"` is set on the active link

---

### Story 4.2: Add Page Meta Tags

As a **search engine** or **social platform**,
I want unique meta information for each page,
So that content is properly indexed and shared.

**Acceptance Criteria:**

**Given** any page on the site
**When** I inspect the HTML head
**Then** I see:
- Unique `<title>` tag (e.g., "Projects | Cord Palmer")
- Unique `<meta name="description">` (150-160 chars)
- `og:title`, `og:description`, `og:image` tags
- `twitter:card`, `twitter:title`, `twitter:description` tags
- Canonical URL tag

**And** no duplicate meta tags exist
**And** Lighthouse SEO score is 95+

---

### Story 4.3: Create Sitemap & Robots

As a **search engine crawler**,
I want a sitemap and robots.txt,
So that I can efficiently discover and index all pages.

**Acceptance Criteria:**

**Given** the site is deployed
**When** I access `/sitemap.xml`
**Then** all public pages are listed with lastmod dates
**And** project detail pages are included dynamically
**And** the sitemap is valid XML

**When** I access `/robots.txt`
**Then** crawling is allowed for all public pages
**And** the sitemap URL is referenced

---

### Story 4.4: Implement Structured Data

As a **search engine**,
I want structured data markup,
So that I can display rich results for the portfolio.

**Acceptance Criteria:**

**Given** any page on the site
**When** I inspect the JSON-LD
**Then** the homepage includes:
- `Person` schema with name, jobTitle, url, sameAs (social links)
- `WebSite` schema with name, url

**And** project pages include:
- `CreativeWork` schema with name, description, url, image

**And** structured data validates without errors in Google's Rich Results Test

---

### Story 4.5: Add Breadcrumb Navigation

As a **visitor**,
I want to see where I am in the site hierarchy,
So that I can navigate back to parent sections easily.

**Acceptance Criteria:**

**Given** I am on a project detail page
**When** I look at the breadcrumb
**Then** I see: Home > Projects > {Project Title}
**And** each breadcrumb segment is a clickable link (except current page)
**And** breadcrumb uses `BreadcrumbList` structured data
**And** breadcrumb is visually styled to be unobtrusive but visible
**And** screen readers can navigate the breadcrumb trail

---

## Epic 5: Theme & Accessibility

Ensure the site works for all users regardless of their visual preferences, motion sensitivity, or assistive technology needs.

### Story 5.1: Implement Theme Toggle

As a **visitor**,
I want to toggle between dark and light mode,
So that I can view the site in my preferred color scheme.

**Acceptance Criteria:**

**Given** I am on any page
**When** I click the theme toggle button
**Then** the color scheme changes immediately (dark ↔ light)
**And** my preference is saved to localStorage
**And** on subsequent visits, my saved preference is restored
**And** if no preference saved, system preference is detected and applied
**And** the toggle uses `aria-pressed` to indicate current state
**And** the transition between themes is smooth (200ms)

---

### Story 5.2: Add Reduced Motion Support

As a **visitor with motion sensitivity**,
I want animations to be disabled when I prefer reduced motion,
So that the site doesn't cause discomfort.

**Acceptance Criteria:**

**Given** I have `prefers-reduced-motion: reduce` set in my OS
**When** I visit the site
**Then** all animations are disabled or replaced with instant transitions
**And** the flyby animation shows the final grid state immediately
**And** counter animations show final values without counting up
**And** page transitions are instant (no slide/fade)
**And** hover effects still work but without animated transitions

---

### Story 5.3: Ensure Keyboard Navigation

As a **keyboard user**,
I want to navigate all functionality without a mouse,
So that I can fully experience the portfolio.

**Acceptance Criteria:**

**Given** I am using only a keyboard
**When** I navigate the site
**Then** all interactive elements are reachable via Tab
**And** tab order follows logical visual flow
**And** the skip link allows jumping to main content
**And** Escape closes any open modals/panels
**And** Enter/Space activates focused buttons and links
**And** Arrow keys work within appropriate contexts (filters, project nav)
**And** no keyboard traps exist (except intentional focus traps in modals)

---

### Story 5.4: Implement Focus Management

As a **keyboard user**,
I want visible focus indicators on all interactive elements,
So that I know where I am on the page.

**Acceptance Criteria:**

**Given** I am tabbing through the site
**When** an element receives focus
**Then** a visible focus ring appears (2px, offset 2px)
**And** the focus ring uses the `--ring` color token
**And** focus rings are visible in both light and dark themes
**And** focus is never removed (only styled)
**And** focus moves logically when modals open/close

---

### Story 5.5: Add Screen Reader Support

As a **screen reader user**,
I want all content to be properly announced,
So that I can understand and interact with the portfolio.

**Acceptance Criteria:**

**Given** I am using VoiceOver or NVDA
**When** I navigate the site
**Then** all images have meaningful alt text
**And** form fields have associated labels
**And** buttons and links have descriptive names
**And** dynamic content changes are announced via live regions
**And** filter results count is announced when filters change
**And** the current project is announced when detail panel opens
**And** heading hierarchy is logical (h1 → h2 → h3)

---

### Story 5.6: Create Toast Notification System

As a **visitor**,
I want feedback when I perform actions,
So that I know my action was successful or if there's an error.

**Acceptance Criteria:**

**Given** I perform an action (submit form, apply filter, etc.)
**When** the action completes
**Then** a toast notification appears with appropriate type:
- Success: green, checkmark, 3s auto-dismiss
- Error: red, X icon, persistent until dismissed
- Warning: amber, triangle, user dismissable
- Info: blue, info icon, 5s auto-dismiss

**And** toasts appear in bottom-right (desktop) or bottom-center (mobile)
**And** max 3 toasts visible at once
**And** toasts are announced to screen readers
**And** toasts can be dismissed with Escape or close button

---

## Epic 6: Mode Switching (Personal ↔ Agency)

Enable the site to serve dual purposes with appropriate branding, content, and messaging based on whether visitors arrive at cordpalmer.com or swrv.tech.

### Story 6.1: Create ModeToggle Component

As a **visitor**,
I want to toggle between Personal and Agency modes,
So that I can see the portfolio from different perspectives.

**Acceptance Criteria:**

**Given** I am on any page
**When** I click the mode toggle
**Then** the toggle animates between "Cord Palmer" and "SWRV Tech"
**And** the toggle uses `aria-pressed` to indicate current mode
**And** the toggle is keyboard accessible (Enter/Space to activate)
**And** the mode change triggers an animated transition (if motion allowed)
**And** the toggle is visible in the header on all screen sizes

---

### Story 6.2: Implement Mode-Based Branding

As a **visitor**,
I want the site to reflect the appropriate brand based on mode,
So that I understand whose work I'm viewing.

**Acceptance Criteria:**

**Given** I am in Personal mode (cordpalmer.com)
**When** I view the site
**Then** I see:
- Logo/name: "Cord Palmer"
- Tagline: "Enterprise engineering. One person. Full stack."
- Primary accent colors for personal brand

**Given** I am in Agency mode (swrv.tech)
**When** I view the site
**Then** I see:
- Logo/name: "SWRV Tech"
- Tagline: "Enterprise engineering. Global team. Full service."
- Primary accent colors for agency brand

**And** project cards respect `showInPersonal` and `showInAgency` flags

---

### Story 6.3: Add URL-Based Mode Detection

As a **visitor arriving via URL**,
I want the correct mode to be activated automatically,
So that I see appropriate content for the domain I visited.

**Acceptance Criteria:**

**Given** I navigate to cordpalmer.com
**When** the page loads
**Then** Personal mode is automatically activated

**Given** I navigate to swrv.tech
**When** the page loads
**Then** Agency mode is automatically activated

**And** mode can be set via URL parameter (e.g., `?mode=agency`) for testing
**And** mode detection works in development with localhost

---

### Story 6.4: Persist Mode Selection

As a **visitor**,
I want my mode selection to persist as I navigate,
So that I don't have to re-select it on every page.

**Acceptance Criteria:**

**Given** I have selected a mode (via toggle or URL)
**When** I navigate to another page
**Then** the selected mode remains active
**And** the URL reflects the current mode (if not default for domain)
**And** refreshing the page maintains the selected mode
**And** mode is stored in React Context for client-side access
**And** SSR respects mode from URL/domain for proper SEO

---

## Epic 7: About & Contact

Allow visitors to learn about Cord's background, skills, and experience, and easily initiate contact via form or calendar booking.

### Story 7.1: Create About Page

As a **visitor**,
I want to learn about Cord's professional background,
So that I can understand their experience and expertise.

**Acceptance Criteria:**

**Given** I navigate to `/about`
**When** the page loads
**Then** I see:
- Professional headshot/avatar
- Summary paragraph (who, what, why)
- Years of experience highlighted
- Key accomplishments or differentiators

**And** the page has proper meta title and description for SEO
**And** the layout is responsive and readable on mobile
**And** content follows semantic HTML structure

---

### Story 7.2: Build Skills Display

As a **visitor**,
I want to see Cord's technical skills organized clearly,
So that I can quickly assess relevant expertise.

**Acceptance Criteria:**

**Given** I am on the About page
**When** I scroll to the skills section
**Then** I see skills organized by category:
- Frontend (React, Next.js, TypeScript, etc.)
- Backend (Node.js, Python, etc.)
- Infrastructure (Vercel, AWS, etc.)
- Tools (Git, Figma, etc.)

**And** each skill has a visual indicator (icon or badge)
**And** skills data comes from a structured content file
**And** the section is scannable in < 5 seconds

---

### Story 7.3: Add Social Links

As a **visitor**,
I want to access Cord's professional profiles,
So that I can learn more or connect on other platforms.

**Acceptance Criteria:**

**Given** I am on any page
**When** I look at the footer (or about page)
**Then** I see links to:
- GitHub
- LinkedIn
- Twitter/X (if applicable)
- Email (mailto link)

**And** links open in new tabs with `rel="noopener"`
**And** icons have accessible labels (sr-only text)
**And** links are included in Person structured data

---

### Story 7.4: Implement Contact Form

As a **visitor**,
I want to send a message without leaving the site,
So that I can easily inquire about services or opportunities.

**Acceptance Criteria:**

**Given** I navigate to `/contact`
**When** I fill out the contact form
**Then** I can enter: name (required), email (required), project type (optional select), message (required)
**And** form validates on blur with clear error messages
**And** form submits to Formspree endpoint
**And** a success toast appears on successful submission
**And** an error toast appears if submission fails
**And** form data is sanitized (no XSS)
**And** honeypot field prevents spam

---

### Story 7.5: Embed Calendar Widget

As a **visitor**,
I want to book a meeting directly from the site,
So that I can schedule time without email back-and-forth.

**Acceptance Criteria:**

**Given** I am on the Contact page
**When** I click "Book a Call"
**Then** a calendar embed or modal appears (Calendly, Cal.com, or similar)
**And** I can see available time slots
**And** I can book without creating an account
**And** confirmation is sent via email
**And** the embed loads asynchronously (doesn't block page)
**And** fallback link works if embed fails

---

### Story 7.6: Add Analytics Events

As **Cord (site owner)**,
I want to track key user interactions,
So that I can understand how visitors engage with the portfolio.

**Acceptance Criteria:**

**Given** Vercel Analytics is enabled
**When** a user performs a tracked action
**Then** the following events are captured:
- `flyby_completed` — user watched full animation
- `flyby_skipped` — user clicked skip
- `project_viewed` — user opened project detail
- `filter_applied` — user applied a filter
- `contact_submitted` — user submitted contact form
- `meeting_booked` — user completed calendar booking

**And** events include relevant metadata (project slug, filter type, etc.)
**And** no PII is captured in analytics

---

## Epic 8: Flyby Hero Animation

Create an impressive first impression with a choreographed GSAP animation that showcases the volume of work and differentiates from typical portfolios.

### Story 8.1: Create FlybyHero Container

As a **developer**,
I want a container component for the flyby animation,
So that animation state is properly managed and encapsulated.

**Acceptance Criteria:**

**Given** the homepage loads
**When** the FlybyHero component mounts
**Then** it provides state management for:
- Animation phase (loading, playing, complete)
- Skip status (user skipped vs completed naturally)
- Reduced motion preference detection

**And** the container handles proper cleanup on unmount
**And** animation state can be read by child components
**And** component is wrapped in proper client boundary

---

### Story 8.2: Implement Flyby Animation

As a **visitor**,
I want to see project screenshots dramatically fly into a grid formation,
So that I immediately understand the volume and quality of work.

**Acceptance Criteria:**

**Given** I land on the homepage for the first time
**When** the page loads
**Then** project screenshots appear to fly in from various directions
**And** screenshots choreograph into the final grid layout over ~5 seconds
**And** the animation feels smooth and intentional (not random)
**And** depth/parallax effects create a sense of 3D space
**And** the "150+" counter animates in sync with the flyby
**And** animation uses GSAP timeline for precise control

---

### Story 8.3: Add Skip Functionality

As a **visitor**,
I want to skip the animation and go straight to content,
So that I can browse projects immediately if I prefer.

**Acceptance Criteria:**

**Given** the flyby animation is playing
**When** I click "Skip to Portfolio" or press Escape
**Then** the animation instantly completes to the final grid state
**And** no jarring jump or flash occurs
**And** the skip button is visible throughout the animation
**And** skip is keyboard accessible
**And** a `flyby_skipped` analytics event is fired

---

### Story 8.4: Optimize Animation Performance

As a **visitor**,
I want the animation to run smoothly without stuttering,
So that the experience feels premium and professional.

**Acceptance Criteria:**

**Given** the flyby animation is playing
**When** I monitor performance
**Then** the animation maintains 60fps throughout
**And** GSAP uses `will-change` and GPU-accelerated properties (transform, opacity)
**And** images are preloaded before animation starts
**And** animation doesn't cause main thread blocking
**And** no layout thrashing occurs
**And** Chrome DevTools Performance tab shows no long tasks

---

### Story 8.5: Handle Returning Visitors

As a **returning visitor**,
I want a shorter or skipped animation,
So that I can get to content faster on repeat visits.

**Acceptance Criteria:**

**Given** I have visited the site before (localStorage flag exists)
**When** I return to the homepage
**Then** the animation runs at 3 seconds instead of 5 (or auto-skips)
**And** a "Show full animation" option is available
**And** the first visit flag is set after animation completes
**And** if `prefers-reduced-motion` is set, animation is fully skipped regardless

---

## Epic 9: Performance & Polish

Optimize the site for speed, smooth interactions, and delightful micro-animations to meet performance targets and create a premium feel.

### Story 9.1: Optimize Images

As a **visitor**,
I want images to load quickly without blocking the page,
So that the site feels fast and responsive.

**Acceptance Criteria:**

**Given** any page with images loads
**When** I scroll through the content
**Then** images above the fold load immediately with priority
**And** images below the fold lazy load as I scroll
**And** blur placeholders appear while images load (no layout shift)
**And** images are served in modern formats (WebP/AVIF) when supported
**And** responsive `sizes` attribute optimizes for viewport
**And** total image transfer for initial load is < 500KB

---

### Story 9.2: Implement Code Splitting

As a **visitor**,
I want only the necessary JavaScript to load,
So that the initial page loads quickly.

**Acceptance Criteria:**

**Given** I load the homepage
**When** I check the network tab
**Then** initial JS bundle is < 200KB gzipped
**And** GSAP only loads when animation is needed
**And** heavy components use dynamic imports
**And** route-based code splitting is enabled
**And** third-party scripts (calendar, analytics) load after main content

---

### Story 9.3: Add Micro-Animations

As a **visitor**,
I want subtle animations that enhance the experience,
So that the site feels polished and delightful.

**Acceptance Criteria:**

**Given** I interact with the site
**When** I perform various actions
**Then** I see:
- Page transitions: subtle fade (200ms)
- Card hover: slight lift with shadow
- Button hover: brightness increase
- Modal open/close: slide + fade
- Filter chips: scale on selection
- Toast entry/exit: slide from edge

**And** all animations respect `prefers-reduced-motion`
**And** animations use Framer Motion with consistent timing

---

### Story 9.4: Achieve Core Web Vitals

As a **visitor**,
I want the site to score well on performance metrics,
So that the experience is smooth on any device.

**Acceptance Criteria:**

**Given** I run Lighthouse on any page
**When** I check Core Web Vitals
**Then**:
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

**And** metrics pass on both mobile and desktop
**And** real-world metrics are tracked via Vercel Speed Insights
**And** no layout shifts occur during image/font loading

---

### Story 9.5: Final Lighthouse Audit

As **Cord (site owner)**,
I want the site to achieve target Lighthouse scores,
So that I can confidently launch a high-quality portfolio.

**Acceptance Criteria:**

**Given** the site is feature complete
**When** I run Lighthouse on all pages
**Then**:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

**And** any issues found are documented and addressed
**And** scores are consistent across multiple runs
**And** mobile scores meet targets (not just desktop)

---

### Story 9.6: Responsive Polish

As a **visitor on any device**,
I want the site to look and work perfectly,
So that I have a great experience regardless of screen size.

**Acceptance Criteria:**

**Given** I view the site on various devices
**When** I test responsiveness
**Then**:
- Mobile (320px): All content accessible, no horizontal scroll
- Tablet (768px): Grid adjusts appropriately
- Desktop (1024px): Full features available
- Large (1440px+): Content doesn't stretch uncomfortably

**And** touch targets are 44px+ on mobile
**And** text remains readable without zooming
**And** no content is cut off or hidden at any breakpoint
**And** orientation changes (portrait ↔ landscape) are handled gracefully

---

## Epic 10: Admin Dashboard (Phase 2 - Deferred)

_Stories for this epic will be created when Phase 2 development begins. MVP uses direct MDX file editing for content management._

**Requirements covered:** FR32, FR33, FR34, FR35, FR36, FR37
