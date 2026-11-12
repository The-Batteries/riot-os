'use client'

import { useMemo, useState } from 'react'
import { Activity, ArrowDownRight, ArrowUpRight, Building2, CalendarDays, CircleAlert, FileText, HeartPulse, Landmark, Leaf, MapPin, Scale, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CivicDomainPanel, type CivicDomain } from '@/components/civic-domain-panel'
import { RiotModuleHeading } from '@/components/riot-design-system'

const regions = ['All regions', 'North district', 'Metro core', 'Coastline']
const periods = ['24H', '7D', '30D']

const overviewByRegion = {
  'All regions': { trust: '68.4', justice: '72%', services: '86%', watch: '03' },
  'North district': { trust: '71.2', justice: '78%', services: '89%', watch: '02' },
  'Metro core': { trust: '63.8', justice: '66%', services: '82%', watch: '04' },
  Coastline: { trust: '69.7', justice: '74%', services: '87%', watch: '03' },
} as const

const domains: CivicDomain[] = [
  {
    id: 'governance', index: '01', title: 'Government & governance', subtitle: 'Institutions, budgets, policy delivery, and public accountability.', icon: Landmark, status: 'STEADY',
    metrics: [{ label: 'Budget execution', value: '78%', delta: '+4.2% vs demo baseline', tone: 'good' }, { label: 'Open records', value: '92%', delta: '9 / 10 sample agencies', tone: 'good' }, { label: 'Policy milestones', value: '08', delta: '3 due this cycle', tone: 'watch' }],
    signals: [{ label: 'Budget review', status: 'IN SESSION', tone: 'good' }, { label: 'Public consultation', status: '4 OPEN', tone: 'watch' }],
  },
  {
    id: 'law', index: '02', title: 'Law & justice', subtitle: 'Courts, legal access, legislation, and rights oversight.', icon: Scale, status: 'WATCH',
    metrics: [{ label: 'Case resolution', value: '72%', delta: '+2.1% sample trend', tone: 'good' }, { label: 'Legal aid reach', value: '64%', delta: 'Coverage gap: 3 areas', tone: 'watch' }, { label: 'Bills under review', value: '12', delta: '4 hearings scheduled', tone: 'neutral' }],
    signals: [{ label: 'Civil docket', status: '8 HEARINGS', tone: 'neutral' }, { label: 'Rights review', status: '2 WATCH ITEMS', tone: 'watch' }],
  },
  {
    id: 'public-services', index: '03', title: 'Public services & infrastructure', subtitle: 'Transport, housing, utilities, permits, and digital access.', icon: Building2, status: 'STEADY',
    metrics: [{ label: 'Service SLA', value: '86%', delta: '+3.4% sample trend', tone: 'good' }, { label: 'Permit turnaround', value: '6.2d', delta: 'Target: 5 days', tone: 'watch' }, { label: 'Transit uptime', value: '94%', delta: 'Within demo target', tone: 'good' }],
    signals: [{ label: 'Housing intake', status: '126 OPEN', tone: 'watch' }, { label: 'Utility reliability', status: 'STABLE', tone: 'good' }],
  },
  {
    id: 'economy', index: '04', title: 'Economy & labor', subtitle: 'Jobs, prices, small business, trade, and household pressure.', icon: Activity, status: 'WATCH',
    metrics: [{ label: 'Employment index', value: '94.2', delta: '+0.8 sample points', tone: 'good' }, { label: 'Price pressure', value: '3.1%', delta: 'Sample annual rate', tone: 'watch' }, { label: 'Small business', value: '62 / 100', delta: 'Confidence index', tone: 'neutral' }],
    signals: [{ label: 'Hiring outlook', status: 'MIXED', tone: 'neutral' }, { label: 'Cost of living', status: 'ELEVATED', tone: 'watch' }],
  },
  {
    id: 'health-education', index: '05', title: 'Health & education', subtitle: 'Primary care, public health, schools, and lifelong learning.', icon: HeartPulse, status: 'STEADY',
    metrics: [{ label: 'Primary care access', value: '88%', delta: '+1.6% sample trend', tone: 'good' }, { label: 'School attendance', value: '93%', delta: 'Across demo districts', tone: 'good' }, { label: 'Clinic wait', value: '12d', delta: 'Target: under 10 days', tone: 'watch' }],
    signals: [{ label: 'Vaccination access', status: 'ON TRACK', tone: 'good' }, { label: 'School capacity', status: '3 AREAS WATCH', tone: 'watch' }],
  },
  {
    id: 'safety-environment', index: '06', title: 'Safety & environment', subtitle: 'Emergency readiness, climate resilience, air, and water.', icon: Shield, status: 'WATCH',
    metrics: [{ label: 'Readiness score', value: '82 / 100', delta: '2 open exercises', tone: 'neutral' }, { label: 'Air quality', value: '31 AQI', delta: 'Sample · good range', tone: 'good' }, { label: 'Active advisories', value: '03', delta: '1 needs follow-up', tone: 'watch' }],
    signals: [{ label: 'Flood response', status: 'READY', tone: 'good' }, { label: 'Water quality', status: '1 REVIEW', tone: 'watch' }],
  },
]

const priorities = [
  { icon: FileText, label: 'Legal aid coverage review', category: 'JUSTICE', owner: 'Civic access office', progress: 68, tone: 'lime' },
  { icon: Building2, label: 'Permit turnaround reduction', category: 'PUBLIC SERVICE', owner: 'Service delivery unit', progress: 46, tone: 'red' },
  { icon: Leaf, label: 'Coastal resilience plan', category: 'ENVIRONMENT', owner: 'Regional planning group', progress: 82, tone: 'lime' },
]

const upcoming = [
  { day: '14', month: 'NOV', title: 'Sample budget hearing', meta: 'Governance · 10:30' },
  { day: '16', month: 'NOV', title: 'Public service forum', meta: 'Open consultation · 14:00' },
  { day: '18', month: 'NOV', title: 'Justice access review', meta: 'Law & rights · 09:00' },
]

export function CivicIntelligenceHub() {
  const [region, setRegion] = useState<(typeof regions)[number]>('All regions')
  const [period, setPeriod] = useState('7D')
  const [compareOpen, setCompareOpen] = useState(false)
  const overview = overviewByRegion[region as keyof typeof overviewByRegion]
  const scopeLabel = useMemo(() => `${region} · ${period} sample view`, [period, region])

  return (
    <div className="civic-hub">
      <RiotModuleHeading
        className="civic-page-heading"
        kickerClassName="civic-kicker"
        kicker={<><i aria-hidden="true" /> R!OT OPS / CIVIC INTELLIGENCE</>}
        title={<>PUBLIC SYSTEMS <em>UNDER THE LENS</em></>}
        description="Governance, law, public services, economy, health, education, safety, and environment."
        notice={<div className="civic-demo-badge"><span>PROTOTYPE DATA</span><b>NOT OFFICIAL OR LIVE</b><small>For interface planning only</small></div>}
      />

      <section className="civic-control-bar" aria-label="Civic dashboard filters">
        <div className="civic-region-picker" role="group" aria-label="Sample region">
          <span><MapPin aria-hidden="true" /> REGION</span>
          {regions.map((item) => <button type="button" key={item} className={region === item ? 'active' : ''} aria-pressed={region === item} onClick={() => setRegion(item)}>{item}</button>)}
        </div>
        <div className="civic-period-picker" role="group" aria-label="Sample time range">
          {periods.map((item) => <button type="button" key={item} className={period === item ? 'active' : ''} aria-pressed={period === item} onClick={() => setPeriod(item)}>{item}</button>)}
        </div>
      </section>

      <section className="civic-snapshot" aria-label="Civic system snapshot">
        <div className="civic-snapshot-copy"><span className="civic-index">00 / EXECUTIVE SNAPSHOT</span><h2>{scopeLabel}</h2><p>Indicators below are illustrative sample values—not verified facts, public records, or legal advice.</p><Button type="button" size="xs" variant="outline" className="civic-compare-button" aria-expanded={compareOpen} onClick={() => setCompareOpen((open) => !open)}><Users data-icon="inline-start" /> {compareOpen ? 'Hide comparison' : 'Compare sample regions'}</Button></div>
        <div className="civic-kpi-grid">
          <article><span>PUBLIC TRUST INDEX</span><strong>{overview.trust}</strong><small><ArrowUpRight aria-hidden="true" /> sample sentiment</small></article>
          <article><span>JUSTICE CASE FLOW</span><strong>{overview.justice}</strong><small><ArrowUpRight aria-hidden="true" /> sample resolved</small></article>
          <article><span>SERVICE AVAILABILITY</span><strong>{overview.services}</strong><small><ArrowUpRight aria-hidden="true" /> sample SLA</small></article>
          <article><span>WATCH ITEMS</span><strong>{overview.watch}</strong><small><ArrowDownRight aria-hidden="true" /> illustrative count</small></article>
        </div>
        {compareOpen && <div className="civic-compare-panel" aria-live="polite"><div><b>REGIONAL COMPARISON</b><small>Illustrative index · 0–100</small></div>{regions.slice(1).map((item, index) => <div className="civic-compare-row" key={item}><span>{item}</span><div><i style={{ width: `${[72, 64, 69][index]}%` }} /></div><b>{[72, 64, 69][index]}</b></div>)}</div>}
      </section>

      <nav className="civic-section-nav" aria-label="Civic domains">
        {domains.map((domain) => <a href={`#${domain.id}`} key={domain.id}>{domain.title}<span>↘</span></a>)}
        <a href="#civic-priorities">Priorities & calendar<span>↘</span></a>
      </nav>

      <div className="civic-domain-grid">
        {domains.map((domain) => <CivicDomainPanel key={domain.id} domain={domain} />)}
      </div>

      <section className="civic-priorities" id="civic-priorities" aria-labelledby="civic-priorities-title">
        <div className="civic-priorities-heading"><div><span className="civic-index">07 / DELIVERY DESK</span><h2 id="civic-priorities-title">Priorities & public calendar</h2><p>Example workstreams and civic dates for the prototype.</p></div><span className="civic-sample-pill">SAMPLE QUEUE</span></div>
        <div className="civic-priorities-grid">
          <section className="civic-priority-list" aria-label="Sample priorities">
            {priorities.map((item) => { const Icon = item.icon; return <article className="civic-priority-row" key={item.label}><span className="civic-priority-icon"><Icon aria-hidden="true" /></span><div className="civic-priority-copy"><span>{item.category}</span><b>{item.label}</b><small>{item.owner}</small><div className={`civic-progress civic-progress-${item.tone}`}><i style={{ width: `${item.progress}%` }} /></div></div><strong>{item.progress}%</strong></article> })}
          </section>
          <section className="civic-calendar" aria-label="Sample civic calendar">
            <h3><CalendarDays aria-hidden="true" /> NEXT ON THE CIVIC CALENDAR</h3>
            {upcoming.map((event) => <article className="civic-calendar-row" key={event.title}><div><b>{event.day}</b><small>{event.month}</small></div><section><strong>{event.title}</strong><span>{event.meta}</span></section><CircleAlert aria-hidden="true" /></article>)}
          </section>
        </div>
      </section>

      <footer className="civic-disclaimer"><Scale aria-hidden="true" /><p><b>Prototype notice:</b> All indicators, agency labels, events, and workstreams on this page are fictional sample content. This is not an official government source and does not provide legal guidance.</p></footer>
    </div>
  )
}
