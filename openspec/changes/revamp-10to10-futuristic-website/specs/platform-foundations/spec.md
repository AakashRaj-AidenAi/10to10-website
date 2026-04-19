# Platform Foundations Specification

## ADDED Requirements

### Requirement: Multi-Tenant Location Model
The system SHALL model every operational entity with a `location_id` foreign key and SHALL enforce location scoping in application middleware and database row-level security.

#### Scenario: Queries are scoped by location
- **WHEN** any authenticated API request is handled
- **THEN** a `LocationContext` middleware SHALL resolve the current location from subdomain or header and inject it into the database session

#### Scenario: Cross-location data leak blocked
- **WHEN** a user attempts to read a record from a location they do not belong to
- **THEN** the database row-level security policy SHALL return zero rows

---

### Requirement: Headless CMS Integration
The system SHALL use Sanity as the source of truth for all editorial content with structured schemas per content type.

#### Scenario: Content types defined
- **WHEN** the CMS is provisioned
- **THEN** it SHALL contain schemas for at minimum: Location, Zone, BlogPost, Camp, FAQ, Staff, Testimonial, Page, Navigation

#### Scenario: Live preview
- **WHEN** an editor previews a draft
- **THEN** the web app SHALL render the draft content without publishing it

---

### Requirement: Authentication with Phone OTP
The system SHALL provide authentication via phone OTP as the primary method and email as secondary.

#### Scenario: OTP under 30 seconds
- **WHEN** a user requests an OTP
- **THEN** the code SHALL be delivered via SMS within 30 seconds

#### Scenario: OTP rate limit
- **WHEN** more than 5 OTP requests are made to the same phone number within 10 minutes
- **THEN** further requests SHALL be rate-limited

---

### Requirement: Observability
The system SHALL emit product analytics, marketing analytics, error tracking, and distributed traces.

#### Scenario: Booking funnel tracked
- **WHEN** a user progresses through the booking funnel
- **THEN** PostHog SHALL receive events for `booking_started`, `slot_held`, `checkout_opened`, `payment_succeeded`, `booking_confirmed`

#### Scenario: Errors captured
- **WHEN** an unhandled error occurs in web or api
- **THEN** Sentry SHALL receive the error with release, user, and breadcrumb context

---

### Requirement: CI/CD with Preview Environments
The system SHALL run linting, type-checking, unit tests, and visual regression tests on every pull request and SHALL deploy a preview environment for review.

#### Scenario: PR preview deploy
- **WHEN** a pull request is opened
- **THEN** the CI SHALL deploy a Vercel preview and attach the URL to the PR

#### Scenario: Migration safety
- **WHEN** a PR modifies the Prisma schema
- **THEN** CI SHALL run the migration on an ephemeral Neon branch before allowing merge

---

### Requirement: Security Baseline
The system SHALL apply CSP, HSTS, rate limiting, and idempotency controls, and SHALL pass an OWASP ASVS Level 2 self-assessment before public launch.

#### Scenario: CSP in place
- **WHEN** any page is served
- **THEN** a Content Security Policy header SHALL be present restricting sources

#### Scenario: Rate limiting on sensitive endpoints
- **WHEN** OTP, login, or booking endpoints are hit repeatedly
- **THEN** they SHALL be rate-limited per IP and per user

---

### Requirement: DPDP Compliance and Data Residency
The system SHALL host all personal data in India-region infrastructure and SHALL comply with the Digital Personal Data Protection Act 2023.

#### Scenario: Data stored in India
- **WHEN** the platform is provisioned
- **THEN** Postgres, Redis, object storage, and primary app regions SHALL be India-resident

#### Scenario: Data subject request
- **WHEN** a user invokes an export or delete request
- **THEN** the system SHALL fulfill the request within 72 hours and write an audit record
