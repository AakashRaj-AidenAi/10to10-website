# Design System Specification

## ADDED Requirements

### Requirement: Design Tokens Package
The system SHALL expose a shared `packages/tokens` package containing color, typography, spacing, radius, shadow, and motion tokens consumable by web, console, and future mobile apps.

#### Scenario: Consistent colors across apps
- **WHEN** a developer imports `brand.primary` from `@10to10/tokens`
- **THEN** both `apps/web` and `apps/console` SHALL render the identical color value

#### Scenario: Tokens drive Tailwind theme
- **WHEN** Tailwind config is built
- **THEN** it SHALL be generated from `@10to10/tokens` and fail the build if a raw hex is used in app code

#### Scenario: Accessibility-compliant color pairs
- **WHEN** a text color token is paired with a background token
- **THEN** the pair SHALL meet WCAG 2.2 AA contrast ratio (≥4.5:1 for body, ≥3:1 for large text and UI)

---

### Requirement: Component Library
The system SHALL provide a versioned component library (`packages/ui`) built on shadcn/ui primitives and themed with design tokens.

#### Scenario: Core components available
- **WHEN** a developer needs a button, input, dialog, sheet, tab, calendar, badge, avatar, or toast
- **THEN** they SHALL import from `@10to10/ui` and NOT reimplement

#### Scenario: Branded domain components
- **WHEN** a page renders a zone card, slot picker, party builder, membership tier card, glass hero, or scroll-story pin
- **THEN** the component SHALL come from `@10to10/ui` with consistent styling

#### Scenario: Storybook coverage
- **WHEN** a component is added to `@10to10/ui`
- **THEN** it SHALL ship with a Storybook story and Chromatic visual baseline

---

### Requirement: Motion Language
The system SHALL define a motion language via shared Framer Motion variants that respects `prefers-reduced-motion`.

#### Scenario: Reduced motion disables animation
- **WHEN** the user has `prefers-reduced-motion: reduce` set
- **THEN** all parallax, scroll-triggered, and auto-play animations SHALL be disabled or replaced with instant transitions

#### Scenario: Spring physics for interactions
- **WHEN** an element responds to hover, press, or layout change
- **THEN** it SHALL use the shared `ease.spring` token for physical consistency

---

### Requirement: Logo and Brand Marks
The system SHALL ship vector (SVG) logo, wordmark, and lockup assets replacing the current PNG-only logo.

#### Scenario: SVG logo renders at all sizes
- **WHEN** the logo is rendered at 16px, 256px, or 2048px
- **THEN** it SHALL remain crisp with no pixelation
