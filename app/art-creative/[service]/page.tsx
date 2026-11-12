import { notFound } from 'next/navigation'
import { CreativeConsole } from '@/components/creative-console'
import { creativeLinks, isCreativeServiceKey } from '@/components/creative-menu'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default async function CreativeServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  if (!isCreativeServiceKey(service)) notFound()
  const label = creativeLinks.find((item) => item.key === service)?.label ?? 'Creative Studio'
  return <MoonwitnessShell active={`Art & Creative / ${label}`}><div className="mw-page-content"><CreativeConsole service={service}/></div></MoonwitnessShell>
}
