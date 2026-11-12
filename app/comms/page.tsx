import type { Metadata } from 'next'
import { CommsHub } from '@/components/comms-hub'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export const metadata: Metadata = {
  title: 'Comms / Radio — MOONWITNESS R!OT OS',
  description: 'A mock communications console for radio, team chat, webhooks, notifications, and pub/sub events.',
}

export default function CommsPage() {
  return <MoonwitnessShell active="Comms / Radio"><div className="mw-page-content"><CommsHub /></div></MoonwitnessShell>
}
