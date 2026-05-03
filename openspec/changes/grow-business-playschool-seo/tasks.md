# Tasks

## 1. Lead-capture infrastructure
- [ ] 1.1 Sign up for Web3Forms, save access key (owner-side, post-deploy)
- [ ] 1.2 Build `lib/lead.ts` — single function `submitLead({ source, fields })` that POSTs to Web3Forms and also opens WhatsApp
- [ ] 1.3 Wire booking-modal through `submitLead`
- [ ] 1.4 Wire contact form through `submitLead`
- [ ] 1.5 Add hidden honeypot field
- [ ] 1.6 Add `source` field auto-injected per page

## 2. Play School page
- [ ] 2.1 Create `content/playschool.ts` with programs, curriculum, schedule, fees, FAQs, parent stories
- [ ] 2.2 Build `/play-school/page.tsx` — hero, programs, curriculum, schedule, fees, admission steps, why-us, gallery, FAQ, admission form, closing CTA
- [ ] 2.3 Build `<AdmissionForm />` component with Web3Forms submission
- [ ] 2.4 Build `<VisitForm />` component for campus visits
- [ ] 2.5 Add `Preschool` JSON-LD schema
- [ ] 2.6 Add Play School to top-level nav
- [ ] 2.7 Make Play School zone card link to new page (currently links to `/zones/play-school`)

## 3. Vector illustration system
- [ ] 3.1 Create `components/vectors/index.ts` barrel export
- [ ] 3.2 Build 15 illustrated SVG icons in deep-indigo + turquoise + yellow style
- [ ] 3.3 Replace zone card emoji with vector icons
- [ ] 3.4 Add hero illustrative SVG accents (children silhouettes / abstract play shapes)
- [ ] 3.5 Add curriculum pillar icons on play school page

## 4. Typography
- [ ] 4.1 Swap display font from Fredoka to Lora (warm open-source serif)
- [ ] 4.2 Update `globals.css` font tokens
- [ ] 4.3 Adjust heading sizes / line-heights for new font
- [ ] 4.4 Verify all headings still align across pages

## 5. SEO infrastructure
- [ ] 5.1 Build `app/sitemap.ts`
- [ ] 5.2 Build `app/robots.ts`
- [ ] 5.3 Add per-page metadata exports (title, description, OG, Twitter, canonical) to: home, about, contact, memberships, summer-camp, party-planner, play-school, zones
- [ ] 5.4 Build `LocalBusiness` + `Preschool` + `EntertainmentBusiness` JSON-LD on relevant pages
- [ ] 5.5 Build `FAQPage` schema on play-school, party-planner, memberships, summer-camp
- [ ] 5.6 Generate placeholder OG image (`public/og-image.png`)
- [ ] 5.7 Verify NAP consistency across footer + contact + JSON-LD
- [ ] 5.8 Embed Google Maps with proper `geo` coordinates

## 6. UI bug fixes
- [ ] 6.1 Delete `logo.tsx`, `logo-v2.tsx`, `logo-v3.tsx`, `section-divider.tsx`, `app/logo-preview/page.tsx`
- [ ] 6.2 Fix booking-modal: reset state on close
- [ ] 6.3 Fix logo-v4 SVG `id` collisions (suffix per instance)
- [ ] 6.4 Fix `next.config.ts` env-driven export toggle
- [ ] 6.5 Fix Indian-locale stat formatting if not desired
- [ ] 6.6 Replace any remaining `siteConfig.tagline` references — currently old "Non-stop play..." copy

## 7. Verify + deploy
- [ ] 7.1 `npm run build` clean
- [ ] 7.2 Manual smoke: every form submits to Web3Forms test endpoint
- [ ] 7.3 Manual smoke: every nav link works
- [ ] 7.4 Lighthouse scores ≥ 90 / 90 / 95 / 100 (perf / a11y / best-practices / SEO)
- [ ] 7.5 Push to gh-pages
