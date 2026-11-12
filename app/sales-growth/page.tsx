import { SalesGrowthConsole } from '@/components/sales-growth-console'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default function SalesGrowthOverviewPage() {
  return <MoonwitnessShell active="Sales & Growth"><div className="mw-page-content"><SalesGrowthConsole service="overview"/></div></MoonwitnessShell>
}
