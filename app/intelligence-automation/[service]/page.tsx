import { notFound } from 'next/navigation'
import { IntelligenceConsole } from '@/components/intelligence-console'
import { intelligenceLinks, isIntelligenceServiceKey } from '@/components/intelligence-menu'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default async function IntelligenceServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  if (!isIntelligenceServiceKey(service)) notFound()
  const label = intelligenceLinks.find((item) => item.key === service)?.label ?? 'AI Systems'
  return <MoonwitnessShell active={`Intelligence & Automation / ${label}`}><div className="mw-page-content"><IntelligenceConsole service={service}/></div></MoonwitnessShell>
}
