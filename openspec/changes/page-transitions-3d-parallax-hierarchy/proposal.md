# Change: Page Transitions, 3D Parallax & Information Hierarchy Redesign

## Why

The site is technically complete but feels static. Users land on a page, see content snap-in, and scroll through what reads as a flat brochure. To compete with premium hospitality + kids brands (Soho House Family, Kidzania, EuroKids' newer sites) the experience needs to feel like a **moving, layered piece of design** — content arrives with intent, depth gives the brand premium presence, and information surfaces in a clear hierarchy that guides the eye instead of overwhelming it.

Three concrete gaps to close:

1. **Route changes are abrupt.** Click "Memberships" — the page disappears, white flash, new page appears. No continuity, no sense of a connected venue.
2. **No depth.** Every element is on the same Z-plane. Hero blobs are flat circles. Cards don't feel like physical objects. The infinity logo is the only "premium" visual moment.
3. **Information hierarchy is uniform.** Every section uses the same eyebrow + heading + body + cards rhythm. Important content (admission, party booking) reads at the same weight as nice-to-have content (testimonials). The eye has nowhere to rest and nowhere to land.

## What Changes

### Part 1: Route page transitions (`page-transitions`)
- Add Next.js App Router `template.tsx` at root to enable route-change animations
- Use Framer Motion with **AnimatePresence + key on pathname** for clean enter/exit
- 3 transition modes:
  - **Fade-up** (default for content pages): old page fades + slides up, new page fades + slides up from below — 350ms each, eased
  - **Mask-reveal** (for /play-school and /memberships): a colored bar wipes across, revealing the new page beneath — premium feel
  - **No transition** (for in-page hash links): smooth scroll only, no fade
- Respect `prefers-reduced-motion` — fall back to instant transition
- Keep navbar and footer mounted across transitions (no flicker) — the transition only animates the `<main>` content

### Part 2: 3D vector accents (`3d-vectors`)
- **CSS-only pseudo-3D** (no react-three-fiber needed — that's a 200KB+ dependency for kids site overkill):
  - Add `transform-style: preserve-3d` + `perspective` to hero container
  - Animate vectors on Y-axis tilt with `rotateX/rotateY` springs
  - Use parallax offset (translateZ) per layer
  - Add subtle drop-shadows that move opposite to rotation (creates "lit from above" feel)
- **Mouse-tracked tilt on hero** (desktop only) — entire content card tilts ±4° based on cursor position
- **Logo gets 3D pop** — on hover, the infinity ring rotates 15° on Y-axis with springs
- **Zone card 3D lift** — on hover, card rotates 5° X-axis + 8° Y-axis tracking cursor, drop shadow shifts
- **All disabled below 768px** and on `prefers-reduced-motion`

### Part 3: Scroll-driven parallax (`parallax`)
- Use Framer Motion `useScroll` + `useTransform` (already in the project — zero new deps):
  - **Hero**: 3 depth layers move at 0.8x, 1.0x, 1.2x scroll velocity
  - **Stats strip**: numbers scale slightly as they enter view (0.95 → 1)
  - **Zone grid**: cards stagger-fade-up based on scroll-into-view (already exists, tightened)
  - **CTA banner**: background blob moves 30% slower than content
  - **Final CTA**: full-section parallax — background fixed, content scrolls
- Sticky-scroll narrative: on play-school page, the curriculum pillars become a sticky scroll-jacked section (1 pillar per scroll position)
- All parallax skipped on mobile (perf + UX) and reduced-motion

### Part 4: Information hierarchy redesign (`info-hierarchy`)

Apply a clear hierarchy system using **3 typographic levels** + **3 emphasis levels**, applied consistently across every page:

**Typographic levels:**
- **Display** (h1) — page title only, 60–80px desktop, 40px mobile, Lora 700, line-height 1.05, letter-spacing -0.025em
- **Section** (h2) — section title, 36–48px desktop, 28px mobile, Lora 600, line-height 1.15
- **Block** (h3) — card/sub-section title, 18–22px, Lora 500/Inter 600, line-height 1.3

**Emphasis levels:**
- **Hero / primary** — large display + colored accent + supporting paragraph + 2 CTAs
- **Anchor / secondary** — section eyebrow + section heading + 2-line subhead + content
- **Calm / tertiary** — eyebrow + heading + content (no subhead, less padding)

**Spacing rhythm:**
- Section vertical padding: `py-24 md:py-32` for primary, `py-20 md:py-24` for anchor, `py-16 md:py-20` for calm
- Heading-to-body gap: `mt-3` → `mt-4` → `mt-5` (heading ↑ size, gap ↑)
- Body max-width: `max-w-[60ch]` for prose, `max-w-[40ch]` for headings

**Density rules:**
- Cards in primary sections: 3 columns, large padding `p-7`
- Cards in anchor sections: 3–4 columns, medium padding `p-6`
- Cards in calm sections: 4 columns, compact padding `p-5`

**Color hierarchy:**
- Use the indigo accent only on the **most important word** in each heading
- Use turquoise/yellow for tertiary accents (icon backgrounds, dot decorations)
- Body text always at brand-ink/65 except in dark sections (white/65)

**Apply to every page:**
- **Home** — Hero (primary) → Stats (calm) → Zones (anchor) → WhyUs (anchor) → How (calm) → Membership (anchor) → CTA banner (anchor) → Testimonials (calm) → Final CTA (primary)
- **Play School** — Hero (primary) → Programs (anchor) → Curriculum (calm) → Schedule (calm) → Fees (anchor) → Admission Steps (anchor) → WhyUs (calm) → Stories (calm) → FAQ + Form (primary)
- Similar passes for memberships, party-planner, summer-camp, contact, about

### Part 5: Detailed section-level treatments (`section-details`)

For each section, define exact:
1. Eyebrow style + position
2. Heading split (which word gets the accent)
3. Subhead presence (yes/no, max length)
4. Content layout (grid columns, card type, padding)
5. Animation entrance (stagger, direction, distance)
6. Decorative elements (vectors, shapes, dot patterns)
7. Section divider (none / wave / blob / line / color-shift)

Documented in `docs/section-grammar.md` so every future section follows the same rules.

### Part 6: View Transitions API as progressive enhancement
- Where supported (Chrome/Edge), use the native View Transitions API for cross-fade between routes
- Falls back to Framer Motion AnimatePresence on Safari/Firefox
- Wrapper component `<TransitionLink>` that uses `useViewTransition` if available

## Impact

### Affected Specs (NEW capabilities)
- `page-transitions` — App Router template.tsx + AnimatePresence wrapper
- `3d-vectors` — CSS perspective system + mouse-tracked tilts on hero/cards/logo
- `parallax` — useScroll/useTransform-driven depth motion across sections
- `info-hierarchy` — 3-level typographic + emphasis + spacing system applied site-wide
- `section-details` — per-section grammar documented and codified

### Affected Code

**New files:**
- `apps/web/src/app/template.tsx` — root page-transition wrapper
- `apps/web/src/components/page-transition.tsx` — AnimatePresence + variants
- `apps/web/src/components/parallax.tsx` — `<Parallax>`, `<ParallaxLayer>` wrappers
- `apps/web/src/components/tilt-card.tsx` — 3D mouse-tilt card wrapper
- `apps/web/src/lib/hierarchy.ts` — emphasis/density constants
- `docs/section-grammar.md` — per-section design rules

**Modified files:**
- `apps/web/src/app/globals.css` — typography scale tokens, perspective utilities
- `apps/web/src/components/hero.tsx` — full 3D + parallax pass
- `apps/web/src/components/zone-grid.tsx` — wrap cards in TiltCard
- `apps/web/src/components/why-us.tsx`, `how-it-works.tsx`, `final-cta.tsx`, `cta-banner.tsx`, `stats-strip.tsx`, `membership-strip.tsx`, `testimonials.tsx` — apply hierarchy system
- `apps/web/src/app/page.tsx` — section emphasis ordering
- `apps/web/src/app/play-school/page.tsx` — sticky-scroll curriculum
- All inner pages — hero/section padding standardisation
- `apps/web/src/components/logo-v4.tsx` — 3D hover rotation

### Out of Scope
- Real WebGL 3D scenes (react-three-fiber) — overkill for this venue site, defer until phase 2
- Custom motion curves library (we use Framer Motion's built-ins)
- Server-side animation orchestration (stays client-only)
- A/B testing the new hierarchy (manual review for now)

### Risks & Mitigations
| Risk | Mitigation |
|---|---|
| Page transitions add perceived load time | Keep durations 250–400ms; use template.tsx so layout doesn't re-render |
| 3D tilts feel gimmicky on long-scroll pages | Limit to hero, zone cards, logo; never on long scrolling content |
| Parallax causes motion sickness | Strict `prefers-reduced-motion` respect; subtle parallax (≤30% offset) |
| Sticky scroll breaks on small viewports | Disable below 768px; fall back to standard stack |
| Hierarchy redesign creates visual fatigue | Test the home + play-school flow on real devices before pushing |
| AnimatePresence + App Router known issues | Use the documented `key={pathname}` pattern; test deep navigation |

### Success Metrics
- Time-on-page increases ≥ 25% on home + play-school
- Bounce rate decreases ≥ 10%
- Scroll depth on home reaches "FinalCta" for ≥ 50% of users
- Lighthouse score holds: Performance ≥ 88, Accessibility ≥ 95
- Zero motion-sickness complaints in user testing
