import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Box,
  CheckCircle2,
  Clock3,
  Cloud,
  Cpu,
  Database,
  Globe2,
  HardDrive,
  Layers3,
  Network,
  Rocket,
  Server,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cloudServiceLinks, type CloudServiceKey } from '@/components/cloud-service-menu'

type ServiceConfig = {
  kicker: string
  title: string
  subtitle: string
  summary: string
  icon: LucideIcon
  metrics: { value: string; label: string; note: string; tone: string }[]
  resources: { name: string; detail: string; meta: string; icon: LucideIcon; tone: string }[]
}

const serviceConfig: Record<CloudServiceKey, ServiceConfig> = {
  cloud: {
    kicker: '01 / PROVIDER OVERVIEW', title: 'CLOUD SERVICES', subtitle: 'A little less console-hopping.',
    summary: 'One control-room sketch for the big three: regions, core services, and where workloads could live.', icon: Cloud,
    metrics: [{ value: '03', label: 'PROVIDER LANES', note: 'GCP · AWS · CLOUDFLARE', tone: 'pink' }, { value: '08', label: 'SERVICE TYPES', note: 'REFERENCE CATALOG', tone: 'blue' }, { value: '00', label: 'LIVE CONNECTIONS', note: 'MOCKUP ONLY', tone: 'yellow' }, { value: '04', label: 'SAMPLE REGIONS', note: 'NOT REAL CAPACITY', tone: 'green' }],
    resources: [{ name: 'Google Cloud', detail: 'Compute Engine · Cloud Run · Cloud DNS', meta: 'GCP / REFERENCE', icon: Cloud, tone: 'blue' }, { name: 'Amazon Web Services', detail: 'EC2 · Lambda · Route 53 · CloudFront', meta: 'AWS / REFERENCE', icon: Server, tone: 'yellow' }, { name: 'Cloudflare', detail: 'Workers · DNS · Load Balancing · Zero Trust', meta: 'EDGE / REFERENCE', icon: Globe2, tone: 'pink' }],
  },
  vps: {
    kicker: '02 / VIRTUAL SERVERS', title: 'VPS FLEET', subtitle: 'Tiny boxes. Big main-character energy.',
    summary: 'A sample host inventory for managing virtual machines across regions and providers.', icon: Server,
    metrics: [{ value: '04', label: 'SAMPLE NODES', note: 'DEMO INVENTORY', tone: 'pink' }, { value: '12', label: 'VCPU ALLOCATED', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: '48 GB', label: 'MEMORY POOL', note: 'ILLUSTRATIVE', tone: 'yellow' }, { value: '03', label: 'REGIONS', note: 'SAMPLE ONLY', tone: 'green' }],
    resources: [{ name: 'riot-edge-sin-01', detail: 'Singapore · 4 vCPU · 16 GB RAM', meta: 'GCP / E2 STANDARD', icon: Server, tone: 'blue' }, { name: 'riot-worker-iad-02', detail: 'Virginia · 4 vCPU · 16 GB RAM', meta: 'AWS / T3 MEDIUM', icon: Cpu, tone: 'yellow' }, { name: 'riot-cache-fra-01', detail: 'Frankfurt · 2 vCPU · 8 GB RAM', meta: 'CLOUDFLARE / EDGE', icon: HardDrive, tone: 'pink' }],
  },
  compute: {
    kicker: '03 / WORKLOADS', title: 'COMPUTE DECK', subtitle: 'Run the jobs. Keep the weird stuff moving.',
    summary: 'A provider-agnostic glance at containers, serverless functions, and scheduled work.', icon: Cpu,
    metrics: [{ value: '06', label: 'SAMPLE WORKLOADS', note: 'DEMO INVENTORY', tone: 'pink' }, { value: '02', label: 'RUNTIME MODES', note: 'SERVERLESS · VM', tone: 'blue' }, { value: '03', label: 'QUEUED JOBS', note: 'SAMPLE ONLY', tone: 'yellow' }, { value: '00', label: 'LIVE EXECUTIONS', note: 'NOT CONNECTED', tone: 'green' }],
    resources: [{ name: 'preview-builder', detail: 'Container · 2 vCPU · on-demand', meta: 'CLOUD RUN / GCP', icon: Box, tone: 'blue' }, { name: 'asset-transcode', detail: 'Function · 1 GB · event-driven', meta: 'LAMBDA / AWS', icon: Cpu, tone: 'yellow' }, { name: 'edge-ping', detail: 'Worker · global edge · scheduled', meta: 'WORKERS / CLOUDFLARE', icon: Activity, tone: 'pink' }],
  },
  dns: {
    kicker: '04 / DOMAINS + RECORDS', title: 'DNS DESK', subtitle: 'Names go here. Traffic goes there.',
    summary: 'A mock zone view for DNS records, TTLs, and edge-provider handoffs.', icon: Globe2,
    metrics: [{ value: '02', label: 'SAMPLE ZONES', note: 'RESERVED .EXAMPLE', tone: 'pink' }, { value: '08', label: 'RECORDS', note: 'DEMO DATA', tone: 'blue' }, { value: '300s', label: 'DEFAULT TTL', note: 'ILLUSTRATIVE', tone: 'yellow' }, { value: 'DNSSEC', label: 'ZONE SECURITY', note: 'PLANNED', tone: 'green' }],
    resources: [{ name: 'moonwitness.example', detail: 'A · 192.0.2.18 · TTL 300', meta: 'CLOUDFLARE DNS / MOCK', icon: Globe2, tone: 'pink' }, { name: 'api.moonwitness.example', detail: 'CNAME · api.example.net · TTL 300', meta: 'ROUTE 53 / MOCK', icon: Network, tone: 'yellow' }, { name: 'assets.moonwitness.example', detail: 'CNAME · cdn.example.net · TTL 600', meta: 'CLOUD DNS / MOCK', icon: HardDrive, tone: 'blue' }],
  },
  routers: {
    kicker: '05 / NETWORK PATHS', title: 'ROUTER ROOM', subtitle: 'Pick a path. Keep the packets weird.',
    summary: 'A visual routing table for edge entry, regional hand-off, and health-based failover.', icon: Network,
    metrics: [{ value: '04', label: 'SAMPLE ROUTES', note: 'MOCK RULES', tone: 'pink' }, { value: '03', label: 'EDGE POPS', note: 'REFERENCE ONLY', tone: 'blue' }, { value: '02', label: 'FALLBACK HOPS', note: 'PLANNED', tone: 'yellow' }, { value: '0 ms', label: 'LIVE LATENCY', note: 'NO TELEMETRY', tone: 'green' }],
    resources: [{ name: 'Public ingress', detail: 'Anycast edge → app gateway', meta: 'CLOUDFLARE / MOCK ROUTE', icon: Globe2, tone: 'pink' }, { name: 'API traffic', detail: '/api/* → primary app pool', meta: 'AWS ROUTE 53 / MOCK', icon: Network, tone: 'blue' }, { name: 'Failover path', detail: 'Primary unhealthy → standby region', meta: 'GCP CLOUD ROUTER / PLANNED', icon: ArrowDownRight, tone: 'yellow' }],
  },
  deployments: {
    kicker: '06 / RELEASE TRACK', title: 'DEPLOYMENT LIST', subtitle: 'Every build. Every landing. No mystery meat.',
    summary: 'A release-board mockup with preview, production, and rollback states. No deployments are connected.', icon: Rocket,
    metrics: [{ value: '05', label: 'SAMPLE RELEASES', note: 'DEMO HISTORY', tone: 'pink' }, { value: '01', label: 'PREVIEW BUILD', note: 'MOCK STATE', tone: 'blue' }, { value: '02', label: 'PRODUCTION', note: 'MOCK STATE', tone: 'yellow' }, { value: '02', label: 'ROLLED BACK', note: 'MOCK STATE', tone: 'green' }],
    resources: [{ name: 'riot-board / main', detail: 'v1.8.2 · 9fa31bd · production', meta: 'AWS / MOCK RELEASE', icon: CheckCircle2, tone: 'green' }, { name: 'cloud-map / preview', detail: 'pr-042 · 48eac20 · preview', meta: 'VERCEL / MOCK RELEASE', icon: Clock3, tone: 'blue' }, { name: 'edge-rules / main', detail: 'v1.7.9 · 6c5d1a0 · rolled back', meta: 'CLOUDFLARE / MOCK RELEASE', icon: ArrowDownRight, tone: 'pink' }],
  },
}

const providers = [
  { name: 'GOOGLE CLOUD', short: 'GCP', services: 'Compute Engine · Cloud Run · Cloud DNS', tone: 'gcp' },
  { name: 'AMAZON WEB SERVICES', short: 'AWS', services: 'EC2 · Lambda · Route 53 · CloudFront', tone: 'aws' },
  { name: 'CLOUDFLARE', short: 'CF', services: 'Workers · DNS · Load Balancing', tone: 'cf' },
]

const deploymentRows = [
  ['riot-board', 'v1.8.2', 'main · 9fa31bd', 'Production', '4m ago', 'green', 'GCP'],
  ['cloud-map', 'pr-042', 'feature/infra · 48eac20', 'Preview', '18m ago', 'blue', 'AWS'],
  ['edge-rules', 'v1.7.9', 'main · 6c5d1a0', 'Rolled back', 'Yesterday', 'pink', 'CF'],
  ['asset-vault', 'v0.9.1', 'release · 1cd5a4b', 'Production', '2 days ago', 'yellow', 'AWS'],
]

export function getCloudServiceConfig(service: CloudServiceKey) {
  return serviceConfig[service]
}

export function CloudServicesConsole({ service }: { service: CloudServiceKey }) {
  const config = serviceConfig[service]
  const Icon = config.icon
  const activeLink = cloudServiceLinks.find((item) => item.key === service)

  return (
    <section className="cloud-console" aria-labelledby="cloud-console-title">
      <header className="cloud-console-head">
        <div className="cloud-console-title-wrap">
          <span className="cloud-console-kicker"><Icon aria-hidden="true" /> CLOUD SERVICES / {config.kicker}</span>
          <h2 id="cloud-console-title">{config.title}</h2>
          <h3>{config.subtitle}</h3>
          <p>{config.summary}</p>
        </div>
        <span className="cloud-console-demo"><i /> MOCK INVENTORY / NO PROVIDERS CONNECTED</span>
      </header>

      <nav className="cloud-console-tabs" aria-label="Cloud service sections">
        {cloudServiceLinks.map(({ key, label, href, icon: TabIcon }) => (
          <Link key={key} href={href} className={service === key ? 'active' : ''} aria-current={service === key ? 'page' : undefined}>
            <TabIcon aria-hidden="true" /><span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="cloud-console-metrics">
        {config.metrics.map((metric) => (
          <article className={`cloud-metric ${metric.tone}`} key={metric.label}>
            <span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.note}</small>
          </article>
        ))}
      </div>

      {service === 'deployments' ? (
        <section className="cloud-deployment-panel" aria-labelledby="deployment-list-title">
          <header><div><span className="cloud-panel-kicker">RELEASE TAPE / MOCK DATA</span><h3 id="deployment-list-title">Recent deployments</h3></div><span className="cloud-panel-count">04 ENTRIES</span></header>
          <div className="cloud-deployment-table" role="table" aria-label="Sample deployment list">
            <div className="cloud-deployment-row cloud-deployment-header" role="row"><span>PROJECT</span><span>VERSION / REF</span><span>STATE</span><span>AGE</span><span>PROVIDER</span></div>
            {deploymentRows.map(([project, version, ref, state, age, tone, provider]) => (
              <div className="cloud-deployment-row" role="row" key={project}>
                <span className="cloud-deployment-project"><b>{project}</b><small>{version}</small></span>
                <span className="cloud-deployment-ref"><b>{ref}</b><small>build output · sample</small></span>
                <span><i className={`cloud-state ${tone}`} />{state}</span><span className="cloud-age">{age}</span><span className="cloud-provider-code">{provider}</span>
              </div>
            ))}
          </div>
          <p className="cloud-table-note"><ShieldCheck aria-hidden="true" /> Release names and states are illustrative—not connected to deployment APIs.</p>
        </section>
      ) : (
        <div className="cloud-console-columns">
          <section className="cloud-resource-panel" aria-labelledby="cloud-resource-title">
            <header><div><span className="cloud-panel-kicker">SERVICE INVENTORY / SAMPLE</span><h3 id="cloud-resource-title">{service === 'cloud' ? 'Provider lanes' : `${activeLink?.label} inventory`}</h3></div><span className="cloud-panel-count">{config.resources.length.toString().padStart(2, '0')} MOCK ITEMS</span></header>
            <div className="cloud-resource-list">
              {config.resources.map(({ name, detail, meta, icon: ResourceIcon, tone }) => (
                <article className="cloud-resource-row" key={name}>
                  <span className={`cloud-resource-icon ${tone}`}><ResourceIcon aria-hidden="true" /></span>
                  <span className="cloud-resource-copy"><b>{name}</b><small>{detail}</small><em>{meta}</em></span>
                  <span className="cloud-resource-state"><i /> DEMO</span><ArrowRight aria-hidden="true" className="cloud-resource-arrow" />
                </article>
              ))}
            </div>
          </section>
          <aside className="cloud-provider-panel" aria-label="Cloud provider service catalog">
            <header><span className="cloud-panel-kicker">PROVIDER INDEX</span><span className="cloud-panel-count">NO ACCOUNTS LINKED</span></header>
            {providers.map((provider) => (
              <article className={`cloud-provider-card ${provider.tone}`} key={provider.short}>
                <span className="cloud-provider-mark">{provider.short}</span>
                <span><b>{provider.name}</b><small>{provider.services}</small></span>
                <ArrowUpRight aria-hidden="true" />
              </article>
            ))}
            <div className="cloud-provider-foot"><Database aria-hidden="true" /><span>Connect a provider later to replace these sample cards with real inventory.</span></div>
          </aside>
        </div>
      )}

      <footer className="cloud-console-foot"><span><Layers3 aria-hidden="true" /> R!OT SERVICE DECK / {service.toUpperCase()}</span><span><Activity aria-hidden="true" /> ALL VALUES ARE MOCK DATA</span><span><Box aria-hidden="true" /> <Cloud aria-hidden="true" /> <Cpu aria-hidden="true" /> SYSTEM SKETCH</span></footer>
    </section>
  )
}
