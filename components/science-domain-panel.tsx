import type { LucideIcon } from 'lucide-react'

export type ScienceDomain = {
  id: string
  index: string
  title: string
  subtitle: string
  icon: LucideIcon
  status: string
  metrics: { label: string; value: string; note: string; tone?: 'good' | 'watch' | 'neutral' }[]
  signals: { label: string; status: string; tone?: 'good' | 'watch' | 'neutral' }[]
}

export function ScienceDomainPanel({ domain }: { domain: ScienceDomain }) {
  const Icon = domain.icon
  return (
    <article className="science-domain-panel">
      <header className="science-domain-heading">
        <span className="science-domain-icon"><Icon aria-hidden="true" /></span>
        <div className="science-domain-copy">
          <span className="science-domain-index">{domain.index} / RESEARCH SYSTEM</span>
          <h3>{domain.title}</h3>
          <p>{domain.subtitle}</p>
        </div>
        <span className="science-domain-status">{domain.status}</span>
      </header>
      <div className="science-domain-metrics">
        {domain.metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small className={`science-note science-note-${metric.tone ?? 'neutral'}`}>{metric.note}</small></div>)}
      </div>
      <div className="science-domain-signals" aria-label={`${domain.title} catalog status`}>
        {domain.signals.map((signal) => <div className="science-signal" key={signal.label}><i className={`science-signal-dot science-signal-dot-${signal.tone ?? 'neutral'}`} aria-hidden="true"/><span>{signal.label}</span><b>{signal.status}</b></div>)}
      </div>
      <span className="science-domain-footnote">SYNTHETIC INDEX · NO LIVE SOURCE</span>
    </article>
  )
}
