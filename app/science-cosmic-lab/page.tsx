import type { Metadata } from 'next'
import { MoonwitnessShell } from '@/components/moonwitness-shell'
import { ScienceResearchHub } from '@/components/science-research-hub'

export const metadata: Metadata = {
  title: 'Science / Cosmic / R&D Lab — MOONWITNESS R!OT OS',
  description: 'A synthetic research prototype for cosmic systems, physics, biology, and responsible R&D discovery.',
}

export default function ScienceCosmicLabPage() {
  return <MoonwitnessShell active="Science / Cosmic / R&D Lab"><div className="mw-page-content"><ScienceResearchHub/></div></MoonwitnessShell>
}
