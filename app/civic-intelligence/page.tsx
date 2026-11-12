import type { Metadata } from 'next'
import { CivicIntelligenceHub } from '@/components/civic-intelligence-hub'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export const metadata: Metadata = {
  title: 'Civic Intelligence — MOONWITNESS R!OT OS',
  description: 'A prototype dashboard for governance, law, public services, the economy, health, education, safety, and the environment.',
}

export default function CivicIntelligencePage() {
  return <MoonwitnessShell active="Civic / Governance"><div className="mw-page-content"><CivicIntelligenceHub /></div></MoonwitnessShell>
}
