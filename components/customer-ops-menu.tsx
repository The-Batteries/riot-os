import {
  Activity,
  BookOpen,
  Headphones,
  Heart,
  MessageSquare,
  Star,
  Ticket,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export const customerOpsLinks = [
  { key: 'inbox', label: 'Support Inbox', href: '/customer-ops/inbox', icon: MessageSquare },
  { key: 'tickets', label: 'Ticket Queue', href: '/customer-ops/tickets', icon: Ticket },
  { key: 'crm', label: 'CRM Directory', href: '/customer-ops/crm', icon: Users },
  { key: 'experience', label: 'Customer Experience', href: '/customer-ops/experience', icon: Heart },
  { key: 'knowledge', label: 'Help Center', href: '/customer-ops/knowledge', icon: BookOpen },
  { key: 'feedback', label: 'Voice of Customer', href: '/customer-ops/feedback', icon: Star },
  { key: 'services', label: 'Service Requests', href: '/customer-ops/services', icon: Headphones },
  { key: 'analytics', label: 'SLA & Analytics', href: '/customer-ops/analytics', icon: Activity },
] as const

export type CustomerOpsServiceKey = (typeof customerOpsLinks)[number]['key']

export function isCustomerOpsServiceKey(value: string): value is CustomerOpsServiceKey {
  return customerOpsLinks.some((service) => service.key === value)
}

export function CustomerOpsSubmenu({
  active,
  variant,
  onNavigate,
}: {
  active: string
  variant: 'shell' | 'board'
  onNavigate?: () => void
}) {
  return (
    <div className={`customer-ops-submenu ${variant}`} aria-label="Customer operations sections">
      {customerOpsLinks.map(({ key, label, href, icon: Icon }, index) => (
        <Link
          key={key}
          href={href}
          onClick={onNavigate}
          className={`customer-ops-menu-link ${active.endsWith(`/ ${label}`) ? 'active' : ''}`}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
          <small>0{index + 1}</small>
        </Link>
      ))}
      <Link
        href="/customer-ops"
        onClick={onNavigate}
        className={`customer-ops-menu-link customer-ops-overview-link ${active === 'Customer Ops' ? 'active' : ''}`}
      >
        <Activity aria-hidden="true" />
        <span>Service Overview</span>
        <small>↗</small>
      </Link>
    </div>
  )
}
