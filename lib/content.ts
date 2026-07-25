export type Feature = {
  title: string
  body: string
  icon: "bell" | "calendar" | "shield" | "chart" | "link" | "users"
}

export const features: Feature[] = [
  {
    icon: "bell",
    title: "Reminders that actually land",
    body: "Nudges by email, push and SMS on your schedule — 7 days out, 1 day out, or the morning it is due.",
  },
  {
    icon: "calendar",
    title: "One timeline for everything",
    body: "Rent, invoices, EMIs, renewals and taxes in a single view, sorted by what hurts most if you miss it.",
  },
  {
    icon: "link",
    title: "Auto-detected dues",
    body: "Forward a bill or connect your inbox and DueMate reads the amount, vendor and due date for you.",
  },
  {
    icon: "chart",
    title: "Cash-flow forecast",
    body: "See what leaves your account in the next 30 days before you commit to a new subscription.",
  },
  {
    icon: "users",
    title: "Shared with your people",
    body: "Split a due with a flatmate or hand it to your finance teammate without a spreadsheet handoff.",
  },
  {
    icon: "shield",
    title: "Private by design",
    body: "Read-only access, encrypted at rest, and a one-click export or delete of everything you gave us.",
  },
]

export const steps = [
  {
    step: "01",
    title: "Add your dues",
    body: "Type one in seconds, import a CSV, or forward the bill to dues@duemate.app.",
  },
  {
    step: "02",
    title: "Pick your reminder rhythm",
    body: "Choose channels and lead times once. DueMate reuses them for every new due date.",
  },
  {
    step: "03",
    title: "Pay and move on",
    body: "Mark it paid from the reminder itself. Recurring items roll forward automatically.",
  },
]

export type Plan = {
  name: string
  price: string
  cadence: string
  blurb: string
  features: string[]
  cta: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: "Solo",
    price: "Free",
    cadence: "forever",
    blurb: "For keeping personal bills under control.",
    features: [
      "Up to 15 tracked dues",
      "Email reminders",
      "Recurring due dates",
      "Web and mobile web",
    ],
    cta: "Start free",
  },
  {
    name: "Plus",
    price: "$6",
    cadence: "per month",
    blurb: "For freelancers juggling clients and renewals.",
    features: [
      "Unlimited dues",
      "Email, push and SMS reminders",
      "Inbox auto-detection",
      "30-day cash-flow forecast",
      "Calendar sync",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Team",
    price: "$18",
    cadence: "per month",
    blurb: "For small teams with shared payables.",
    features: [
      "Everything in Plus",
      "5 seats included",
      "Shared workspaces and owners",
      "Approval notes and audit trail",
      "Priority support",
    ],
    cta: "Talk to us",
  },
]

export const faqs = [
  {
    q: "Does DueMate pay my bills for me?",
    a: "No. DueMate tracks and reminds, then links straight to the biller so you stay in control of every payment.",
  },
  {
    q: "Do you need my bank login?",
    a: "Never. Dues are added manually, by CSV, or by forwarding a bill. Inbox detection is read-only and optional.",
  },
  {
    q: "What happens to recurring dues?",
    a: "Mark one paid and the next occurrence is created with the same amount, vendor and reminder rhythm.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Paid plans are month to month, and your data stays exportable as CSV or JSON after you leave.",
  },
]

export const upcoming = [
  { label: "Rent — Maple Court", meta: "Due tomorrow", amount: "$1,450", tone: "risk" as const },
  { label: "Invoice #204 — Kite Studio", meta: "Due in 3 days", amount: "$2,800", tone: "warn" as const },
  { label: "AWS — July usage", meta: "Due in 6 days", amount: "$318", tone: "warn" as const },
  { label: "Car insurance renewal", meta: "Due in 12 days", amount: "$540", tone: "calm" as const },
  { label: "Figma — annual seat", meta: "Paid Jul 12", amount: "$144", tone: "done" as const },
]
