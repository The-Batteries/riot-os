'use client'

import { useMemo, useState } from 'react'
import {
  Activity, AlertTriangle, Archive, ArrowDownRight, ArrowRight, ArrowUpRight,
  Bell, BookOpen, CheckCircle2, ChevronDown, CirclePlus, Compass, Eye,
  FileImage, Filter, Globe2, Home, Image, Layers3, Menu, MessageSquare,
  MoreHorizontal, PenTool, Search, Send, Settings2, ShieldAlert, Sparkles,
  Users, X, Zap,
} from 'lucide-react'

const image = (id: string, width = 500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
const nav = [
  { label: 'Command Center', icon: Home }, { label: 'Story Studio', icon: PenTool },
  { label: 'Signal Ledger', icon: Activity }, { label: 'Poster Forge', icon: Image },
  { label: 'Crew Registry', icon: Users }, { label: 'Advisory Board', icon: MessageSquare },
  { label: 'Archive', icon: Archive }, { label: 'Submission Queue', icon: CirclePlus, badge: '12' },
  { label: 'Exposure Status', icon: Compass }, { label: 'Analytics', icon: Layers3 },
  { label: 'System Logs', icon: BookOpen },
]
const stories = [
  { title: 'Youth Climate Network', type: 'Environment', tag: 'Youth', status: 'Editing', time: '2h ago', img: 'photo-1531058020387-3be344556be6' },
  { title: 'Underground Football in Manila', type: 'Community', tag: 'Sports', status: 'In review', time: '4h ago', img: 'photo-1522778119026-d647f0596c20' },
  { title: 'Queer Spaces in Nairobi', type: 'Identity', tag: 'Culture', status: 'Approved', time: '6h ago', img: 'photo-1529156069898-49953e39b3ac' },
  { title: 'Rural Tech Builders', type: 'Tech', tag: 'Rural', status: 'Scheduled', time: '1d ago', img: 'photo-1519389950473-47ba0277781c' },
  { title: 'Voices from the Drought', type: 'Climate', tag: 'Humanity', status: 'Draft', time: '1d ago', img: 'photo-1470252649378-9c29740c9fa8' },
]
const crew = [
  { name: 'Mika', role: 'Writer', status: 'Active', img: 'photo-1534528741775-53994a69daeb', color: 'pink' },
  { name: 'Daniel', role: 'Photo / Video', status: 'Active', img: 'photo-1500648767791-00dcc994a43e', color: 'blue' },
  { name: 'Ren', role: 'Filmmaker', status: 'Active', img: 'photo-1506794778202-cad84cf45f1d', color: 'pink' },
  { name: 'Aisha', role: 'Researcher', status: 'Active', img: 'photo-1531123897727-8f129e1688ce', color: 'yellow' },
  { name: 'Luis', role: 'Translator', status: 'Away', img: 'photo-1507003211169-0a1dd7228f2d', color: 'blue' },
]
const queue = [
  ['Ocean Culture in Bandung', 'Article', 'Indonesia', 'In review', '2h'],
  ['Women in Coastal Tech', 'Documentary', 'Philippines', 'Editing', '3h'],
  ['Lost Trades of Ukraine', 'Photo essay', 'Ukraine', 'Draft', '1d'],
  ['Street Libraries of Cairo', 'Short film', 'Egypt', 'Approved', '2d'],
  ['Indigenous Futures', 'Podcast', 'Bolivia', 'In review', '3d'],
]
const alerts = [
  { icon: ShieldAlert, title: 'Flagged content needs review', detail: '“The Night Markets of Bangkok”', time: '12m ago', color: 'pink' },
  { icon: ArrowUpRight, title: 'High engagement spike', detail: '“Same People Different Skies”', time: '1h ago', color: 'yellow' },
  { icon: CirclePlus, title: 'New submission', detail: '“A More Human Internet”', time: '3h ago', color: 'blue' },
  { icon: Users, title: 'Collaboration request', detail: 'Global Youth Network', time: '5h ago', color: 'pink' },
]

function Panel({ title, icon: Icon, action, children, className = '' }: { title: string; icon?: typeof Zap; action?: string; children: React.ReactNode; className?: string }) {
  return <section className={`panel ${className}`}><header className="panel-head"><div className="panel-title">{Icon && <Icon size={17} className="title-mark"/>}<h2>{title}</h2></div>{action && <button className="text-action">{action}<ArrowRight size={13}/></button>}</header>{children}</section>
}

export default function Page() {
  const [active, setActive] = useState('Command Center')
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const [mobileNav, setMobileNav] = useState(false)
  const filteredStories = useMemo(() => stories.filter(s => s.title.toLowerCase().includes(query.toLowerCase())), [query])
  const notify = (text: string) => { setNotice(text); window.setTimeout(() => setNotice(''), 2600) }
  return (
    <main className="app-shell">
      <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}>
        <a className="brand" href="#home"><span className="brand-crown">♛</span><span>MOONWITNESS</span></a>
        <div className="side-rule"/>
        <nav aria-label="Main navigation">{nav.map(({ label, icon: Icon, badge }) => <button key={label} onClick={() => { setActive(label); setMobileNav(false) }} className={`nav-item ${active === label ? 'selected' : ''}`}><Icon size={17}/><span>{label}</span>{badge && <b className="nav-badge">{badge}</b>}</button>)}</nav>
        <div className="side-bottom"><div className="online-dot"/> <span>All systems operational</span><button aria-label="Settings"><Settings2 size={16}/></button></div>
      </aside>
      {mobileNav && <button className="scrim" aria-label="Close menu" onClick={() => setMobileNav(false)}/>}
      <div className="workspace">
        <header className="topbar"><button className="mobile-menu" aria-label="Open navigation" onClick={() => setMobileNav(true)}><Menu size={19}/></button><div className="crumb">MOONWITNESS <span>/</span> <b>{active.toUpperCase()}</b></div><label className="searchbox"><Search size={16}/><input aria-label="Search stories" placeholder="Search stories, people, worlds..." value={query} onChange={e => setQuery(e.target.value)}/><kbd>⌘ K</kbd></label><button className="icon-button notification" aria-label="Notifications" onClick={() => notify('You’re all caught up on alerts.')}><Bell size={17}/><i>12</i></button><button className="profile" onClick={() => notify('Signed in as Operator KA')}><img src={image('photo-1534528741775-53994a69daeb', 100)} alt="Operator KA"/><span><b>OPERATOR KA</b><small>Admin</small></span><ChevronDown size={14}/></button></header>
        <div className="page-content">
          <section className="hero"><div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> INDEPENDENT STORIES · GLOBAL IMPACT</div><h1>SHADOW <em>COMMAND CENTER</em></h1><p>Stories observed. People amplified. Worlds connected.</p></div><div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><img src={image('photo-1531058020387-3be344556be6', 420)} alt="Crowd gathered at a creative community event"/><span className="art-label">FIELD<br/>NOTES<br/><b>№ 008</b></span><span className="art-spark">✳</span></div><span className="hero-index">MW—001 / 2025</span></section>
          <section className="stats-grid" aria-label="Platform metrics">
            {[['324','TOTAL STORIES','+18 this week','pink',Activity],['87','IN REVIEW','+6 new','blue',Eye],['210','PUBLISHED','+18% this week','green',CheckCircle2],['2.4M','TOTAL EXPOSURE','+40% this month','cyan',Globe2],['8','FLAGGED','Needs attention','red',AlertTriangle]].map(([value,label,change,color,Icon]) => <article className={`stat-card ${color}`} key={label as string}><div className="stat-top"><span>{label as string}</span>{typeof Icon !== 'string' && <Icon size={16}/>}</div><strong>{value as string}</strong><div className="stat-foot"><span className="sparkline">▂▃▂▅▄▆▅▇█</span><small>{change as string}</small></div></article>)}
          </section>
          <section className="feature-grid">
            <Panel title="Story Studio" icon={PenTool} action="OPEN STUDIO" className="studio-panel"><div className="studio-art"><img src={image('photo-1531058020387-3be344556be6', 700)} alt="A community gathering under warm stage lights"/><div className="studio-overlay"><span>THE PEOPLE<br/>BEHIND THE<br/><b>HEADLINES.</b></span><span className="studio-serial">STORY<br/>NO. 324</span></div></div><div className="studio-bottom"><div><span className="mini-label">READY WHEN YOU ARE</span><h3>Make the unheard<br/>impossible to ignore.</h3></div><button className="pink-button" onClick={() => notify('New story draft started.')}><Sparkles size={15}/> NEW STORY <ArrowRight size={14}/></button></div></Panel>
            <Panel title="Publishing Workflow" icon={Zap} action="VIEW ALL" className="workflow-panel"><div className="table-list">{filteredStories.map((s,i)=><div className="workflow-row" key={s.title}><img src={image(s.img, 100)} alt=""/><div className="story-name"><b>{s.title}</b><small>{s.type} · {s.tag}</small></div><span className={`status status-${s.status.toLowerCase().replace(' ','-')}`}>{s.status}</span><small className="row-time">{s.time}</small><button className="dots" aria-label={`More options for ${s.title}`} onClick={() => notify(`Opened ${s.title}`)}><MoreHorizontal size={16}/></button></div>)}</div><button className="workflow-foot" onClick={() => setActive('Submission Queue')}>TRACK ALL SUBMISSIONS <ArrowRight size={13}/></button></Panel>
            <Panel title="Poster Forge" icon={FileImage} action="CREATE POSTER" className="poster-panel"><p className="panel-subtitle">Turn stories into visual weapons.</p><div className="poster-grid">{[
              ['photo-1531058020387-3be344556be6','PEOPLE<br/>MAKE<br/>STORIES','poster-pink'],['photo-1519608487953-e999c86e7455','SAME PEOPLE<br/>DIFFERENT<br/>SKIES.','poster-blue'],['photo-1529156069898-49953e39b3ac','A MORE<br/>HUMAN<br/>INTERNET.','poster-cream'],['photo-1500530855697-b586d89ba3ee','YOUTH BUILDS<br/>A BRIGHTER<br/>TOMORROW.','poster-yellow']
              ].map(([src,text,color],i)=><button key={src} className={`poster ${color}`} onClick={() => notify('Poster added to your visual collection.')}><img src={image(src, 300)} alt=""/><span dangerouslySetInnerHTML={{__html:text}}/><small>0{i+1} — MOONWITNESS</small></button>)}</div></Panel>
          </section>
          <section className="lower-grid">
            <Panel title="Crew Registry" icon={Users} action="MANAGE CREW" className="crew-panel"><p className="panel-subtitle">People power the map.</p><div className="crew-grid">{crew.map(c=><button className="crew-card" key={c.name} onClick={() => notify(`${c.name} · ${c.role}`)}><div className={`crew-photo ${c.color}`}><img src={image(c.img, 220)} alt={`${c.name}, ${c.role}`}/><span>✳</span></div><b>{c.name}</b><small>{c.role}</small><i className={c.status === 'Away' ? 'away' : ''}>{c.status}</i></button>)}</div></Panel>
            <Panel title="Mission Queue" icon={CirclePlus} action="VIEW QUEUE" className="queue-panel"><p className="panel-subtitle">Next voices. Next stories. Bigger impact.</p><div className="queue-table"><div className="queue-head"><span>STORY</span><span>TYPE</span><span>LOCATION</span><span>STATUS</span><span>ETA</span></div>{queue.map(([title,type,loc,status,eta],i)=><button className="queue-row" key={title} onClick={() => notify(`Queue item: ${title}`)}><b><i className={`queue-dot dot-${i%4}`}/>{title}</b><span>{type}</span><span>{loc}</span><span className={`status status-${status.toLowerCase().replace(' ','-')}`}>{status}</span><span>{eta}</span></button>)}</div></Panel>
            <Panel title="Recent Signals" icon={Zap} action="VIEW ALL" className="alerts-panel"><p className="panel-subtitle">What needs your attention.</p>{alerts.map(({icon:Icon,title,detail,time,color})=><button className="alert-row" key={title} onClick={() => notify(title)}><span className={`alert-icon ${color}`}><Icon size={17}/></span><span className="alert-copy"><b>{title}</b><small>{detail}</small></span><time>{time}</time></button>)}</Panel>
          </section>
          <section className="bottom-grid">
            <Panel title="Global Reach" icon={Globe2} action="VIEW DETAILS" className="reach-panel"><div className="reach-content"><div className="reach-map"><div className="map-lines"/><div className="map-dot d1"/><div className="map-dot d2"/><div className="map-dot d3"/><div className="map-dot d4"/><div className="map-dot d5"/><div className="map-legend"><span><i className="pink-bg"/> STORIES TRAVEL</span><span><i className="blue-bg"/> PEOPLE CONNECT</span></div></div><div className="reach-number"><span>THIS MONTH</span><b>2.4M</b><strong><ArrowUpRight size={13}/> +40%</strong><small>across 56 countries</small></div></div><div className="region-bars">{[['Southeast Asia','38%'],['East Africa','22%'],['South America','18%'],['Europe','12%']].map(([name,val],i)=><div key={name}><span>{name}</span><i><b style={{width:val,background:['#ff3b98','#19a7ff','#ffd52e','#39e5b2'][i]}}/></i><small>{val}</small></div>)}</div></Panel>
            <Panel title="Archive" icon={Archive} action="BROWSE" className="archive-panel"><p className="panel-subtitle">Our living memory.</p>{[['Field reports','1,024 items','photo-1529156069898-49953e39b3ac'],['Photo archive','6,932 items','photo-1531058020387-3be344556be6'],['Video archive','2,119 items','photo-1519608487953-e999c86e7455'],['Audio archive','839 items','photo-1470252649378-9c29740c9fa8']].map(([name,count,src])=><button className="archive-row" key={name} onClick={() => notify(`${name} opened`)}><img src={image(src,100)} alt=""/><span>{name}</span><small>{count}</small><ArrowRight size={13}/></button>)}</Panel>
          </section>
          <footer className="footer"><span>© 2025 MOONWITNESS STUDIO</span><span>STORIES OBSERVED. PEOPLE AMPLIFIED.</span><span><i className="online-dot"/> GLOBAL NETWORK ACTIVE</span></footer>
        </div>
      </div>
      {notice && <div role="status" className="toast"><CheckCircle2 size={16}/>{notice}<button aria-label="Dismiss" onClick={() => setNotice('')}><X size={14}/></button></div>}
    </main>
  )
}
