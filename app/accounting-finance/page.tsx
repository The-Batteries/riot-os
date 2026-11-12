import { AccountingFinanceConsole } from '@/components/accounting-finance-console'
import { MoonwitnessShell } from '@/components/moonwitness-shell'

export default function AccountingFinancePage() {
  return <MoonwitnessShell active="Accounting & Finance"><div className="mw-page-content"><AccountingFinanceConsole service="overview"/></div></MoonwitnessShell>
}
