# Research: 10to10 Adventures Website Revamp

## 1. Current Business Snapshot

**Name:** 10to10 Adventures
**Tagline:** "Non-stop play, endless fun, for everyone!"
**Established:** 2001 (per current site copy — verify with owner; the domain/photos are dated 2023–2025)
**Location:** Mamatha College Road, Above Just Bake, Khammam, Telangana, India
**Contact:** +91-9256787788 | contactus@10to10adventures.com | Instagram @10to10play
**Developer credit (current site):** Maisantech (2023), built on WordPress with the "Kiddino" theme

**Positioning:** An integrated family entertainment + early-childhood facility. Unlike a single-purpose soft-play or play-school, 10to10 bundles seven zones under one roof.

### 1.1 Zones / Service Lines
| # | Zone | Audience | Notes |
|---|---|---|---|
| 1 | Soft Play Area (2,400 sq ft) | Kids 0–10 | Core attraction |
| 2 | Play School | 18 months – 5 yrs | Montessori-inspired; 9 AM–12 PM weekdays |
| 3 | Gaming Area | Kids/teens/families | PS5, VR |
| 4 | Private Theatre Room | Groups | Movie nights, family gatherings |
| 5 | Party Room | 25–50 guests | Birthdays, celebrations |
| 6 | Refreshment Zone / Pantry | All | F&B |
| 7 | Stalls | All | Curated retail |

### 1.2 Pricing (from current site)
**Play Session (1 hr play + 15 min theatre + games + snack pack):**
- Single ₹499 · Couple ₹799 · Family of 4 ₹1,199

**Memberships:**
- **Silver** — ₹899/mo — 30% off play/gaming, 20% off summer camp
- **Gold** — ₹1,499/quarter — 1 free play visit/month, 40% off play/gaming, priority booking
- **Platinum** — ₹4,999/year — 2 free play visits/month, 50% off play/gaming, 1 free quarterly theatre booking, early-bird offers
- Multi-member: +10% additional discount

**Summer Camp:** April 1 – May 31, 2025 — dance, art & craft, games, yoga, meditation, brain activities, coordination exercises.

### 1.3 Hours (from current site)
Mon–Fri 9:00 AM – 12:00 PM · Sat–Sun Closed
> ⚠️ **Inconsistency flagged:** the brand name is "10to10" implying 10 AM–10 PM operation, but the listed hours are 9–12 and weekends are closed. This is almost certainly a content error on the current site and must be clarified with the owner before launch. A business that "wants to scale very big" cannot show Sat–Sun Closed on the homepage.

### 1.4 Current Image & Asset Inventory
Assets live on the WordPress uploads directory. Categories observed:

**Logos (2):** `TEN-TO-TEN-LOGO-11.png`, `TEN-TO-TEN-LOGO-12.png`

**Hero slider (3):** `hero-1-1.jpg`, `hero-2.jpg`, `hero-3.jpg` (LayerSlider)

**Facility photos — 2024-11-03 shoot (~8):** `20241103_135031`, `135042`, `135349`, `135559`, `135748`, `140234`, `140645-rotated`, `141045`, `143655-rotated`

**Facility photos — 2025-03-03 shoot (~6):** `WhatsApp-Image-2025-03-03-at-18.30.49`, `18.30.59`, `19.18.11`, `20.08.24`, `00.11.18`

**Play school / kids (~12):** `IMG_0015`, `0025`, `0027`, `0031`, `0047`, `0076`, `0103`, `0133`, `0185`, `kids-1.jpg`, `20240723_180954`

**Events / summer camp (3):** `WhatsApp-Image-2025-02-27-at-1.33.33-PM`, `1.35.18-PM` (x2)

**Membership artwork (4):** `gold-member-gold-vector-emblem`, `Platinum-Member.jpeg`, `Add_a_little_bit_of_body_text_2000x.webp`, `orange-human-avatars`

**Theme leftovers (⚠️ remove):** `wordpress.vecurosoft.com/kiddino/...` — service images, icons, gallery thumbnails, logo SVG still served from the theme demo host. This is a **branding and compliance risk**: the production site ships third-party demo assets.

**Blog thumbs (2):** `blog-single-1-1`, `blog-single-1-5` (100×100 — placeholder-tier)

**Total real content images:** ~38 original photos + 3 hero slides + 2 logos + summer-camp + membership artwork. Everything else is demo theme cruft.

### 1.5 Current IA (from sitemap discovery)
```
/                    Home
/about/              About
/services/           Services hub
  /soft-play-area/
  /play-school/
  /gaming-area/
  /private-theatre-room/
  /party-room/
  /refreshment-zone/
  /stalls/
/gallery/
/blog/               (3 posts, generic content)
/contact/
/cart/               WooCommerce leftover — not actually selling anything
```

---

## 2. Problems with the Current Site

### 2.1 Technical / Brand Risks
1. **Third-party demo assets in production** — images and icons are hot-linked from `wordpress.vecurosoft.com/kiddino/`. If that host goes down, half the site breaks. It is also visually inconsistent with actual facility photos.
2. **Mixed HTTP/HTTPS** — several image URLs are `http://10to10adventures.com/...` while the site serves `https`. Mixed-content warnings on modern browsers.
3. **WordPress + LayerSlider stack** — slow, heavy, plugin-reliant, vulnerable to supply-chain hacks. Not the base for a "scale very big" strategy.
4. **Abandoned `/cart/` (WooCommerce)** — implies e-commerce but nothing is sold; dead route is an SEO and UX leak.
5. **Hours inconsistency** — name says 10–10, site says 9–12 M–F, closed weekends.
6. **Blog is 3 posts from 2023** — signals abandonment to both users and Google.
7. **No booking system** — phone/WhatsApp only. Cannot scale past a single location.
8. **No SEO structure** — no schema.org LocalBusiness, no multilingual (Telugu/Hindi) versions in a bilingual market.
9. **No analytics visible** — cannot attribute marketing spend.
10. **Accessibility unknown** — WordPress theme likely fails WCAG AA on color contrast (red #e8063c on white for body text fails AA for small text).

### 2.2 UX / Content Gaps
- No **online booking or slot-holding** for play sessions, parties, theatre.
- No **live availability** (capacity, current queue, next free slot).
- No **membership signup** funnel — users must call.
- No **party package builder** — a huge conversion opportunity for a venue that depends on birthdays.
- No **parent portal** — play-school parents need daily reports, photos, attendance, fee invoices.
- No **gift cards / referrals / loyalty** — weak repeat-visit machinery.
- No **testimonials with real names/photos**.
- No **multi-location story** — the site implies a single venue and has nothing that would scale to Hyderabad, Warangal, or beyond.
- No **franchise / expansion** page — if scaling is the goal, this is the single highest-leverage landing page to add.

### 2.3 Brand / Visual
- Existing palette (red #e8063c · gold #ffd600 · purple #490d59) is vibrant and on-brand for kids, but clashes without a system. No design tokens, no consistent typography.
- Current logo files (`TEN-TO-TEN-LOGO-11/12.png`) are raster PNGs; no SVG available. Will pixelate at scale.
- Hero imagery is a generic LayerSlider — not cinematic, not motion-led, not memorable.

---

## 3. Industry & Design Trend Signals (for 2026 launch)

Pulled from current web-design coverage for 2026:

1. **Bright, saturated, Y2K-nostalgia palettes** are returning — a perfect fit for a kids venue (Figma, Lovable, Squarespace trend reports).
2. **Glassmorphism + layered depth** as the dominant "AI-era" aesthetic.
3. **Immersive 3D / WebGL** — scroll-driven 3D walkthroughs of physical spaces instead of photo galleries.
4. **Motion-narrative typography** — oversized, animated, storytelling type.
5. **AI personalization** — per-visitor recommendations, adaptive hero, chat concierge.
6. **Speed is conversion** — 0.1s faster mobile load → 8.4% conversion lift; 53% of mobile users abandon pages >3s. 57–59% of global e-commerce is mobile.
7. **AR previews** — parents preview party-room setups before booking.
8. **Accessibility as baseline** — WCAG 2.2 AA is now table-stakes; courts and app stores enforce.

### 3.1 Competitor benchmarks (Indian FEC / kids market to study)
- **SMAAASH, Timezone, KidZania, Funcity, Hoppin, Kidihou** — for booking flows, party packages, membership tiers
- **EuroKids, Kangaroo Kids, Footprints** — for play-school parent portals and daily-report UX
- **Klay, Lil' Ninjas** — for hybrid play + school positioning

These should be audited before visual design locks. Not done yet; flagged as a task.

---

## 4. Scale Strategy Implications

"We are going to scale very big" changes the technical brief materially:

1. **Multi-tenant from day 1** — every data model (bookings, members, staff, inventory) must carry a `location_id`.
2. **Headless architecture** — decouple CMS from frontend so the same codebase powers 1 → N venues and a future mobile app.
3. **Role-based portals** — parent, staff, manager, franchise-owner, HQ admin.
4. **Centralized brand system** — design tokens, component library, content guidelines so a new city launch is a config change, not a rebuild.
5. **Observability and data** — every click, booking, cancellation, NPS tracked and dashboarded.
6. **Franchise enablement** — expression-of-interest funnel, unit economics deck, lead scoring.

---

## 5. Recommended Tech Stack (justified in design.md)

- **Frontend:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind v4 + shadcn/ui; Framer Motion + React Three Fiber for 3D walkthrough; PWA.
- **CMS:** Sanity (or Payload) — headless, structured content, live preview, multi-locale.
- **Backend:** Node/NestJS or Python/FastAPI on PostgreSQL; Redis for slot-locking; BullMQ for jobs.
- **Auth:** Clerk or Supabase Auth (phone OTP first — Indian market).
- **Payments:** Razorpay (primary) + UPI + Stripe (later, international).
- **Booking engine:** custom slot/capacity service; optional Cal.com for interviewer/staff side.
- **Search:** Meilisearch.
- **Analytics:** PostHog (product) + GA4 (marketing) + Sentry (errors).
- **Infra:** Vercel (web) + Railway/Fly.io (API) + Neon (Postgres) + Cloudflare R2 (images) + Cloudflare CDN.
- **AI layer:** Claude (concierge chat, party planner, parent-report drafting), Whisper (voice booking), OpenAI embeddings for recommendations.

---

## 6. Open Questions for the Owner

1. Actual operating hours? Name implies 10–10; site says 9–12.
2. Is the 2001 founding date real, or is it theme demo copy?
3. Any existing POS / booking software we must integrate with?
4. GST / invoicing requirements?
5. Target expansion cities and timeline?
6. Budget for original photography and 3D scan of the venue?
7. Do we keep WordPress for blog/SEO (decoupled) or go fully headless?
8. Languages to support at launch (English + Telugu + Hindi)?
9. Consent/privacy posture for child photos (DPDP Act compliance)?
10. Franchise model — company-owned, FOFO, FOCO?

These must be resolved before tasks 2.x begin.
