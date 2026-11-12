import { notFound } from 'next/navigation'
import { IspTelcoConsole } from '@/components/isp-telco-console'
import { ispTelcoLinks, isIspTelcoServiceKey } from '@/components/isp-telco-menu'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default async function IspTelcoServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  if (!isIspTelcoServiceKey(service)) notFound()

  const label = ispTelcoLinks.find((item) => item.key === service)?.label ?? 'Network'

  return (
    <MoonwitnessShell active={`ISP / Telco / ${label}`}>
      <div className="mw-page-content">
        <IspTelcoConsole service={service} />
      </div>
    </MoonwitnessShell>
  )
}
