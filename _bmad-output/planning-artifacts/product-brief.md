# Product Brief: Full-Stack Developer Portfolio

**Document Version:** 1.1  
**Date:** 2026-03-30  
**Author:** Cord Palmer  
**Status:** Approved

---

## Executive Summary

A modern, high-impact full-stack developer portfolio website designed to showcase 150+ production websites while serving dual purposes: securing employment (preferably in the cannabis industry) and acquiring clients for a web development/SaaS agency. The portfolio will demonstrate technical excellence through its own implementation—using React, Next.js, and shadcn/ui with bold animations and cutting-edge UX patterns—while prominently featuring a unique specialization: **e-commerce development in regulated industries**.

**The Core Thesis:** Most portfolios show 6-10 projects. This one showcases 150+. Volume is the differentiator. The portfolio itself becomes proof of capability.

---

## Problem Statement

### For Job Seekers in Web Development:
- Generic portfolios fail to differentiate candidates
- Cannabis/regulated industry experience is undersold or hidden
- Technical skills are described, not demonstrated
- SEO expertise (a revenue-generating skill) is rarely showcased effectively

### For Agencies/Freelancers:
- Client acquisition relies on outdated portfolio formats
- No way to demonstrate scale (100+ sites built)
- Live work is shown as screenshots, not interactive experiences
- Specialized industry expertise isn't positioned as premium value

---

## Solution Overview

### Product Vision
A dual-mode portfolio website that:
1. **Toggles between Personal Portfolio and Agency Landing Page** modes
2. **Embeds live websites** so visitors can interact with actual production work
3. **Showcases volume** (150+ sites) as a core differentiator
4. **Positions "Regulated Industry E-commerce"** as premium expertise
5. **Demonstrates SEO mastery** through the site itself AND case studies
6. **Uses bold, impressive animations** (GSAP, parallax, 3D) to prove frontend excellence

### Target Audiences

| Audience | Primary Goal | Success Metric |
|----------|--------------|----------------|
| **Hiring Managers** | Find evidence of capability quickly | Time-to-impressed < 30 seconds |
| **Cannabis Industry Employers** | Validate industry expertise | Domain knowledge visible immediately |
| **Potential Clients** | Trust and conversion | Clear path to contact/inquiry |
| **Other Developers** | Inspiration/respect | Social sharing, bookmarks |

---

## Key Features

### MVP (Launch) Features

#### 1. Dual-Mode Toggle
- **Personal Mode:** Job-seeker framing, resume focus, "hire me" CTAs
- **Agency Mode:** Client-focused, "let's build" CTAs, pricing/services hints
- Persistent toggle in header/footer, remembers preference

#### 2. Hero Section
- Animated, attention-grabbing introduction
- Key stats prominently displayed: "150+ Sites Built" | "100+ E-commerce" | "4+ Years"
- Immediate value proposition visible without scrolling
- Dark-first aesthetic with light mode toggle

#### 3. Live Project Showcase
- **Infinite scroll / masonry grid** for browsing 100+ projects
- **Live iframe embeds** — actual working sites, not screenshots
- **Netflix-style hover previews** — GIF/video on hover before click
- **Smart filtering:**
  - By industry (Cannabis, General Business, E-commerce, etc.)
  - By tech stack (WordPress, React, Shopify, etc.)
  - By year
  - By project type (Full build, Redesign, Maintenance)
- **Search functionality** — "show me Shopify sites" natural language

#### 4. Skills & Tech Stack Section
- Interactive visualization (skill tree, radar chart, or animated cards)
- Categories:
  - **Frontend:** React, Next.js, TypeScript, Tailwind, shadcn/ui, GSAP
  - **WordPress:** Custom themes, Elementor, ACF, WooCommerce
  - **Backend:** Node.js, APIs, Database design
  - **Infrastructure:** Hosting, DNS, CI/CD, Performance optimization
  - **SEO:** Technical SEO, Content strategy, Ranking techniques
  - **E-commerce:** Payment processing, Compliance, Age verification, Inventory

#### 5. Experience Timeline
- Interactive, scroll-animated journey through career
- Each milestone expandable with details
- Links to relevant live projects at each stage

#### 6. SEO Expertise Showcase
- Dedicated section demonstrating ranking achievements
- Case studies: "How I ranked [X] for [keyword]"
- Meta: The portfolio itself should rank for relevant terms

#### 7. Contact/Conversion Section
- Dual CTAs based on mode (Hire Me vs. Start a Project)
- Calendar integration (Cal.com/Calendly)
- Quick contact form
- Social links (GitHub, LinkedIn, Twitter/X)

#### 8. Blog/Articles Section
- Technical articles demonstrating expertise
- SEO-optimized content for organic traffic
- Cannabis industry insights (thought leadership)

### Enhanced Features (Post-MVP)

#### 9. Achievement/Gamification Layer
- Visitor achievements: "Viewed 10 projects 🏆"
- Project popularity rankings
- "Most viewed this month" badges

#### 10. Command Palette Navigation (CMD+K)
- Power-user navigation
- Quick access to any project, section, or action
- Search across entire portfolio

#### 11. Interactive Elements
- Code playground with live rendering
- Theme customizer (let visitors play with colors)
- Easter eggs (Konami code unlocks?)

#### 12. AI Chat Assistant
- Trained on portfolio/experience
- Can answer questions, book calls
- Available 24/7

#### 13. Case Study Deep-Dives
- Full-page immersive case studies for best projects
- Problem → Solution → Results format
- Metrics and testimonials

---

## Technical Specifications

### Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 14+ (App Router) | SSR/SSG for SEO, React ecosystem |
| **UI Library** | shadcn/ui + Tailwind CSS | Modern, customizable, accessible |
| **Animations** | GSAP + Framer Motion | Industry-standard, performant |
| **Deployment** | Vercel | Edge functions, analytics, easy deploys |
| **CMS** | MDX or Sanity (for blog) | Flexible content management |
| **Analytics** | Vercel Analytics + Plausible | Privacy-friendly, performance insights |
| **Forms** | React Hook Form + Resend | Type-safe, reliable email delivery |

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

### SEO Requirements

- Server-side rendering for all content
- Dynamic OG images per project
- Structured data (JSON-LD) for Person, Organization, Creative Work
- XML sitemap with all projects
- Canonical URLs
- Mobile-first responsive design
- Core Web Vitals optimized

---

## Design Direction

### Visual Identity

| Element | Direction |
|---------|-----------|
| **Primary Mode** | Dark theme (rich blacks, not pure #000) |
| **Accent Colors** | Vibrant, likely green or blue gradient |
| **Typography** | Modern sans-serif, bold headlines, readable body |
| **Spacing** | Generous, confident whitespace |
| **Motion** | Bold but purposeful — scroll-triggered reveals, hover states, transitions |

### UX Principles

1. **Evidence over claims** — Show, don't tell
2. **Volume as proof** — 150 sites visible, not buried
3. **Immediate value** — Impressive within 3 seconds
4. **Exploratory** — Let visitors discover, don't force linear journey
5. **Accessible** — WCAG AA minimum, keyboard navigable

### Animation Philosophy

- **Scroll-triggered reveals** — Content animates in as you scroll
- **Hover micro-interactions** — Feedback on every interactive element
- **Page transitions** — Smooth, cinematic navigation
- **Loading states** — Skeleton screens, progress indicators
- **Parallax depth** — Layered scrolling for immersion

---

## Success Metrics

### Primary KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Interview requests** | 5+/month | Email/calendar bookings in job mode |
| **Client inquiries** | 3+/month | Contact form submissions in agency mode |
| **Time on site** | > 2 minutes | Analytics |
| **Projects viewed per session** | > 10 | Event tracking |
| **Return visitors** | > 20% | Analytics |

### Secondary KPIs

- Social shares of projects
- Blog article engagement
- SEO rankings for target keywords
- Portfolio saves/bookmarks
- GitHub stars if open-sourced

---

## Competitive Positioning

### What Makes This Different

| Typical Portfolio | This Portfolio |
|-------------------|----------------|
| 6-10 projects | 150+ projects |
| Screenshots | Live embedded sites |
| "I know React" | Interactive React showcase |
| Generic "hire me" | Dual-mode (job + agency) |
| Hidden specialization | Proud regulated-industry expertise |
| Claims SEO knowledge | Ranks for target keywords |

### Unique Value Propositions

1. **Volume at Scale** — More production sites than most agencies
2. **Regulated Industry Expertise** — Cannabis e-commerce is hard mode; you've mastered it
3. **SEO That Works** — Demonstrable ranking results, not just claims
4. **Full-Stack Range** — WordPress/Elementor at scale AND modern React/Next.js
5. **The Portfolio IS the Proof** — The site itself demonstrates every claimed skill

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Cannabis stigma with some employers | Medium | "Regulated industry" framing, filterable projects |
| 150+ projects overwhelming visitors | High | Smart filtering, curated "featured" section, search |
| Live iframes slow performance | High | Lazy loading, thumbnail-first, opt-in embed |
| Scope creep on animations | Medium | MVP-first, enhancement phases defined |
| SEO takes time to show results | Low | Site quality attracts direct traffic first |

---

## Project Phases

### Phase 1: Foundation (MVP)
- Core pages: Home, Projects, About, Contact, Blog
- Dual-mode toggle (basic)
- Project showcase with filtering
- Essential animations
- Dark/light theme toggle
- Contact form + calendar integration

### Phase 2: Polish
- Live iframe embeds
- Netflix-style previews
- Enhanced animations (GSAP)
- Command palette (CMD+K)
- Achievement system

### Phase 3: Growth
- AI chat assistant
- Case study deep-dives
- Advanced SEO optimizations
- A/B testing infrastructure
- Analytics dashboard

---

## Resolved Decisions

| Question | Decision |
|----------|----------|
| **Domain - Personal** | cordpalmer.com |
| **Domain - Agency** | swrv.tech |
| **Agency Name** | SWRV Tech (pronounced "swerve") |
| **Testimonials** | None currently — will add post-launch |
| **Featured Projects** | resilienture.com, lavidagardens.com, indusapr.com, nativesuncannabis.com, elevatedrootsma.com |

## Open Questions

1. **Blog topics** — Initial article concepts for SEO?
2. **Additional featured projects** — More to add to initial showcase?

---

## Appendix

### Referenced Documents
- [Brainstorming Session (170 ideas)](_bmad-output/brainstorming/brainstorming-session-2026-03-30.md)

### Stakeholders
- **Owner:** Cord Palmer
- **Agency:** SWRV Tech
- **Domains:** cordpalmer.com (personal), swrv.tech (agency)
- **Target Users:** Hiring managers, cannabis industry employers, potential clients, developers

### Featured Projects (Initial)
1. **resilienture.com** — [To be categorized]
2. **lavidagardens.com** — Cannabis
3. **indusapr.com** — [To be categorized]
4. **nativesuncannabis.com** — Cannabis
5. **elevatedrootsma.com** — Cannabis

---

*This product brief will inform the PRD, UX design, and technical architecture documents.*
