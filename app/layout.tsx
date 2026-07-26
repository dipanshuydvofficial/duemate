import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://duemate.app"),
  title: {
    default: "DueMate — Never miss a due date again",
    template: "%s · DueMate",
  },
  description:
    "DueMate puts every bill, invoice, EMI and renewal on one calm timeline and reminds you on the channel you actually check.",
  keywords: [
    "bill reminders",
    "due date tracker",
    "invoice reminders",
    "subscription tracker",
    "cash flow forecast",
  ],
  openGraph: {
    type: "website",
    url: "https://duemate.app",
    siteName: "DueMate",
    title: "DueMate — Never miss a due date again",
    description:
      "One calm timeline for bills, invoices, EMIs and renewals — with reminders that actually land.",
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
    { media: "(prefers-color-scheme: dark)", color: "#08080c" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
}

/**
 * Runs before paint: applies the saved theme and enables scroll animations
 * only when JS is available (so no-JS users still see all content).
 */
const boot = `(function(){try{var t=localStorage.getItem('duemate-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}document.documentElement.classList.add('js-anim');})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
