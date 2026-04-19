# Change: Revamp 10to10 Adventures into a Futuristic, Scale-Ready Digital Platform

## Why

10to10 Adventures (Khammam) today runs a WordPress/Kiddino-theme brochure site that was built as a single-venue landing page. The business wants to **scale very big** — multi-city expansion, franchise model, and a digital experience that makes the brand feel premium and modern. The current site cannot support that ambition:

- Phone-only booking bottlenecks every sale to a human on the phone line.
- Images and icons are hot-linked from a third-party theme demo host (`wordpress.vecurosoft.com/kiddino`) — a live brand and availability risk.
- An abandoned `/cart/` WooCommerce route implies e-commerce that does not exist.
- Operating hours on the site (9 AM–12 PM, weekends closed) contradict the "10to10" brand promise.
- No parent portal, no membership self-service, no party package builder, no multi-location data model, no analytics, no SEO schema, no accessibility compliance.
- 3 blog posts, most from 2023, signal abandonment to Google and users.
- Stack (WordPress + LayerSlider + WooCommerce) is plugin-heavy, slow, and a poor base for 1 → N venue rollout.

To become a category-leading family entertainment brand, 10to10 needs a **scale-ready digital platform** — not a redesign of the existing WordPress site. The new platform must be bookable, multi-tenant, headless, multilingual, fast, accessible, measurable, and AI-assisted from day one.

## What Changes

This proposal introduces a ground-up rebuild organized into eight capabilities. Each is tracked as a new OpenSpec capability spec.

### Part 1: Brand & Design System (`design-system`)
- Establish futuristic-but-playful visual language: refined palette (primary `#e8063c`, gold `#ffd600`, purple `#490d59` rebalanced for WCAG AA), custom display typography, motion tokens, glassmorphism hero layer, 3D accent components.
- Ship a **component library** (shadcn/ui base + custom) with design tokens shared between web, mobile, and future franchise sites.
- Produce a new **logo lockup in SVG**, replacing the current raster PNGs.
- Define motion language using Framer Motion and scroll-driven narratives.

### Part 2: Marketing Site (`marketing-site`)
- Next.js 15 App Router, TypeScript, Tailwind v4, Framer Motion, React Three Fiber.
- **Immersive 3D venue walkthrough** — scroll-driven tour of the seven zones (soft play, play school, gaming, theatre, party, pantry, stalls).
- Home, About, Services, each Zone detail page, Gallery, Summer Camp, Memberships, Party Planner, Parent Resources, Blog, Careers, Franchise, Contact.
- Multi-locale (English, Telugu, Hindi) with Sanity-backed i18n.
- SEO: JSON-LD `LocalBusiness` + `EntertainmentBusiness` + `ChildCare` schemas, sitemap, OpenGraph, per-locale canonicals.
- Core Web Vitals targets: LCP < 1.8s, INP < 200ms, CLS < 0.1 on mid-tier Android over 4G.

### Part 3: Booking & Ticketing Engine (`booking-engine`)
- Real-time slot availability for **play sessions, theatre room, party room, gaming zone, and summer camp**.
- Capacity management per zone and per location with Redis-backed hold locks.
- Dynamic pricing hooks (off-peak, weekend, festival).
- Checkout via Razorpay (cards + UPI + netbanking + wallets); invoice with GST.
- Party package builder — pick theme, add-ons, cake, decor, guest count; quote and book in one flow.
- Cancellation, reschedule, refund workflows with policy rules.
- Group booking (school trips, corporate).
- **BREAKING change in business process:** phone bookings become a fallback, not the primary path.

### Part 4: Membership & Loyalty (`membership-loyalty`)
- Self-service signup for Silver/Gold/Platinum tiers with auto-renew.
- Member wallet, visit history, perk redemption, gift-a-membership.
- Referral program with tracked codes.
- Loyalty points accruing across play, F&B, and party spend.
- Family account (one payer, multiple linked kids).

### Part 5: Parent Portal (`parent-portal`)
- For play-school parents: daily attendance, photos, activity report, meal log, nap log, milestone tracking.
- Fee invoices, online payment, receipt download.
- Teacher-parent messaging with quiet hours.
- Pickup authorization (QR-based) and emergency contact management.
- DPDP-compliant consent for child photo usage.

### Part 6: Operator Console (`operator-console`)
- Staff/manager/HQ roles with RBAC.
- Live floor view: current occupancy per zone, incoming bookings, walk-ins, alerts.
- Schedule editor (sessions, camps, classes), pricing rules, promotions.
- Inventory for F&B and stalls.
- Staff roster and attendance.
- Reports: daily revenue, zone utilization, NPS, cohort retention.
- Multi-location switcher from day 1.

### Part 7: AI Concierge & Personalization (`ai-concierge`)
- Claude-powered chat embedded in the site and parent portal.
- Tools: check availability, book a slot, build a party package, compare memberships, answer FAQs, forward to human, translate EN↔TE↔HI.
- Voice booking (Whisper) for accessibility and low-literacy parents.
- Personalized homepage (recommended zones, upcoming events, member offers).
- AI-drafted daily parent reports for teachers to review and send.

### Part 8: Platform Foundations (`platform-foundations`)
- Multi-tenant data model: `location_id` on every operational table.
- Headless CMS (Sanity) for content; structured schemas for zones, blog, camps, FAQs, staff, testimonials.
- Auth via Clerk or Supabase Auth, phone-OTP first.
- Observability: PostHog (product), GA4 (marketing), Sentry (errors), OpenTelemetry traces.
- CI/CD: Vercel preview deploys, GitHub Actions, seeded staging, automated visual regression (Chromatic).
- Security: WCAG 2.2 AA, OWASP Top 10 review, rate limiting, CSP, DPDP data-residency in India region.
- Franchise enablement: expression-of-interest funnel, lead scoring, FDD portal.

## Impact

### Affected Specs (all NEW capabilities)
- `design-system`
- `marketing-site`
- `booking-engine`
- `membership-loyalty`
- `parent-portal`
- `operator-console`
- `ai-concierge`
- `platform-foundations`

### Affected Code
Greenfield build. No existing code in `c:\aidenai\Bhu\10to10`. Proposed monorepo layout:

```
apps/
  web/              Next.js marketing + booking + member + parent (App Router)
  console/          Next.js operator console (separate app)
  mobile/           (future) Expo React Native
services/
  api/              NestJS (or FastAPI) — booking, membership, billing, auth
  ai/               AI concierge orchestration (Claude tool-calling)
  workers/          BullMQ jobs — reminders, reports, photo processing
packages/
  ui/               Shared component library (shadcn-based)
  tokens/           Design tokens (colors, type, spacing, motion)
  config/           ESLint/TS/Tailwind shared config
  sdk/              Typed API client (OpenAPI-generated)
infra/
  db/               Prisma/Drizzle schema + migrations
  terraform/        Vercel + Neon + Cloudflare R2 + upstash
content/
  sanity/           Sanity Studio + schemas
```

### Affected Business Processes
- Phone-first bookings → online-first with phone fallback.
- Paper attendance → digital parent portal with daily digital report.
- Manual membership tracking → automated lifecycle with renewal reminders.
- Single venue → multi-location data model from day 1.

### Out of Scope (for this change)
- Hardware (POS terminals, turnstiles, RFID wristbands) — phase 2.
- Native mobile apps — phase 2 once web PWA is validated.
- Franchise ops software (training LMS, supply-chain) — phase 2.
- Marketplace/e-commerce for merchandise — phase 3.

### Risks & Mitigations
| Risk | Mitigation |
|---|---|
| Owner still needs to confirm hours, founding year, expansion plan | Open questions captured in `research.md §6`; block task 0.x on answers |
| Photography is inconsistent; some demo images remain | Commission a new photo + 3D-scan shoot in task 1.2 before launch |
| Team may not have headless/React experience | Use shadcn/ui + opinionated Next template; Sanity Studio hides infra |
| Razorpay KYC + GST registration can be slow in India | Start task 3.1 (merchant onboarding) in parallel with design |
| DPDP compliance for child photos | Explicit opt-in per guardian; photo-delete on request; see `parent-portal` spec |
| Scope creep from "scale very big" | Lock phase 1 to Khammam single-venue launch; multi-location model exists but only one seeded location |

### Success Metrics (first 6 months post-launch)
- ≥ 60% of bookings originate online (vs. phone).
- ≥ 40% of play-session visitors convert to a membership tier.
- Parent-portal WAU ≥ 70% of enrolled play-school families.
- Core Web Vitals green on 75th percentile mobile.
- NPS ≥ 50.
- ≥ 3 franchise expression-of-interest leads per month.
