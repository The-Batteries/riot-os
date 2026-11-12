import type { LucideIcon } from 'lucide-react'

export type CivicMetric = { label: string; value: string; delta: string; tone?: 'good' | 'watch' | 'neutral' }
export type CivicSignal = { label: string; status: string; tone?: 'good' | 'watch' | 'neutral' }
export type CivicDomain = {
  id: string
  index: string
  title: string
  subtitle: string
  icon: LucideIcon
  status: string
  metrics: CivicMetric[]
  signals: CivicSignal[]
}

export function CivicDomainPanel({ domain }: { domain: CivicDomain }) {
  const Icon = domain.icon

  return (
    <section className="civic-domain-panel" id={domain.id} aria-labelledby={`${domain.id}-title`}>
      <header className="civic-domain-heading">
        <span className="civic-domain-icon"><Icon aria-hidden="true" /></span>
        <div className="civic-domain-heading-copy">
          <span className="civic-domain-index">{domain.index} / CIVIC SYSTEM</span>
          <h2 id={`${domain.id}-title`}>{domain.title}</h2>
          <p>{domain.subtitle}</p>
        </div>
        <span className={`civic-status civic-status-${domain.status.toLowerCase().replaceAll(' ', '-')}`}>{domain.status}</span>
      </header>
      <div className="civic-domain-metrics">
        {domain.metrics.map((metric) => <div className="civic-domain-metric" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small className={`civic-delta civic-delta-${metric.tone ?? 'neutral'}`}>{metric.delta}</small></div>)}
      </div>
      <div className="civic-signal-list" aria-label={`${domain.title} sample signals`}>
        {domain.signals.map((signal) => <div className="civic-signal-row" key={signal.label}><span className={`civic-signal-dot civic-signal-${signal.tone ?? 'neutral'}`} aria-hidden="true"/><span>{signal.label}</span><b>{signal.status}</b></div>)}
      </div>
      <span className="civic-sample-caption">SAMPLE INDICATORS · NOT LIVE</span>
    </section>
  )
}
