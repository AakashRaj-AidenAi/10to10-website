# Booking Engine Specification

## ADDED Requirements

### Requirement: Real-Time Slot Availability
The system SHALL expose real-time availability for every bookable zone with capacity decremented as bookings are held or confirmed.

#### Scenario: Fetch slots for a zone
- **WHEN** a client requests `GET /zones/:id/slots?date=YYYY-MM-DD`
- **THEN** the system SHALL return each slot with `capacity`, `held`, `booked`, and derived `available`

#### Scenario: Available count reflects holds
- **WHEN** another user places a hold on a slot
- **THEN** the available count returned to new requests SHALL decrement within 1 second

---

### Requirement: Two-Phase Booking (Hold then Confirm)
The system SHALL use a hold-then-confirm flow with Redis-backed locks and Postgres row-level locks.

#### Scenario: Hold a slot
- **WHEN** a user initiates a booking
- **THEN** the system SHALL call `POST /slots/:id/hold`, acquire a Redis lock, decrement `slots.held`, and return a hold token with 10-minute TTL

#### Scenario: Confirm a booking after payment
- **WHEN** the Razorpay payment succeeds and the client calls `POST /bookings/:id/confirm`
- **THEN** the system SHALL verify the payment signature, move the slot from `held` to `booked` in one transaction, release the Redis lock, and emit a `booking.confirmed` event

#### Scenario: Expired holds are reaped
- **WHEN** a hold token expires without confirmation
- **THEN** a worker SHALL restore the held capacity within 60 seconds

---

### Requirement: Idempotent Mutations
The system SHALL enforce idempotency on all booking-mutating endpoints using an `Idempotency-Key` header.

#### Scenario: Duplicate submission
- **WHEN** a client retries the same `POST /bookings` with the same `Idempotency-Key`
- **THEN** the system SHALL return the same booking result and NOT create a duplicate

---

### Requirement: Razorpay Integration
The system SHALL accept payments via Razorpay (UPI, cards, netbanking, wallets) with webhook verification.

#### Scenario: Create Razorpay order
- **WHEN** a booking is initiated with confirmed hold
- **THEN** the system SHALL create a Razorpay order and return the order id to the client

#### Scenario: Webhook signature verification
- **WHEN** Razorpay calls the webhook endpoint
- **THEN** the system SHALL verify the HMAC signature and reject unsigned or invalid payloads

#### Scenario: Payment failure releases hold
- **WHEN** a payment fails or is abandoned
- **THEN** the hold SHALL be released and the slot made available again

---

### Requirement: Cancellation and Refund Policy Engine
The system SHALL apply a rule-based cancellation and refund policy per booking type.

#### Scenario: Full refund within window
- **WHEN** a user cancels a play-session booking more than 24 hours before the slot
- **THEN** the system SHALL issue a 100% refund via Razorpay Refunds API

#### Scenario: Partial refund
- **WHEN** a party booking is cancelled between 48 and 24 hours before the event
- **THEN** the system SHALL refund 50% of the deposit per policy

#### Scenario: No refund after window
- **WHEN** a booking is cancelled inside the no-refund window
- **THEN** the system SHALL record the cancellation but issue no refund, surfacing policy text in the response

---

### Requirement: Party Package Builder
The system SHALL provide a wizard-driven party package builder that persists state across steps.

#### Scenario: Resume in-progress party booking
- **WHEN** a user leaves the party builder and returns within 7 days
- **THEN** the system SHALL restore their selections (date, guest count, theme, add-ons, cake)

#### Scenario: Deposit and final payment
- **WHEN** a party booking is confirmed
- **THEN** the system SHALL collect a 30% deposit immediately and schedule the 70% balance for the event day

---

### Requirement: Confirmation Channels
The system SHALL deliver booking confirmations via WhatsApp, email, and an in-app QR ticket.

#### Scenario: Confirmation under 60 seconds
- **WHEN** a booking is confirmed
- **THEN** the user SHALL receive a WhatsApp message and email within 60 seconds containing the QR ticket

#### Scenario: Reminder two hours before slot
- **WHEN** the slot starts in 2 hours
- **THEN** a reminder SHALL be sent via WhatsApp
