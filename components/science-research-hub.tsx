'use client'

import { useMemo, useState } from 'react'
import { Atom, CircleAlert, Database, Dna, FlaskConical, Orbit, Search, ShieldCheck, Sparkles } from 'lucide-react'
import type { ScienceDomain } from '@/components/science-domain-panel'
import { ScienceDomainPanel } from '@/components/science-domain-panel'

const focusAreas = ['All systems', 'Universe', 'Physics', 'Biology', 'R&D lab']

type ResearchProject = { id: string; title: string; area: string; stage: string; owner: string; status: string }

const domains: ScienceDomain[] = [
  { id: 'universe', index: '01', title: 'Universe & cosmic systems', subtitle: 'Astronomy, cosmic structures, and a catalogue for observing the universe.', icon: Orbit, status: 'CATALOGUE ONLY', metrics: [{ label: 'Sky records', value: '18', note: 'fictional index', tone: 'neutral' }, { label: 'Spectral notes', value: '05', note: 'sample entries', tone: 'good' }, { label: 'Live sky feeds', value: '0', note: 'not connected', tone: 'good' }], signals: [{ label: 'Source provenance', status: 'SAMPLE ONLY', tone: 'neutral' }, { label: 'Live observations', status: 'NOT CONNECTED', tone: 'good' }] },
  { id: 'physics', index: '02', title: 'Physics & field models', subtitle: 'Concepts, model references, and validation notes for physics research.', icon: Atom, status: 'REFERENCE MODE', metrics: [{ label: 'Model cards', value: '06', note: 'illustrative records', tone: 'neutral' }, { label: 'Review notes', value: '12', note: 'demo annotations', tone: 'good' }, { label: 'Live simulations', value: '0', note: 'not running', tone: 'good' }], signals: [{ label: 'Model catalogue', status: 'INDEX ONLY', tone: 'neutral' }, { label: 'Numerical results', status: 'NOT GENERATED', tone: 'good' }] },
  { id: 'biology', index: '03', title: 'Biology & life systems', subtitle: 'A high-level index for life science, ecology, and biological data curation.', icon: Dna, status: 'REFERENCE ONLY', metrics: [{ label: 'Reference records', value: '14', note: 'fictional index', tone: 'neutral' }, { label: 'Annotation sets', value: '08', note: 'sample metadata', tone: 'good' }, { label: 'Specimen data', value: '0', note: 'not connected', tone: 'good' }], signals: [{ label: 'Biology scope', status: 'NON-OPERATIONAL', tone: 'neutral' }, { label: 'Clinical / patient data', status: 'NONE', tone: 'good' }] },
  { id: 'rd-lab', index: '04', title: 'Research & development lab', subtitle: 'Project scoping, evidence review, and research-readiness tracking.', icon: FlaskConical, status: 'SYNTHETIC BOARD', metrics: [{ label: 'Project cards', value: '08', note: 'demo portfolio', tone: 'neutral' }, { label: 'Review gates', value: '03', note: 'workflow examples', tone: 'good' }, { label: 'Connected instruments', value: '0', note: 'no integrations', tone: 'good' }], signals: [{ label: 'Research board', status: 'SYNTHETIC', tone: 'neutral' }, { label: 'Operational protocols', status: 'NOT INCLUDED', tone: 'good' }] },
]

const projects: ResearchProject[] = [
  { id: 'RND-024', title: 'Orbital object catalogue', area: 'Universe', stage: 'Source review', owner: 'Research group A', status: 'CATALOGUING' },
  { id: 'RND-061', title: 'Wave propagation model card', area: 'Physics', stage: 'Methods review', owner: 'Research group B', status: 'IN REVIEW' },
  { id: 'RND-103', title: 'Habitat diversity index', area: 'Biology', stage: 'Reference audit', owner: 'Research group C', status: 'SCOPING' },
  { id: 'RND-140', title: 'Microscopy metadata catalogue', area: 'Biology', stage: 'Data curation', owner: 'Research group D', status: 'IN REVIEW' },
  { id: 'RND-155', title: 'Cross-domain literature map', area: 'R&D lab', stage: 'Project scoping', owner: 'Research group E', status: 'SCOPING' },
]

const principles = [
  { icon: Database, title: 'Traceable sources', description: 'Record dataset, method, version, and citation context before drawing conclusions.' },
  { icon: ShieldCheck, title: 'Safety & ethics', description: 'Keep human, clinical, instrument, and biological material data out of this demo.' },
  { icon: Sparkles, title: 'Reproducible work', description: 'Separate synthetic examples from evidence and make review stages visible.' },
]

export function ScienceResearchHub() {
  const [focus, setFocus] = useState('All systems')
  const [query, setQuery] = useState('')

  const visibleDomains = useMemo(() => domains.filter((domain) => focus === 'All systems' || domain.id === focus.toLowerCase().replaceAll('&', '').replaceAll(' ', '-')), [focus])
  const visibleProjects = useMemo(() => projects.filter((project) => {
    const focusMatches = focus === 'All systems' || project.area.toLowerCase() === focus.toLowerCase()
    const searchable = `${project.id} ${project.title} ${project.area} ${project.stage}`.toLowerCase()
    return focusMatches && searchable.includes(query.trim().toLowerCase())
  }), [focus, query])

  return (
    <div className="science-hub">
      <header className="science-page-heading">
        <div><span className="science-kicker"><i /> R!OT OPS / SCIENCE + RESEARCH</span><h1>MATTER, <em>ORBIT,</em> LIFE</h1><p>A research workspace for cosmic systems, physics, biology, and responsible R&amp;D project discovery.</p></div>
        <div className="science-demo-badge"><span>SYNTHETIC RESEARCH DATA</span><b>NO LIVE LAB SYSTEMS</b><small>Sample catalogue · not scientific results</small></div>
      </header>

      <section className="science-overview" aria-label="Science research overview">
        <div className="science-overview-copy"><span className="science-index">00 / RESEARCH FRAME</span><h2>Explore questions, not claims</h2><p>A structured index for topics, sources, and review stages—without implying live research or verified findings.</p><span className="science-scope"><ShieldCheck aria-hidden="true"/> PROVENANCE FIRST</span></div>
        <div className="science-kpi-grid"><article><span>SCIENCE SYSTEMS</span><strong>04</strong><small>topic areas</small></article><article><span>REFERENCE RECORDS</span><strong>37</strong><small>fictional examples</small></article><article><span>R&amp;D PROJECT CARDS</span><strong>05</strong><small>sample portfolio</small></article><article><span>LIVE CONNECTIONS</span><strong>00</strong><small>none configured</small></article></div>
      </section>

      <div className="science-toolbar">
        <div className="science-focus-filter" role="group" aria-label="Filter science domains">{focusAreas.map((area) => <button type="button" key={area} className={focus === area ? 'active' : ''} aria-pressed={focus === area} onClick={() => setFocus(area)}>{area}</button>)}</div>
        <label className="science-search"><Search aria-hidden="true"/><span className="sr-only">Search sample research project IDs, titles, or stages</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search research cards…"/></label>
      </div>

      <section className="science-domains-section" aria-labelledby="science-domains-title"><div className="science-section-heading"><div><span className="science-index">01 / DOMAIN MAP</span><h2 id="science-domains-title">Science systems</h2><p>{visibleDomains.length} sample areas · no live scientific data</p></div><span className="science-sample-pill"><i/> DEMO CATALOGUE</span></div><div className="science-domain-grid">{visibleDomains.map((domain) => <ScienceDomainPanel key={domain.id} domain={domain}/>)}</div></section>

      <section className="science-projects-section" aria-labelledby="science-projects-title"><div className="science-section-heading"><div><span className="science-index">02 / R&amp;D WORKSPACE</span><h2 id="science-projects-title">Research project board</h2><p>{visibleProjects.length} sample project cards · stages describe workflow only</p></div><span className="science-sample-pill science-project-count">{visibleProjects.length.toString().padStart(2, '0')} PROJECTS</span></div><div className="science-project-table-wrap"><table className="science-project-table"><thead><tr><th scope="col">PROJECT</th><th scope="col">DOMAIN</th><th scope="col">REVIEW STAGE</th><th scope="col">GROUP</th><th scope="col">STATE</th></tr></thead><tbody>{visibleProjects.map((project) => <tr key={project.id}><td><span className="science-project-id">{project.id}</span><b>{project.title}</b></td><td>{project.area}</td><td>{project.stage}</td><td>{project.owner}</td><td><span className="science-project-status">{project.status}</span></td></tr>)}{visibleProjects.length === 0 && <tr><td colSpan={5} className="science-empty-state">No sample research cards match this filter.</td></tr>}</tbody></table></div><div className="science-project-foot"><span><CircleAlert aria-hidden="true"/> No experiments, measurements, or lab procedures are represented.</span><span>LOCAL PREVIEW / SAMPLE DATA</span></div></section>

      <section className="science-principles-section" aria-labelledby="science-principles-title"><div className="science-section-heading"><div><span className="science-index">03 / RESEARCH GUARDRAILS</span><h2 id="science-principles-title">Evidence, safety, reproducibility</h2><p>Context for a future connected science workspace.</p></div></div><div className="science-principles-grid">{principles.map((principle) => { const Icon = principle.icon; return <article className="science-principle-card" key={principle.title}><span><Icon aria-hidden="true"/></span><h3>{principle.title}</h3><p>{principle.description}</p></article> })}</div></section>

      <footer className="science-disclaimer"><CircleAlert aria-hidden="true"/><p><b>Prototype notice:</b> All counts, groups, project titles, and stages are synthetic. No live astronomy feed, simulation, specimen, instrument, patient record, or R&amp;D system is connected. This is a topic and workflow catalogue, not a source of scientific results.</p></footer>
    </div>
  )
}
