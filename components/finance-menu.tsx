import { Banknote, ChartNoAxesCombined, ClipboardCheck, FileText, Landmark, Receipt, Scale, WalletCards } from 'lucide-react'
import Link from 'next/link'

export const financeLinks = [
  { key: 'payables', label: 'Accounts Payable', href: '/accounting-finance/payables', icon: Banknote },
  { key: 'receivables', label: 'Accounts Receivable', href: '/accounting-finance/receivables', icon: WalletCards },
  { key: 'expenses', label: 'Expenses & Cards', href: '/accounting-finance/expenses', icon: Receipt },
  { key: 'budgets', label: 'Budgets & Variance', href: '/accounting-finance/budgets', icon: Scale },
  { key: 'reconciliation', label: 'Reconciliation', href: '/accounting-finance/reconciliation', icon: ClipboardCheck },
  { key: 'reports', label: 'Financial Reports', href: '/accounting-finance/reports', icon: FileText },
  { key: 'forecasting', label: 'Cash Forecast', href: '/accounting-finance/forecasting', icon: ChartNoAxesCombined },
] as const

export type FinanceServiceKey = (typeof financeLinks)[number]['key']

export function isFinanceServiceKey(value: string): value is FinanceServiceKey {
  return financeLinks.some((service) => service.key === value)
}

export function FinanceSubmenu({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return <div className="sales-growth-submenu finance-submenu" aria-label="Accounting and finance sections">
    {financeLinks.map(({ label, href, icon: Icon }, index) => <Link key={href} href={href} onClick={onNavigate} className={`sales-growth-menu-link ${active.endsWith(`/ ${label}`) ? 'active' : ''}`}><Icon aria-hidden="true"/><span>{label}</span><small>0{index + 1}</small></Link>)}
    <Link href="/accounting-finance" onClick={onNavigate} className={`sales-growth-menu-link sales-growth-overview-link ${active === 'Accounting & Finance' ? 'active' : ''}`}><Landmark aria-hidden="true"/><span>Finance Overview</span><small>↗</small></Link>
  </div>
}

export function FinanceTabs({ active }: { active: FinanceServiceKey | 'overview' }) {
  return <nav className="sales-growth-tabs finance-tabs" aria-label="Accounting and finance sections">
    <Link href="/accounting-finance" className={active === 'overview' ? 'active' : ''} aria-current={active === 'overview' ? 'page' : undefined}><Landmark aria-hidden="true"/><span>Overview</span></Link>
    {financeLinks.map(({ key, label, href, icon: Icon }) => <Link key={key} href={href} className={active === key ? 'active' : ''} aria-current={active === key ? 'page' : undefined}><Icon aria-hidden="true"/><span>{label}</span></Link>)}
  </nav>
}
