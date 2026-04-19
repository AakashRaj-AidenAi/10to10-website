# Design: 10to10 Adventures Futuristic Platform

This document covers architecture, technology selection, data model, and cross-cutting concerns. Capability-level behavioral contracts live in `specs/*/spec.md`.

---

## 1. Design Principles

1. **Scale-ready from day one.** Every data model carries `location_id`; every page reads from headless CMS; every flow assumes >1 venue.
2. **Online-first, phone-fallback.** Every sale should be completable without a staff phone call.
3. **Performance is conversion.** LCP < 1.8s mid-tier Android / 4G. No feature ships that breaks this budget.
4. **Accessibility is baseline.** WCAG 2.2 AA tested on every PR (axe + Lighthouse).
5. **Content is structured, not WYSIWYG.** Sanity schemas force consistency across locales and venues.
6. **Optimistic UI + idempotent backend.** Every booking/payment step survives a network retry.
7. **Observability before optimization.** Every click, booking, and error is instrumented before we tune anything.
8. **AI is a capability, not the product.** Concierge assists; the site works without it.

---

## 2. System Architecture

```
                            ┌─────────────────────┐
                            │   Cloudflare CDN    │
                            │  (cache + WAF + R2) │
                            └──────────┬──────────┘
                                       │
                 ┌─────────────────────┼──────────────────────┐
                 │                     │                      │
          ┌──────▼──────┐      ┌───────▼───────┐     ┌────────▼───────┐
          │  apps/web   │      │ apps/console  │     │  Sanity Studio │
          │  Next.js 15 │      │  Next.js 15   │     │  (content)     │
          │  (SSR/ISR)  │      │  (SPA/SSR)    │     └────────┬───────┘
          └──────┬──────┘      └───────┬───────┘              │
                 │                     │                      │
                 │    ┌────────────────┼──────────────────────┘
                 │    │                │
          ┌──────▼────▼────────────────▼──────┐
          │     services/api  (NestJS)        │
          │  Auth · Booking · Membership ·    │
          │  Billing · Parent · Operator      │
          └──┬──────────┬──────────┬──────────┘
             │          │          │
       ┌─────▼───┐ ┌────▼────┐ ┌───▼─────────┐
       │ Postgres│ │  Redis  │ │   BullMQ    │
       │  (Neon) │ │ (locks, │ │  workers    │
       │         │ │  cache) │ │ (reminders, │
       └─────────┘ └─────────┘ │  reports)   │
                               └──────┬──────┘
                                      │
                        ┌─────────────┼──────────────┐
                        │             │              │
                 ┌──────▼────┐  ┌─────▼────┐  ┌──────▼──────┐
                 │ Razorpay  │  │ Claude   │  │ WhatsApp    │
                 │ (payments)│  │ (AI)     │  │ Business API│
                 └───────────┘  └──────────┘  └─────────────┘
```

### 2.1 Why these choices

| Decision | Chosen | Alternatives considered | Why |
|---|---|---|---|
| Meta-framework | Next.js 15 App Router | Remix, Astro | Best-in-class ISR + React 19 + Vercel DX; future edge deployments |
| Styling | Tailwind v4 + shadcn/ui | Chakra, MUI | Headless primitives, own the code, themeable via tokens |
| 3D/motion | Framer Motion + React Three Fiber | GSAP, Lottie-only | Declarative, React-native, good mobile perf |
| CMS | Sanity | Payload, Contentful, Strapi | Best i18n + live preview + structured schemas; generous free tier |
| Backend | NestJS (TypeScript) | FastAPI, Rails | Shared TS types with frontend via OpenAPI; strong DI for testability |
| DB | PostgreSQL (Neon) | MySQL, Supabase | Branching for preview envs; JSONB for flexible booking meta |
| ORM | Prisma | Drizzle, TypeORM | Migrations + typing + introspection |
| Auth | Clerk | Supabase Auth, Auth.js | Phone-OTP India-ready; org/roles for operator console |
| Payments | Razorpay | Stripe, PayU | Mandatory for India market; UPI + netbanking native |
| Search | Meilisearch | Algolia, Typesense | Self-hostable, cheap, great relevance |
| Analytics | PostHog + GA4 + Sentry | Mixpanel, Amplitude | PostHog self-host option; GA4 for marketing team |
| Deploy | Vercel (web) + Railway/Fly (api) + Neon | AWS, GCP | Minimize DevOps; fast preview envs; Indian-region data for DPDP |
| Monorepo | pnpm + Turborepo | Nx, Lerna | Lighter; fits Vercel deployment model |

### 2.2 Why NOT WordPress (explicitly)
- Plugin-sprawl and supply-chain CVEs (the current site has LayerSlider — historically exploited).
- PHP rendering is hard to hit the <1.8s LCP budget on Indian mobile.
- No first-class typed API for React/mobile clients.
- Multisite/multi-tenant is clunky; licensing and plugin costs balloon per venue.
- Existing site is the proof that WordPress cannot evolve into the product vision here.

---

## 3. Data Model (core tables)

All operational tables are **location-scoped**. `location_id` is NOT NULL everywhere except `locations`, `users`, `memberships_plan_templates`.

```
locations
  id · slug · name · address · geo · timezone · hours_json · status · brand_overrides

zones
  id · location_id · kind(enum) · name · capacity · sqft · photos · status

slot_templates
  id · location_id · zone_id · weekday_mask · start_time · duration_min · capacity · base_price

slots  (materialized per-day from templates)
  id · location_id · zone_id · starts_at · ends_at · capacity · booked · held · status

bookings
  id · location_id · user_id · slot_id · party_size · total_amount · status
  · razorpay_order_id · created_at · cancelled_at · source(enum: web/phone/walkin)

booking_items
  id · booking_id · kind(session/party/camp/theatre/gaming) · meta_json · amount

party_packages
  id · location_id · name · base_price · includes_json · max_guests

party_bookings
  id · booking_id · package_id · theme · guest_count · addons_json · cake_option · event_date

users
  id · phone · email · name · locale · role(guest/member/parent/staff/manager/admin)
  · dpdp_consent_json · created_at

memberships
  id · user_id · tier(silver/gold/platinum) · location_id · starts_at · ends_at · auto_renew
  · razorpay_subscription_id · status · benefits_used_json

loyalty_accounts
  id · user_id · balance_points · lifetime_points · tier

loyalty_ledger
  id · account_id · delta · reason · ref_type · ref_id · created_at

referrals
  id · referrer_user_id · code · uses · reward_rule_json

children  (for parent portal)
  id · parent_user_id · name · dob · allergies · photo_consent · pickup_authorized_users

enrollments
  id · child_id · program_id · location_id · starts_at · ends_at · fee_plan_id

attendance
  id · child_id · date · check_in · check_out · checked_in_by · notes

daily_reports
  id · child_id · date · meals_json · nap_json · activities_json · photos · teacher_notes · ai_draft · reviewed_by

invoices
  id · user_id · location_id · amount · gst_amount · items_json · status · pdf_url

payments
  id · invoice_id · razorpay_payment_id · amount · method · status

conversations         (AI concierge + human handoff)
  id · user_id · channel(web/whatsapp/voice) · locale · transcript_json · last_msg_at

agent_tool_calls      (audit AI actions)
  id · conversation_id · tool_name · args_json · result_json · executed_by · created_at

audit_log             (all sensitive actions)
  id · actor_user_id · action · target_type · target_id · diff_json · ip · created_at

franchise_leads
  id · name · email · phone · city · capital_range · message · score · status · created_at
```

### 3.1 Slot locking strategy
Booking a slot is a two-phase process:

1. **Hold** — client calls `POST /slots/:id/hold`. API takes a Redis lock `slot:{id}:hold:{userId}` with a 10-minute TTL, decrements `slots.held` under a row-level Postgres lock. Returns hold token.
2. **Confirm** — after Razorpay checkout, client calls `POST /bookings/:id/confirm` with payment_id + hold token. API verifies payment signature, moves `held → booked` in one transaction, releases Redis lock, emits `booking.confirmed` event.

Expired holds are reaped by a BullMQ worker every 60s. Idempotency is enforced via `Idempotency-Key` header on all mutating endpoints.

### 3.2 Multi-tenant isolation
- Every query in `services/api` is wrapped in a `LocationContext` middleware that injects `location_id` from the subdomain (`khammam.10to10adventures.com`) or header.
- Row-level security in Postgres as defense-in-depth.
- Sanity documents carry a `locations[]` reference array so content can be scoped or shared.

---

## 4. Key Flows

### 4.1 Play-session booking (happy path)
1. User lands on `/khammam/zones/soft-play`, sees live capacity badge.
2. Clicks **Book** → modal shows next 7 days of slots for that zone.
3. Picks slot + party size → call `POST /slots/:id/hold`.
4. Auth: if logged out, phone-OTP via Clerk (30s).
5. Checkout sheet shows breakdown, member discount auto-applied.
6. Razorpay checkout → payment.
7. On success, `POST /bookings/:id/confirm`, booking confirmed, QR ticket + WhatsApp + email sent.
8. 2h before slot, BullMQ reminder worker sends WhatsApp.
9. On arrival, staff scans QR in `apps/console` → `attendance` row created.

### 4.2 Party package builder
Wizard-style: Date → Guest count → Theme → Add-ons → Cake → Extras → Quote → Pay 30% deposit → Confirmed. Final 70% collected on event day. State persisted in `party_bookings` from step 1 so users can resume.

### 4.3 Parent daily report
1. Teacher logs activities throughout the day in console (tap meals, nap, mood, photo).
2. At 4 PM, BullMQ triggers `ai.draftReport` job per child.
3. Claude drafts narrative from structured inputs (`daily_reports.ai_draft`).
4. Teacher reviews, edits, hits **Send**; parent gets WhatsApp + portal notification.
5. AI draft is **never** sent without human review (DPDP + trust).

### 4.4 Multi-location switcher
Domain strategy: `10to10adventures.com` (marketing + city selector) → `{city}.10to10adventures.com` (tenant app). Khammam is the only seeded city at launch. Adding Warangal is a row in `locations` + content translation + photo shoot.

---

## 5. Design System

### 5.1 Tokens
```
colors:
  brand.primary   #e8063c   (adjusted contrast pair for body: #b00430 on white)
  brand.gold      #ffd600   (use on dark only; fails on white)
  brand.purple    #490d59
  brand.ink       #0b0b12
  brand.cloud     #f7f7fb
  semantic.success #12a66b  warning #ffb020  danger #e4003a
  surface.glass    rgba(255,255,255,0.6) + backdrop-blur(16px)

type:
  display   "Clash Display"     (hero)
  body      "Inter"              (UI)
  accent    "Caveat"             (playful annotations)

radii: 8 · 16 · 24 · full
shadows: soft · lifted · glow-primary · glow-gold
motion:
  ease.out      cubic-bezier(0.22, 1, 0.36, 1)
  ease.spring   spring(stiffness 220, damping 22)
  duration.xs 120 · sm 200 · md 320 · lg 520 · xl 840
```

### 5.2 Hero / 3D walkthrough
- On desktop and capable mobiles, hero is a scroll-driven React Three Fiber scene: a low-poly cutaway of the 10to10 venue with the seven zones lit as the user scrolls. Each zone card pins and animates in.
- Fallback: on low-power devices (`navigator.deviceMemory < 4` or reduced-motion), render a static layered image with parallax only.
- **Never block LCP on the 3D scene.** Hero text + primary CTA paint first; 3D hydrates after.

### 5.3 Accessibility
- Every interactive element keyboard-focusable with visible focus ring.
- Color contrast ≥ 4.5:1 for text, 3:1 for UI — enforced via token lint.
- `prefers-reduced-motion` disables all parallax, auto-play video, and 3D.
- Screen-reader labels on all icon-only buttons.
- Form errors announced via `aria-live`.
- Axe CI check on every PR; Lighthouse a11y score ≥ 95.

---

## 6. Internationalization
- Locales: `en-IN` (default), `te-IN` (Telugu), `hi-IN` (Hindi).
- URL strategy: `/en/...`, `/te/...`, `/hi/...` via Next `app/[locale]`.
- Content in Sanity with field-level translation. Fallback chain `te → en`, `hi → en`.
- Currency/number/date via `Intl.*`.
- RTL not required.

---

## 7. SEO
- JSON-LD: `LocalBusiness`, `EntertainmentBusiness`, `ChildCare`, `Event` (camps), `Product` (memberships), `FAQPage`.
- `robots.txt`, `sitemap.xml` (dynamic, per-locale).
- Canonicals per-locale; `hreflang` cluster.
- OG + Twitter cards per page via Next metadata API.
- Blog with at least 12 evergreen posts at launch (parenting, play benefits, party ideas, etc.) to avoid "abandoned blog" signal the current site has.

---

## 8. Security & Compliance
- **DPDP Act 2023** (India) compliance for child data; explicit guardian consent per processing purpose.
- GDPR-style data-subject endpoints (export, delete) even for non-EU users — future-proofing.
- CSP, HSTS, X-Frame-Options, signed cookies, HTTP-only sessions.
- Rate limiting on OTP, booking, and auth endpoints (upstash Ratelimit).
- All PII encrypted at rest (Neon column encryption for phone/email).
- Razorpay handles PAN/card data — we never store it.
- Audit log on any action touching child records or financial records.
- OWASP ASVS Level 2 self-check pre-launch.

---

## 9. Observability & Ops
- **PostHog** — product events (`booking_started`, `booking_confirmed`, `cta_clicked`…), session replay gated on consent.
- **GA4** — marketing attribution.
- **Sentry** — errors, perf, release health.
- **OpenTelemetry** — API traces to Grafana Cloud or Honeycomb.
- **Uptime** — Checkly on booking flow + home + /healthz.
- **Runbooks** — per-service markdown in `docs/runbooks/`.

---

## 10. Rollout Plan

| Phase | Duration | Outcome |
|---|---|---|
| 0 — Discovery | 2 weeks | Owner Q&A answered, brand locked, photo shoot scheduled |
| 1 — Foundations | 3 weeks | Monorepo, tokens, CMS schemas, auth, CI/CD, staging |
| 2 — Marketing site + content | 4 weeks | All pages live on staging, content in 3 locales |
| 3 — Booking engine | 4 weeks | Play session + theatre booking E2E |
| 4 — Membership + loyalty | 2 weeks | Self-serve signup, renewal, referrals |
| 5 — Parent portal | 3 weeks | Daily reports, attendance, messaging |
| 6 — Operator console | 3 weeks | Live floor, reports, schedule editor |
| 7 — AI concierge | 2 weeks | Chat + voice, tool-calling |
| 8 — Hardening | 2 weeks | A11y, perf, security, load test |
| 9 — Soft launch (Khammam) | 1 week | Invite-only, bug bash |
| 10 — Public launch | — | Paid marketing, PR, franchise page live |

Total: ~26 weeks with a 4–6 person team.

---

## 11. Asset Migration

From the current site, **keep and re-process**:
- All real facility photos from the 2024-11-03 and 2025-03-03 shoots (~14 files) — upscale, re-crop for art-directed responsive sizes.
- All play-school kids photos (~12 files) — subject to re-consent under DPDP before republication.
- Summer-camp photos (3 files).
- Logo — re-traced to SVG from `TEN-TO-TEN-LOGO-12.png`.

**Discard**:
- Everything from `wordpress.vecurosoft.com/kiddino/...` (theme demo assets).
- LayerSlider heroes (replaced by 3D walkthrough + new hero shoot).
- Placeholder blog thumbnails.
- WooCommerce cart route.

**Commission new**:
- 1 full-day photo + drone shoot of the venue.
- 1 half-day video shoot (20s hero loop + zone clips + parent testimonial interviews).
- 1 Matterport or Polycam 3D scan of the venue (for the walkthrough model).
- 3 staff/teacher headshots.

---

## 12. Open Decisions (decide before Task 0.6)

1. Domain strategy: `10to10adventures.com` vs `10to10play.com` vs both.
2. Monorepo manager: pnpm + Turborepo (proposed) vs Nx.
3. Backend language: NestJS (proposed) vs FastAPI — depends on team skills.
4. WhatsApp: Meta Cloud API direct vs Gupshup/AiSensy aggregator.
5. Payment alternatives: add Cashfree as backup to Razorpay?
6. Photo/video consent flow for existing child images — re-consent campaign before migration.
