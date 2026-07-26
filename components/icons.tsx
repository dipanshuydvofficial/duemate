import type { SVGProps } from "react"

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

function Icon({ size = 20, children, ...rest }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} aria-hidden="true" {...stroke} {...rest}>
      {children}
    </svg>
  )
}

export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="dm-logo" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="55%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#dm-logo)" />
      <path d="M9.5 16.6l4 4 9-9.6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const BellIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M18 8a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" />
    <path d="M10.3 20a2 2 0 0 0 3.4 0" />
  </Icon>
)

export const CalendarIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Icon>
)

export const ShieldIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3l7 3v5.5c0 4.4-3 8.2-7 9.5-4-1.3-7-5.1-7-9.5V6z" />
    <path d="M9.5 12.2l1.8 1.8 3.4-3.6" />
  </Icon>
)

export const ChartIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 20h16" />
    <path d="M7 20v-6M12 20V7M17 20v-9" />
  </Icon>
)

export const LinkIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M10 13a4 4 0 0 0 5.7.3l2.6-2.6A4 4 0 0 0 12.7 5l-1.3 1.3" />
    <path d="M14 11a4 4 0 0 0-5.7-.3L5.7 13.3A4 4 0 0 0 11.3 19l1.3-1.3" />
  </Icon>
)

export const UsersIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
    <circle cx="9.5" cy="7.5" r="3.5" />
    <path d="M17 4.2a3.5 3.5 0 0 1 0 6.6M21 20v-1.5a4 4 0 0 0-3-3.8" />
  </Icon>
)

export const BoltIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z" />
  </Icon>
)

export const GlobeIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
  </Icon>
)

export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={16} strokeWidth={2.2} {...p}>
    <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
  </Icon>
)

export const ArrowIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={16} strokeWidth={2.1} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
)

export const PlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={18} strokeWidth={2.1} {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
)

export const TrashIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={16} {...p}>
    <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13" />
  </Icon>
)

export const SunIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={18} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
  </Icon>
)

export const MoonIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={18} {...p}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
  </Icon>
)

export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={22} strokeWidth={2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={22} strokeWidth={2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
)

export const SparkIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon size={14} strokeWidth={1.8} {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
  </Icon>
)

export const featureIcons = {
  bell: BellIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
  chart: ChartIcon,
  link: LinkIcon,
  users: UsersIcon,
  bolt: BoltIcon,
  globe: GlobeIcon,
}
