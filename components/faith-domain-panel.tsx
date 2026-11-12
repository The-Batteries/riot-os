import type { LucideIcon } from 'lucide-react'

export type FaithDomain = {
  id: string
  index: string
  title: string
  subtitle: string
  icon: LucideIcon
  themes: string[]
  status: string
  metrics: { label: string; value: string; note: string; tone?: 'good' | 'watch' | 'neutral' }[]
  signals: { label: string; status: string; tone?: 'good' | 'watch' | 'neutral' }[]
}

export function FaithDomainPanel({ domain }: { domain: FaithDomain }) {
  const Icon = domain.icon
  return (
    <section className="faith-domain-panel" id={domain.id} aria-labelledby={`${domain.id}-title`}>
      <header className="faith-domain-heading">
        <span className="faith-domain-icon"><Icon aria-hidden="true" /></span>
        <div className="faith-domain-copy">
          <span className="faith-domain-index">{domain.index} / SACRED KNOWLEDGE</span>
          <h3 id={`${domain.id}-title`}>{domain.title}</h3>
          <p>{domain.subtitle}</p>
        </div>
        <span className={`faith-domain-status faith-domain-status-${domain.status.toLowerCase().replaceAll(' ', '-')}`}>{domain.status}</span>
      </header>
      <div className="faith-domain-metrics">
        {domain.metrics.map((metric) => <article key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small className={`faith-note faith-note-${metric.tone ?? 'neutral'}`}>{metric.note}</small></article>)}
      </div>
      <div className="faith-domain-signals" aria-label={`${domain.title} sample catalog notes`}>
        {domain.signals.map((signal) => <div className="faith-signal-row" key={signal.label}><i className={`faith-signal-dot faith-signal-dot-${signal.tone ?? 'neutral'}`} aria-hidden="true"/><span>{signal.label}</span><b>{signal.status}</b></div>)}
      </div>
      <span className="faith-domain-footnote">SAMPLE CATALOGUE · NOT A LIVE SOURCE</span>
    </section>
  )
}
