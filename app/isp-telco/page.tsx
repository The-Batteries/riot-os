import { IspTelcoConsole } from '@/components/isp-telco-console'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default function IspTelcoOverviewPage() {
  return (
    <MoonwitnessShell active="ISP / Telco">
      <div className="mw-page-content">
        <IspTelcoConsole service="overview" />
      </div>
    </MoonwitnessShell>
  )
}
