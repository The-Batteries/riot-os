import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accounting & Finance | R!OT OS',
  description: 'Cash flow, accounts payable and receivable, expenses, budgets, reconciliation, financial reports, and forecasting.',
}

export default function AccountingFinanceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
