import { Aperture, Archive, BadgeCheck, BookOpenCheck, CalendarDays, ChartNoAxesCombined, Clapperboard, Palette } from 'lucide-react'
import Link from 'next/link'

export const creativeLinks = [
  { key: 'assets', label: 'Asset Library', href: '/art-creative/assets', icon: Archive },
  { key: 'brand', label: 'Brand System', href: '/art-creative/brand', icon: BookOpenCheck },
  { key: 'briefs', label: 'Creative Briefs', href: '/art-creative/briefs', icon: Aperture },
  { key: 'production', label: 'Production Board', href: '/art-creative/production', icon: Clapperboard },
  { key: 'approvals', label: 'Reviews & Approval', href: '/art-creative/approvals', icon: BadgeCheck },
  { key: 'social', label: 'Social Content', href: '/art-creative/social', icon: CalendarDays },
  { key: 'insights', label: 'Creative Insights', href: '/art-creative/insights', icon: ChartNoAxesCombined },
] as const

export type CreativeServiceKey = (typeof creativeLinks)[number]['key']

export function isCreativeServiceKey(value: string): value is CreativeServiceKey {
  return creativeLinks.some((service) => service.key === value)
}

export function CreativeSubmenu({ active, variant, onNavigate }: { active: string; variant: 'shell' | 'board'; onNavigate?: () => void }) {
  return <div className={`sales-growth-submenu creative-submenu ${variant}`} aria-label="Art and creative sections">
    {creativeLinks.map(({ key, label, href, icon: Icon }, index) => <Link key={key} href={href} onClick={onNavigate} className={`sales-growth-menu-link ${active.endsWith(`/ ${label}`) ? 'active' : ''}`}><Icon aria-hidden="true"/><span>{label}</span><small>0{index + 1}</small></Link>)}
    <Link href="/art-creative" onClick={onNavigate} className={`sales-growth-menu-link sales-growth-overview-link ${active === 'Art & Creative' ? 'active' : ''}`}><Palette aria-hidden="true"/><span>Creative Overview</span><small>↗</small></Link>
  </div>
}

export function CreativeTabs({ active }: { active: CreativeServiceKey | 'overview' }) {
  return <nav className="sales-growth-tabs creative-tabs" aria-label="Art and creative sections">
    <Link href="/art-creative" className={active === 'overview' ? 'active' : ''} aria-current={active === 'overview' ? 'page' : undefined}><Palette aria-hidden="true"/><span>Overview</span></Link>
    {creativeLinks.map(({ key, label, href, icon: Icon }) => <Link key={key} href={href} className={active === key ? 'active' : ''} aria-current={active === key ? 'page' : undefined}><Icon aria-hidden="true"/><span>{label}</span></Link>)}
  </nav>
}
