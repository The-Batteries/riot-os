import {
  Activity,
  ArrowRight,
  BellRing,
  CheckCircle2,
  Clock3,
  CreditCard,
  Gauge,
  Globe2,
  KeyRound,
  Network,
  Radio,
  Receipt,
  Server,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ispTelcoLinks, type IspTelcoServiceKey } from '@/components/isp-telco-menu'
import { PageHero } from '@/components/moonwitness-shell'

type TelcoEntry = {
  title: string
  detail: string
  meta: string
  status: string
  tone: 'lime' | 'red' | 'blue' | 'paper'
  icon: LucideIcon
}

type TelcoPageConfig = {
  code: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  metrics: { value: string; label: string; note: string; tone: string }[]
  entries: TelcoEntry[]
}

const overviewConfig: TelcoPageConfig = {
  code: '00 / NOC OVERVIEW', title: 'ISP / TELCO OPS', subtitle: 'Keep the signal alive.',
  description: 'One mock control room for the subscriber edge, access network, core, and NOC queue.', icon: Activity,
  metrics: [
    { value: '12.8K', label: 'SUBSCRIBERS', note: 'SAMPLE INVENTORY', tone: 'lime' },
    { value: '14', label: 'POP / ACCESS NODES', note: 'DEMO TOPOLOGY', tone: 'blue' },
    { value: '99.94%', label: 'SERVICE AVAILABILITY', note: 'ILLUSTRATIVE ONLY', tone: 'paper' },
    { value: '18', label: 'OPEN ALARMS', note: 'SAMPLE NOC QUEUE', tone: 'red' },
  ],
  entries: [
    { title: 'Core + peering', detail: 'JKT-IX-01 · 2 upstream paths · 1 standby', meta: 'NETWORK FABRIC / SAMPLE', status: 'NOMINAL · DEMO', tone: 'lime', icon: Network },
    { title: 'Access edge', detail: '8 OLT · 4 BNG · 2 aggregation rings', meta: 'ACCESS NETWORK / SAMPLE', status: 'WATCH · DEMO', tone: 'blue', icon: Radio },
    { title: 'NOC queue', detail: '1 P1 · 4 P2 · 13 P3 alerts', meta: 'INCIDENTS / SAMPLE', status: '18 OPEN · DEMO', tone: 'red', icon: BellRing },
  ],
}

const pageConfigs: Record<IspTelcoServiceKey, TelcoPageConfig> = {
  topology: {
    code: '01 / NETWORK FABRIC', title: 'NETWORK TOPOLOGY', subtitle: 'From upstream to last mile.',
    description: 'A sample path through the provider network: transit, core, BNG, access, and customer edge.', icon: Network,
    metrics: [{ value: '02', label: 'UPSTREAMS', note: 'PRIMARY + STANDBY', tone: 'lime' }, { value: '04', label: 'CORE ROUTERS', note: 'SAMPLE NODES', tone: 'blue' }, { value: '08', label: 'ACCESS RINGS', note: 'DEMO TOPOLOGY', tone: 'paper' }, { value: '03', label: 'REGIONS', note: 'NOT LIVE', tone: 'red' }],
    entries: [
      { title: 'Transit / IX', detail: 'Transit-A → JKT-IX-01 · standby Transit-B', meta: 'UPSTREAM / SAMPLE', status: 'ROUTED · DEMO', tone: 'lime', icon: Globe2 },
      { title: 'Core + peering', detail: 'CR-JKT-01 ↔ CR-JKT-02 · OSPF / BGP handoff', meta: 'CORE / SAMPLE', status: '2 PATHS · DEMO', tone: 'blue', icon: Network },
      { title: 'Subscriber edge', detail: 'BNG-EDGE-01 → OLT-JKT-04 → CPE', meta: 'ACCESS / SAMPLE', status: 'PATH OK · DEMO', tone: 'paper', icon: Radio },
    ],
  },
  subscribers: {
    code: '02 / CUSTOMER BASE', title: 'SUBSCRIBER DESK', subtitle: 'People behind the packets.',
    description: 'A demo subscriber register with access technology, service tier, and account state.', icon: Users,
    metrics: [{ value: '12,840', label: 'TOTAL ACCOUNTS', note: 'SAMPLE DATA', tone: 'lime' }, { value: '11,902', label: 'ACTIVE', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: '641', label: 'SUSPENDED', note: 'DEMO COUNTS', tone: 'red' }, { value: '297', label: 'PENDING INSTALL', note: 'SAMPLE QUEUE', tone: 'paper' }],
    entries: [
      { title: 'SUB-01042 · Maya S.', detail: 'Fiber 100 · OLT-JKT-04 / PON 03', meta: 'JAKARTA · SAMPLE ACCOUNT', status: 'ACTIVE · DEMO', tone: 'lime', icon: Users },
      { title: 'SUB-01043 · Dion P.', detail: 'Fiber 300 · OLT-BDG-02 / PON 11', meta: 'BANDUNG · SAMPLE ACCOUNT', status: 'ACTIVE · DEMO', tone: 'blue', icon: Users },
      { title: 'SUB-01044 · Rani A.', detail: 'Wireless 50 · AP-BKS-08 / sector C', meta: 'BEKASI · SAMPLE ACCOUNT', status: 'INSTALL PENDING', tone: 'red', icon: Users },
    ],
  },
  plans: {
    code: '03 / PRODUCT CATALOG', title: 'PLANS & SERVICES', subtitle: 'Speed tiers, no mystery fees.',
    description: 'Illustrative broadband products, access types, and service profiles for an ISP catalog.', icon: CreditCard,
    metrics: [{ value: '06', label: 'SERVICE PLANS', note: 'DEMO CATALOG', tone: 'lime' }, { value: '03', label: 'ACCESS TYPES', note: 'FTTH · FWA · DEDICATED', tone: 'blue' }, { value: '1:8', label: 'SHAPING PROFILE', note: 'SAMPLE POLICY', tone: 'paper' }, { value: '24/7', label: 'SUPPORT WINDOW', note: 'ILLUSTRATIVE', tone: 'red' }],
    entries: [
      { title: 'Fiber 50', detail: '50 / 20 Mbps · residential · best effort', meta: 'FTTH · SERVICE TIER', status: 'ACTIVE CATALOG · DEMO', tone: 'lime', icon: Zap },
      { title: 'Fiber 100', detail: '100 / 50 Mbps · residential · standard support', meta: 'FTTH · SERVICE TIER', status: 'ACTIVE CATALOG · DEMO', tone: 'blue', icon: Zap },
      { title: 'Dedicated 500', detail: '500 / 500 Mbps · business · 1:1 contention', meta: 'DIA · SERVICE TIER', status: 'QUOTE ONLY · DEMO', tone: 'paper', icon: Gauge },
    ],
  },
  aaa: {
    code: '04 / AUTH + ACCOUNTING', title: 'AAA / RADIUS', subtitle: 'Know who is on the network.',
    description: 'A mock view of authentication sessions, NAS devices, and accounting records—no credentials shown.', icon: KeyRound,
    metrics: [{ value: '8,221', label: 'ACTIVE SESSIONS', note: 'SAMPLE COUNTS', tone: 'lime' }, { value: '04', label: 'RADIUS NODES', note: 'REFERENCE ONLY', tone: 'blue' }, { value: '12', label: 'AUTH FAILURES', note: 'MOCK WINDOW', tone: 'red' }, { value: '99.8%', label: 'AUTH SUCCESS', note: 'ILLUSTRATIVE', tone: 'paper' }],
    entries: [
      { title: 'sess-8c14 · SUB-01042', detail: 'NAS-BNG-JKT-01 · framed IP 192.0.2.41', meta: 'RADIUS / SAMPLE SESSION', status: 'ACCOUNTING ON · DEMO', tone: 'lime', icon: ShieldCheck },
      { title: 'sess-2f77 · SUB-01043', detail: 'NAS-BNG-BDG-02 · framed IP 198.51.100.18', meta: 'RADIUS / SAMPLE SESSION', status: 'ACCOUNTING ON · DEMO', tone: 'blue', icon: KeyRound },
      { title: 'auth-fail · SUB-01044', detail: 'NAS-BNG-JKT-01 · access rejected', meta: 'AAA / SAMPLE EVENT', status: 'REVIEW · DEMO', tone: 'red', icon: BellRing },
    ],
  },
  ipam: {
    code: '05 / ADDRESS MANAGEMENT', title: 'IPAM & POOLS', subtitle: 'Every address has a place.',
    description: 'A planning board for subscriber subnets, CGNAT space, DHCP scopes, and IPv6 allocations.', icon: Globe2,
    metrics: [{ value: '24', label: 'ADDRESS POOLS', note: 'SAMPLE CONFIG', tone: 'lime' }, { value: '68%', label: 'ALLOCATED', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: '03', label: 'IP FAMILIES', note: 'V4 · CGNAT · V6', tone: 'paper' }, { value: '06', label: 'DHCP SCOPES', note: 'DEMO CONFIG', tone: 'red' }],
    entries: [
      { title: 'Residential · 10.40.0.0/16', detail: 'IPv4 private · DHCP · Jakarta region', meta: 'POOL / RFC1918 SAMPLE', status: '68% USED · DEMO', tone: 'lime', icon: Globe2 },
      { title: 'CGNAT · 100.64.0.0/10', detail: 'Shared address space · NAT pool', meta: 'POOL / RFC6598 SAMPLE', status: '52% USED · DEMO', tone: 'blue', icon: Network },
      { title: 'Subscriber IPv6 · 2001:db8::/32', detail: 'Documentation prefix · dual stack plan', meta: 'POOL / RFC3849 SAMPLE', status: 'PLANNED · DEMO', tone: 'paper', icon: Globe2 },
    ],
  },
  access: {
    code: '06 / LAST-MILE EQUIPMENT', title: 'ACCESS NETWORK', subtitle: 'OLT, BNG, DSLAM, and the edge.',
    description: 'A sample inventory of access nodes, port capacity, region, and upstream status.', icon: Radio,
    metrics: [{ value: '08', label: 'OLT NODES', note: 'SAMPLE INVENTORY', tone: 'lime' }, { value: '04', label: 'BNG NODES', note: 'DEMO INVENTORY', tone: 'blue' }, { value: '02', label: 'DSLAM NODES', note: 'REFERENCE ONLY', tone: 'paper' }, { value: '76%', label: 'PORT UTILIZATION', note: 'ILLUSTRATIVE', tone: 'red' }],
    entries: [
      { title: 'OLT-JKT-04 · GPON', detail: '16 PON ports · 1,024 ONT capacity · Jakarta', meta: 'ACCESS NODE / SAMPLE', status: '14 PON UP · DEMO', tone: 'lime', icon: Radio },
      { title: 'BNG-EDGE-01 · subscriber edge', detail: '10 Gbps uplink · 3,420 sessions · Jakarta', meta: 'BROADBAND NETWORK GATEWAY / SAMPLE', status: 'UP · DEMO', tone: 'blue', icon: Server },
      { title: 'DSLAM-BDG-01 · VDSL2', detail: '192 ports · 114 active lines · Bandung', meta: 'ACCESS NODE / SAMPLE', status: 'WATCH · DEMO', tone: 'red', icon: Radio },
    ],
  },
  alarms: {
    code: '07 / NETWORK OPERATIONS', title: 'NOC ALARMS', subtitle: 'Catch the wobble before the outage.',
    description: 'A mock incident queue with severity, affected service, and acknowledgement state.', icon: BellRing,
    metrics: [{ value: '01', label: 'P1 CRITICAL', note: 'SAMPLE QUEUE', tone: 'red' }, { value: '04', label: 'P2 MAJOR', note: 'DEMO QUEUE', tone: 'blue' }, { value: '13', label: 'P3 MINOR', note: 'DEMO QUEUE', tone: 'paper' }, { value: '05m', label: 'ACK TARGET', note: 'SAMPLE POLICY', tone: 'lime' }],
    entries: [
      { title: 'P1 · Uplink packet loss', detail: 'POP-JKT-01 · transit-A · 7.2% loss', meta: 'SAMPLE ALARM · 09:42 WIB', status: 'INVESTIGATING · DEMO', tone: 'red', icon: BellRing },
      { title: 'P2 · OLT port utilization', detail: 'OLT-JKT-04 · PON 03 · capacity watch', meta: 'SAMPLE ALARM · 09:18 WIB', status: 'ACKNOWLEDGED · DEMO', tone: 'blue', icon: Activity },
      { title: 'P3 · RADIUS latency', detail: 'AAA-RAD-02 · 184 ms · threshold 150 ms', meta: 'SAMPLE ALARM · 08:56 WIB', status: 'MONITORING · DEMO', tone: 'paper', icon: Clock3 },
    ],
  },
  billing: {
    code: '08 / USAGE + REVENUE', title: 'USAGE & BILLING', subtitle: 'Usage, invoices, and service health.',
    description: 'A demo operations view for broadband consumption, billing cycles, and account follow-up.', icon: Receipt,
    metrics: [{ value: '482 TB', label: 'MONTHLY TRAFFIC', note: 'SAMPLE AGGREGATE', tone: 'lime' }, { value: '96.2%', label: 'COLLECTION RATE', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: '328', label: 'INVOICES DUE', note: 'DEMO COUNTS', tone: 'red' }, { value: '04', label: 'BILLING CYCLES', note: 'SAMPLE CONFIG', tone: 'paper' }],
    entries: [
      { title: 'Residential · Fiber 100', detail: '286 TB traffic · 7,420 accounts · monthly cycle', meta: 'USAGE GROUP / SAMPLE', status: 'IN CYCLE · DEMO', tone: 'lime', icon: Activity },
      { title: 'Business · Dedicated', detail: '118 TB traffic · 286 accounts · net 30', meta: 'USAGE GROUP / SAMPLE', status: 'IN CYCLE · DEMO', tone: 'blue', icon: Receipt },
      { title: 'Follow-up queue', detail: '328 invoices · illustrative balance only', meta: 'BILLING OPS / SAMPLE', status: 'REVIEW · DEMO', tone: 'red', icon: CreditCard },
    ],
  },
}

export function IspTelcoConsole({ service }: { service: IspTelcoServiceKey | 'overview' }) {
  const config = service === 'overview' ? overviewConfig : pageConfigs[service]
  const Icon = config.icon
  const heroTitleWords = config.title.split(' ')
  const heroAccent = heroTitleWords.pop() ?? 'TELCO'
  const heroTitle = heroTitleWords.join(' ') || 'ISP'
  const heroIndex = config.code.split(' / ')[0]

  return (
    <>
      <PageHero
        title={heroTitle}
        accent={heroAccent}
        index={heroIndex}
        image="/images/riot-zine-hero.png"
        description={config.subtitle}
      />
      <section className="telco-console" aria-label={`${config.title} operations`}>
        <header className="telco-console-head">
          <div>
            <span className="telco-console-kicker"><Icon aria-hidden="true" /> R!OT NETWORK OPERATIONS / {config.code}</span>
            <p className="telco-console-description">{config.description}</p>
          </div>
          <span className="telco-demo-flag"><i /> OPERATOR MOCKUP / NOT CONNECTED</span>
        </header>

      <nav className="telco-console-tabs" aria-label="ISP and telco sections">
        <Link href="/isp-telco" className={service === 'overview' ? 'active' : ''} aria-current={service === 'overview' ? 'page' : undefined}>
          <Activity aria-hidden="true" /><span>Overview</span>
        </Link>
        {ispTelcoLinks.map(({ key, label, href, icon: TabIcon }) => (
          <Link key={key} href={href} className={service === key ? 'active' : ''} aria-current={service === key ? 'page' : undefined}>
            <TabIcon aria-hidden="true" /><span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="telco-metrics">
        {config.metrics.map((metric) => (
          <article className={`telco-metric ${metric.tone}`} key={metric.label}>
            <span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.note}</small>
          </article>
        ))}
      </div>

      {service === 'overview' ? (
        <div className="telco-overview-grid">
          <section className="telco-fabric-panel" aria-labelledby="telco-fabric-title">
            <header><span className="telco-panel-kicker">NETWORK FABRIC / SAMPLE PATH</span><h3 id="telco-fabric-title">The last-mile relay</h3></header>
            <div className="telco-fabric-flow">
              {[
                { name: 'TRANSIT', meta: 'JKT-IX-01', icon: Globe2, tone: 'lime' },
                { name: 'CORE', meta: 'CR-JKT-02', icon: Network, tone: 'blue' },
                { name: 'BNG', meta: 'EDGE-01', icon: Server, tone: 'paper' },
                { name: 'ACCESS', meta: 'OLT-JKT-04', icon: Radio, tone: 'red' },
              ].map(({ name, meta, icon: NodeIcon, tone }, index) => (
                <div className="telco-fabric-step" key={name}>
                  <div className={`telco-fabric-node ${tone}`}><NodeIcon aria-hidden="true"/><b>{name}</b><small>{meta}</small></div>
                  {index < 3 && <ArrowRight className="telco-fabric-wire" aria-hidden="true"/>}
                </div>
              ))}
            </div>
            <Link href="/isp-telco/topology" className="telco-panel-link">OPEN NETWORK TOPOLOGY <ArrowRight aria-hidden="true"/></Link>
          </section>
          <section className="telco-queue-panel" aria-labelledby="telco-queue-title">
            <header><span className="telco-panel-kicker">NOC QUEUE / SAMPLE EVENTS</span><h3 id="telco-queue-title">Signals to watch</h3></header>
            {overviewConfig.entries.map((entry) => <TelcoEntryCard entry={entry} key={entry.title} />)}
            <Link href="/isp-telco/alarms" className="telco-panel-link">OPEN NOC ALARMS <ArrowRight aria-hidden="true"/></Link>
          </section>
        </div>
      ) : service === 'topology' ? (
        <section className="telco-topology-panel" aria-labelledby="telco-topology-title">
          <header><div><span className="telco-panel-kicker">LAYERED NETWORK / DEMO MAP</span><h3 id="telco-topology-title">Upstream → subscriber edge</h3></div><span className="telco-panel-count">4 HOPS · MOCK</span></header>
          <div className="telco-topology-flow">
            {config.entries.map((entry, index) => <div className="telco-topology-step" key={entry.title}><TelcoEntryCard entry={entry}/>{index < config.entries.length - 1 && <ArrowRight aria-hidden="true"/>}</div>)}
          </div>
          <p className="telco-topology-note"><ShieldCheck aria-hidden="true"/> Logical sketch only—no live routes, addresses, or network devices are queried.</p>
        </section>
      ) : (
        <section className="telco-inventory-panel" aria-labelledby="telco-inventory-title">
          <header><div><span className="telco-panel-kicker">OPERATIONS INVENTORY / SAMPLE RECORDS</span><h3 id="telco-inventory-title">{service === 'alarms' ? 'Incident queue' : service === 'aaa' ? 'Session ledger' : service === 'billing' ? 'Usage groups' : 'Service register'}</h3></div><span className="telco-panel-count">{config.entries.length.toString().padStart(2, '0')} SAMPLE ROWS</span></header>
          <div className="telco-entry-list">{config.entries.map((entry) => <TelcoEntryCard entry={entry} key={entry.title}/>)}</div>
          <footer className="telco-inventory-foot"><ShieldCheck aria-hidden="true"/> Sample records use reserved example identifiers. No subscriber or network data is connected.</footer>
        </section>
      )}

        <footer className="telco-console-foot"><span><Network aria-hidden="true"/> ISP / TELCO SERVICE DECK</span><span><CheckCircle2 aria-hidden="true"/> ALL COUNTS ARE ILLUSTRATIVE</span><span><Clock3 aria-hidden="true"/> LAST SAMPLE REFRESH · JUST NOW</span></footer>
      </section>
    </>
  )
}

function TelcoEntryCard({ entry }: { entry: TelcoEntry }) {
  const Icon = entry.icon
  return (
    <article className="telco-entry">
      <span className={`telco-entry-icon ${entry.tone}`}><Icon aria-hidden="true"/></span>
      <span className="telco-entry-copy"><b>{entry.title}</b><small>{entry.detail}</small><em>{entry.meta}</em></span>
      <span className={`telco-entry-state ${entry.tone}`}><i/>{entry.status}</span>
    </article>
  )
}
