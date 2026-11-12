import { CloudInfrastructure } from '@/components/cloud-infrastructure'
import { MoonwitnessShell, PageHero } from '@/components/moonwitness-shell'

export default function InfrastructurePage() {
  return (
    <MoonwitnessShell active="Cloud / Infra">
      <div className="mw-page-content">
        <PageHero
          title="CLOUD"
          accent="OPS"
          index="03"
          image="/images/riot-project-poster.png"
          description="Edge routes, app runtime, data rails, and asset storage. One field map for where the work lives—and what still needs a provider."
        />
        <CloudInfrastructure />
      </div>
    </MoonwitnessShell>
  )
}
