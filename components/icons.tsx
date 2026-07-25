import type { SVGProps } from "react"

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="4" width="19" height="17" rx="5" fill="var(--blue)" />
      <path d="M7.5 2.5v3M16.5 2.5v3" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 13.2l2.6 2.6L16.5 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M18 8a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" />
      <path d="M10.3 20a2 2 0 0 0 3.4 0" />
    </svg>
  )
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3l7 3v5.5c0 4.4-3 8.2-7 9.5-4-1.3-7-5.1-7-9.5V6z" />
      <path d="M9.5 12.2l1.8 1.8 3.4-3.6" />
    </svg>
  )
}

export function ChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M4 20h16" />
      <path d="M7 20v-6M12 20V7M17 20v-9" />
    </svg>
  )
}

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M10 13a4 4 0 0 0 5.7.3l2.6-2.6A4 4 0 0 0 12.7 5l-1.3 1.3" />
      <path d="M14 11a4 4 0 0 0-5.7-.3L5.7 13.3A4 4 0 0 0 11.3 19l1.3-1.3" />
    </svg>
  )
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
      <circle cx="9.5" cy="7.5" r="3.5" />
      <path d="M17 4.2a3.5 3.5 0 0 1 0 6.6M21 20v-1.5a4 4 0 0 0-3-3.8" />
    </svg>
  )
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={16} height={16} strokeWidth={2} aria-hidden="true" {...props}>
      <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
    </svg>
  )
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={16} height={16} strokeWidth={2} aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={18} height={18} strokeWidth={2} aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export const featureIcons = {
  bell: BellIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
  chart: ChartIcon,
  link: LinkIcon,
  users: UsersIcon,
}
