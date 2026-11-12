import { Activity, BadgePercent, Footprints, Megaphone, MousePointerClick, Target, UsersRound } from 'lucide-react'
import Link from 'next/link'

export const salesGrowthLinks = [
  { key: 'pipeline', label: 'Sales Pipeline', href: '/sales-growth/pipeline', icon: Target },
  { key: 'leads', label: 'Leads & Prospects', href: '/sales-growth/leads', icon: UsersRound },
  { key: 'canvassing', label: 'Field Canvassing', href: '/sales-growth/canvassing', icon: Footprints },
  { key: 'campaigns', label: 'Campaigns', href: '/sales-growth/campaigns', icon: Megaphone },
  { key: 'promotions', label: 'Promotions', href: '/sales-growth/promotions', icon: BadgePercent },
  { key: 'marketing', label: 'Marketing Channels', href: '/sales-growth/marketing', icon: MousePointerClick },
  { key: 'analytics', label: 'Growth Analytics', href: '/sales-growth/analytics', icon: Activity },
] as const

export type SalesGrowthServiceKey = (typeof salesGrowthLinks)[number]['key']

export function isSalesGrowthServiceKey(value: string): value is SalesGrowthServiceKey {
  return salesGrowthLinks.some((service) => service.key === value)
}

export function SalesGrowthSubmenu({ active, variant, onNavigate }: { active: string; variant: 'shell' | 'board'; onNavigate?: () => void }) {
  return <div className={`sales-growth-submenu ${variant}`} aria-label="Sales and marketing sections">
    {salesGrowthLinks.map(({ key, label, href, icon: Icon }, index) => <Link key={key} href={href} onClick={onNavigate} className={`sales-growth-menu-link ${active.endsWith(`/ ${label}`) ? 'active' : ''}`}>
      <Icon aria-hidden="true"/><span>{label}</span><small>0{index + 1}</small>
    </Link>)}
    <Link href="/sales-growth" onClick={onNavigate} className={`sales-growth-menu-link sales-growth-overview-link ${active === 'Sales & Growth' ? 'active' : ''}`}>
      <Activity aria-hidden="true"/><span>Growth Overview</span><small>↗</small>
    </Link>
  </div>
}
