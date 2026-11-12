'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Activity, Archive, Bell, BrainCircuit, ChevronDown, CircleDollarSign, Cloud, Compass, Crown, FolderKanban, Globe, Home, Landmark, Atom, GraduationCap, Briefcase, BookOpen, Menu, Radio, Network, Headphones, PenTool, Search, Settings2, TrendingUp, Users, X } from 'lucide-react'
import { CloudServiceSubmenu } from '@/components/cloud-service-menu'
import { IspTelcoSubmenu } from '@/components/isp-telco-menu'
import { CustomerOpsSubmenu } from '@/components/customer-ops-menu'
import { SalesGrowthSubmenu } from '@/components/sales-growth-menu'
import { IntelligenceSubmenu } from '@/components/intelligence-menu'
import { CreativeSubmenu } from '@/components/creative-menu'
import { FinanceSubmenu } from '@/components/finance-menu'

const items = [
  { label: 'R!OT Board', href: '/dashboard', icon: Home },
  { label: 'Cloud / Infra', href: '/infrastructure', icon: Cloud },
  { label: 'ISP / Telco', href: '/isp-telco', icon: Network },
  { label: 'Customer Ops', href: '/customer-ops', icon: Headphones },
  { label: 'Sales & Growth', href: '/sales-growth', icon: TrendingUp },
  { label: 'Intelligence & Automation', href: '/intelligence-automation', icon: BrainCircuit },
  { label: 'Art & Creative', href: '/art-creative', icon: PenTool },
  { label: 'Accounting & Finance', href: '/accounting-finance', icon: CircleDollarSign },
  { label: 'World Monitor', href: '/world-monitor', icon: Globe },
  { label: 'Civic / Governance', href: '/civic-intelligence', icon: Landmark },
  { label: 'Work / Office / HRD', href: '/work-office-hrd', icon: Briefcase },
  { label: 'Science / Cosmic / R&D Lab', href: '/science-cosmic-lab', icon: Atom },
  { label: 'Learning / Knowledge', href: '/learning-knowledge', icon: GraduationCap },
  { label: 'Faith / Sacred Knowledge', href: '/faith-sacred-knowledge', icon: BookOpen },
  { label: 'Comms / Radio', href: '/comms', icon: Radio },
  { label: 'Project Pit', href: '/projects', icon: FolderKanban },
  { label: 'Task Riot', href: '/mission-control', icon: Compass },
  { label: 'The Workshop', href: '/projects', icon: PenTool },
  { label: 'Activity Feed', href: '/mission-control', icon: Activity },
  { label: 'The Posse', href: '/projects', icon: Users },
  { label: 'The Receipts', href: '/projects', icon: Archive },
]

export function RiotCrashTags() {
  return <div className="mw-crash-tags" aria-hidden="true">
    <span className="mw-crash-sticker mw-crash-red">NO<br/>PERMISSION</span>
    <span className="mw-crash-sticker mw-crash-lime">SHIPPED<br/>ANYWAY</span>
    <span className="mw-crash-sticker mw-crash-paper">R!OT<br/><b>OVERRIDE</b></span>
  </div>
}

export function RiotVectorField() {
  return <svg className="mw-vector-chaos" viewBox="0 0 520 420" aria-hidden="true" focusable="false">
    <defs><pattern id="riot-dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor"/></pattern></defs>
    <g className="mw-vector-orbit"><circle cx="385" cy="208" r="143" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 9"/><ellipse cx="385" cy="208" rx="205" ry="75" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="22 8 2 8" transform="rotate(-31 385 208)"/><path d="M241 73 357 112 477 49 441 171 512 278 378 254 286 345 275 218 190 133Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m363 73 18 91 64-61-38 82 96 6-91 25 62 68-85-48-13 97-22-92-71 61 48-85-92-12 89-24-61-69 85 48Z" fill="currentColor" opacity=".78"/></g>
    <g className="mw-vector-crosses" fill="none" stroke="currentColor" strokeWidth="3"><path d="M105 75v44m-22-22h44M465 326v34m-17-17h34M145 285v20m-10-10h20"/><path d="m430 75 18 18m0-18-18 18M205 60l14 14m0-14-14 14"/></g>
    <circle className="mw-vector-signal" cx="385" cy="208" r="69" fill="url(#riot-dots)"/>
  </svg>
}

export function MoonwitnessShell({ active, children }: { active: string; children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [infraExpanded, setInfraExpanded] = useState(active.startsWith('Cloud / Infra'))
  const [telcoExpanded, setTelcoExpanded] = useState(active.startsWith('ISP / Telco'))
  const [customerExpanded, setCustomerExpanded] = useState(active.startsWith('Customer Ops'))
  const [growthExpanded, setGrowthExpanded] = useState(active.startsWith('Sales & Growth'))
  const [intelligenceExpanded, setIntelligenceExpanded] = useState(active.startsWith('Intelligence & Automation'))
  const [creativeExpanded, setCreativeExpanded] = useState(active.startsWith('Art & Creative'))
  const [financeExpanded, setFinanceExpanded] = useState(active.startsWith('Accounting & Finance'))
  return <main className="mw-app-shell">
    <aside className={`mw-app-sidebar ${menuOpen ? 'is-open' : ''}`}>
      <Link href="/" className="mw-app-brand"><span><Crown aria-hidden="true"/></span><b>MOON<span>WITNESS</span></b><small>R!OT OS · ANTI-MANAGEMENT MANAGEMENT</small></Link>
      <nav aria-label="Workspace"><span className="mw-nav-label">PICK YOUR BATTLE</span>{items.map(({ label, href, icon: Icon }) => label === 'Cloud / Infra' ? <div className="mw-nav-group" key={label}><div className={`mw-nav-parent ${active.startsWith('Cloud / Infra') ? 'active' : ''}`}><Link href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active.startsWith('Cloud / Infra') ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link><button type="button" className="mw-nav-toggle" aria-label={`${infraExpanded ? 'Collapse' : 'Expand'} Cloud / Infra menu`} aria-expanded={infraExpanded} aria-controls="shell-cloud-services" onClick={() => setInfraExpanded((open) => !open)}><ChevronDown aria-hidden="true"/></button></div>{infraExpanded && <div id="shell-cloud-services"><CloudServiceSubmenu active={active} variant="shell" onNavigate={() => setMenuOpen(false)}/></div>}</div> : label === 'ISP / Telco' ? <div className="mw-nav-group" key={label}><div className={`mw-nav-parent ${active.startsWith('ISP / Telco') ? 'active' : ''}`}><Link href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active.startsWith('ISP / Telco') ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link><button type="button" className="mw-nav-toggle" aria-label={`${telcoExpanded ? 'Collapse' : 'Expand'} ISP / Telco menu`} aria-expanded={telcoExpanded} aria-controls="shell-isp-services" onClick={() => setTelcoExpanded((open) => !open)}><ChevronDown aria-hidden="true"/></button></div>{telcoExpanded && <div id="shell-isp-services"><IspTelcoSubmenu active={active} variant="shell" onNavigate={() => setMenuOpen(false)}/></div>}</div> : label === 'Customer Ops' ? <div className="mw-nav-group" key={label}><div className={`mw-nav-parent ${active.startsWith('Customer Ops') ? 'active' : ''}`}><Link href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active.startsWith('Customer Ops') ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link><button type="button" className="mw-nav-toggle" aria-label={`${customerExpanded ? 'Collapse' : 'Expand'} Customer Ops menu`} aria-expanded={customerExpanded} aria-controls="shell-customer-services" onClick={() => setCustomerExpanded((open) => !open)}><ChevronDown aria-hidden="true"/></button></div>{customerExpanded && <div id="shell-customer-services"><CustomerOpsSubmenu active={active} variant="shell" onNavigate={() => setMenuOpen(false)}/></div>}</div> : label === 'Sales & Growth' ? <div className="mw-nav-group" key={label}><div className={`mw-nav-parent ${active.startsWith('Sales & Growth') ? 'active' : ''}`}><Link href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active.startsWith('Sales & Growth') ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link><button type="button" className="mw-nav-toggle" aria-label={`${growthExpanded ? 'Collapse' : 'Expand'} Sales & Growth menu`} aria-expanded={growthExpanded} aria-controls="shell-growth-services" onClick={() => setGrowthExpanded((open) => !open)}><ChevronDown aria-hidden="true"/></button></div>{growthExpanded && <div id="shell-growth-services"><SalesGrowthSubmenu active={active} variant="shell" onNavigate={() => setMenuOpen(false)}/></div>}</div> : label === 'Intelligence & Automation' ? <div className="mw-nav-group" key={label}><div className={`mw-nav-parent ${active.startsWith('Intelligence & Automation') ? 'active' : ''}`}><Link href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active.startsWith('Intelligence & Automation') ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link><button type="button" className="mw-nav-toggle" aria-label={`${intelligenceExpanded ? 'Collapse' : 'Expand'} Intelligence & Automation menu`} aria-expanded={intelligenceExpanded} aria-controls="shell-intelligence-services" onClick={() => setIntelligenceExpanded((open) => !open)}><ChevronDown aria-hidden="true"/></button></div>{intelligenceExpanded && <div id="shell-intelligence-services"><IntelligenceSubmenu active={active} variant="shell" onNavigate={() => setMenuOpen(false)}/></div>}</div> : label === 'Art & Creative' ? <div className="mw-nav-group" key={label}><div className={`mw-nav-parent ${active.startsWith('Art & Creative') ? 'active' : ''}`}><Link href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active.startsWith('Art & Creative') ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link><button type="button" className="mw-nav-toggle" aria-label={`${creativeExpanded ? 'Collapse' : 'Expand'} Art & Creative menu`} aria-expanded={creativeExpanded} aria-controls="shell-creative-services" onClick={() => setCreativeExpanded((open) => !open)}><ChevronDown aria-hidden="true"/></button></div>{creativeExpanded && <div id="shell-creative-services"><CreativeSubmenu active={active} variant="shell" onNavigate={() => setMenuOpen(false)}/></div>}</div> : label === 'Accounting & Finance' ? <div className="mw-nav-group" key={label}><div className={`mw-nav-parent ${active.startsWith('Accounting & Finance') ? 'active' : ''}`}><Link href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active.startsWith('Accounting & Finance') ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link><button type="button" className="mw-nav-toggle" aria-label={`${financeExpanded ? 'Collapse' : 'Expand'} Accounting & Finance menu`} aria-expanded={financeExpanded} aria-controls="shell-finance-services" onClick={() => setFinanceExpanded((open) => !open)}><ChevronDown aria-hidden="true"/></button></div>{financeExpanded && <div id="shell-finance-services"><FinanceSubmenu active={active} onNavigate={() => setMenuOpen(false)}/></div>}</div> : <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active === label ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link>)}</nav>
      <div className="mw-sidebar-bottom"><span className="mw-status-dot"/> All systems operational<Link href="/login" aria-label="Crew login"><Settings2 size={16}/></Link></div>
    </aside>
    {menuOpen && <button className="mw-menu-scrim" onClick={() => setMenuOpen(false)} aria-label="Close navigation"/>}
    <section className="mw-app-main"><header className="mw-app-topbar"><button className="mw-mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={19}/></button><div className="mw-crumb"><span><Crown aria-hidden="true"/></span> R!OT OS <b>///</b> {active}</div><label className="mw-top-search"><Search size={16}/><input aria-label="Search projects, tasks, and crew" placeholder="Find a project, loose end, or accomplice..."/></label><button className="mw-bell" aria-label="Notifications"><Bell size={17}/><i>3</i></button><Link href="/login" className="mw-user-chip"><span className="mw-avatar">MW</span><span><b>MOONWITNESS</b><small>Creator // Empire</small></span></Link></header>{children}</section>
  </main>
}

export function PageHero({ title, accent, description, image, index }: { title: string; accent: string; description: string; image: string; index: string }) {
  return <section className="mw-inner-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.96) 0%, rgba(10,10,10,.84) 43%, rgba(10,10,10,.14) 100%), url('${image}')` }}><RiotVectorField/><RiotCrashTags/><div className="mw-inner-copy"><span className="mw-kicker"><i/> MOONWITNESS R!OT OPS · {index}</span><h1>{title} <em>{accent}</em></h1><p>{description}</p><span className="mw-scribble">MAKE A MESS&nbsp; // &nbsp;MAKE A MOVE&nbsp; // &nbsp;SHIP IT LOUD</span></div><span className="mw-hero-index">MW / {index}</span></section>
}
