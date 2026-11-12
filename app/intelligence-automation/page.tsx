import { IntelligenceConsole } from '@/components/intelligence-console'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default function IntelligenceOverviewPage() {
  return <MoonwitnessShell active="Intelligence & Automation"><div className="mw-page-content"><IntelligenceConsole service="overview"/></div></MoonwitnessShell>
}
