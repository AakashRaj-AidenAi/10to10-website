# Membership & Loyalty Specification

## ADDED Requirements

### Requirement: Self-Service Membership Signup
The system SHALL allow users to subscribe to Silver, Gold, or Platinum membership tiers online using Razorpay Subscriptions.

#### Scenario: Subscribe to a tier
- **WHEN** a user selects a membership tier and completes checkout
- **THEN** the system SHALL create a `memberships` row with `auto_renew=true`, register a Razorpay subscription, and grant entitlements immediately

#### Scenario: Renewal failure handling
- **WHEN** an auto-renew payment fails
- **THEN** the system SHALL retry per Razorpay schedule, notify the user, and downgrade the membership to `lapsed` after final failure

---

### Requirement: Entitlement Engine
The system SHALL enforce tier-specific perks during booking checkout.

#### Scenario: Platinum free visit applied
- **WHEN** a Platinum member with remaining free visits this month books a play session
- **THEN** the checkout SHALL show ₹0 for the play fee and decrement the perk counter

#### Scenario: Silver percent discount applied
- **WHEN** a Silver member books any eligible service
- **THEN** the 30% discount SHALL be applied automatically at checkout

---

### Requirement: Gift-a-Membership
The system SHALL allow one user to purchase a membership on behalf of another phone number.

#### Scenario: Gifting to a non-user
- **WHEN** a gifter completes a gift checkout for a phone number that has no account
- **THEN** the system SHALL create a pending membership linked to that phone number and activate it on first sign-in

---

### Requirement: Referral Program
The system SHALL issue each member a referral code, track redemptions, and reward both parties on qualifying activity.

#### Scenario: Referred signup
- **WHEN** a new user signs up with a referral code and completes their first booking
- **THEN** both the referrer and referee SHALL receive the configured reward in their loyalty account

---

### Requirement: Loyalty Points Ledger
The system SHALL maintain a point ledger that accrues points on play, F&B, and party spend and allows redemption against future bookings.

#### Scenario: Points accrue on booking confirmed
- **WHEN** a booking is confirmed
- **THEN** a `loyalty_ledger` entry SHALL be written with a positive delta proportional to spend

#### Scenario: Points redeemed at checkout
- **WHEN** a user applies points at checkout
- **THEN** the system SHALL decrement the ledger and reduce the invoice accordingly

---

### Requirement: Family Account
The system SHALL support a single payer with multiple linked children and optional co-members.

#### Scenario: Add a child to family account
- **WHEN** a parent adds a child profile
- **THEN** the child SHALL inherit the parent's membership perks for eligible bookings
