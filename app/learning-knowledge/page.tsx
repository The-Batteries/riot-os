import type { Metadata } from 'next'
import { LearningKnowledgeHub } from '@/components/learning-knowledge-hub'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export const metadata: Metadata = {
  title: 'Learning & Knowledge — MOONWITNESS R!OT OS',
  description: 'A prototype dashboard for education, research, open knowledge, information literacy, and lifelong learning.',
}

export default function LearningKnowledgePage() {
  return <MoonwitnessShell active="Learning / Knowledge"><div className="mw-page-content"><LearningKnowledgeHub /></div></MoonwitnessShell>
}
