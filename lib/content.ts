export type IconName =
  | "bell"
  | "calendar"
  | "shield"
  | "chart"
  | "link"
  | "users"
  | "bolt"
  | "globe"

export type Feature = {
  title: string
  body: string
  icon: IconName
  span: "wide" | "full" | "normal"
  accent: "indigo" | "violet" | "cyan" | "amber" | "emerald" | "rose"
}

export const features: Feature[] = [
  {
    icon: "bell",
    accent: "indigo",
    span: "wide",
    title: "Reminders that actually land",
    body: "Email, push, SMS and WhatsApp nudges on a cadence you set once — 7 days out, 1 day out, or the morning it is due. Escalating pings until it is marked paid.",
  },
  {
    icon: "link",
    accent: "violet",
    span: "normal",
    title: "Auto-detected dues",
    body: "Forward a bill and DueMate parses the vendor, amount and date in under two seconds.",
  },
  {
    icon: "chart",
    accent: "cyan",
    span: "normal",
    title: "Cash-flow forecast",
    body: "See exactly what leaves your account over the next 30, 60 and 90 days.",
  },
  {
    icon: "users",
    accent: "amber",
    span: "normal",
    title: "Shared workspaces",
    body: "Split a due with a flatmate or hand payables to your finance teammate.",
  },
  {
    icon: "bolt",
    accent: "emerald",
    span: "normal",
    title: "Automations",
    body: "Recurring rules, auto-rollover, and Slack alerts when something slips.",
  },
  {
    icon: "shield",
    accent: "rose",
    span: "full",
    title: "Bank-grade privacy, zero bank logins",
    body: "Read-only by design, AES-256 at rest, SOC 2 Type II controls, and a one-click export or permanent delete of everything you ever gave us.",
  },
]

export const steps = [
  {
    step: "01",
    title: "Add your dues",
    body: "Type one in seconds, import a CSV, or forward the bill to dues@duemate.app and let the parser do it.",
    tag: "~2 min setup",
  },
  {
    step: "02",
    title: "Set your rhythm",
    body: "Pick channels and lead times once. Every new due inherits the rhythm automatically.",
    tag: "Set once",
  },
  {
    step: "03",
    title: "Pay and move on",
    body: "Mark paid straight from the reminder. Recurring items roll forward with a fresh date.",
    tag: "One tap",
  },
]

export type Plan = {
  name: string
  monthly: number | null
  blurb: string
  features: string[]
  cta: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: "Solo",
    monthly: 0,
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
    monthly: 8,
    blurb: "For freelancers juggling clients and renewals.",
    features: [
      "Unlimited dues",
      "Email, push, SMS + WhatsApp",
      "Inbox auto-detection",
      "90-day cash-flow forecast",
      "Calendar and Notion sync",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Team",
    monthly: 24,
    blurb: "For small teams with shared payables.",
    features: [
      "Everything in Plus",
      "5 seats included",
      "Shared workspaces and owners",
      "Approvals and audit trail",
      "SSO and priority support",
    ],
    cta: "Talk to sales",
  },
]

export const testimonials = [
  {
    quote:
      "I used to keep six reminders across three apps and still paid a late fee every quarter. DueMate replaced all of it in an afternoon — I have not missed a due date since.",
    name: "Priya Raghavan",
    role: "Independent design consultant",
    initials: "PR",
  },
  {
    quote:
      "Our payables used to live in one person's head. Now the whole finance pod sees the same timeline and nothing gets escalated at 11pm.",
    name: "Marcus Bell",
    role: "Head of Finance, Orbit Labs",
    initials: "MB",
  },
  {
    quote:
      "The forecast view is the killer feature. I know what leaves the account before I sign a new retainer, not after.",
    name: "Anika Sharma",
    role: "Founder, Kite Studio",
    initials: "AS",
  },
]

export const faqs = [
  {
    q: "Does DueMate pay my bills for me?",
    a: "No. DueMate tracks and reminds, then deep-links to the biller so every payment stays in your hands. We never touch money movement.",
  },
  {
    q: "Do you need my bank login?",
    a: "Never. Dues are added manually, by CSV, or by forwarding a bill. Optional inbox detection is read-only and scoped to receipts.",
  },
  {
    q: "What happens to recurring dues?",
    a: "Mark one paid and the next occurrence is generated instantly with the same vendor, amount and reminder rhythm — monthly, quarterly or custom.",
  },
  {
    q: "Can my team share a workspace?",
    a: "Yes. Team plans include shared workspaces with per-due owners, approval notes and a complete audit trail of who marked what paid.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Paid plans are month to month, and your data stays exportable as CSV or JSON for 30 days after you leave.",
  },
]

export const metrics = [
  { value: 41000, suffix: "+", label: "Due dates tracked" },
  { value: 3.2, prefix: "$", suffix: "M", label: "Late fees avoided", decimals: 1 },
  { value: 99.98, suffix: "%", label: "Reminder delivery", decimals: 2 },
  { value: 4.9, suffix: "/5", label: "Average rating", decimals: 1 },
]

export type Due = {
  id: string
  label: string
  vendor: string
  amount: number
  days: number
  paid: boolean
  category: "Housing" | "Client" | "Cloud" | "Insurance" | "Software"
}

export const seedDues: Due[] = [
  { id: "d1", label: "Rent — Maple Court", vendor: "Maple Court", amount: 1450, days: 1, paid: false, category: "Housing" },
  { id: "d2", label: "Invoice #204", vendor: "Kite Studio", amount: 2800, days: 3, paid: false, category: "Client" },
  { id: "d3", label: "AWS — July usage", vendor: "Amazon", amount: 318, days: 6, paid: false, category: "Cloud" },
  { id: "d4", label: "Car insurance renewal", vendor: "Fernway", amount: 540, days: 12, paid: false, category: "Insurance" },
  { id: "d5", label: "Figma — annual seat", vendor: "Figma", amount: 144, days: -3, paid: true, category: "Software" },
]

export const brands = [
  "Northwind",
  "Kite Studio",
  "Basecamp Legal",
  "Orbit Labs",
  "Fernway",
  "Halcyon",
  "旅 Tabi Co",
  "Meridian",
]
