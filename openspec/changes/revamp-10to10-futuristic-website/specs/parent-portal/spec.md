# Parent Portal Specification

## ADDED Requirements

### Requirement: Child and Enrollment Management
The system SHALL allow parents to register children and enroll them in play-school programs.

#### Scenario: Register a child
- **WHEN** a parent adds a child with name, date of birth, allergies, and photo-consent flag
- **THEN** the system SHALL create a `children` row linked to the parent user

#### Scenario: Enroll child in program
- **WHEN** a parent enrolls a child in a program
- **THEN** the system SHALL create an `enrollments` row and surface the fee plan for payment

---

### Requirement: Digital Attendance
The system SHALL record attendance via QR check-in and staff override.

#### Scenario: QR check-in on arrival
- **WHEN** a staff member scans the parent's pickup QR on arrival
- **THEN** an `attendance` row SHALL be created with `check_in` timestamp and the staff member id

#### Scenario: Check-out with authorized pickup
- **WHEN** a child is checked out
- **THEN** the system SHALL verify the pickup person against the child's `pickup_authorized_users` list and record `check_out`

---

### Requirement: Teacher Daily Activity Logger
The system SHALL allow teachers in the operator console to log meals, nap, mood, photos, and free-text notes throughout the day for each enrolled child.

#### Scenario: Log a meal
- **WHEN** a teacher taps a meal option
- **THEN** the structured entry SHALL be saved to the day's `daily_reports` record immediately

---

### Requirement: AI-Drafted Daily Report with Human Review
The system SHALL draft a daily narrative report per child using Claude and SHALL NOT send it to parents without explicit teacher review and approval.

#### Scenario: AI draft generated
- **WHEN** the 4 PM drafting job runs
- **THEN** a report draft SHALL be written into `daily_reports.ai_draft` for each enrolled child with that day's attendance

#### Scenario: Teacher must review before sending
- **WHEN** a draft exists
- **THEN** the parent SHALL NOT see the report until a teacher presses "Send" in the console

#### Scenario: Sent report delivered
- **WHEN** a teacher sends the report
- **THEN** the parent SHALL receive an in-app notification and a WhatsApp message containing the report summary

---

### Requirement: Fee Invoices and Payments
The system SHALL generate fee invoices per enrollment and accept online payment via Razorpay.

#### Scenario: Monthly invoice generated
- **WHEN** the billing cycle runs
- **THEN** an `invoices` row SHALL be created with GST breakdown and a downloadable PDF

---

### Requirement: DPDP-Compliant Consent Center
The system SHALL provide a guardian-facing consent center with granular toggles for each data processing purpose and an export/delete option.

#### Scenario: Revoke photo consent
- **WHEN** a parent toggles off photo consent
- **THEN** the system SHALL stop including that child's images in future reports and gallery and SHALL flag existing images for review or deletion

#### Scenario: Export my data
- **WHEN** a parent requests data export
- **THEN** the system SHALL generate a downloadable archive containing the parent's and their children's records within 72 hours

---

### Requirement: Teacher–Parent Messaging with Quiet Hours
The system SHALL support async messaging between teachers and parents with configurable quiet hours during which no push notifications are sent.

#### Scenario: Quiet hours respected
- **WHEN** a teacher sends a non-urgent message during a parent's quiet hours
- **THEN** the message SHALL be delivered but the notification SHALL be deferred until quiet hours end
