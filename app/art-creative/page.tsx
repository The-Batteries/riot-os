import { CreativeConsole } from '@/components/creative-console'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default function CreativeOverviewPage() {
  return <MoonwitnessShell active="Art & Creative"><div className="mw-page-content"><CreativeConsole service="overview"/></div></MoonwitnessShell>
}
