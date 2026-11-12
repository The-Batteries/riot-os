'use client'

import { useMemo, useState } from 'react'
import { CloudInfrastructure } from '@/components/cloud-infrastructure'
import { CloudServiceSubmenu } from '@/components/cloud-service-menu'
import {
  Activity, AlertTriangle, Archive, ArrowDownRight, ArrowRight, ArrowUpRight,
  Bell, BookOpen, CheckCircle2, ChevronDown, CirclePlus, Cloud, Compass, Crown, Eye,
  FileImage, Filter, Globe2, Home, Image, Layers3, Menu, MessageSquare,
  MoreHorizontal, PenTool, Search, Send, Settings2, ShieldAlert, Sparkles,
  Users, X, Zap,
} from 'lucide-react'

const image = (id: string, _width = 500) => {
  if (id.includes('photo-153452') || id.includes('photo-150064') || id.includes('photo-152915')) return '/images/riot-crew-xerox.png'
  if (id.includes('photo-146233') || id.includes('photo-151960')) return '/images/riot-project-poster.png'
  return '/images/riot-zine-hero.png'
}
const nav = [
  { label: 'R!OT Board', href: '/dashboard', icon: Home }, { label: 'Cloud / Infra', href: '/infrastructure', icon: Cloud }, { label: 'Project Pit', href: '/projects', icon: PenTool },
  { label: 'Activity Feed', href: '/mission-control', icon: Activity }, { label: 'Asset Stash', href: '/projects', icon: Image },
  { label: 'The Posse', href: '/projects', icon: Users }, { label: 'Stand-up', href: '/mission-control', icon: MessageSquare },
  { label: 'The Receipts', href: '/projects', icon: Archive }, { label: 'Next Up', href: '/mission-control', icon: CirclePlus, badge: '12' },
  { label: 'Hype Check', href: '/mission-control', icon: Compass }, { label: 'Chaos Meter', href: '/mission-control', icon: Layers3 },
  { label: 'Loose Ends', href: '/mission-control', icon: BookOpen },
]
const stories = [
  { title: 'THE BATTERIES / teaser cut', type: 'Launch sprint', tag: 'Owner: Mika', status: 'In motion', time: 'DUE TODAY', img: 'photo-1531058020387-3be344556be6' },
  { title: 'ZILL / lock the pilot ending', type: 'Writing room', tag: 'Owner: Ren', status: 'Needs a shove', time: 'DUE TOMORROW', img: 'photo-1522778119026-d647f0596c20' },
  { title: 'PENDETA / chapter-zero pass', type: 'Story build', tag: 'Owner: Aisha', status: 'Ready to ship', time: 'FRI · 14:00', img: 'photo-1529156069898-49953e39b3ac' },
  { title: 'MOONRIDLEY / moodboard chaos', type: 'Art direction', tag: 'Owner: Daniel', status: 'On deck', time: 'MON · 10:00', img: 'photo-1519389950473-47ba0277781c' },
  { title: 'WORLD MONITOR / source sweep', type: 'Research sprint', tag: 'Owner: Luis', status: 'Backlog', time: 'NO DEADLINE', img: 'photo-1470252649378-9c29740c9fa8' },
]
const crew = [
  { name: 'Mika', role: 'Writer', status: 'Active', img: 'photo-1534528741775-53994a69daeb', color: 'pink' },
  { name: 'Daniel', role: 'Photo / Video', status: 'Active', img: 'photo-1500648767791-00dcc994a43e', color: 'blue' },
  { name: 'Ren', role: 'Filmmaker', status: 'Active', img: 'photo-1506794778202-cad84cf45f1d', color: 'pink' },
  { name: 'Aisha', role: 'Researcher', status: 'Active', img: 'photo-1531123897727-8f129e1688ce', color: 'yellow' },
  { name: 'Luis', role: 'Translator', status: 'Away', img: 'photo-1507003211169-0a1dd7228f2d', color: 'blue' },
]
const queue = [
  ['Name the launch campaign', 'Decision', 'Mika + Ren', 'Needs a shove', 'TODAY'],
  ['Cut 3 teaser clips', 'Production', 'Daniel', 'In motion', 'TODAY'],
  ['Final pass on chapter zero', 'Writing', 'Aisha', 'Ready to ship', 'FRI'],
  ['Book the tiny screening room', 'Logistics', 'Whole posse', 'On deck', 'MON'],
  ['Find a better ending', 'Open question', 'Everyone', 'Backlog', 'TBD'],
]
const alerts = [
  { icon: ShieldAlert, title: 'Blocker: nobody owns the final cut', detail: 'THE BATTERIES / launch sprint', time: '12 MIN AGO', color: 'pink' },
  { icon: ArrowUpRight, title: 'Tiny win: pilot draft is done', detail: 'ZILL / writing room', time: '1H AGO', color: 'yellow' },
  { icon: CirclePlus, title: 'New task fell out of the group chat', detail: 'PENDETA / chapter zero', time: '3H AGO', color: 'blue' },
  { icon: Users, title: 'The posse needs one more pair of hands', detail: 'MOONRIDLEY / visual chaos', time: '5H AGO', color: 'pink' },
]

function Panel({ title, icon: Icon, action, children, className = '' }: { title: string; icon?: typeof Zap; action?: string; children: React.ReactNode; className?: string }) {
  return <section className={`panel ${className}`}><header className="panel-head"><div className="panel-title">{Icon && <Icon size={17} className="title-mark"/>}<h2>{title}</h2></div>{action && <button className="text-action">{action}<ArrowRight size={13}/></button>}</header>{children}</section>
}

export default function Page() {
  const [active, setActive] = useState('R!OT Board')
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const [mobileNav, setMobileNav] = useState(false)
  const [infraExpanded, setInfraExpanded] = useState(false)
  const filteredStories = useMemo(() => stories.filter(s => s.title.toLowerCase().includes(query.toLowerCase())), [query])
  const notify = (text: string) => { setNotice(text); window.setTimeout(() => setNotice(''), 2600) }
  return (
    <main className="app-shell">
      <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}>
        <a className="brand" href="/" aria-label="Moonwitness R!OT OS home"><span className="brand-crown"><Crown size={30}/></span><span>MOONWITNESS</span><small>R!OT OS</small></a>
        <div className="side-rule"/>
        <nav aria-label="Main navigation">{nav.map(({ label, href, icon: Icon, badge }) => label === 'Cloud / Infra' ? <div className="nav-group" key={label}><div className={`nav-infra-row ${active.startsWith('Cloud / Infra') ? 'selected' : ''}`}><a href={href} onClick={() => { setActive(label); setMobileNav(false) }} className="nav-item"><Icon size={17}/><span>{label}</span></a><button type="button" className="nav-infra-toggle" aria-label={`${infraExpanded ? 'Collapse' : 'Expand'} Cloud / Infra menu`} aria-expanded={infraExpanded} aria-controls="board-cloud-services" onClick={() => setInfraExpanded((open) => !open)}><ChevronDown size={14}/></button></div>{infraExpanded && <div id="board-cloud-services"><CloudServiceSubmenu active={active} variant="board" onNavigate={() => setMobileNav(false)}/></div>}</div> : <a key={label} href={href} onClick={() => { setActive(label); setMobileNav(false) }} className={`nav-item ${active === label ? 'selected' : ''}`}><Icon size={17}/><span>{label}</span>{badge && <b className="nav-badge">{badge}</b>}</a>)}</nav>
        <div className="side-bottom"><div className="online-dot"/> <span>CHAOS: BEAUTIFULLY MANAGED</span><button aria-label="Settings"><Settings2 size={16}/></button></div>
      </aside>
      {mobileNav && <button className="scrim" aria-label="Close menu" onClick={() => setMobileNav(false)}/>}
      <div className="workspace">
        <header className="topbar"><button className="mobile-menu" aria-label="Open navigation" onClick={() => setMobileNav(true)}><Menu size={19}/></button><div className="crumb">R!OT OS <span>///</span> <b>{active.toUpperCase()}</b></div><label className="searchbox"><Search size={16}/><input aria-label="Search projects and tasks" placeholder="Find a project, task, blocker, or accomplice..." value={query} onChange={e => setQuery(e.target.value)}/><kbd>⌘ K</kbd></label><button className="icon-button notification" aria-label="Notifications" onClick={() => notify('No fresh fires. Suspiciously peaceful.')}><Bell size={17}/><i>12</i></button><button className="profile" onClick={() => notify('Signed in as Operator KA')}><img src={image('photo-1534528741775-53994a69daeb', 100)} alt="Operator KA"/><span><b>RIOT CAPTAIN</b><small>Admin-ish</small></span><ChevronDown size={14}/></button></header>
        <div className="page-content">
          <section className="hero"><div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> YOUR CHAOS HAS A HOME · NO SUITS ALLOWED</div><h1>PROJECT <em>RIOT BOARD</em></h1><p>Big ideas. Tiny deadlines. Weirdly effective teamwork.</p></div><div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><img src={image('photo-1531058020387-3be344556be6', 420)} alt="Torn-paper zine collage for the R!OT project board"/><span className="art-label">FIELD<br/>NOTES<br/><b>№ 008</b></span><span className="art-spark">✳</span></div><span className="hero-index">R!OT-01 / ONGOING</span></section>
          <section className="stats-grid" aria-label="Platform metrics">
            {[['12','ACTIVE PROJECTS','+3 NEW','pink',Activity],['07','IN THE PIT','2 BLOCKED','blue',Eye],['04','SHIPPED THIS MONTH','4 CLEAN SHIPS','green',CheckCircle2],['86%','POSSE CAPACITY','ROOM TO GROW','cyan',Globe2],['03','BLOCKERS','ASSIGN AN OWNER','red',AlertTriangle]].map(([value,label,change,color,Icon]) => <article className={`stat-card ${color}`} key={label as string}><div className="stat-top"><span>{label as string}</span>{typeof Icon !== 'string' && <Icon size={16}/>}</div><strong>{value as string}</strong><div className="stat-foot"><span className="sparkline">▂▃▂▅▄▆▅▇█</span><small>{change as string}</small></div></article>)}
          </section>
          <section className="feature-grid">
            <Panel title="SPARK A PROJECT" icon={PenTool} action="START THE MESS" className="studio-panel"><div className="studio-art"><img src={image('photo-1531058020387-3be344556be6', 700)} alt="Punk-zine collage for a new creative project"/><div className="studio-overlay"><span>MAKE A MESS.<br/>MAKE A MOVE.<br/><b>SHIP THE THING.</b></span><span className="studio-serial">RIOT<br/>NO. 001</span></div></div><div className="studio-bottom"><div><span className="mini-label">NO PERMISSION SLIPS</span><h3>Your next stupidly good idea<br/>starts right here.</h3></div><button className="pink-button" onClick={() => notify('Fresh project started. Give the chaos a name.')}><Sparkles size={15}/> NEW PROJECT <ArrowRight size={14}/></button></div></Panel>
            <Panel title="THE MESSY MIDDLE" icon={Zap} action="SEE THE WHOLE BOARD" className="workflow-panel"><div className="table-list">{filteredStories.map((s,i)=><div className="workflow-row" key={s.title}><img src={image(s.img, 100)} alt=""/><div className="story-name"><b>{s.title}</b><small>{s.type} · {s.tag}</small></div><span className={`status status-${s.status.toLowerCase().replace(' ','-')}`}>{s.status}</span><small className="row-time">{s.time}</small><button className="dots" aria-label={`More options for ${s.title}`} onClick={() => notify(`Opened ${s.title}`)}><MoreHorizontal size={16}/></button></div>)}</div><button className="workflow-foot" onClick={() => setActive('Next Up')}>ALL TASKS · ZERO CORPORATE NONSENSE <ArrowRight size={13}/></button></Panel>
            <Panel title="VISUAL NOISE" icon={FileImage} action="MAKE SOME NOISE" className="poster-panel"><p className="panel-subtitle">Decks, doodles, covers. Anything but beige.</p><div className="poster-grid">{[
              ['photo-1531058020387-3be344556be6','PEOPLE<br/>MAKE<br/>STORIES','poster-pink'],['photo-1519608487953-e999c86e7455','SAME PEOPLE<br/>DIFFERENT<br/>SKIES.','poster-blue'],['photo-1529156069898-49953e39b3ac','A MORE<br/>HUMAN<br/>INTERNET.','poster-cream'],['photo-1500530855697-b586d89ba3ee','YOUTH BUILDS<br/>A BRIGHTER<br/>TOMORROW.','poster-yellow']
              ].map(([src,text,color],i)=><button key={src} className={`poster ${color}`} onClick={() => notify('Poster added to your visual collection.')}><img src={image(src, 300)} alt=""/><span dangerouslySetInnerHTML={{__html:text}}/><small>0{i+1} — MOONWITNESS</small></button>)}</div></Panel>
          </section>
          <section className="lower-grid">
            <Panel title="THE POSSE" icon={Users} action="ROUND UP THE CREW" className="crew-panel"><p className="panel-subtitle">Good people. Bad influence. Great work.</p><div className="crew-grid">{crew.map(c=><button className="crew-card" key={c.name} onClick={() => notify(`${c.name} · ${c.role}`)}><div className={`crew-photo ${c.color}`}><img src={image(c.img, 220)} alt={`${c.name}, ${c.role}`}/><span>✳</span></div><b>{c.name}</b><small>{c.role}</small><i className={c.status === 'Away' ? 'away' : ''}>{c.status}</i></button>)}</div></Panel>
            <Panel title="NEXT UP, NO EXCUSES" icon={CirclePlus} action="VIEW THE HIT LIST" className="queue-panel"><p className="panel-subtitle">Five loose ends. Pick one. Make it less loose.</p><div className="queue-table"><div className="queue-head"><span>TASK</span><span>KIND</span><span>OWNER</span><span>STATUS</span><span>WHEN</span></div>{queue.map(([title,type,loc,status,eta],i)=><button className="queue-row" key={title} onClick={() => notify(`Queue item: ${title}`)}><b><i className={`queue-dot dot-${i%4}`}/>{title}</b><span>{type}</span><span>{loc}</span><span className={`status status-${status.toLowerCase().replace(' ','-')}`}>{status}</span><span>{eta}</span></button>)}</div></Panel>
            <Panel title="PLOT TWISTS" icon={Zap} action="SEE WHAT BLEW UP" className="alerts-panel"><p className="panel-subtitle">Blockers, tiny wins, and other plot twists.</p>{alerts.map(({icon:Icon,title,detail,time,color})=><button className="alert-row" key={title} onClick={() => notify(title)}><span className={`alert-icon ${color}`}><Icon size={17}/></span><span className="alert-copy"><b>{title}</b><small>{detail}</small></span><time>{time}</time></button>)}</Panel>
          </section>
          <section className="bottom-grid">
            <Panel title="WHERE THE RIOT LANDED" icon={Globe2} action="CHECK THE DAMAGE" className="reach-panel"><div className="reach-content"><div className="reach-map"><div className="map-lines"/><div className="map-dot d1"/><div className="map-dot d2"/><div className="map-dot d3"/><div className="map-dot d4"/><div className="map-dot d5"/><div className="map-legend"><span><i className="pink-bg"/> STORIES TRAVEL</span><span><i className="blue-bg"/> PEOPLE CONNECT</span></div></div><div className="reach-number"><span>THIS MONTH</span><b>2.4M</b><strong><ArrowUpRight size={13}/> +40%</strong><small>across 56 countries</small></div></div><div className="region-bars">{[['Southeast Asia','38%'],['East Africa','22%'],['South America','18%'],['Europe','12%']].map(([name,val],i)=><div key={name}><span>{name}</span><i><b style={{width:val,background:['#ff3b98','#19a7ff','#ffd52e','#39e5b2'][i]}}/></i><small>{val}</small></div>)}</div></Panel>
            <Panel title="THE RECEIPTS" icon={Archive} action="DIG THROUGH IT" className="archive-panel"><p className="panel-subtitle">Every win. Every weird detour. Kept.</p>{[['Field reports','1,024 items','photo-1529156069898-49953e39b3ac'],['Photo archive','6,932 items','photo-1531058020387-3be344556be6'],['Video archive','2,119 items','photo-1519608487953-e999c86e7455'],['Audio archive','839 items','photo-1470252649378-9c29740c9fa8']].map(([name,count,src])=><button className="archive-row" key={name} onClick={() => notify(`${name} opened`)}><img src={image(src,100)} alt=""/><span>{name}</span><small>{count}</small><ArrowRight size={13}/></button>)}</Panel>
          </section>
          <CloudInfrastructure />
          <footer className="footer"><span>© MOONWITNESS / R!OT OS</span><span>ANTI-MANAGEMENT MANAGEMENT</span><span><i className="online-dot"/> CHAOS: PRODUCTIVE ENOUGH</span></footer>
        </div>
      </div>
      {notice && <div role="status" className="toast"><CheckCircle2 size={16}/>{notice}<button aria-label="Dismiss" onClick={() => setNotice('')}><X size={14}/></button></div>}
    </main>
  )
}
