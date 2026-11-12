import {
  Activity,
  Cloud,
  Cpu,
  Globe2,
  Network,
  Rocket,
  Server,
} from 'lucide-react'
import Link from 'next/link'

export const cloudServiceLinks = [
  { key: 'cloud', label: 'Cloud', href: '/infrastructure/cloud', icon: Cloud },
  { key: 'vps', label: 'VPS', href: '/infrastructure/vps', icon: Server },
  { key: 'compute', label: 'Compute', href: '/infrastructure/compute', icon: Cpu },
  { key: 'dns', label: 'DNS', href: '/infrastructure/dns', icon: Globe2 },
  { key: 'routers', label: 'Router', href: '/infrastructure/routers', icon: Network },
  { key: 'deployments', label: 'Deployments', href: '/infrastructure/deployments', icon: Rocket },
] as const

export type CloudServiceKey = (typeof cloudServiceLinks)[number]['key']

export function isCloudServiceKey(value: string): value is CloudServiceKey {
  return cloudServiceLinks.some((service) => service.key === value)
}

export function CloudServiceSubmenu({
  active,
  variant,
  onNavigate,
}: {
  active: string
  variant: 'shell' | 'board'
  onNavigate?: () => void
}) {
  return (
    <div className={`cloud-service-submenu ${variant}`} aria-label="Cloud service sections">
      {cloudServiceLinks.map(({ key, label, href, icon: Icon }, index) => (
        <Link
          key={key}
          href={href}
          onClick={onNavigate}
          className={`cloud-service-link ${active.endsWith(`/ ${label}`) ? 'active' : ''}`}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
          <small>0{index + 1}</small>
        </Link>
      ))}
      <Link
        href="/infrastructure"
        onClick={onNavigate}
        className={`cloud-service-link cloud-service-overview ${active === 'Cloud / Infra' ? 'active' : ''}`}
      >
        <Activity aria-hidden="true" />
        <span>Architecture map</span>
        <small>↗</small>
      </Link>
    </div>
  )
}
