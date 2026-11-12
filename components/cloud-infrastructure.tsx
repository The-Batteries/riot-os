import {
  Activity,
  ArrowRight,
  ArrowDown,
  Cloud,
  Database,
  HardDrive,
  LockKeyhole,
  Radio,
  Server,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type InfraNodeProps = {
  layer: string
  title: string
  detail: string
  state: string
  icon: LucideIcon
  tone: 'pink' | 'blue' | 'yellow' | 'green'
}

function InfraNode({ layer, title, detail, state, icon: Icon, tone }: InfraNodeProps) {
  return (
    <article className={`infra-node ${tone}`}>
      <div className="infra-node-top"><span>{layer}</span><Icon aria-hidden="true" /></div>
      <h3>{title}</h3>
      <p>{detail}</p>
      <span className="infra-node-state"><i aria-hidden="true" />{state}</span>
    </article>
  )
}

export function CloudInfrastructure() {
  return (
    <section className="infra-section" aria-labelledby="infra-title">
      <header className="infra-heading">
        <div>
          <span className="infra-kicker"><Cloud aria-hidden="true" /> CLOUD / INFRASTRUCTURE <i>FIELD MAP 01</i></span>
          <h2 id="infra-title">THE CLOUD<br /><em>UNDER THE CHAOS.</em></h2>
          <p>A reference route for every request, file, and persistent piece of work.</p>
        </div>
        <span className="infra-reference"><span /> REFERENCE BLUEPRINT / NOT LIVE</span>
      </header>

      <div className="infra-ingress"><Radio aria-hidden="true" /><span>PUBLIC TRAFFIC / CREW / WEBHOOKS</span><ArrowDown aria-hidden="true" /></div>

      <div className="infra-flow" role="group" aria-label="Reference architecture: ingress passes through an edge layer into app runtime, then branches to data and asset storage">
        <InfraNode layer="01 / INGRESS" title="EDGE GATE" detail="TLS · CDN · rate limits" state="ROUTING LAYER" icon={Cloud} tone="pink" />
        <div className="infra-wire" aria-hidden="true"><span /><ArrowRight /></div>
        <InfraNode layer="02 / COMPUTE" title="APP RUNTIME" detail="Next.js · APIs · jobs" state="APPLICATION LAYER" icon={Server} tone="blue" />
        <div className="infra-wire infra-wire-branch" aria-hidden="true"><span /><ArrowRight /></div>
        <div className="infra-storage-branch" role="group" aria-label="Storage layer has two planned services">
          <InfraNode layer="03A / DATABASE" title="DATA CORE" detail="Postgres · durable records" state="PROVIDER NOT CONNECTED" icon={Database} tone="yellow" />
          <InfraNode layer="03B / OBJECTS" title="ASSET VAULT" detail="Uploads · media · backups" state="PROVIDER NOT CONNECTED" icon={HardDrive} tone="green" />
        </div>
      </div>

      <div className="infra-control-plane">
        <div className="infra-control-title"><ShieldCheck aria-hidden="true" /><span>CONTROL PLANE</span><small>ALWAYS ON / BY DESIGN</small></div>
        <div className="infra-control-item"><LockKeyhole aria-hidden="true" /><span><b>IDENTITY + SECRETS</b><small>Least privilege · no keys in code</small></span></div>
        <div className="infra-control-item"><Activity aria-hidden="true" /><span><b>OBSERVABILITY</b><small>Logs · traces · alerts</small></span></div>
        <div className="infra-control-item"><ArrowRight aria-hidden="true" /><span><b>RELEASE PATH</b><small>Preview · promote · rollback</small></span></div>
      </div>
      <footer className="infra-foot"><span>ARCHITECTURE SKETCH / NOT A LIVE SYSTEM</span><span>NO PROVIDER CONNECTION OR TELEMETRY CONFIGURED</span></footer>
    </section>
  )
}
