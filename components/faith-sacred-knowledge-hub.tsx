'use client'

import { useMemo, useState } from 'react'
import { BookOpen, CircleAlert, Globe, HandHeart, History, Landmark, Languages, MapPin, Network, ScrollText, ShieldCheck, Sparkles, Users } from 'lucide-react'
import type { FaithDomain } from '@/components/faith-domain-panel'
import { FaithDomainPanel } from '@/components/faith-domain-panel'
import { RiotModuleHeading } from '@/components/riot-design-system'

const themes = ['All themes', 'Traditions', 'Corpus', 'Prophetic history', 'Theology', 'Heritage', 'Charity']

const domains: FaithDomain[] = [
  {
    id: 'faith-traditions', index: '01', title: 'Faith traditions & communities', subtitle: 'Traditions represented with context, attribution, and equal standing.', icon: Users, themes: ['Traditions'], status: 'CONTEXT FIRST',
    metrics: [{ label: 'Tradition records', value: '08', note: 'illustrative catalogue', tone: 'neutral' }, { label: 'Context notes', value: '19', note: 'attributed examples', tone: 'good' }, { label: 'Personal profiles', value: '0', note: 'not collected', tone: 'good' }],
    signals: [{ label: 'Community voice guidance', status: 'INCLUDED', tone: 'good' }, { label: 'Comparative framing', status: 'NON-RANKING', tone: 'neutral' }],
  },
  {
    id: 'sacred-corpus', index: '02', title: 'Sacred corpus & source library', subtitle: 'A catalogue framework for texts, translations, editions, and provenance.', icon: ScrollText, themes: ['Corpus'], status: 'SOURCE LABELLED',
    metrics: [{ label: 'Corpus entries', value: '24', note: 'fictional sample records', tone: 'neutral' }, { label: 'Translation records', value: '14', note: 'edition metadata only', tone: 'good' }, { label: 'Citation links', value: '32', note: 'demo references', tone: 'neutral' }],
    signals: [{ label: 'Text / translation provenance', status: 'TRACKED', tone: 'good' }, { label: 'Rights and access status', status: 'REVIEW REQUIRED', tone: 'watch' }],
  },
  {
    id: 'prophetic-history', index: '03', title: 'Prophetic histories & traditions', subtitle: 'Historical sources and faith narratives kept distinct and attributed.', icon: History, themes: ['Prophetic history'], status: 'MULTI-PERSPECTIVE',
    metrics: [{ label: 'Timeline records', value: '16', note: 'illustrative entries', tone: 'neutral' }, { label: 'Source annotations', value: '28', note: 'sample references', tone: 'good' }, { label: 'Context traditions', value: '06', note: 'demo taxonomy', tone: 'neutral' }],
    signals: [{ label: 'Historical / devotional lens', status: 'DISTINGUISHED', tone: 'good' }, { label: 'Interpretation notes', status: 'ATTRIBUTED', tone: 'neutral' }],
  },
  {
    id: 'theology-divine', index: '04', title: 'Theology & concepts of the divine', subtitle: 'Tradition-specific language, interpretation, and schools of thought.', icon: Sparkles, themes: ['Theology'], status: 'NO TRUTH RANKING',
    metrics: [{ label: 'Concept references', value: '18', note: 'sample topic index', tone: 'neutral' }, { label: 'Interpretation notes', value: '34', note: 'attributed views', tone: 'good' }, { label: 'Language contexts', value: '09', note: 'illustrative coverage', tone: 'neutral' }],
    signals: [{ label: 'Concept attribution', status: 'REQUIRED', tone: 'good' }, { label: 'Universal truth claims', status: 'NOT GENERATED', tone: 'good' }],
  },
  {
    id: 'sacred-heritage', index: '05', title: 'Sacred places & living heritage', subtitle: 'Stewardship, archives, ritual heritage, and community-controlled access.', icon: Landmark, themes: ['Heritage'], status: 'CARE LED',
    metrics: [{ label: 'Heritage records', value: '11', note: 'fictional catalogue', tone: 'neutral' }, { label: 'Stewardship notes', value: '07', note: 'sample records', tone: 'good' }, { label: 'Precise site data', value: 'HIDDEN', note: 'default protection', tone: 'good' }],
    signals: [{ label: 'Custodian permission', status: 'CHECK FIRST', tone: 'watch' }, { label: 'Sensitive location detail', status: 'RESTRICTED', tone: 'good' }],
  },
  {
    id: 'charity-mutual-aid', index: '06', title: 'Charity, service & mutual aid', subtitle: 'A directory concept for care programs, volunteering, and community support.', icon: HandHeart, themes: ['Charity'], status: 'NO TRANSACTIONS',
    metrics: [{ label: 'Care programs', value: '12', note: 'illustrative directory', tone: 'neutral' }, { label: 'Volunteer capacity', value: '83%', note: 'fictional sample', tone: 'good' }, { label: 'Recipient records', value: '0', note: 'not collected', tone: 'good' }],
    signals: [{ label: 'Program and eligibility notes', status: 'DIRECTORY ONLY', tone: 'neutral' }, { label: 'Funds collected here', status: 'NONE', tone: 'good' }],
  },
]

const principles = [
  { icon: BookOpen, title: 'Attribute every source', detail: 'Name the tradition, edition, translation, and interpretive context where applicable.' },
  { icon: Languages, title: 'Respect living communities', detail: 'Use community-approved descriptions and distinguish public from restricted knowledge.' },
  { icon: ShieldCheck, title: 'Protect people and places', detail: 'Do not infer individual belief, expose private participation, or publish sensitive site details.' },
  { icon: HandHeart, title: 'Keep care non-transactional', detail: 'Show service information only; no donations, payment processing, or recipient tracking.' },
]

export function FaithSacredKnowledgeHub() {
  const [theme, setTheme] = useState('All themes')
  const visibleDomains = useMemo(() => domains.filter((domain) => theme === 'All themes' || domain.themes.includes(theme)), [theme])

  return (
    <div className="faith-hub">
      <RiotModuleHeading
        className="faith-page-heading"
        kickerClassName="faith-kicker"
        kicker={<><i aria-hidden="true" /> R!OT OPS / FAITH + SACRED KNOWLEDGE</>}
        title={<>MEANING, <em>MEMORY,</em> CARE</>}
        description="A respectful index for faith traditions, sacred texts, prophetic histories, theology, heritage, and charitable service."
        notice={<div className="faith-demo-badge"><span>NEUTRAL PROTOTYPE</span><b>NO BELIEF PROFILES</b><small>Sample catalogue · no live sources</small></div>}
      />

      <section className="faith-overview" aria-label="Faith and sacred knowledge overview">
        <div className="faith-overview-copy"><span className="faith-index">00 / KNOWLEDGE FRAME</span><h2>Respect without ranking</h2><p>Record provenance and context—not religious truth, personal belief, or community standing.</p><span className="faith-scope"><Network aria-hidden="true" /> 6 connected topic areas</span></div>
        <div className="faith-kpi-grid">
          <article><span>TRADITION EXAMPLES</span><strong>08</strong><small>illustrative records</small></article>
          <article><span>CORPUS REFERENCES</span><strong>24</strong><small>sample catalogue only</small></article>
          <article><span>HERITAGE NOTES</span><strong>11</strong><small>fictional entries</small></article>
          <article><span>CARE PROGRAMS</span><strong>12</strong><small>directory concept</small></article>
        </div>
      </section>

      <div className="faith-theme-filter" role="group" aria-label="Filter faith and sacred knowledge topics">
        <span>EXPLORE BY THEME</span>
        {themes.map((item) => <button type="button" key={item} className={theme === item ? 'active' : ''} aria-pressed={theme === item} onClick={() => setTheme(item)}>{item}</button>)}
      </div>

      <section className="faith-domains-section" aria-labelledby="faith-domains-title">
        <div className="faith-section-heading"><div><span className="faith-index">01 / MODULE MAP</span><h2 id="faith-domains-title">Faith & sacred knowledge modules</h2><p>{visibleDomains.length} sample areas · content is illustrative and not linked to live sources</p></div><span className="faith-sample-pill">DEMO CATALOGUE</span></div>
        <div className="faith-domain-grid">{visibleDomains.map((domain) => <FaithDomainPanel key={domain.id} domain={domain} />)}</div>
      </section>

      <section className="faith-principles-section" aria-labelledby="faith-principles-title">
        <div className="faith-section-heading"><div><span className="faith-index">02 / SAFEGUARDS</span><h2 id="faith-principles-title">Built for context, consent, and care</h2><p>Guidelines for a future source-connected implementation.</p></div><span className="faith-principle-label"><Globe aria-hidden="true" /> PLURALISTIC BY DESIGN</span></div>
        <div className="faith-principles-grid">{principles.map((item) => { const Icon = item.icon; return <article className="faith-principle-card" key={item.title}><span><Icon aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.detail}</p></article> })}</div>
      </section>

      <section className="faith-care-callout" aria-label="Charity module boundaries"><div className="faith-care-icon"><MapPin aria-hidden="true" /></div><div><span>CHARITY & MUTUAL AID / DIRECTORY MODE</span><h2>Connect people to care without collecting their stories.</h2><p>This prototype can list programs, service hours, eligibility, and volunteer contacts. It does not accept donations, handle payments, or store recipient identities.</p></div><span className="faith-care-status"><CircleAlert aria-hidden="true" /> NO PAYMENT FLOW</span></section>

      <footer className="faith-disclaimer"><CircleAlert aria-hidden="true" /><p><b>Prototype notice:</b> All counts, records, programs, and labels are fictional sample content. Religious descriptions should be attributed to their sources and communities. No sacred text corpus, personal belief data, or donation provider is connected.</p></footer>
    </div>
  )
}
