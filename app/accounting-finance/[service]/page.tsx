import { notFound } from 'next/navigation'
import { AccountingFinanceConsole } from '@/components/accounting-finance-console'
import { financeLinks, isFinanceServiceKey } from '@/components/finance-menu'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default async function AccountingFinanceServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  if (!isFinanceServiceKey(service)) notFound()
  const label = financeLinks.find((item) => item.key === service)?.label ?? 'Finance Overview'
  return <MoonwitnessShell active={`Accounting & Finance / ${label}`}><div className="mw-page-content"><AccountingFinanceConsole service={service}/></div></MoonwitnessShell>
}
