import {
  Activity,
  BellRing,
  CreditCard,
  Globe2,
  KeyRound,
  Network,
  Radio,
  Receipt,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export const ispTelcoLinks = [
  { key: 'topology', label: 'Network Topology', href: '/isp-telco/topology', icon: Network },
  { key: 'subscribers', label: 'Subscribers', href: '/isp-telco/subscribers', icon: Users },
  { key: 'plans', label: 'Plans & Services', href: '/isp-telco/plans', icon: CreditCard },
  { key: 'aaa', label: 'AAA / RADIUS', href: '/isp-telco/aaa', icon: KeyRound },
  { key: 'ipam', label: 'IPAM & Pools', href: '/isp-telco/ipam', icon: Globe2 },
  { key: 'access', label: 'Access Network', href: '/isp-telco/access', icon: Radio },
  { key: 'alarms', label: 'NOC Alarms', href: '/isp-telco/alarms', icon: BellRing },
  { key: 'billing', label: 'Usage & Billing', href: '/isp-telco/billing', icon: Receipt },
] as const

export type IspTelcoServiceKey = (typeof ispTelcoLinks)[number]['key']

export function isIspTelcoServiceKey(value: string): value is IspTelcoServiceKey {
  return ispTelcoLinks.some((service) => service.key === value)
}

export function IspTelcoSubmenu({
  active,
  variant,
  onNavigate,
}: {
  active: string
  variant: 'shell' | 'board'
  onNavigate?: () => void
}) {
  return (
    <div className={`telco-service-submenu ${variant}`} aria-label="ISP and telco sections">
      {ispTelcoLinks.map(({ key, label, href, icon: Icon }, index) => (
        <Link
          key={key}
          href={href}
          onClick={onNavigate}
          className={`telco-menu-link ${active.endsWith(`/ ${label}`) ? 'active' : ''}`}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
          <small>0{index + 1}</small>
        </Link>
      ))}
      <Link
        href="/isp-telco"
        onClick={onNavigate}
        className={`telco-menu-link telco-menu-overview ${active === 'ISP / Telco' ? 'active' : ''}`}
      >
        <Activity aria-hidden="true" />
        <span>NOC Overview</span>
        <small>↗</small>
      </Link>
    </div>
  )
}
