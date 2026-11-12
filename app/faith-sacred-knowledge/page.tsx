import type { Metadata } from 'next'
import { FaithSacredKnowledgeHub } from '@/components/faith-sacred-knowledge-hub'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export const metadata: Metadata = {
  title: 'Faith & Sacred Knowledge — MOONWITNESS R!OT OS',
  description: 'A neutral prototype for faith traditions, sacred corpora, prophetic histories, theology, heritage, and charitable service.',
}

export default function FaithSacredKnowledgePage() {
  return <MoonwitnessShell active="Faith / Sacred Knowledge"><div className="mw-page-content"><FaithSacredKnowledgeHub /></div></MoonwitnessShell>
}
