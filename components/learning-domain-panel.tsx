import type { LucideIcon } from 'lucide-react'

export type LearningDomain = {
  id: string
  index: string
  title: string
  subtitle: string
  icon: LucideIcon
  tracks: string[]
  status: string
  metrics: { label: string; value: string; note: string; tone?: 'good' | 'watch' | 'neutral' }[]
  topics: { label: string; status: string; tone?: 'good' | 'watch' | 'neutral' }[]
}

export function LearningDomainPanel({ domain }: { domain: LearningDomain }) {
  const Icon = domain.icon
  return (
    <section className="learning-domain-panel" id={domain.id} aria-labelledby={`${domain.id}-title`}>
      <header className="learning-domain-header">
        <span className="learning-domain-icon"><Icon aria-hidden="true" /></span>
        <div className="learning-domain-copy">
          <span className="learning-domain-index">{domain.index} / KNOWLEDGE SYSTEM</span>
          <h3 id={`${domain.id}-title`}>{domain.title}</h3>
          <p>{domain.subtitle}</p>
        </div>
        <span className={`learning-domain-status learning-domain-status-${domain.status.toLowerCase().replaceAll(' ', '-')}`}>{domain.status}</span>
      </header>
      <div className="learning-domain-metrics">
        {domain.metrics.map((metric) => <article key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small className={`learning-note learning-note-${metric.tone ?? 'neutral'}`}>{metric.note}</small></article>)}
      </div>
      <div className="learning-domain-topics" aria-label={`${domain.title} sample themes`}>
        {domain.topics.map((topic) => <div className="learning-topic-row" key={topic.label}><i className={`learning-topic-dot learning-topic-dot-${topic.tone ?? 'neutral'}`} aria-hidden="true"/><span>{topic.label}</span><b>{topic.status}</b></div>)}
      </div>
      <span className="learning-domain-footnote">ILLUSTRATIVE SAMPLE · NOT LIVE</span>
    </section>
  )
}
