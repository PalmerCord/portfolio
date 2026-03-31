---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
status: complete
inputDocuments: ['product-brief.md', 'brainstorming-session-2026-03-30.md']
workflowType: 'prd'
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 1
  projectDocs: 0
classification:
  projectType: 'web_app'
  domain: 'marketing_portfolio'
  complexity: 'medium'
  projectContext: 'greenfield'
  additionalFlags:
    - 'ecommerce_expertise_showcase'
    - 'seo_critical'
    - 'performance_sensitive'
    - 'dual_audience'
vision:
  tagline: 'Enterprise engineering. One person. Full stack.'
  agencyTagline: 'Enterprise engineering. Global team. Full service.'
  holyShitMoment: 'Static images of 150+ sites fly into view in choreographed animation, then settle into interactive showcase'
  differentiator: 'Live embedded sites + volume (150+) + polish = undeniable proof'
  audienceStrategy: 'both'
  coreInsight: 'The portfolio IS the proof - it demonstrates every claimed skill'
  swrvTeam: 'Global network of advanced professionals and developers'
---

# Product Requirements Document - Portfolio

**Author:** Cord Palmer
**Date:** 2026-03-30

## Executive Summary

**Cord Palmer's Portfolio** is a dual-purpose web application serving as both a personal developer portfolio (cordpalmer.com) and an agency landing page for SWRV Tech (swrv.tech). The product showcases 150+ production websites—primarily e-commerce builds in regulated industries—through an immersive, interactive experience that proves capability rather than merely describing it.

**Target Users:**
- **Hiring managers** evaluating full-stack developer candidates, particularly in cannabis/e-commerce sectors
- **Business owners** seeking a full-service development partner (dev + SEO + security + DNS) backed by a global team

**The Core Problem:** Developer portfolios are interchangeable. They show 6-10 screenshots, list technologies, and claim expertise. There's no differentiation, no proof, and no memorable experience.

**The Solution:** A portfolio that IS the proof. 150+ site screenshots fly into view in a choreographed animation, then become explorable via live iframe embeds. The site itself demonstrates every claimed skill—React, animations, performance optimization, SEO—making capability undeniable.

**Taglines:**
- **Personal:** *Enterprise engineering. One person. Full stack.*
- **Agency:** *Enterprise engineering. Global team. Full service.*

### What Makes This Special

| Dimension | Traditional Portfolio | This Portfolio |
|-----------|----------------------|----------------|
| **Volume** | 6-10 projects | 150+ production sites |
| **Proof** | Screenshots | Live embedded sites |
| **Experience** | Static scrolling | Animated flyby → interactive exploration |
| **Positioning** | Generic developer | E-commerce specialist, regulated industries |
| **Service Scope** | "I code" | Full-stack + SEO + security + DNS |
| **Team (Agency)** | Solo freelancer | Global network of advanced professionals |

**Core Insight:** The portfolio IS the proof. By building an impressive portfolio with the same skills being showcased (React, Next.js, GSAP animations, SEO optimization), the site eliminates doubt. Visitors don't need to trust claims—they're experiencing the capability firsthand.

**Dual-Mode Strategy:** A toggle switches between:
- **Personal Portfolio** (cordpalmer.com) — Job-seeker framing, individual developer positioning
- **SWRV Tech Agency** (swrv.tech) — Client acquisition framing, global team of professionals, full-service offerings

## Project Classification

| Attribute | Value |
|-----------|-------|
| **Project Type** | Web Application (SSR/SSG) |
| **Domain** | Marketing / Portfolio |
| **Complexity** | Medium |
| **Project Context** | Greenfield |
| **Tech Stack** | Next.js 14+, React, TypeScript, shadcn/ui, Tailwind CSS, GSAP |
| **Target Deployment** | Vercel |

**Special Considerations:**
- **SEO-critical** — Must rank for relevant developer/agency search terms
- **Performance-sensitive** — 150+ project images + live iframes require aggressive optimization
- **Dual-audience** — Content must resonate with both hiring managers and potential clients

## Success Criteria

### User Success

**Hiring Manager Success:**
- Within **30 seconds**: Recognize Cord isn't a typical developer — sees evidence of business acumen, client results, and strategic thinking
- Within **2 minutes**: Confident enough to recommend Cord for interview or forward portfolio to decision-maker
- **Aha moment:** "This person understands what actually moves the needle for clients, not just code"

**Client Success (SWRV Tech):**
- Within **60 seconds**: Understand that SWRV Tech delivers results, not just websites
- Within **3 minutes**: Know exactly how to start a conversation (calendar, form, or contact)
- **Aha moment:** "This team gets the nuances my last agency missed"

**Both Audiences:**
- Experience the 150+ site flyby and think "okay, this is different"
- Explore live embedded sites and recognize production-quality work
- Leave with clear next action (apply, book call, save portfolio)

### Business Success

**3-Month Success (Either Path):**

| Path | Success Metric |
|------|---------------|
| **Job Hunt** | Secured full-time role OR 3+ serious interview pipelines |
| **Agency** | 2+ paying clients OR $10K+ in contracted work |
| **Combined** | Financial stability achieved through either channel |

**12-Month Success:**

| Metric | Target |
|--------|--------|
| Portfolio organic traffic | 500+ monthly visitors |
| Inbound inquiries (total) | 10+/month |
| Conversion rate (visit → contact) | > 5% |
| SEO ranking | Top 10 for 3+ target keywords |

**North Star:** Financial security through technical expertise — the portfolio is the engine that makes opportunities come to you.

### Technical Success

| Metric | Target | Rationale |
|--------|--------|-----------|
| **Lighthouse Performance** | 90+ | Must feel fast despite 150+ project images |
| **First Contentful Paint** | < 1.5s | Flyby animation should start immediately |
| **Largest Contentful Paint** | < 2.5s | Core Web Vitals threshold |
| **Time to Interactive** | < 3.5s | Users can explore quickly |
| **Cumulative Layout Shift** | < 0.1 | No janky loading |
| **Mobile Performance** | 85+ | Many hiring managers browse on mobile |
| **Accessibility** | WCAG AA | Keyboard navigable, screen reader friendly |
| **SEO Score** | 95+ | Critical for organic discovery |
| **Uptime** | 99.5%+ | Vercel handles this, but worth tracking |

**SEO Targets:**

| Keyword Type | Examples | Goal |
|--------------|----------|------|
| **Name-based** | "Cord Palmer developer" | #1 |
| **Agency-based** | "SWRV Tech" | #1 |
| **Niche-based** | "cannabis ecommerce developer" | Top 10 |
| **Regional** | "full stack developer [your city]" | Top 20 |

### Measurable Outcomes

| Outcome | Measurement | Tool |
|---------|-------------|------|
| Projects viewed per session | > 10 | Vercel Analytics |
| Average session duration | > 2 minutes | Vercel Analytics |
| Flyby completion rate | > 80% | Custom event tracking |
| Contact form submissions | Track weekly | Form provider |
| Calendar bookings | Track weekly | Cal.com/Calendly |
| Return visitor rate | > 20% | Analytics |

## Product Scope

### MVP - Minimum Viable Product

**Must Have for Launch:**
- [ ] Hero with animated project flyby (static images)
- [ ] Project showcase with filtering (industry, tech, year)
- [ ] Live iframe embeds for featured projects
- [ ] About section with experience/skills
- [ ] Contact section with form + calendar embed
- [ ] Dark/light mode toggle
- [ ] Dual-mode toggle (Personal ↔ Agency)
- [ ] Responsive design (mobile-first)
- [ ] Basic SEO (meta tags, OG images, sitemap)
- [ ] 5 featured projects fully populated

### Growth Features (Post-MVP)

**High Priority (Showcase Value):**
- [ ] Admin Dashboard (project/image/client management)
- [ ] Analytics dashboard view
- [ ] Bulk operations interface

**After Launch, Before Scale:**
- [ ] Blog/articles section
- [ ] Case study deep-dives
- [ ] Command palette navigation (CMD+K)
- [ ] Achievement/gamification layer
- [ ] Advanced animations (GSAP polish)
- [ ] Full 150+ project population
- [ ] Search functionality
- [ ] "More like this" recommendations

### Vision (Future)

**Dream Features:**
- [ ] AI chat assistant trained on your experience
- [ ] Interactive code playground
- [ ] Video testimonials (when available)
- [ ] Client portal for SWRV Tech
- [ ] Project cost estimator
- [ ] Real-time "currently building" status
## User Journeys

### Journey 1: Marcus — The Skeptical Hiring Manager

**Persona:**
- **Name:** Marcus Chen, 38, Engineering Manager at a cannabis tech startup
- **Situation:** His team is drowning. They need a senior full-stack developer who can ship independently. He's seen 50 portfolios this week — all identical grids of 6 projects with buzzword descriptions.
- **Goal:** Find someone who can actually deliver, not just interview well
- **Obstacle:** Every candidate looks the same on paper. He's been burned by "senior developers" who couldn't ship.

**Journey:**

**Opening Scene:**
Marcus finds cordpalmer.com through a LinkedIn connection's recommendation. He opens it skeptically, finger already hovering over the back button. He's given this maybe 10 seconds.

**Rising Action:**
The page loads and immediately, static images of sites begin flying across the screen in a choreographed cascade. His eyebrows raise — this is different. The animation settles, revealing "150+ sites built" prominently. He thinks: "Wait, one person?" He scrolls into the project showcase.

He clicks a cannabis site he recognizes — La Vida Gardens. An iframe loads and he's interacting with an actual production site. He clicks another. And another. These aren't mockups — they're real, live, working sites.

**Climax:**
He reaches the About section and sees not just "React, Node.js" — but actual business outcomes. SEO results. The nuanced understanding of regulated industry challenges. He realizes: "This person gets what we're actually trying to accomplish."

**Resolution:**
Marcus clicks "Book a Call" before he even finishes scrolling. He sends the portfolio link to his CTO with the message: "Found one. Let's move fast before someone else grabs him."

**Requirements Revealed:**
- Immediate visual impact (flyby animation)
- Volume displayed prominently (150+ counter)
- Live iframe embeds that actually work
- Industry-specific positioning (cannabis/regulated)
- Business outcomes, not just tech skills
- Frictionless contact (calendar integration)
- Shareable (clean URL, OG images)

---

### Journey 2: Sarah — The Frustrated Business Owner

**Persona:**
- **Name:** Sarah Martinez, 45, Owner of a multi-state cannabis dispensary chain
- **Situation:** Her current website is embarrassing. Her last agency charged $30K and delivered a template that breaks on mobile. She needs someone who understands cannabis compliance AND can actually build.
- **Goal:** Find a development partner, not just a vendor
- **Obstacle:** Every agency says the right things in sales calls, then delivers garbage

**Journey:**

**Opening Scene:**
Sarah Googles "cannabis ecommerce developer" after midnight, frustrated after another broken online order. SWRV Tech appears in results. She clicks, expecting another agency site with stock photos and vague promises.

**Rising Action:**
Instead, she sees work — actual work. The flyby animation shows site after site she recognizes from the industry. She clicks the filter for "Cannabis" and sees 100+ sites. Her jaw drops. She clicks Native Sun Cannabis and sees a clean, compliant, fast site. She clicks Elevated Roots MA — same quality.

She notices the toggle says "Personal" — she clicks and it switches to "SWRV Tech." Now it's talking about the global team, full-service offerings, ongoing support. This isn't a solo freelancer who'll disappear.

**Climax:**
She sees "E-commerce in Regulated Industries" and the specific callouts about compliance, age verification, payment processing challenges. Someone finally GETS IT. These aren't generic web people — they've lived this pain.

**Resolution:**
She fills out the contact form at 1am. Cord's calendar shows availability tomorrow. She books a 30-minute call. For the first time in months, she feels like there might actually be a solution.

**Requirements Revealed:**
- SEO ranking for niche terms ("cannabis ecommerce developer")
- Industry filtering (quick access to relevant work)
- Dual-mode toggle (Personal ↔ Agency)
- Social proof through volume
- Full-service positioning (not just dev)
- "They get regulated industries" messaging
- After-hours availability signaling (calendar always accessible)
- Contact form for detailed inquiries

---

### Journey 3: Cord — The Portfolio Owner (Content Management)

**Persona:**
- **Name:** Cord Palmer, Portfolio Owner
- **Situation:** Has 150+ projects but needs to manage which are featured, add new projects, and toggle between modes
- **Goal:** Easily update portfolio without breaking things
- **Obstacle:** Time — needs updates to be fast and reliable

**Journey:**

**Opening Scene:**
Cord just shipped a new client site. He wants to add it to the portfolio while the details are fresh.

**Rising Action:**
He opens the project data file (JSON/MDX), adds the new project with metadata (title, URL, tech stack, industry, screenshot path). He runs the build locally to verify. The new site appears in the showcase, correctly filtered by industry.

**Climax:**
He pushes to main branch. Vercel auto-deploys. The new project is live within minutes.

**Resolution:**
Total time: 10 minutes from idea to live. No code changes to components, just data.

**Requirements Revealed:**
- Project data in structured files (JSON/MDX)
- Screenshot management workflow
- Easy deployment (Vercel)
- Build-time validation
- No code changes for content updates

---

### Journey Requirements Summary

| Journey | Key Capabilities Needed |
|---------|------------------------|
| **Marcus (Hiring Manager)** | Flyby animation, volume display, live iframes, shareable links, calendar booking |
| **Sarah (Client)** | SEO ranking, industry filtering, dual-mode toggle, full-service positioning, contact form |
| **Cord (Owner)** | Structured data files, easy deploys, screenshot workflow |

**Common Across All:**
- Fast load times (performance)
- Mobile responsive
- Dark/light mode
- Clear CTAs
- Professional polish

---

## Innovation Discovery

### Innovation Pattern 1: Volume as Proof

**The Insight:** Most developer portfolios show 6-10 curated projects. This portfolio shows 150+. The volume itself becomes the differentiator—it's impossible to fake that body of work.

**Validation Approach:** User testing during development will confirm whether the "flyby" animation landing page effectively communicates volume without overwhelming visitors.

**Risk Mitigation:** Progressive loading ensures performance doesn't degrade with scale. Grid view fallback provides accessible alternative to animation.

### Innovation Pattern 2: Proof, Not Claims

**The Insight:** The portfolio demonstrates every capability it claims. React skills? The site runs on React. Animation expertise? Watch the GSAP/Framer Motion choreography. Performance optimization? Check the Lighthouse scores. SEO knowledge? Google the site.

**Validation Approach:** Self-documenting proof—the site itself validates claims. Tech stack visible in inspector. Performance measurable via public tools.

**Risk Mitigation:** None needed. The concept is inherently low-risk because it requires no user behavior change.

### Innovation Pattern 3: Dual-Mode Toggle

**The Insight:** One codebase serves two audiences. Personal mode (cordpalmer.com) targets hiring managers. Agency mode (swrv.tech) targets business owners seeking development partners. A toggle or URL-based switching transforms the entire experience.

**Validation Approach:** A/B testing pre-launch with target audience representatives (hiring manager contacts vs. prospective clients).

**Risk Mitigation:** Start with the simpler personal mode, layer in agency mode as enhancement. Mode switching doesn't break core functionality.

### Innovation Pattern 4: Live Work

**The Insight:** Instead of screenshots, show live embedded iframes of actual production sites. Visitors can interact with real work, scroll through live pages, experience actual performance.

**Validation Approach:** Prototype iframe embeds early to validate performance impact and cross-origin constraints.

**Risk Mitigation:** Graceful fallback to static screenshots for sites that block framing. Clear loading states for slower-loading embeds.

### Innovation Summary Table

| Pattern | Risk Level | Validation Method | Fallback |
|---------|------------|-------------------|----------|
| Volume as Proof | Low | Load testing, user feedback | Grid pagination |
| Proof Not Claims | None | Self-evident | N/A |
| Dual-Mode Toggle | Medium | A/B testing | URL-based separation |
| Live Work | Medium | Prototype testing | Static screenshots |

## Domain-Specific Requirements

### Admin Dashboard (Dual-Purpose Feature)

**Strategic Value:**
The admin dashboard serves two purposes:
1. **Practical:** Manage portfolio content (projects, images, clients) without code changes
2. **Showcase:** Demonstrate admin console building capabilities during interviews and client meetings

**During a client call:** "Let me show you how I manage my 150+ projects..." — and they're watching a polished admin console in action. This becomes proof of your ability to build the exact thing they might need.

### Admin Dashboard Capabilities

| Feature | Description | Showcase Value |
|---------|-------------|----------------|
| **Project Management** | Add, edit, archive projects | CRUD operations, data validation |
| **Image Management** | Upload, crop, optimize screenshots | File handling, image processing |
| **Client Management** | Track client relationships, project history | CRM-like functionality |
| **Analytics View** | Portfolio traffic, popular projects | Dashboard design, data visualization |
| **Content Preview** | Preview changes before publish | Staging workflow |
| **Bulk Operations** | Multi-select, batch updates | Power user features |

### Technical Considerations

| Area | Requirement |
|------|-------------|
| **Authentication** | Secure login (single user, could demo multi-user) |
| **Authorization** | Role-based access control (demo capability) |
| **Data Storage** | Database for dynamic content (Supabase, PlanetScale, or similar) |
| **File Storage** | Image hosting (Cloudinary, Vercel Blob, or S3) |
| **Audit Trail** | Track changes (demonstrates enterprise features) |

### Privacy & Security (Basic)

| Area | Notes |
|------|-------|
| **Contact Form Data** | Store securely, delete on request |
| **Analytics** | Privacy-friendly (Vercel Analytics, Plausible) |
| **HTTPS** | Enforced via Vercel |
| **Admin Access** | Strong auth, no shared credentials |

### Accessibility

- WCAG AA compliance target
- Keyboard navigation throughout
- Screen reader friendly
- Color contrast ratios met
- Focus indicators visible

---

## Web App Specific Requirements

### Project-Type Overview

This is a **hybrid web application** built with Next.js App Router, combining:
- **Static Site Generation (SSG)** for portfolio pages (SEO, performance)
- **Incremental Static Regeneration (ISR)** for content updates without full rebuilds
- **Client-side interactivity** for animations, mode toggling, and iframe management

The architecture prioritizes SEO and performance while enabling rich interactivity for the signature flyby animation and live iframe embeds.

### Browser Support Matrix

| Browser | Minimum Version | Priority |
|---------|-----------------|----------|
| Chrome | Last 2 versions | Primary |
| Firefox | Last 2 versions | Primary |
| Safari | Last 2 versions | Primary |
| Edge | Last 2 versions | Primary |
| Mobile Safari | iOS 15+ | Primary |
| Chrome Android | Last 2 versions | Primary |

**Explicitly NOT supported:**
- Internet Explorer (all versions)
- Safari < 15
- Any browser without ES2020 support

### Responsive Design Requirements

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Mobile | < 640px | Phones (portrait) |
| Tablet | 640px - 1024px | Tablets, phones (landscape) |
| Desktop | 1024px - 1440px | Laptops, small monitors |
| Wide | > 1440px | External monitors, high-res displays |

**Mobile-First Approach:**
- Base styles target mobile
- Progressive enhancement for larger screens
- Touch-friendly targets (min 44x44px)
- Flyby animation adapts to viewport (reduced motion on mobile)

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Lighthouse Score** | 90+ (all categories) | Chrome DevTools |
| **LCP** | < 2.5s | Largest Contentful Paint |
| **FID** | < 100ms | First Input Delay |
| **CLS** | < 0.1 | Cumulative Layout Shift |
| **TTI** | < 3.8s | Time to Interactive |
| **Total Bundle** | < 200KB (initial) | gzipped JS |

**Performance Strategies:**
- Image optimization via Next.js Image component
- Code splitting per route
- Lazy loading below-fold content
- Preloading critical assets
- Edge caching via Vercel CDN

### SEO Strategy

**Technical SEO:**

| Element | Implementation |
|---------|---------------|
| **Meta Tags** | Dynamic per page (title, description, OG, Twitter cards) |
| **Sitemap** | Auto-generated XML sitemap |
| **Robots.txt** | Allow all, specific crawl directives |
| **Canonical URLs** | Self-referencing canonicals, handle www/non-www |
| **Structured Data** | JSON-LD for Person, Organization, Portfolio |
| **URL Structure** | Clean, semantic paths (`/projects/[slug]`) |

**Content SEO:**

| Strategy | Implementation |
|----------|---------------|
| **Keyword Targeting** | "Full stack developer portfolio", "Cannabis ecommerce developer" |
| **Internal Linking** | Cross-link projects, technologies, industries |
| **Alt Text** | Descriptive alts for all project screenshots |
| **Heading Hierarchy** | Semantic H1-H6 structure |

**Dual-Domain SEO:**
- cordpalmer.com: Personal branding keywords
- swrv.tech: Agency/service keywords
- No duplicate content (mode toggle changes content, not just styling)

### Accessibility Level (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|---------------|
| **Perceivable** | Alt text, captions, color contrast (4.5:1 min) |
| **Operable** | Full keyboard navigation, no keyboard traps, skip links |
| **Understandable** | Consistent navigation, clear labels, error identification |
| **Robust** | Valid HTML, ARIA where needed, tested with screen readers |

**Animation Accessibility:**
- Respect `prefers-reduced-motion` media query
- Provide skip animation option
- No flashing content (< 3 flashes/sec)
- Flyby animation has static fallback

### Implementation Considerations

**Next.js App Router Specifics:**
- Server Components by default (performance)
- Client Components for interactivity (`"use client"`)
- Route groups for admin vs public separation
- Parallel routes for modal patterns
- Loading and error boundaries per route

**Deployment Configuration:**
- Vercel hosting (automatic from GitHub)
- Environment variables for API keys
- Preview deployments for PRs
- Production branch protection

**Monitoring:**
- Vercel Analytics (Core Web Vitals)
- Error tracking (Sentry or similar)
- Uptime monitoring (recommended)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP

This portfolio isn't just solving "show my work" — it's delivering a memorable experience that proves capability through the experience itself. The combination of flyby animation + live iframes + visible volume (150+) creates differentiation within seconds of landing.

**Resource Requirements:** Solo developer (Cord Palmer) with BMAD Method tooling for accelerated delivery.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (Hiring Manager): Can see volume, interact with live sites, book a call
- Sarah (Business Owner): Can find site via SEO, see portfolio, contact for services
- Cord (Owner): Can add projects via data files, deploy via git push

**Must-Have Capabilities:**
| Feature | Justification |
|---------|---------------|
| Flyby animation | Core differentiator, first impression |
| Project showcase with filtering | Essential portfolio functionality |
| Live iframe embeds (5+ featured) | "Proof not claims" innovation |
| About/skills section | Standard portfolio expectation |
| Contact form + calendar | Conversion pathway |
| Dark/light mode | Modern UX expectation |
| Responsive design | Mobile traffic is 50%+ |
| Basic SEO | Discoverability for Sarah's journey |

**Explicitly Deferred to Post-MVP:**
- Admin dashboard (edit JSON/MDX directly for now)
- Full dual-mode toggle (launch personal mode first)
- Blog/articles section
- All 150+ projects (launch with 20-30, expand)

### Post-MVP Features

**Phase 2 (Growth):**
| Feature | Priority | Reasoning |
|---------|----------|----------|
| Admin Dashboard | High | Showcase piece for interviews |
| Dual-mode toggle (SWRV Tech) | High | Second domain launch |
| Full 150+ project population | Medium | Volume proof complete |
| Blog/case studies | Medium | SEO + thought leadership |
| Gamification layer | Medium | Visitor achievements, badges, engagement tracking |
| Easter eggs/Konami code | Low | Personality, memorability, developer culture nod |
| Netflix-style hover preview | Low | GIF/video preview on project hover |
| Command palette (CMD+K) | Low | Power user delight |

**Phase 3 (Expansion):**
| Feature | Priority | Reasoning |
|---------|----------|----------|
| AI chat assistant | Medium | Novel interaction |
| Client portal (SWRV) | Medium | Agency operations |
| Interactive code playground | Low | Technical showcase |
| Project cost estimator | Low | Lead qualification |

### Risk Mitigation Strategy

**Technical Risks:**
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Flyby animation hurts performance | Medium | High | Prototype early, lighthouse testing, grid fallback |
| Iframe embeds blocked (X-Frame-Options) | Medium | Medium | Curate iframe-friendly sites, screenshot fallback |
| Bundle size bloat (GSAP + animations) | Low | Medium | Code splitting, dynamic imports |

**Market Risks:**
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Animation gimmick doesn't resonate | Low | High | User testing with hiring manager contacts |
| Dual-mode confuses visitors | Medium | Medium | Clear mode indicators, URL-based separation |

**Resource Risks:**
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Scope creep delays launch | High | High | Strict MVP boundaries, defer admin to Phase 2 |
| Content population takes too long | Medium | Medium | Launch with 20-30 projects, expand incrementally |

---

## Functional Requirements

### Portfolio Showcase

- **FR1:** Visitor can view an animated flyby of project screenshots on initial page load
- **FR2:** Visitor can skip or bypass the flyby animation
- **FR3:** Visitor can view all projects in a browsable grid layout
- **FR4:** Visitor can filter projects by industry (cannabis, e-commerce, etc.)
- **FR5:** Visitor can filter projects by technology stack
- **FR6:** Visitor can filter projects by year built
- **FR7:** Visitor can see the total count of projects (150+) prominently displayed
- **FR8:** Visitor can view a project detail page with metadata and description

### Live Project Interaction

- **FR9:** Visitor can view featured projects as interactive iframe embeds
- **FR10:** Visitor can interact with live embedded sites (scroll, click, navigate)
- **FR11:** System displays static screenshot fallback when iframe is blocked
- **FR12:** Visitor can open the live site in a new tab from the embed

### Mode Switching

- **FR13:** Visitor can toggle between Personal mode and Agency mode
- **FR14:** System displays appropriate branding based on current mode (cordpalmer.com vs swrv.tech)
- **FR15:** System displays appropriate tagline based on current mode
- **FR16:** System maintains mode selection across page navigation

### Visitor Engagement

- **FR17:** Visitor can view an about section with professional summary
- **FR18:** Visitor can view skills and technology expertise
- **FR19:** Visitor can view work experience and background
- **FR20:** Visitor can submit a contact form inquiry
- **FR21:** Visitor can book a meeting via embedded calendar widget
- **FR22:** Visitor can access social links and professional profiles

### Content Discovery

- **FR23:** Visitor can navigate between sections via primary navigation
- **FR24:** Visitor can access any page via direct URL (shareable links)
- **FR25:** System provides breadcrumb or context indicators on project pages
- **FR26:** Search engines can crawl and index all public pages

### Appearance & Accessibility

- **FR27:** Visitor can toggle between dark mode and light mode
- **FR28:** System respects user's system preference for color scheme
- **FR29:** System respects user's preference for reduced motion
- **FR30:** Visitor can navigate all functionality via keyboard
- **FR31:** Screen readers can access all content and interactive elements

### Content Management (Admin - Phase 2)

- **FR32:** Admin can add new projects with metadata
- **FR33:** Admin can edit existing project information
- **FR34:** Admin can archive or remove projects
- **FR35:** Admin can upload and manage project screenshots
- **FR36:** Admin can preview changes before publishing
- **FR37:** Admin can view portfolio analytics summary

---

## Non-Functional Requirements

### Performance

| Requirement | Target | Measurement |
|-------------|--------|-------------|
| **NFR1:** Lighthouse Performance Score | ≥ 90 | Chrome DevTools Lighthouse |
| **NFR2:** Largest Contentful Paint (LCP) | < 2.5s | Core Web Vitals |
| **NFR3:** First Input Delay (FID) | < 100ms | Core Web Vitals |
| **NFR4:** Cumulative Layout Shift (CLS) | < 0.1 | Core Web Vitals |
| **NFR5:** Time to Interactive (TTI) | < 3.8s | Lighthouse |
| **NFR6:** Initial bundle size (gzipped JS) | < 200KB | Build analysis |
| **NFR7:** Flyby animation maintains 60fps | ≥ 60fps | Chrome Performance tab |
| **NFR8:** Project grid loads progressively | First 12 visible < 1s | Manual testing |

### Accessibility

| Requirement | Target | Measurement |
|-------------|--------|-------------|
| **NFR9:** WCAG 2.1 AA compliance | 100% | axe-core / Lighthouse |
| **NFR10:** Color contrast ratio (text) | ≥ 4.5:1 | Contrast checker |
| **NFR11:** Color contrast ratio (large text) | ≥ 3:1 | Contrast checker |
| **NFR12:** Keyboard navigation coverage | 100% of interactive elements | Manual audit |
| **NFR13:** Screen reader compatibility | VoiceOver + NVDA tested | Manual audit |
| **NFR14:** Reduced motion support | Animation disabled when preference set | `prefers-reduced-motion` |

### SEO

| Requirement | Target | Measurement |
|-------------|--------|-------------|
| **NFR15:** Lighthouse SEO Score | ≥ 95 | Chrome DevTools Lighthouse |
| **NFR16:** All pages have unique meta titles | 100% | Crawl audit |
| **NFR17:** All pages have meta descriptions | 100% | Crawl audit |
| **NFR18:** All images have alt text | 100% | Accessibility audit |
| **NFR19:** Sitemap generated and submitted | Present + indexed | Google Search Console |
| **NFR20:** Structured data valid | No errors | Schema markup validator |

### Security (Minimal - Phase 1)

| Requirement | Target | Measurement |
|-------------|--------|-------------|
| **NFR21:** HTTPS enforced | 100% of requests | SSL Labs test |
| **NFR22:** Contact form data sanitized | No injection vulnerabilities | Security audit |
| **NFR23:** No sensitive data in client bundle | 0 API keys/secrets exposed | Build analysis |