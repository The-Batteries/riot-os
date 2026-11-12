'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, BookOpen, Briefcase, CircleAlert, FileText, Globe, GraduationCap, Library, Lightbulb, MapPin, Microscope, Network, Search, ShieldCheck, Users } from 'lucide-react'
import type { LearningDomain } from '@/components/learning-domain-panel'
import { LearningDomainPanel } from '@/components/learning-domain-panel'

const regions = ['All regions', 'North district', 'Metro core', 'Coastline']
const periods = ['30D', '90D', 'YEAR']
const tracks = ['All systems', 'Education', 'Research', 'Knowledge', 'Workforce']

const overviewByRegion = {
  'All regions': { access: '84%', completion: '76%', openKnowledge: '68%', skills: '61%' },
  'North district': { access: '88%', completion: '79%', openKnowledge: '73%', skills: '65%' },
  'Metro core': { access: '81%', completion: '71%', openKnowledge: '74%', skills: '58%' },
  Coastline: { access: '83%', completion: '75%', openKnowledge: '63%', skills: '60%' },
} as const

const domains: LearningDomain[] = [
  {
    id: 'school-learning', index: '01', title: 'School & foundational learning', subtitle: 'Early learning, K–12 access, literacy, numeracy, and teacher support.', icon: BookOpen, tracks: ['Education'], status: 'IN FOCUS',
    metrics: [{ label: 'Learning access', value: '91%', note: 'sample participation', tone: 'good' }, { label: 'Reading foundation', value: '76%', note: 'illustrative benchmark', tone: 'watch' }, { label: 'Teacher capacity', value: '71%', note: 'sample development reach', tone: 'neutral' }],
    topics: [{ label: 'Early literacy support', status: 'PROGRAM MAP', tone: 'good' }, { label: 'Rural connectivity', status: 'GAP REVIEW', tone: 'watch' }],
  },
  {
    id: 'higher-education', index: '02', title: 'Higher education', subtitle: 'Universities, technical institutes, student pathways, and campus access.', icon: GraduationCap, tracks: ['Education', 'Research'], status: 'STEADY',
    metrics: [{ label: 'Tertiary access', value: '63%', note: 'sample participation', tone: 'neutral' }, { label: 'Completion outlook', value: '68%', note: 'illustrative cohort', tone: 'good' }, { label: 'Research pathways', value: '42', note: 'sample partnerships', tone: 'neutral' }],
    topics: [{ label: 'Student affordability', status: 'WATCHLIST', tone: 'watch' }, { label: 'Campus collaboration', status: 'EXPANDING', tone: 'good' }],
  },
  {
    id: 'libraries-open-knowledge', index: '03', title: 'Libraries & open knowledge', subtitle: 'Public libraries, archives, language access, and reusable learning resources.', icon: Library, tracks: ['Knowledge', 'Education'], status: 'OPEN ACCESS',
    metrics: [{ label: 'Library reach', value: '68%', note: 'sample community coverage', tone: 'neutral' }, { label: 'Digital collections', value: '74%', note: 'illustrative availability', tone: 'good' }, { label: 'Language coverage', value: '12', note: 'sample languages indexed', tone: 'watch' }],
    topics: [{ label: 'Open textbook catalogue', status: 'CURATED', tone: 'good' }, { label: 'Community archive access', status: '6 COLLECTIONS', tone: 'neutral' }],
  },
  {
    id: 'research-innovation', index: '04', title: 'Research & innovation', subtitle: 'Research funding, open science, labs, and translation into practice.', icon: Microscope, tracks: ['Research'], status: 'ACTIVE',
    metrics: [{ label: 'Open research index', value: '68 / 100', note: 'illustrative score', tone: 'good' }, { label: 'Sample research grants', value: '128', note: 'across demo fields', tone: 'neutral' }, { label: 'Practice transfer', value: '37%', note: 'sample pipeline', tone: 'watch' }],
    topics: [{ label: 'Open data standards', status: 'IN REVIEW', tone: 'watch' }, { label: 'Lab-to-community links', status: '12 PILOTS', tone: 'good' }],
  },
  {
    id: 'lifelong-learning', index: '05', title: 'Workforce & lifelong learning', subtitle: 'Reskilling, apprenticeships, credentials, and career transitions.', icon: Briefcase, tracks: ['Workforce', 'Education'], status: 'GROWING',
    metrics: [{ label: 'Training participation', value: '61%', note: 'sample workforce reach', tone: 'good' }, { label: 'Credential completion', value: '58%', note: 'illustrative cohort', tone: 'watch' }, { label: 'Career transitions', value: '34%', note: 'sample placement path', tone: 'neutral' }],
    topics: [{ label: 'Digital skills pathways', status: 'EXPANDING', tone: 'good' }, { label: 'Care-sector credentials', status: 'DESIGN PHASE', tone: 'neutral' }],
  },
  {
    id: 'information-literacy', index: '06', title: 'Information & media literacy', subtitle: 'Source evaluation, digital literacy, media resilience, and trusted archives.', icon: ShieldCheck, tracks: ['Knowledge'], status: 'IN FOCUS',
    metrics: [{ label: 'Source evaluation', value: '64%', note: 'sample learning reach', tone: 'watch' }, { label: 'Digital literacy', value: '72%', note: 'illustrative benchmark', tone: 'good' }, { label: 'Archive discoverability', value: '57%', note: 'sample access index', tone: 'neutral' }],
    topics: [{ label: 'News literacy curriculum', status: 'PILOTING', tone: 'neutral' }, { label: 'Accessible source guides', status: '3 LANGUAGES', tone: 'good' }],
  },
]

const knowledgePath = [
  { icon: BookOpen, step: '01', title: 'Build foundations', detail: 'Literacy, numeracy, curiosity, and learning support.' },
  { icon: GraduationCap, step: '02', title: 'Deepen expertise', detail: 'Schools, universities, technical and vocational learning.' },
  { icon: Microscope, step: '03', title: 'Create knowledge', detail: 'Research, open science, libraries, and shared archives.' },
  { icon: Briefcase, step: '04', title: 'Apply & renew', detail: 'Workforce skills, civic learning, and lifelong development.' },
]

const focusAreas = [
  { icon: FileText, title: 'Foundational learning', note: 'Early literacy, numeracy, and equitable access', tag: 'EDUCATION' },
  { icon: Globe, title: 'Open knowledge', note: 'Public resources, archives, and language inclusion', tag: 'KNOWLEDGE' },
  { icon: Lightbulb, title: 'Research translation', note: 'Connecting evidence, institutions, and practice', tag: 'RESEARCH' },
  { icon: Users, title: 'Skills for life', note: 'Reskilling pathways and portable credentials', tag: 'WORKFORCE' },
]

export function LearningKnowledgeHub() {
  const [region, setRegion] = useState<(typeof regions)[number]>('All regions')
  const [period, setPeriod] = useState('90D')
  const [track, setTrack] = useState('All systems')
  const overview = overviewByRegion[region as keyof typeof overviewByRegion]
  const visibleDomains = useMemo(() => domains.filter((domain) => track === 'All systems' || domain.tracks.includes(track)), [track])

  return (
    <div className="learning-hub">
      <header className="learning-page-heading">
        <div>
          <span className="learning-kicker"><i /> R!OT OPS / LEARNING + KNOWLEDGE</span>
          <h1>KNOWLEDGE IS <em>INFRASTRUCTURE</em></h1>
          <p>Education, research, shared knowledge, media literacy, and skills—connected as one learning ecosystem.</p>
        </div>
        <div className="learning-demo-badge"><span>PROTOTYPE DATA</span><b>NOT OFFICIAL OR LIVE</b><small>Interface planning only</small></div>
      </header>

      <section className="learning-filter-bar" aria-label="Learning and knowledge filters">
        <div className="learning-filter-region" role="group" aria-label="Sample region">
          <span><MapPin aria-hidden="true" /> REGION</span>
          {regions.map((item) => <button type="button" key={item} className={region === item ? 'active' : ''} aria-pressed={region === item} onClick={() => setRegion(item)}>{item}</button>)}
        </div>
        <div className="learning-filter-period" role="group" aria-label="Sample time range">
          {periods.map((item) => <button type="button" key={item} className={period === item ? 'active' : ''} aria-pressed={period === item} onClick={() => setPeriod(item)}>{item}</button>)}
        </div>
      </section>

      <section className="learning-overview" aria-label="Learning ecosystem overview">
        <div className="learning-overview-copy"><span className="learning-index">00 / ECOSYSTEM SNAPSHOT</span><h2>{region} · {period} sample view</h2><p>All figures are illustrative and do not represent verified education or research data.</p><span className="learning-overview-scope"><Network aria-hidden="true" /> 6 connected knowledge domains</span></div>
        <div className="learning-kpi-grid">
          <article><span>LEARNING ACCESS</span><strong>{overview.access}</strong><small><ArrowUpRight aria-hidden="true" /> sample participation</small></article>
          <article><span>COMPLETION OUTLOOK</span><strong>{overview.completion}</strong><small><ArrowUpRight aria-hidden="true" /> illustrative cohort</small></article>
          <article><span>OPEN KNOWLEDGE REACH</span><strong>{overview.openKnowledge}</strong><small><ArrowUpRight aria-hidden="true" /> sample access index</small></article>
          <article><span>SKILLS TRANSITION</span><strong>{overview.skills}</strong><small><ArrowUpRight aria-hidden="true" /> sample pathways</small></article>
        </div>
      </section>

      <div className="learning-track-nav" role="group" aria-label="Learning system focus">
        {tracks.map((item) => <button type="button" key={item} className={track === item ? 'active' : ''} aria-pressed={track === item} onClick={() => setTrack(item)}>{item}</button>)}
      </div>

      <section className="learning-domains-section" aria-labelledby="learning-domains-title">
        <div className="learning-section-heading"><div><span className="learning-index">01 / SYSTEM MAP</span><h2 id="learning-domains-title">Learning & knowledge domains</h2><p>{visibleDomains.length} connected sample areas · select a focus above to filter</p></div><span className="learning-sample-pill">ILLUSTRATIVE ONLY</span></div>
        <div className="learning-domain-grid">{visibleDomains.map((domain) => <LearningDomainPanel key={domain.id} domain={domain} />)}</div>
      </section>

      <section className="learning-pathway-section" aria-labelledby="learning-pathway-title">
        <div className="learning-section-heading"><div><span className="learning-index">02 / KNOWLEDGE FLOW</span><h2 id="learning-pathway-title">A connected learning pathway</h2><p>Sample framework linking early learning, research, and lifelong practice.</p></div><span className="learning-pathway-label"><Network aria-hidden="true" /> OPEN LEARNING SYSTEM</span></div>
        <div className="learning-pathway-grid">{knowledgePath.map((item) => { const Icon = item.icon; return <article className="learning-path-step" key={item.step}><div className="learning-step-top"><span>{item.step}</span><Icon aria-hidden="true" /></div><h3>{item.title}</h3><p>{item.detail}</p></article> })}</div>
      </section>

      <section className="learning-focus-section" aria-labelledby="learning-focus-title">
        <div className="learning-section-heading"><div><span className="learning-index">03 / SAMPLE PRIORITIES</span><h2 id="learning-focus-title">Where knowledge work connects</h2><p>Example themes across learning, research, and public access.</p></div><span className="learning-sample-pill">DEMO BRIEF</span></div>
        <div className="learning-focus-grid">{focusAreas.map((item) => { const Icon = item.icon; return <article className="learning-focus-card" key={item.title}><span className="learning-focus-icon"><Icon aria-hidden="true" /></span><div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.note}</p></div><Search aria-hidden="true" /></article> })}</div>
      </section>

      <footer className="learning-disclaimer"><CircleAlert aria-hidden="true" /><p><b>Prototype notice:</b> All indicators, institution names, programs, and priorities are fictional sample content. No official student records, research repositories, or live education data are connected.</p></footer>
    </div>
  )
}
