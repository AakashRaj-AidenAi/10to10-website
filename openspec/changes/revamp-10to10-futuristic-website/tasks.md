# Implementation Tasks

Tasks are grouped by phase. Each task is atomic and independently reviewable. Check off as completed.

## 0. Discovery & Alignment

- [ ] 0.1 Owner Q&A workshop — resolve all 10 open questions in `research.md §6`
- [ ] 0.2 Confirm actual operating hours, fix name/schedule contradiction
- [ ] 0.3 Lock brand pillars, target personas, expansion roadmap
- [ ] 0.4 Competitor audit (SMAAASH, Timezone, KidZania, EuroKids, Klay, Hoppin)
- [ ] 0.5 Commission photo + video + 3D scan shoot — scope, vendor, date
- [ ] 0.6 Decide open-decision items in `design.md §12`
- [ ] 0.7 Register razorpay merchant account + GST onboarding (long lead time)
- [ ] 0.8 Legal review: DPDP consent copy, T&C, refund/cancellation policy, child photo consent
- [ ] 0.9 Secure domain(s) and email; set up Google Workspace + Postmark

## 1. Brand & Design System

- [ ] 1.1 Audit existing logo; re-trace to SVG; create wordmark + mark + lockups
- [ ] 1.2 Photography — execute commissioned shoot; deliver raw + edited sets
- [ ] 1.3 Define color tokens with WCAG-AA compliant pairs
- [ ] 1.4 Define type scale; license Clash Display + Inter + Caveat
- [ ] 1.5 Define motion tokens and Framer Motion variants
- [ ] 1.6 Build `packages/tokens` with color, type, spacing, radii, shadows, motion
- [ ] 1.7 Fork shadcn/ui into `packages/ui`; theme with tokens
- [ ] 1.8 Build core components: Button, Input, Card, Dialog, Sheet, Tabs, Calendar, Badge, Avatar, Toast
- [ ] 1.9 Build branded components: ZoneCard, SlotPicker, PartyBuilder, MembershipTier, GlassHero, ScrollStoryPin
- [ ] 1.10 Set up Storybook + Chromatic for visual regression
- [ ] 1.11 Ship design system v1.0.0 tag

## 2. Platform Foundations

- [ ] 2.1 Initialize monorepo (pnpm + Turborepo) with ESLint/TS/Tailwind shared config
- [ ] 2.2 Scaffold `apps/web` (Next 15 App Router), `apps/console`, `services/api`, `services/ai`, `services/workers`
- [ ] 2.3 Provision Neon (Postgres), Upstash (Redis), Cloudflare R2 (media), Vercel projects
- [ ] 2.4 Configure Clerk tenants (guest, member, parent, staff, manager, admin roles)
- [ ] 2.5 Set up Sanity Studio with schemas: Location, Zone, BlogPost, Camp, FAQ, Staff, Testimonial, Page, Navigation
- [ ] 2.6 Prisma schema for core tables (see `design.md §3`)
- [ ] 2.7 Build `LocationContext` middleware and RLS policies
- [ ] 2.8 Typed SDK generation via OpenAPI → `packages/sdk`
- [ ] 2.9 CI/CD — GitHub Actions for lint, test, typecheck, Prisma migrate, Vercel preview deploys
- [ ] 2.10 Seed script for dev — 1 location (Khammam), 7 zones, slot templates, sample users
- [ ] 2.11 Observability — PostHog, GA4, Sentry, OpenTelemetry wired into web + api
- [ ] 2.12 Security baseline — CSP, HSTS, rate limits, Idempotency-Key middleware
- [ ] 2.13 Error pages, 404, 500, offline PWA shell
- [ ] 2.14 i18n middleware with `en/te/hi` locales

## 3. Marketing Site (apps/web public area)

- [ ] 3.1 Home page — glass hero + scroll-driven 3D walkthrough + zone cards + CTA
- [ ] 3.2 Zone detail pages (x7) — soft-play, play-school, gaming, theatre, party-room, pantry, stalls
- [ ] 3.3 About / Story page with timeline and team
- [ ] 3.4 Summer Camp page with dates, activities, registration CTA
- [ ] 3.5 Memberships page with tier comparison, FAQ, signup CTA
- [ ] 3.6 Party Planner landing (drives into booking flow)
- [ ] 3.7 Gallery with masonry + lightbox + filter by zone
- [ ] 3.8 Blog index + post template (MDX from Sanity), 12 launch posts
- [ ] 3.9 Careers page pulling from Sanity
- [ ] 3.10 Franchise / Expression of Interest page + form
- [ ] 3.11 Contact page with map, hours, phone, email, WhatsApp deep link
- [ ] 3.12 Legal pages: Privacy, Terms, Refund, DPDP Notice, Cookie
- [ ] 3.13 JSON-LD schemas per page type
- [ ] 3.14 Sitemap, robots, canonical, hreflang
- [ ] 3.15 Translate all pages to Telugu and Hindi (via Sanity)
- [ ] 3.16 Performance pass — Core Web Vitals green on mid-tier Android

## 4. Booking Engine

- [ ] 4.1 `slots` materializer worker — generate daily from `slot_templates`
- [ ] 4.2 `GET /zones/:id/slots?date=` — list with live capacity
- [ ] 4.3 `POST /slots/:id/hold` — Redis lock + DB decrement
- [ ] 4.4 Razorpay order creation — `POST /bookings` → returns Razorpay order
- [ ] 4.5 Razorpay webhook handler with signature verification
- [ ] 4.6 `POST /bookings/:id/confirm` — idempotent, transactional
- [ ] 4.7 Expired-hold reaper worker (60s cadence)
- [ ] 4.8 Cancellation + refund endpoint with policy engine
- [ ] 4.9 Reschedule flow
- [ ] 4.10 Group booking endpoint (school trips, corporate)
- [ ] 4.11 QR ticket generator + PDF
- [ ] 4.12 WhatsApp + email confirmation (BullMQ job)
- [ ] 4.13 2h-before reminder job
- [ ] 4.14 Party package builder wizard UI
- [ ] 4.15 Party deposit + final-payment split
- [ ] 4.16 Theatre, gaming, camp booking variants
- [ ] 4.17 Load test booking flow (k6) — 100 concurrent holds on same slot
- [ ] 4.18 Chaos test — simulate Razorpay webhook delay, network retry, double-submit

## 5. Membership & Loyalty

- [ ] 5.1 Membership plan CRUD in Sanity + synced to DB
- [ ] 5.2 `POST /memberships/subscribe` with Razorpay Subscriptions
- [ ] 5.3 Auto-renew webhook + failure handling
- [ ] 5.4 Perk entitlement engine (free visits/month, % discounts)
- [ ] 5.5 Member dashboard — visit history, perks used, renewal date
- [ ] 5.6 Gift-a-membership flow (buy for another phone number)
- [ ] 5.7 Referral code system with attribution
- [ ] 5.8 Loyalty points accrual on play/F&B/party
- [ ] 5.9 Loyalty redemption rules engine
- [ ] 5.10 Multi-member family accounts (one payer, multiple kids)

## 6. Parent Portal

- [ ] 6.1 Child + enrollment CRUD
- [ ] 6.2 Attendance check-in/out with QR + staff override
- [ ] 6.3 Teacher daily activity logger (meals, nap, mood, photos)
- [ ] 6.4 AI daily-report drafter (Claude) — never auto-send
- [ ] 6.5 Parent report view + notifications (WhatsApp + in-app)
- [ ] 6.6 Fee invoices + Razorpay pay-now
- [ ] 6.7 Teacher-parent messaging with quiet hours
- [ ] 6.8 Pickup authorization QR
- [ ] 6.9 Milestone tracking timeline
- [ ] 6.10 DPDP consent center — granular toggles, export, delete

## 7. Operator Console (apps/console)

- [ ] 7.1 Auth + RBAC scoping per location
- [ ] 7.2 Live floor view — occupancy per zone, today's bookings, walk-ins
- [ ] 7.3 Booking management — search, check-in, refund, reschedule
- [ ] 7.4 Slot template editor
- [ ] 7.5 Pricing rules and promotions
- [ ] 7.6 F&B + stalls inventory
- [ ] 7.7 Staff roster and attendance
- [ ] 7.8 Reports: daily revenue, zone utilization, membership cohort, NPS
- [ ] 7.9 Content shortcuts — edit in Sanity from context
- [ ] 7.10 Location switcher for HQ role
- [ ] 7.11 Audit log viewer

## 8. AI Concierge

- [ ] 8.1 Claude tool-calling scaffold in `services/ai`
- [ ] 8.2 Tool: `check_availability(zone, date_range)`
- [ ] 8.3 Tool: `hold_slot` + `confirm_booking`
- [ ] 8.4 Tool: `build_party_package(params)`
- [ ] 8.5 Tool: `compare_memberships(user)`
- [ ] 8.6 Tool: `faq_lookup(query)`
- [ ] 8.7 Tool: `handoff_to_human(reason)`
- [ ] 8.8 Tool: `translate(text, locale)`
- [ ] 8.9 Web chat widget in `apps/web`
- [ ] 8.10 Voice input (Whisper) with push-to-talk
- [ ] 8.11 WhatsApp channel via Meta Cloud API / AiSensy
- [ ] 8.12 Agent audit log in `agent_tool_calls`
- [ ] 8.13 Prompt injection defenses + allowlisted tools
- [ ] 8.14 Personalized home (AB-tested) for returning users

## 9. Franchise Enablement

- [ ] 9.1 Franchise landing page with unit economics teaser
- [ ] 9.2 Expression-of-interest form → `franchise_leads` with score
- [ ] 9.3 Lead CRM view in console
- [ ] 9.4 Auto-reply email + nurture sequence
- [ ] 9.5 Private FDD / deck download gated on form

## 10. Hardening & Launch

- [ ] 10.1 A11y sweep — axe + manual keyboard + screen reader (NVDA + VoiceOver)
- [ ] 10.2 Core Web Vitals pass on 3 real devices + WebPageTest
- [ ] 10.3 OWASP ASVS Level 2 self-assessment
- [ ] 10.4 Pen test booking + auth + payment endpoints
- [ ] 10.5 Load test to 500 concurrent users
- [ ] 10.6 DPDP compliance checklist sign-off by legal
- [ ] 10.7 Content freeze + copy edit pass in all 3 locales
- [ ] 10.8 SEO pre-launch audit (Screaming Frog)
- [ ] 10.9 301 redirects from old WordPress URLs
- [ ] 10.10 Analytics goals + dashboards configured
- [ ] 10.11 Runbooks for ops: booking stuck, payment failed, slot oversold, content hotfix
- [ ] 10.12 Soft launch to 100 invited families; collect NPS
- [ ] 10.13 Public launch + PR + paid marketing
- [ ] 10.14 2-week launch warroom with daily triage
