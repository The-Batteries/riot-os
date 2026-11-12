import { notFound } from 'next/navigation'
import { MoonwitnessShell } from '@/components/moonwitness-shell'
import { SalesGrowthConsole } from '@/components/sales-growth-console'
import { isSalesGrowthServiceKey, salesGrowthLinks } from '@/components/sales-growth-menu'

export default async function SalesGrowthServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  if (!isSalesGrowthServiceKey(service)) notFound()
  const label = salesGrowthLinks.find((item) => item.key === service)?.label ?? 'Growth'
  return <MoonwitnessShell active={`Sales & Growth / ${label}`}><div className="mw-page-content"><SalesGrowthConsole service={service}/></div></MoonwitnessShell>
}
