import { MoonwitnessShell } from '@/components/moonwitness-shell'
import { WorldMonitorConsole } from '@/components/world-monitor-console'

export default function WorldMonitorPage() {
  return <MoonwitnessShell active="World Monitor"><div className="mw-page-content"><WorldMonitorConsole /></div></MoonwitnessShell>
}
