# Marketing Site Specification

## ADDED Requirements

### Requirement: Public Page Inventory
The system SHALL provide the following public pages with localized content in English, Telugu, and Hindi:
Home, About, Zone detail (×7: soft-play, play-school, gaming-area, private-theatre, party-room, refreshment-zone, stalls), Summer Camp, Memberships, Party Planner, Gallery, Blog index + post, Careers, Franchise, Contact, Privacy, Terms, Refund, DPDP Notice, Cookie.

#### Scenario: Locale-scoped URLs
- **WHEN** a user visits `/te/memberships`
- **THEN** the page SHALL render with Telugu content and `<html lang="te-IN">`

#### Scenario: Fallback to English
- **WHEN** a content field is missing a translation
- **THEN** the page SHALL fall back to English and NOT show an empty field

---

### Requirement: Immersive Hero with 3D Walkthrough
The system SHALL provide a scroll-driven 3D walkthrough of the venue on capable devices, with a static fallback.

#### Scenario: Capable device renders 3D
- **WHEN** a user on a device with `deviceMemory >= 4` loads the home page
- **THEN** the hero SHALL render a React Three Fiber scene that animates as the user scrolls through the seven zones

#### Scenario: Low-power fallback
- **WHEN** a user has low device memory OR `prefers-reduced-motion`
- **THEN** the hero SHALL render a static layered image without 3D hydration

#### Scenario: LCP is never blocked on 3D
- **WHEN** the home page loads
- **THEN** the Largest Contentful Paint SHALL be text or hero image, NOT the 3D canvas, and 3D SHALL hydrate only after first interaction

---

### Requirement: Core Web Vitals Budget
The system SHALL meet specified performance budgets on a mid-tier Android device over a simulated 4G connection.

#### Scenario: LCP under 1.8 seconds
- **WHEN** the home, memberships, or any zone page is loaded
- **THEN** Largest Contentful Paint SHALL be under 1.8 seconds at the 75th percentile

#### Scenario: INP under 200ms
- **WHEN** a user interacts with the site
- **THEN** Interaction to Next Paint SHALL remain under 200 milliseconds

#### Scenario: CLS under 0.1
- **WHEN** any page loads
- **THEN** Cumulative Layout Shift SHALL remain under 0.1

---

### Requirement: SEO and Structured Data
The system SHALL emit structured data and per-locale SEO metadata.

#### Scenario: LocalBusiness JSON-LD on home
- **WHEN** the home page is crawled
- **THEN** it SHALL include `LocalBusiness` + `EntertainmentBusiness` JSON-LD with address, geo, hours, and priceRange

#### Scenario: Hreflang cluster per page
- **WHEN** any localized page is served
- **THEN** it SHALL include `<link rel="alternate" hreflang="...">` tags for all supported locales

#### Scenario: Sitemap per locale
- **WHEN** a search crawler requests `/sitemap.xml`
- **THEN** the system SHALL return a dynamic sitemap covering all locales and all content

---

### Requirement: Content via Headless CMS
The system SHALL source all editorial content from Sanity with structured schemas and live preview.

#### Scenario: Editor updates content
- **WHEN** an editor publishes a change in Sanity
- **THEN** the affected page SHALL be revalidated within 60 seconds via on-demand ISR

#### Scenario: Scoped content per location
- **WHEN** a Sanity document is tagged with a specific location
- **THEN** it SHALL only appear on that location's tenant subdomain
