import { notFound } from 'next/navigation'
import { cloudServiceLinks, isCloudServiceKey } from '@/components/cloud-service-menu'
import { CloudServicesConsole } from '@/components/cloud-services-console'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default async function CloudServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  if (!isCloudServiceKey(service)) notFound()

  const label = cloudServiceLinks.find((item) => item.key === service)?.label ?? 'Cloud'
  const active = `Cloud / Infra / ${label}`

  return (
    <MoonwitnessShell active={active}>
      <div className="mw-page-content">
        <CloudServicesConsole service={service} />
      </div>
    </MoonwitnessShell>
  )
}
