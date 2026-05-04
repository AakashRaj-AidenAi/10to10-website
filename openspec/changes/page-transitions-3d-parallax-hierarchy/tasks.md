# Tasks

## 1. Page transitions
- [ ] 1.1 Add `app/template.tsx` with PageTransition wrapper
- [ ] 1.2 Build `components/page-transition.tsx` (AnimatePresence + key={pathname})
- [ ] 1.3 Define 2 variants: fadeUp (default), maskReveal (premium pages)
- [ ] 1.4 Wire route-aware variant selection in `page-transition.tsx`
- [ ] 1.5 Verify navbar + footer stay mounted across transitions
- [ ] 1.6 Respect `prefers-reduced-motion`

## 2. 3D vectors + tilts
- [ ] 2.1 Add CSS perspective utility classes to globals.css
- [ ] 2.2 Build `components/tilt-card.tsx` (mouse-tracked rotateX/rotateY)
- [ ] 2.3 Wrap zone cards in TiltCard
- [ ] 2.4 Add 3D hover spin to logo-v4 infinity
- [ ] 2.5 Hero content card gets subtle global mouse tilt
- [ ] 2.6 Disable below 768px

## 3. Parallax sections
- [ ] 3.1 Build `components/parallax.tsx` with useScroll/useTransform helpers
- [ ] 3.2 Apply parallax to hero (3 depth layers)
- [ ] 3.3 Apply parallax to CtaBanner (slow blob)
- [ ] 3.4 Apply parallax to FinalCta (background fixed feel)
- [ ] 3.5 Apply parallax to play-school hero
- [ ] 3.6 Sticky-scroll curriculum on play-school

## 4. Information hierarchy
- [ ] 4.1 Define typography token scale in globals.css
- [ ] 4.2 Document section grammar in docs/section-grammar.md
- [ ] 4.3 Apply primary/anchor/calm emphasis levels per section
- [ ] 4.4 Audit all headings — accent only the key word
- [ ] 4.5 Standardise body max-widths and line-heights
- [ ] 4.6 Standardise section vertical padding by emphasis

## 5. Section-level details (per page)
- [ ] 5.1 Home: re-rhythm 9 sections by emphasis
- [ ] 5.2 Play school: sticky curriculum pass
- [ ] 5.3 Memberships: restructure pricing hierarchy
- [ ] 5.4 Party planner: visual emphasis on packages
- [ ] 5.5 Summer camp: schedule clarity pass
- [ ] 5.6 Contact: form vs info-card balance
- [ ] 5.7 About: editorial layout pass

## 6. Verify + deploy
- [ ] 6.1 Build clean (no new errors/warnings)
- [ ] 6.2 Manual smoke: every route transition is smooth
- [ ] 6.3 Manual smoke: 3D tilts feel natural, not gimmicky
- [ ] 6.4 Manual smoke: parallax on home + play-school
- [ ] 6.5 Mobile QA — all 3D/parallax disabled
- [ ] 6.6 Lighthouse perf ≥ 88
- [ ] 6.7 Push to gh-pages
