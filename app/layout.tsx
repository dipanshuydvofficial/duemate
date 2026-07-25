import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://duemate.app"),
  title: {
    default: "DueMate — Never miss a due date again",
    template: "%s · DueMate",
  },
  description:
    "DueMate tracks every bill, invoice, EMI and renewal on one timeline and reminds you on the channel you actually check.",
  keywords: ["bill reminders", "due date tracker", "invoice reminders", "subscription tracker"],
  openGraph: {
    type: "website",
    title: "DueMate — Never miss a due date again",
    description:
      "One calm timeline for bills, invoices, EMIs and renewals — with reminders that actually land.",
    url: "https://duemate.app",
    siteName: "DueMate",
  },
  twitter: {
    card: "summary_large_image",
    title: "DueMate — Never miss a due date again",
    description: "Bills, invoices and renewals on one timeline, with reminders that land.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#191919" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
