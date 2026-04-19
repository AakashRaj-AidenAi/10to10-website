# Operator Console Specification

## ADDED Requirements

### Requirement: Role-Based Access with Location Scope
The system SHALL enforce RBAC with the roles `staff`, `manager`, `hq_admin` and scope all data access by `location_id`.

#### Scenario: Staff sees only their location
- **WHEN** a staff user at Khammam logs in
- **THEN** the console SHALL only show bookings, children, schedules, and reports for Khammam

#### Scenario: HQ admin switches locations
- **WHEN** an HQ admin selects another location from the switcher
- **THEN** the data context SHALL swap to that location without requiring re-login

---

### Requirement: Live Floor View
The system SHALL provide a live floor view showing real-time occupancy per zone, today's bookings, walk-ins, and alerts.

#### Scenario: Occupancy updates live
- **WHEN** a booking is checked in or a walk-in is recorded
- **THEN** the floor view SHALL reflect the new count within 3 seconds

#### Scenario: Capacity alert
- **WHEN** a zone exceeds 90% of capacity
- **THEN** the floor view SHALL display a warning banner

---

### Requirement: Booking Management
The system SHALL allow operators to search, check in, reschedule, refund, and cancel bookings per policy.

#### Scenario: Refund with reason
- **WHEN** an operator refunds a booking
- **THEN** the system SHALL require a reason, call Razorpay Refunds, and write an `audit_log` entry

---

### Requirement: Schedule and Pricing Editor
The system SHALL allow managers to edit slot templates, pricing rules, and promotional campaigns for their location.

#### Scenario: Promo applied at checkout
- **WHEN** a manager publishes a promo code
- **THEN** the promo SHALL be available in the booking checkout with correct scope and expiry

---

### Requirement: Reports and Analytics
The system SHALL provide reports on daily revenue, zone utilization, membership cohorts, and NPS.

#### Scenario: Daily revenue report
- **WHEN** a manager opens the revenue report
- **THEN** the system SHALL show today, yesterday, 7-day, and 30-day totals with a breakdown by zone and payment method

---

### Requirement: Content Shortcuts
The system SHALL provide deep links from the console into Sanity Studio for editing zone copy, blog posts, FAQs, and staff profiles in context.

#### Scenario: Edit zone from console
- **WHEN** an operator clicks "Edit zone content" on a zone page
- **THEN** Sanity Studio SHALL open directly on that zone document
