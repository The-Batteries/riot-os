import { notFound } from 'next/navigation'
import { CustomerOpsConsole } from '@/components/customer-ops-console'
import { customerOpsLinks, isCustomerOpsServiceKey } from '@/components/customer-ops-menu'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default async function CustomerOpsServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  if (!isCustomerOpsServiceKey(service)) notFound()

  const label = customerOpsLinks.find((item) => item.key === service)?.label ?? 'Customer support'

  return (
    <MoonwitnessShell active={`Customer Ops / ${label}`}>
      <div className="mw-page-content">
        <CustomerOpsConsole service={service} />
      </div>
    </MoonwitnessShell>
  )
}
