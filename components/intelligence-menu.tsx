import { Activity, BookOpenText, Bot, BrainCircuit, Workflow, Sparkles, WandSparkles } from 'lucide-react'
import Link from 'next/link'

export const intelligenceLinks = [
  { key: 'copilots', label: 'AI Copilots', href: '/intelligence-automation/copilots', icon: Sparkles },
  { key: 'agents', label: 'Agent Directory', href: '/intelligence-automation/agents', icon: Bot },
  { key: 'workflows', label: 'Automation Flows', href: '/intelligence-automation/workflows', icon: Workflow },
  { key: 'prompts', label: 'Prompt Library', href: '/intelligence-automation/prompts', icon: WandSparkles },
  { key: 'knowledge', label: 'Knowledge Hub', href: '/intelligence-automation/knowledge', icon: BookOpenText },
  { key: 'models', label: 'Model Operations', href: '/intelligence-automation/models', icon: BrainCircuit },
  { key: 'analytics', label: 'AI Analytics', href: '/intelligence-automation/analytics', icon: Activity },
] as const

export type IntelligenceServiceKey = (typeof intelligenceLinks)[number]['key']

export function isIntelligenceServiceKey(value: string): value is IntelligenceServiceKey {
  return intelligenceLinks.some((service) => service.key === value)
}

export function IntelligenceSubmenu({ active, variant, onNavigate }: { active: string; variant: 'shell' | 'board'; onNavigate?: () => void }) {
  return <div className={`sales-growth-submenu intelligence-submenu ${variant}`} aria-label="AI and automation sections">
    {intelligenceLinks.map(({ key, label, href, icon: Icon }, index) => <Link key={key} href={href} onClick={onNavigate} className={`sales-growth-menu-link ${active.endsWith(`/ ${label}`) ? 'active' : ''}`}><Icon aria-hidden="true"/><span>{label}</span><small>0{index + 1}</small></Link>)}
    <Link href="/intelligence-automation" onClick={onNavigate} className={`sales-growth-menu-link sales-growth-overview-link ${active === 'Intelligence & Automation' ? 'active' : ''}`}><BrainCircuit aria-hidden="true"/><span>AI Overview</span><small>↗</small></Link>
  </div>
}

export function IntelligenceTabs({ active }: { active: IntelligenceServiceKey | 'overview' }) {
  return <nav className="sales-growth-tabs intelligence-tabs" aria-label="AI and automation sections">
    <Link href="/intelligence-automation" className={active === 'overview' ? 'active' : ''} aria-current={active === 'overview' ? 'page' : undefined}><BrainCircuit aria-hidden="true"/><span>Overview</span></Link>
    {intelligenceLinks.map(({ key, label, href, icon: Icon }) => <Link key={key} href={href} className={active === key ? 'active' : ''} aria-current={active === key ? 'page' : undefined}><Icon aria-hidden="true"/><span>{label}</span></Link>)}
  </nav>
}
