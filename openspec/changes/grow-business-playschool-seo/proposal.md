# Change: Grow the Business — Playschool Hero Page, Lead Capture, SEO & Playful Vector Identity

## Why

Three core business outcomes are currently broken on the live site:

1. **Inquiries don't reach us.** Every CTA opens WhatsApp with a pre-filled message — but if a parent doesn't tap "Send" on WhatsApp, the lead is lost. There is no email/database backup. We have no record of how many people tried to inquire.
2. **The play school — the highest-LTV product — has no dedicated landing page.** It is currently a single zone card that reuses the generic zone detail template. Parents inquiring about play school admission need fees, schedule, curriculum, FAQs, photos, an admission form, and the option to schedule a campus visit — none of which exists.
3. **We are invisible in local search.** Searches like "best play school in Khammam", "play area Khammam", "birthday venue Khammam" do not surface 10to10. There is no Google Business Profile integration, no `LocalBusiness` JSON-LD, no per-page meta keywords/descriptions, no sitemap, no robots, no alt text discipline. We have placed all our marketing weight on a domain Google has no reason to rank.

Two secondary issues compound the above:
- The current font (Fredoka + Nunito) reads as "generic playful template" — needs a more confident pairing.
- Visually the site lacks the warmth and illustrative charm that competing kids brands (EuroKids, Kangaroo Kids, Footprints) use to win parent trust on first scroll.

This change addresses every one of those gaps and ships a measurable lead-tracking system so the owner can see the inquiry funnel for the first time.

## What Changes

### Part 1: Lead-capture infrastructure (`lead-capture`)
- Integrate **Web3Forms** as the form backend. Free tier supports 250 submissions/month with no account creation.
- Every inquiry form (booking modal, contact form, play-school admission, party planner, summer-camp registration, franchise EOI) submits to **two destinations in parallel**:
  - **Web3Forms** → owner's email (`contactus@10to10adventures.com`) with structured fields, source attribution, and timestamp
  - **WhatsApp** → existing pre-filled message UX (kept for parents who prefer it)
- Add hidden honeypot field for spam prevention, plus Web3Forms' built-in hCaptcha-on-suspicion guard.
- Add Google Sheets webhook (Web3Forms native integration) so leads also land in a spreadsheet for the owner to track manually.
- Each form includes a `source` field so the owner can see which page drove the inquiry (Home / Play School / Party / Summer Camp / Contact / Franchise).

### Part 2: Play School flagship page (`playschool-page`)
A dedicated `/play-school` page replacing the current generic zone detail. Includes:
- **Hero** — campus photo collage placeholder, "Khammam's premier Montessori-inspired play school" + age groups + admission CTA
- **Programs** — Playgroup (1.5–2.5 yrs), Nursery (2.5–3.5 yrs), LKG (3.5–4.5 yrs), UKG (4.5–5.5 yrs) with timing, child-to-teacher ratio, and "what they learn"
- **Curriculum highlights** — 6 pillars (Cognitive, Language, Social, Motor, Creative, Values) with custom illustrative icons
- **A day at 10to10** — visual schedule timeline (drop-off → circle time → activity → snack → free play → story → pickup)
- **Fees & schedule** — quarterly/half-yearly/annual options, transparent pricing with sibling discount, what's included
- **Admission process** — 4-step infographic (Inquiry → Campus visit → Trial day → Confirmation)
- **Why parents choose us** — 6 trust signals: trained Montessori-certified teachers · CCTV + entry biometrics · sanitised hourly · Daily Reports app · 1:8 ratio · open-door policy
- **Photo gallery** — facility shots (placeholder for now, real photos in phase 2)
- **Real parent testimonials** — 3 testimonials with year of enrollment
- **FAQ accordion** — 10 common parent questions (admission age, timings, transport, food, sick policy, vacation calendar, fee refund, parent-teacher meetings, dress code, observation visits)
- **Admission inquiry form** — sticky on scroll, inline at bottom; collects: child's name, DOB, gender, parent name, phone, email, preferred program, preferred start month, hear-from-us source
- **Schedule a campus visit** — separate CTA leading to a date-time picker form
- **Closing CTA** — "Book a free trial day" with WhatsApp + form dual submission

### Part 3: Playful vector illustration system (`vector-system`)
Replace generic emoji + Lucide icons with **custom inline SVG illustrations** in zone cards, hero, programs, and curriculum. Build a small, on-brand illustrated icon set:
- Soft rounded corners, single-stroke style
- 3-color limit per illustration (indigo + turquoise + warm yellow accent)
- Match the deep-indigo premium palette
- Lightweight (each ~1 KB inline SVG, no external font dependency)
- Topics: child playing, teacher, blocks, books, palette, slide, ball pit, gaming controller, theatre, cake, snack, gift, sparkle, sun, balloon
- Stored in `apps/web/src/components/vectors/` as individual exports

### Part 4: Typography upgrade (`typography`)
- Display: swap **Fredoka** (generic) for **Recoleta** (warm serif, premium kids brand feel — used by Mailchimp, Slack, Boden) via Google's open-source equivalent. Fallback: **Lora** if licensing requires.
- Body: keep **Inter** (already good, professional, neutral)
- Numerals: Inter's tabular-nums for stats
- Reduce heading max-size by one tier (was 7xl, now 6xl) for a tighter feel

### Part 5: SEO foundation (`seo`)
- **Per-page metadata** — unique `<title>`, `<meta description>`, OpenGraph, Twitter card for every page (currently only home has these)
- **JSON-LD schemas:**
  - Site-wide `LocalBusiness` + `EntertainmentBusiness` (already exists, expand it)
  - `Preschool` schema on `/play-school`
  - `Event` schema on `/summer-camp`
  - `FAQPage` schema on every page that has an FAQ
  - `Service` schema on each zone
- **`sitemap.xml`** — generated from app routes via `next-sitemap` or manual export
- **`robots.txt`** — allow all, point to sitemap
- **Canonical URLs** on every page
- **Open Graph image** — generate a 1200×630 OG image template
- **Local SEO** — embed the Google Maps location with structured `geo` coordinates, ensure NAP (Name, Address, Phone) is identical across the site and matches what would go in Google Business Profile
- **Keyword targeting** per page:
  - Home: "10to10 Adventures", "Khammam play area", "kids entertainment Khammam"
  - Play school: "play school Khammam", "Montessori Khammam", "preschool Khammam admission 2026"
  - Party: "birthday party venue Khammam", "kids party hall Khammam"
  - Memberships: "kids play area membership Khammam"
  - Summer camp: "summer camp Khammam", "kids summer activities Khammam"

### Part 6: UI bug fixes (`ui-fixes`)
Audited issues to resolve:
- The 4 unused logo files (`logo.tsx`, `logo-v2.tsx`, `logo-v3.tsx`) increase bundle and confuse maintenance — keep only the live `logo-v4.tsx` and delete the rest (preserve concepts in memory, which already exists).
- Stats strip on home has tabular numerals but the Indian locale string formatting (`10,00,000`) doesn't match the typography — switch to plain `en-US` formatting
- Booking modal: when user closes mid-flow, form state is preserved but on reopen it shows the success screen if user previously submitted. Should reset on close.
- The `next.config.ts` toggles between `output: "export"` (gh-pages) and standard (dev) cause merge conflicts every deploy. Add a `NEXT_PUBLIC_DEPLOY_TARGET` env var so the same config supports both modes without manual edits.
- `/logo-preview` is publicly indexable — already has `robots.index = false` but is in nav... wait, it's not in nav. Verify and tighten.
- 3 SVG inline icons in `logo-v4.tsx` use the same `id="inf-grad"` and `id="inf-glow"` — if two logos render on the same page (logo-preview shows it 3 times in 3 sizes), the gradient defs collide. Suffix the IDs per-instance.

## Impact

### Affected Specs (NEW capabilities)
- `lead-capture` — Web3Forms + Sheets backend, source attribution, dual-channel delivery
- `playschool-page` — dedicated landing page with full admission flow
- `vector-system` — custom illustrated icon library
- `seo` — site-wide metadata, schemas, sitemap, robots
- `typography` — premium font pairing

### Affected Code
**New files:**
- `apps/web/src/app/play-school/page.tsx` — new dedicated landing page
- `apps/web/src/components/vectors/*.tsx` — illustrated icon set (15+ icons)
- `apps/web/src/components/admission-form.tsx` — playschool admission inline form
- `apps/web/src/components/visit-form.tsx` — schedule campus visit form
- `apps/web/src/lib/lead.ts` — Web3Forms + Sheets POST helper
- `apps/web/src/content/playschool.ts` — programs, curriculum, schedule, fees, FAQs
- `apps/web/src/app/sitemap.ts` — Next.js sitemap generator
- `apps/web/src/app/robots.ts` — Next.js robots.txt generator
- `apps/web/public/og-image.png` — 1200×630 OG image (placeholder for now)

**Modified files:**
- `apps/web/src/components/booking-modal.tsx` — submit to Web3Forms in addition to WhatsApp
- `apps/web/src/app/contact/page.tsx` — same dual submission
- `apps/web/src/app/layout.tsx` — typography variable swap, expanded metadata
- `apps/web/src/app/globals.css` — font-display tokens
- `apps/web/src/components/zone-grid.tsx` — illustrative icons replacing emoji
- `apps/web/src/content/nav.ts` — add Play School as top-level nav item
- `apps/web/next.config.ts` — env-based output mode
- All inner pages (`memberships`, `summer-camp`, `party-planner`, `about`, `contact`) — proper per-page metadata

**Deleted files:**
- `apps/web/src/components/logo.tsx` (v1, never used)
- `apps/web/src/components/logo-v2.tsx` (concept only)
- `apps/web/src/components/logo-v3.tsx` (concept only)
- `apps/web/src/app/logo-preview/page.tsx` (internal preview, no longer needed once v4 is locked)
- `apps/web/src/components/section-divider.tsx` (unused since the early phase)

### Out of Scope (deferred)
- Real campus photography (commission separately, plug into the placeholder slots)
- Google Ads / Meta Ads — separate marketing engagement
- Phone call analytics (CallRail or similar) — phase 2
- Multi-language (Telugu/Hindi) — phase 2 once English version is converting

### Risks & Mitigations
| Risk | Mitigation |
|---|---|
| Web3Forms 250/mo limit hit | Upgrade to paid (₹10/mo) or migrate to Resend + custom Lambda |
| OG image needs a designer | Ship with text-on-brand-color generated image, replace later |
| Owner doesn't have Google Business Profile | Provide a runbook in tasks.md to claim it |
| Recoleta licensing | Default to Lora (open-source serif) which has very similar warm character |
| New play school page extends static export size | Acceptable — adds ~3 KB, well under budget |

### Success Metrics (90 days post-launch)
- ≥ 50 admission inquiries arrive in Web3Forms → owner's inbox per month
- 0 lost leads (every WhatsApp click also writes to backend)
- `/play-school` ranks in top 5 Google results for "play school Khammam" + "preschool Khammam"
- Lead-to-trial conversion ≥ 20%
- ≥ 30% of homepage visitors scroll past the hero
