'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Activity, Archive, Bell, Compass, Crown, FolderKanban, Home, Menu, PenTool, Search, Settings2, Users, X } from 'lucide-react'

const items = [
  { label: 'R!OT Board', href: '/dashboard', icon: Home },
  { label: 'Project Pit', href: '/projects', icon: FolderKanban },
  { label: 'Task Riot', href: '/mission-control', icon: Compass },
  { label: 'The Workshop', href: '/projects', icon: PenTool },
  { label: 'Activity Feed', href: '/mission-control', icon: Activity },
  { label: 'The Posse', href: '/projects', icon: Users },
  { label: 'The Receipts', href: '/projects', icon: Archive },
]

export function MoonwitnessShell({ active, children }: { active: string; children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main className="mw-app-shell">
    <aside className={`mw-app-sidebar ${menuOpen ? 'is-open' : ''}`}>
      <Link href="/" className="mw-app-brand"><span><Crown aria-hidden="true"/></span><b>MOON<span>WITNESS</span></b><small>R!OT OS · ANTI-MANAGEMENT MANAGEMENT</small></Link>
      <nav aria-label="Workspace"><span className="mw-nav-label">PICK YOUR BATTLE</span>{items.map(({ label, href, icon: Icon }) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={`mw-side-link ${active === label ? 'active' : ''}`}><Icon size={17}/><span>{label}</span></Link>)}</nav>
      <div className="mw-sidebar-bottom"><span className="mw-status-dot"/> All systems operational<Link href="/login" aria-label="Crew login"><Settings2 size={16}/></Link></div>
    </aside>
    {menuOpen && <button className="mw-menu-scrim" onClick={() => setMenuOpen(false)} aria-label="Close navigation"/>}
    <section className="mw-app-main"><header className="mw-app-topbar"><button className="mw-mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={19}/></button><div className="mw-crumb"><span><Crown aria-hidden="true"/></span> R!OT OS <b>///</b> {active}</div><label className="mw-top-search"><Search size={16}/><input aria-label="Search projects, tasks, and crew" placeholder="Find a project, loose end, or accomplice..."/></label><button className="mw-bell" aria-label="Notifications"><Bell size={17}/><i>3</i></button><Link href="/login" className="mw-user-chip"><span className="mw-avatar">MW</span><span><b>MOONWITNESS</b><small>Creator // Empire</small></span></Link></header>{children}</section>
  </main>
}

export function PageHero({ title, accent, description, image, index }: { title: string; accent: string; description: string; image: string; index: string }) {
  return <section className="mw-inner-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.96) 0%, rgba(10,10,10,.84) 43%, rgba(10,10,10,.14) 100%), url('${image}')` }}><div className="mw-inner-copy"><span className="mw-kicker"><i/> MOONWITNESS R!OT OPS · {index}</span><h1>{title} <em>{accent}</em></h1><p>{description}</p><span className="mw-scribble">MAKE A MESS&nbsp; // &nbsp;MAKE A MOVE&nbsp; // &nbsp;SHIP IT LOUD</span></div><span className="mw-hero-index">MW / {index}</span></section>
}
