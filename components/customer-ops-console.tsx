import {
  Activity,
  ArrowRight,
  BellRing,
  BookOpen,
  CheckCircle2,
  Clock3,
  Headphones,
  Heart,
  MessageSquare,
  ShieldCheck,
  Star,
  Ticket,
  TrendingUp,
  UserRound,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { customerOpsLinks, type CustomerOpsServiceKey } from '@/components/customer-ops-menu'

type CustomerEntry = {
  title: string
  detail: string
  meta: string
  status: string
  tone: 'lime' | 'red' | 'blue' | 'paper'
  icon: LucideIcon
}

type CustomerPageConfig = {
  code: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  metrics: { value: string; label: string; note: string; tone: string }[]
  entries: CustomerEntry[]
}

const overviewConfig: CustomerPageConfig = {
  code: '00 / CUSTOMER OPERATIONS', title: 'CUSTOMER CARE HQ', subtitle: 'Good service is the whole story.',
  description: 'A shared workspace for support conversations, customer context, service requests, and experience signals.', icon: Headphones,
  metrics: [
    { value: '18.2K', label: 'CUSTOMER PROFILES', note: 'SAMPLE CRM RECORDS', tone: 'lime' },
    { value: '42', label: 'OPEN TICKETS', note: 'DEMO QUEUE', tone: 'red' },
    { value: '12m', label: 'FIRST RESPONSE', note: 'ILLUSTRATIVE SLA', tone: 'blue' },
    { value: '4.8/5', label: 'CUSTOMER CSAT', note: 'SAMPLE SCORE', tone: 'paper' },
  ],
  entries: [
    { title: 'TK-2048 · Connection keeps dropping', detail: 'Maya S. · Fiber 100 · Jakarta Selatan', meta: 'TICKET QUEUE / SAMPLE', status: 'P1 · 18M LEFT', tone: 'red', icon: Ticket },
    { title: 'Inbox · Billing question', detail: 'Dion P. · WhatsApp · assigned to Aulia', meta: 'SUPPORT INBOX / SAMPLE', status: 'REPLY DUE', tone: 'blue', icon: MessageSquare },
    { title: 'Experience pulse · onboarding', detail: 'Setup guide step 3 has the highest exit rate', meta: 'CUSTOMER EXPERIENCE / SAMPLE', status: 'TRENDING', tone: 'lime', icon: TrendingUp },
  ],
}

const pageConfigs: Record<CustomerOpsServiceKey, CustomerPageConfig> = {
  inbox: {
    code: '01 / OMNICHANNEL SUPPORT', title: 'SUPPORT INBOX', subtitle: 'One queue. Every conversation.',
    description: 'A mock unified inbox for email, phone, chat, and messaging handoffs with customer context nearby.', icon: MessageSquare,
    metrics: [{ value: '26', label: 'NEEDS A REPLY', note: 'SAMPLE QUEUE', tone: 'red' }, { value: '08', label: 'UNASSIGNED', note: 'DEMO COUNTS', tone: 'blue' }, { value: '12m', label: 'MEDIAN FIRST REPLY', note: 'ILLUSTRATIVE', tone: 'lime' }, { value: '04', label: 'CHANNELS', note: 'EMAIL · CHAT · PHONE · WA', tone: 'paper' }],
    entries: [
      { title: 'Billing question · Dion P.', detail: 'WhatsApp · “Can I change my invoice date?”', meta: '09:42 WIB · SAMPLE MESSAGE', status: 'NEW · 4M', tone: 'blue', icon: MessageSquare },
      { title: 'Connection drops · Maya S.', detail: 'Email · TK-2048 · 2 previous contacts', meta: '09:31 WIB · SAMPLE MESSAGE', status: 'PRIORITY · 18M', tone: 'red', icon: BellRing },
      { title: 'Plan upgrade · Rani A.', detail: 'Web chat · Fiber 50 → Fiber 100', meta: '09:16 WIB · SAMPLE MESSAGE', status: 'ASSIGNED · AULIA', tone: 'lime', icon: Headphones },
    ],
  },
  tickets: {
    code: '02 / CASE MANAGEMENT', title: 'TICKET QUEUE', subtitle: 'Every issue gets an owner.',
    description: 'Prioritized support cases with accountable owners, response targets, and clear resolution states.', icon: Ticket,
    metrics: [{ value: '42', label: 'OPEN CASES', note: 'DEMO QUEUE', tone: 'red' }, { value: '06', label: 'SLA AT RISK', note: 'SAMPLE ALERTS', tone: 'blue' }, { value: '3.4h', label: 'AVG RESOLUTION', note: 'ILLUSTRATIVE', tone: 'lime' }, { value: '91%', label: 'SLA MET', note: 'SAMPLE PERIOD', tone: 'paper' }],
    entries: [
      { title: 'TK-2048 · Connection keeps dropping', detail: 'Maya S. · Network · Aulia R. · 18m to first response', meta: 'P1 / INCIDENT · CREATED 09:12', status: 'IN PROGRESS', tone: 'red', icon: Ticket },
      { title: 'TK-2047 · Update billing contact', detail: 'Studio Karsa · Account · Fajar N. · 3h to SLA', meta: 'P2 / ACCOUNT · CREATED 08:44', status: 'WAITING ON CUSTOMER', tone: 'blue', icon: Clock3 },
      { title: 'TK-2042 · Router replacement request', detail: 'Rani A. · Hardware · Sita M. · 1d to SLA', meta: 'P3 / SERVICE · CREATED YESTERDAY', status: 'SCHEDULED', tone: 'lime', icon: CheckCircle2 },
    ],
  },
  crm: {
    code: '03 / CUSTOMER RELATIONSHIP', title: 'CRM DIRECTORY', subtitle: 'Remember the person, not just the case.',
    description: 'A lightweight customer profile view for contact preferences, services, history, and open follow-ups.', icon: Users,
    metrics: [{ value: '18.2K', label: 'PROFILES', note: 'SAMPLE RECORDS', tone: 'lime' }, { value: '1.6K', label: 'BUSINESS ACCOUNTS', note: 'DEMO COUNTS', tone: 'blue' }, { value: '328', label: 'FOLLOW-UPS DUE', note: 'ILLUSTRATIVE', tone: 'red' }, { value: '92%', label: 'PROFILE COMPLETENESS', note: 'SAMPLE SCORE', tone: 'paper' }],
    entries: [
      { title: 'Maya Santoso · C-10482', detail: 'Fiber 100 · Jakarta Selatan · preferred channel: email', meta: 'RESIDENTIAL · SAMPLE PROFILE', status: '2 OPEN CASES', tone: 'lime', icon: UserRound },
      { title: 'Studio Karsa · C-08311', detail: 'Dedicated 500 · Bandung · account owner: Fajar N.', meta: 'BUSINESS · SAMPLE PROFILE', status: 'RENEWAL IN 24D', tone: 'blue', icon: Users },
      { title: 'Dion Pratama · C-10483', detail: 'Fiber 300 · Depok · preferred channel: WhatsApp', meta: 'RESIDENTIAL · SAMPLE PROFILE', status: 'FOLLOW-UP DUE', tone: 'red', icon: UserRound },
    ],
  },
  experience: {
    code: '04 / CUSTOMER EXPERIENCE', title: 'EXPERIENCE JOURNEY', subtitle: 'Find the friction. Fix the moment.',
    description: 'Map the customer journey across discovery, activation, support, and renewal—then spot where people get stuck.', icon: Heart,
    metrics: [{ value: '78', label: 'JOURNEY SCORE', note: 'SAMPLE INDEX', tone: 'lime' }, { value: '63%', label: 'SELF-SERVE COMPLETION', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: 'Step 03', label: 'TOP FRICTION', note: 'SAMPLE SIGNAL', tone: 'red' }, { value: '4.6/5', label: 'ONBOARDING CSAT', note: 'DEMO SURVEY', tone: 'paper' }],
    entries: [
      { title: '01 · Discover & choose', detail: 'Plan comparison · 82% continue to checkout', meta: 'CUSTOMER JOURNEY / SAMPLE', status: 'HEALTHY', tone: 'lime', icon: Star },
      { title: '02 · Activate service', detail: 'Installation booking · 71% complete without help', meta: 'CUSTOMER JOURNEY / SAMPLE', status: 'WATCH', tone: 'blue', icon: Activity },
      { title: '03 · First connection', detail: 'Router setup guide · highest exits at Wi-Fi step', meta: 'CUSTOMER JOURNEY / SAMPLE', status: 'FRICTION POINT', tone: 'red', icon: Heart },
    ],
  },
  knowledge: {
    code: '05 / SELF-SERVICE CONTENT', title: 'HELP CENTER', subtitle: 'Answers that help people help themselves.',
    description: 'Manage support articles, troubleshooting guides, and the content customers reach before contacting an agent.', icon: BookOpen,
    metrics: [{ value: '128', label: 'PUBLISHED ARTICLES', note: 'SAMPLE LIBRARY', tone: 'lime' }, { value: '63%', label: 'SELF-SERVE RATE', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: '14', label: 'NEEDS A REVIEW', note: 'DEMO QUEUE', tone: 'red' }, { value: '4.7/5', label: 'ARTICLE HELPFULNESS', note: 'SAMPLE SCORE', tone: 'paper' }],
    entries: [
      { title: 'Set up your home Wi-Fi', detail: 'Troubleshooting · 4 min read · 1,248 views this week', meta: 'PUBLISHED · UPDATED 2D AGO', status: '92% HELPFUL', tone: 'lime', icon: BookOpen },
      { title: 'Understand your monthly bill', detail: 'Billing · 3 min read · 938 views this week', meta: 'PUBLISHED · UPDATED 1W AGO', status: '88% HELPFUL', tone: 'blue', icon: BookOpen },
      { title: 'Check an outage in your area', detail: 'Service status · 2 min read · 14 reports', meta: 'REVIEW REQUESTED', status: 'CONTENT REVIEW', tone: 'red', icon: Activity },
    ],
  },
  feedback: {
    code: '06 / VOICE OF CUSTOMER', title: 'CUSTOMER FEEDBACK', subtitle: 'Listen for the signal in the noise.',
    description: 'Collect CSAT, NPS, and customer verbatims in one place, then connect each signal to a service moment.', icon: Star,
    metrics: [{ value: '4.8/5', label: 'OVERALL CSAT', note: 'SAMPLE SCORE', tone: 'lime' }, { value: '+62', label: 'NPS', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: '286', label: 'NEW RESPONSES', note: 'DEMO PERIOD', tone: 'paper' }, { value: '12', label: 'NEEDS A FOLLOW-UP', note: 'SAMPLE QUEUE', tone: 'red' }],
    entries: [
      { title: '“The agent stayed with me until it worked.”', detail: 'Post-ticket survey · setup support · anonymous', meta: 'CSAT 5/5 · SAMPLE VERBATIM', status: 'POSITIVE', tone: 'lime', icon: Star },
      { title: '“I could not find the outage update.”', detail: 'Help center survey · service status · anonymous', meta: 'CSAT 2/5 · SAMPLE VERBATIM', status: 'FOLLOW-UP', tone: 'red', icon: MessageSquare },
      { title: '“Switching plans was surprisingly easy.”', detail: 'Journey survey · plan change · anonymous', meta: 'NPS PROMOTER · SAMPLE VERBATIM', status: 'POSITIVE', tone: 'blue', icon: Heart },
    ],
  },
  services: {
    code: '07 / CUSTOMER SERVICE CATALOG', title: 'SERVICE REQUESTS', subtitle: 'Make the next step obvious.',
    description: 'A request catalog for common customer needs, with the right intake questions and a clear fulfillment path.', icon: Headphones,
    metrics: [{ value: '12', label: 'REQUEST TYPES', note: 'SAMPLE CATALOG', tone: 'lime' }, { value: '86%', label: 'DIGITAL INTAKE', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: '1.8d', label: 'AVG FULFILLMENT', note: 'SAMPLE PERIOD', tone: 'paper' }, { value: '09', label: 'PENDING APPROVAL', note: 'DEMO REQUESTS', tone: 'red' }],
    entries: [
      { title: 'Change or upgrade a plan', detail: 'Plan selection · eligibility check · effective date', meta: 'ACCOUNT CHANGE · SELF-SERVICE', status: 'AVAILABLE', tone: 'lime', icon: ArrowRight },
      { title: 'Report a service issue', detail: 'Service address · symptoms · preferred callback', meta: 'TECHNICAL SUPPORT · GUIDED INTAKE', status: 'AVAILABLE', tone: 'blue', icon: Headphones },
      { title: 'Move service to a new address', detail: 'New address · coverage check · installation slot', meta: 'MOVE REQUEST · AGENT FULFILLMENT', status: '2D TARGET · SAMPLE', tone: 'paper', icon: Users },
    ],
  },
  analytics: {
    code: '08 / SERVICE PERFORMANCE', title: 'SLA & ANALYTICS', subtitle: 'Measure what customers feel.',
    description: 'Track service levels, response and resolution times, contact drivers, and customer sentiment trends.', icon: Activity,
    metrics: [{ value: '91%', label: 'SLA MET', note: 'SAMPLE PERIOD', tone: 'lime' }, { value: '12m', label: 'FIRST RESPONSE', note: 'ILLUSTRATIVE', tone: 'blue' }, { value: '3.4h', label: 'TIME TO RESOLVE', note: 'SAMPLE MEDIAN', tone: 'paper' }, { value: '4.8/5', label: 'CSAT', note: 'DEMO SCORE', tone: 'red' }],
    entries: [
      { title: 'First response by channel', detail: 'Email 22m · messaging 8m · phone 1m', meta: 'SERVICE LEVEL / SAMPLE WINDOW', status: 'TARGET ≤ 15M', tone: 'blue', icon: Clock3 },
      { title: 'Top contact driver · connectivity', detail: '31% of incoming cases · down 4 pts vs prior period', meta: 'CONTACT REASONS / SAMPLE', status: 'IMPROVING', tone: 'lime', icon: TrendingUp },
      { title: 'Customer effort · repeat contacts', detail: '8.4% of resolved cases reopened within 7 days', meta: 'QUALITY SIGNAL / SAMPLE', status: 'WATCH', tone: 'red', icon: Activity },
    ],
  },
}

export function CustomerOpsConsole({ service }: { service: CustomerOpsServiceKey | 'overview' }) {
  const config = service === 'overview' ? overviewConfig : pageConfigs[service]
  const Icon = config.icon
  const listTitle = service === 'inbox' ? 'Live conversation queue' : service === 'tickets' ? 'Assigned case queue' : service === 'crm' ? 'Recent customer profiles' : service === 'knowledge' ? 'Top help articles' : service === 'feedback' ? 'Recent customer signals' : service === 'services' ? 'Request catalog' : service === 'analytics' ? 'Service performance signals' : 'Journey checkpoints'

  return (
    <section className="customer-ops-console" aria-labelledby="customer-ops-title">
      <header className="customer-ops-head">
        <div>
          <span className="customer-ops-kicker"><Icon aria-hidden="true" /> R!OT CUSTOMER OPERATIONS / {config.code}</span>
          <h1 id="customer-ops-title">{config.title}</h1>
          <h2>{config.subtitle}</h2>
          <p>{config.description}</p>
        </div>
        <span className="customer-demo-flag"><i /> SERVICE DESK MOCKUP / NOT CONNECTED</span>
      </header>

      <nav className="customer-ops-tabs" aria-label="Customer operations sections">
        <Link href="/customer-ops" className={service === 'overview' ? 'active' : ''} aria-current={service === 'overview' ? 'page' : undefined}><Activity aria-hidden="true"/><span>Overview</span></Link>
        {customerOpsLinks.map(({ key, label, href, icon: TabIcon }) => (
          <Link key={key} href={href} className={service === key ? 'active' : ''} aria-current={service === key ? 'page' : undefined}><TabIcon aria-hidden="true"/><span>{label}</span></Link>
        ))}
      </nav>

      <div className="customer-ops-metrics">
        {config.metrics.map((metric) => <article className={`customer-metric ${metric.tone}`} key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.note}</small></article>)}
      </div>

      {service === 'overview' ? (
        <div className="customer-overview-grid">
          <section className="customer-pulse-panel" aria-labelledby="customer-pulse-title">
            <header><span className="customer-panel-kicker">CUSTOMER PULSE / SAMPLE SIGNALS</span><h3 id="customer-pulse-title">The service desk, at a glance</h3></header>
            <div className="customer-pulse-bars" aria-label="Illustrative channel mix"><span style={{ height: '76%' }}><b>42%</b><small>MESSAGING</small></span><span style={{ height: '58%' }}><b>28%</b><small>EMAIL</small></span><span style={{ height: '43%' }}><b>18%</b><small>PHONE</small></span><span style={{ height: '31%' }}><b>12%</b><small>WEB</small></span></div>
            <div className="customer-pulse-note"><span><i className="lime"/> INBOUND MIX</span><span>DEMO DATA · LAST 7 DAYS</span></div>
            <Link href="/customer-ops/analytics" className="customer-panel-link">OPEN SLA & ANALYTICS <ArrowRight aria-hidden="true"/></Link>
          </section>
          <section className="customer-queue-panel" aria-labelledby="customer-queue-title">
            <header><span className="customer-panel-kicker">PRIORITY QUEUE / SAMPLE ITEMS</span><h3 id="customer-queue-title">Needs a human</h3></header>
            {overviewConfig.entries.map((entry) => <CustomerEntryCard entry={entry} key={entry.title}/>)}
            <Link href="/customer-ops/tickets" className="customer-panel-link">OPEN TICKET QUEUE <ArrowRight aria-hidden="true"/></Link>
          </section>
        </div>
      ) : (
        <section className="customer-inventory-panel" aria-labelledby="customer-inventory-title">
          <header><div><span className="customer-panel-kicker">CUSTOMER SERVICE WORKSPACE / SAMPLE RECORDS</span><h3 id="customer-inventory-title">{listTitle}</h3></div><span className="customer-panel-count">{config.entries.length.toString().padStart(2, '0')} SAMPLE ITEMS</span></header>
          <div className="customer-entry-list">{config.entries.map((entry) => <CustomerEntryCard entry={entry} key={entry.title}/>)}</div>
          <footer className="customer-inventory-foot"><ShieldCheck aria-hidden="true"/> Fictional sample records only. No live customer data, inbox, or CRM is connected.</footer>
        </section>
      )}

      <footer className="customer-ops-foot"><span><Users aria-hidden="true"/> CUSTOMER EXPERIENCE SUITE</span><span><CheckCircle2 aria-hidden="true"/> ALL COUNTS ARE ILLUSTRATIVE</span><span><Clock3 aria-hidden="true"/> LAST SAMPLE REFRESH · JUST NOW</span></footer>
    </section>
  )
}

function CustomerEntryCard({ entry }: { entry: CustomerEntry }) {
  const Icon = entry.icon
  return (
    <article className="customer-entry">
      <span className={`customer-entry-icon ${entry.tone}`}><Icon aria-hidden="true"/></span>
      <span className="customer-entry-copy"><b>{entry.title}</b><small>{entry.detail}</small><em>{entry.meta}</em></span>
      <span className={`customer-entry-state ${entry.tone}`}><i/>{entry.status}</span>
    </article>
  )
}
