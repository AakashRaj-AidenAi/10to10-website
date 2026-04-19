# Phase 1 MVP Addendum

The original proposal scopes ~26 weeks across 8 capabilities. For a fast, fundable launch we cut a **Phase 1 MVP** that ships in 6–8 weeks and proves the business case before we build the rest.

## Phase 1 scope (ship in 6–8 weeks)
1. **Marketing site** — Home, About, 7 Zone pages, Memberships, Summer Camp, Party Planner (static), Gallery, Blog (MDX), Contact, Franchise (lead form), legal pages.
2. **Lead capture + WhatsApp booking** — "Request Booking" → form → WhatsApp deep link + API submission to DB.
3. **Memberships info + waitlist** (no online payment yet — collect interest, contact manually).
4. **Content via MDX + structured data files** in-repo (no Sanity yet).
5. **i18n infra ready** (en default; te + hi copy stubbed).
6. **Analytics, SEO, a11y, CWV budgets met.**

## Phase 1 non-goals (deferred to Phase 2+)
- Razorpay live payments (scaffold wired but flagged off until merchant KYC clears)
- 3D venue walkthrough (Framer Motion parallax only)
- Parent portal
- Operator console
- AI concierge
- Sanity CMS
- Multi-location tenant subdomains (single Khammam location hardcoded in data)

## Phase 1 stack (simplified from design.md)
| Layer | Choice | Why simpler than original |
|---|---|---|
| Frontend | Next.js 15 App Router + React 19 + TS + Tailwind v4 | Same |
| UI | shadcn/ui + Framer Motion | Same |
| i18n | next-intl | Same |
| Content | MDX + TS content collections | Skip Sanity until editors need it |
| DB | Prisma + SQLite (dev) / Neon Postgres (prod) | Skip Redis/BullMQ in phase 1 |
| API | Next.js Route Handlers + Zod | Skip NestJS; all TS end-to-end |
| Auth | Clerk | Same |
| Payments | Razorpay (wired, flagged off) | Ship before KYC clears |
| Forms | React Hook Form + Zod | Lightweight |
| Email | Resend | Simple transactional |
| Analytics | PostHog + Vercel Analytics | Skip GA4 in phase 1 |
| Errors | Sentry | Same |
| Deploy | Vercel | Same |
| Monorepo | npm workspaces (not pnpm/Turborepo) | Simpler; single app for now |

## Updated success metrics (Phase 1)
- Site live on custom domain within 8 weeks
- Core Web Vitals green on mid-tier Android
- ≥ 30 booking requests / month via the new form in first 2 months
- ≥ 10 franchise leads in first 2 months
- WCAG 2.2 AA on Lighthouse

## Migration to Phase 2
When Phase 1 validates demand, add (in order): Razorpay live checkout → real booking engine with slots → Clerk auth + memberships → Sanity CMS → operator console → parent portal → AI concierge → multi-tenant.

---

**This addendum supersedes the launch timeline in `design.md §10` for Phase 1. The original rollout plan remains valid as the long-term roadmap.**
