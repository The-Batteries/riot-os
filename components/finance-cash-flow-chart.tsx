'use client'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'

const chartData = [
  { month: 'Jun', inflow: 3120, outflow: 2710 },
  { month: 'Jul', inflow: 2840, outflow: 2580 },
  { month: 'Aug', inflow: 3560, outflow: 2940 },
  { month: 'Sep', inflow: 3290, outflow: 3020 },
  { month: 'Oct', inflow: 3820, outflow: 3150 },
  { month: 'Nov', inflow: 4010, outflow: 3380 },
]

const chartConfig = {
  inflow: { label: 'Cash in', color: 'var(--chart-1)' },
  outflow: { label: 'Cash out', color: 'var(--chart-2)' },
} satisfies ChartConfig

export function FinanceCashFlowChart() {
  return <ChartContainer config={chartConfig} className="finance-cash-chart">
    <AreaChart accessibilityLayer data={chartData} margin={{ left: 2, right: 8, top: 8, bottom: 0 }}>
      <CartesianGrid vertical={false} strokeDasharray="3 5" stroke="rgba(245,240,229,.12)"/>
      <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={10}/>
      <YAxis axisLine={false} tickLine={false} width={42} tickFormatter={(value: number) => `${(value / 1000).toFixed(1)}B`}/>
      <ChartTooltip content={<ChartTooltipContent labelFormatter={(label) => `${label} 2026`} formatter={(value, name) => <span className="finance-chart-tooltip"><span>{name}</span><b>Rp {Number(value).toLocaleString('id-ID')} jt</b></span>}/>} />
      <Area type="monotone" dataKey="inflow" stroke="var(--color-inflow)" fill="var(--color-inflow)" fillOpacity={0.14} strokeWidth={2} activeDot={{ r: 4 }}/>
      <Area type="monotone" dataKey="outflow" stroke="var(--color-outflow)" fill="var(--color-outflow)" fillOpacity={0.08} strokeWidth={2} activeDot={{ r: 4 }}/>
    </AreaChart>
  </ChartContainer>
}
