# Change: Party Planner Page + Site-Wide Polish Pass

## Why

Phase 1 of the marketing site shipped Home, Summer Camp, Memberships, Contact, Zone detail, and 404. Several nav-linked routes still 404 (`/party-planner`, `/gallery`, `/about`), and an audit across existing pages surfaced a set of alignment, spacing, and interaction bugs that collectively make the site feel less polished than the hero suggests. Birthday parties are also one of the top revenue drivers for 10to10 — the missing Party Planner page is a direct conversion leak.

This change adds the Party Planner page (full content + pricing), fixes the audited alignment and content gaps, and upgrades site-wide scroll and navigation feel so the whole experience feels tactile and premium.

## What Changes

### Part 1: Party Planner page (`/party-planner`)
- Hero with confetti mesh + balloons + primary CTA
- 5 themed party packages with pricing, guest count, duration, inclusions
- Theme gallery (Unicorn, Superhero, Jungle Safari, Space, Under-the-Sea, Custom)
- Step-by-step "how it works" timeline
- Add-ons à la carte (cake, goodie bags, extra theatre, photographer, magician)
- 3 real-looking testimonials from parents
- FAQ accordion (booking lead time, cancellation, dietary, decor customization)
- Closing CTA with inline booking via shared `BookButton preset="Birthday Party"`

### Part 2: Content gap fills
- Rewrite Memberships page: add tier comparison table, FAQ, stronger session-pass context
- Rewrite Contact page: add proper contact form, explicit hours grid, directions card, social links, FAQ
- Add minimal About page stub (hero + story + values + CTA)
- Remove `/about` and `/gallery` from nav until those pages exist (cleaner than broken links)

### Part 3: Alignment & spacing fixes
- Standardize all hero sections to use `pt-28 md:pt-32` (accounts for fixed navbar)
- Normalize `.section` vertical rhythm — all landmark sections use consistent `py-20 md:py-28`
- Fix hero stat-card spacing on mobile (`mt-12 md:mt-20`)
- Fix zone card highlight chip wrapping on md
- Ensure every section has a clear visual boundary (bg alternation or subtle divider)
- Tighten logo internal spacing (already shipped)
- Fix contact map height fallback
- Audit all `heading-lg`/`heading-xl` line-heights on mobile — prevent clipping

### Part 4: Tactile scroll + navigation
- Add **Lenis** smooth-scroll with momentum and easing
- Add **scroll progress bar** across top of viewport (thin, brand gradient)
- Smooth hash-link scrolling with fixed-navbar offset compensation
- Scroll-to-top on route change
- Active link state in navbar (underline + color) reflecting current path/section
- Mobile menu: slide-in animation, full-screen overlay, haptic tap scale feedback
- Back-to-top floating button that appears after 400 px scroll
- Section-scroll reveal animations (already partially in place — unify)

### Part 5: Interactive polish
- All buttons get consistent tap-scale feedback (`active:scale-95`)
- All cards get consistent hover lift (`hover:-translate-y-1`)
- Focus rings visible and branded on all interactive elements
- `prefers-reduced-motion` respected by Lenis and all new animations

## Impact

### Affected Code
- `apps/web/src/app/party-planner/page.tsx` (NEW)
- `apps/web/src/app/about/page.tsx` (NEW — stub)
- `apps/web/src/app/memberships/page.tsx` (REWRITE)
- `apps/web/src/app/contact/page.tsx` (REWRITE)
- `apps/web/src/app/layout.tsx` (add SmoothScroll + ScrollProgress + BackToTop)
- `apps/web/src/components/smooth-scroll.tsx` (NEW — Lenis wrapper)
- `apps/web/src/components/scroll-progress.tsx` (NEW)
- `apps/web/src/components/back-to-top.tsx` (NEW)
- `apps/web/src/components/navbar.tsx` (active state, mobile menu animation)
- `apps/web/src/content/nav.ts` (drop dead links, add party planner)
- `apps/web/src/content/parties.ts` (NEW — party data)
- `apps/web/src/app/globals.css` (scroll behavior, new component styles)
- `apps/web/package.json` (add `lenis` dependency)

### Out of Scope
- Gallery page (deferred — waits on photo shoot)
- Full About page (stub only; full version waits on brand story interview)
- Online payment for party deposit (Phase 2)
- Real testimonials (using realistic placeholders marked internally)

### Success Criteria
- All nav links resolve to real content (no 404s from navigation)
- Party Planner matches Summer Camp in depth and polish
- Scroll feels noticeably smoother on desktop (Lenis) with no mobile regression
- Active nav link always highlights the current section/page
- Build passes with no new ESLint errors
- CWV budget held: home LCP < 1.8s, total first-load JS < 200 KB
