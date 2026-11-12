import type { Metadata } from 'next'
import { MoonwitnessShell } from '@/components/moonwitness-shell'
import { WorkforceOperationsHub } from '@/components/workforce-operations-hub'

export const metadata: Metadata = {
  title: 'Work / Office / HRD — MOONWITNESS R!OT OS',
  description: 'A privacy-first workforce prototype for employee directory, attendance overview, and HRD coordination.',
}

export default function WorkOfficeHrdPage() {
  return <MoonwitnessShell active="Work / Office / HRD"><div className="mw-page-content"><WorkforceOperationsHub /></div></MoonwitnessShell>
}
