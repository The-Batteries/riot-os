import { CustomerOpsConsole } from '@/components/customer-ops-console'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default function CustomerOpsOverviewPage() {
  return (
    <MoonwitnessShell active="Customer Ops">
      <div className="mw-page-content">
        <CustomerOpsConsole service="overview" />
      </div>
    </MoonwitnessShell>
  )
}
