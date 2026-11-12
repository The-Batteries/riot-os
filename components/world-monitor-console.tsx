'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, CloudLightning, Flame, Globe2, Radio, ShieldAlert, Waves } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { WorldMap } from '@/components/world-map'

type SignalCategory = 'conflict' | 'weather' | 'trend' | 'security'
type Filter = 'all' | SignalCategory

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All signals' },
  { key: 'trend', label: 'Trends & viral' },
  { key: 'conflict', label: 'Conflict watch' },
  { key: 'weather', label: 'Weather & hazards' },
  { key: 'security', label: 'Security & trade' },
]

const signals: { category: SignalCategory; region: string; title: string; detail: string; time: string; level: string }[] = [
  { category: 'weather', region: 'South Pacific', title: 'Cyclone watch', detail: 'Coastal preparedness signal · sample', time: '08:42 UTC', level: 'WATCH' },
  { category: 'conflict', region: 'Eastern Europe', title: 'Conflict monitor', detail: 'Regional security signal · sample', time: '08:19 UTC', level: 'ELEVATED' },
  { category: 'security', region: 'Red Sea', title: 'Maritime disruption', detail: 'Trade-route signal · sample', time: '07:56 UTC', level: 'WATCH' },
  { category: 'trend', region: 'Global', title: 'Grid resilience', detail: 'Conversation velocity rising · sample', time: '07:31 UTC', level: 'RISING' },
  { category: 'weather', region: 'Central America', title: 'Heat advisory', detail: 'Extreme-temperature signal · sample', time: '06:58 UTC', level: 'WATCH' },
  { category: 'trend', region: 'East Asia', title: 'Clean-energy storage', detail: 'Cross-market topic pickup · sample', time: '06:24 UTC', level: 'RISING' },
]

const trendTopics = [
  { label: 'Grid resilience', region: 'GLOBAL', growth: '+84%', category: 'CLIMATE' },
  { label: 'Shipping detours', region: 'RED SEA', growth: '+62%', category: 'TRADE' },
  { label: 'Extreme heat', region: 'MULTI-REGION', growth: '+51%', category: 'WEATHER' },
  { label: 'Energy storage', region: 'EAST ASIA', growth: '+38%', category: 'TECH' },
]

const trendHistory = [
  { time: '00:00', buzz: 22, risk: 35 },
  { time: '02:00', buzz: 29, risk: 32 },
  { time: '04:00', buzz: 25, risk: 40 },
  { time: '06:00', buzz: 43, risk: 37 },
  { time: '08:00', buzz: 39, risk: 46 },
  { time: '10:00', buzz: 58, risk: 42 },
  { time: '12:00', buzz: 54, risk: 49 },
  { time: '14:00', buzz: 73, risk: 45 },
]

const chartConfig = {
  buzz: { label: 'Topic velocity', color: 'var(--chart-1)' },
  risk: { label: 'Risk index', color: 'var(--chart-2)' },
}

const categoryIcon = {
  conflict: ShieldAlert,
  weather: CloudLightning,
  trend: Flame,
  security: Waves,
}

export function WorldMonitorConsole() {
  const [selected, setSelected] = useState<Filter>('all')
  const visibleSignals = signals.filter((signal) => selected === 'all' || signal.category === selected)

  return (
    <div className="world-monitor">
      <header className="world-monitor-heading">
        <div>
          <span className="world-monitor-kicker"><i /> R!OT INTELLIGENCE / GLOBAL DESK</span>
          <h1>WORLD <em>MONITOR</em></h1>
          <p>One dashboard for the signals moving the world: trends, instability, weather, and more.</p>
        </div>
        <div className="world-monitor-demo"><span>DEMO SNAPSHOT</span><b>Sample data · not live</b><small>Source feeds not connected</small></div>
      </header>

      <section className="world-monitor-stats" aria-label="Sample global indicators">
        <article className="world-stat-card"><div><span>GLOBAL SIGNALS</span><Radio aria-hidden="true" /></div><strong>126</strong><small><ArrowUpRight aria-hidden="true" /> 18% vs. prior sample</small></article>
        <article className="world-stat-card"><div><span>WATCH REGIONS</span><Globe2 aria-hidden="true" /></div><strong>08</strong><small>Across 5 broad categories</small></article>
        <article className="world-stat-card"><div><span>WEATHER FLAGS</span><CloudLightning aria-hidden="true" /></div><strong>05</strong><small>Preparedness signals</small></article>
        <article className="world-stat-card"><div><span>TREND VELOCITY</span><Flame aria-hidden="true" /></div><strong>+34%</strong><small><ArrowUpRight aria-hidden="true" /> Conversation index</small></article>
      </section>

      <section className="world-monitor-map-layout" aria-label="Global map and regional watch">
        <article className="world-panel world-map-panel">
          <div className="world-panel-heading"><div><span className="world-panel-index">01 / GLOBAL VIEW</span><h2>Signals, in context</h2></div><span className="world-demo-tag">SAMPLE</span></div>
          <WorldMap />
          <div className="world-map-legend" aria-label="Map categories">
            <span><i className="legend-conflict" /> Conflict</span><span><i className="legend-weather" /> Weather</span><span><i className="legend-security" /> Security</span><span><i className="legend-trend" /> Trend</span>
          </div>
        </article>
        <article className="world-panel world-regions-panel">
          <div className="world-panel-heading"><div><span className="world-panel-index">02 / REGIONAL WATCH</span><h2>Areas to watch</h2></div><span className="world-watch-count">04</span></div>
          <div className="world-region-list">
            <div className="world-region-row"><span className="world-region-mark mark-red"><ShieldAlert aria-hidden="true" /></span><div><b>Eastern Europe</b><small>Security conditions · sample</small></div><span className="world-level level-high">ELEVATED</span></div>
            <div className="world-region-row"><span className="world-region-mark mark-yellow"><Waves aria-hidden="true" /></span><div><b>Red Sea corridor</b><small>Trade continuity · sample</small></div><span className="world-level level-watch">WATCH</span></div>
            <div className="world-region-row"><span className="world-region-mark mark-blue"><CloudLightning aria-hidden="true" /></span><div><b>South Pacific</b><small>Severe weather · sample</small></div><span className="world-level level-watch">WATCH</span></div>
            <div className="world-region-row"><span className="world-region-mark mark-purple"><Flame aria-hidden="true" /></span><div><b>East Asia</b><small>Topic acceleration · sample</small></div><span className="world-level level-rising">RISING</span></div>
          </div>
          <div className="world-caveat"><ShieldAlert aria-hidden="true" /><p>Signals are illustrative only. Verify against trusted, current sources before acting.</p></div>
        </article>
      </section>

      <section className="world-monitor-lower-grid">
        <article className="world-panel world-trend-panel">
          <div className="world-panel-heading"><div><span className="world-panel-index">03 / TREND PULSE</span><h2>What&apos;s picking up</h2></div><span className="world-demo-tag">SAMPLE INDEX</span></div>
          <div className="world-chart-wrap">
            <ChartContainer config={chartConfig} className="world-trend-chart">
              <LineChart data={trendHistory} margin={{ top: 10, right: 8, left: -22, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 5" stroke="rgba(245,240,229,.13)" />
                <XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fill: '#aaa59b', fontSize: 10 }} tickMargin={9} />
                <YAxis domain={[0, 100]} tickLine={false} axisLine={false} tick={{ fill: '#aaa59b', fontSize: 10 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="buzz" stroke="var(--color-buzz)" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="risk" stroke="var(--color-risk)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ChartContainer>
          </div>
          <div className="world-chart-legend"><span><i className="legend-trend" /> Topic velocity</span><span><i className="legend-conflict" /> Sample risk index</span><small>Illustrative 14-hour window</small></div>
          <div className="world-topic-list" aria-label="Rising sample topics">
            {trendTopics.map((topic, index) => <div className="world-topic-row" key={topic.label}><span className="world-topic-rank">0{index + 1}</span><div><b>{topic.label}</b><small>{topic.region} · {topic.category}</small></div><strong>{topic.growth}</strong></div>)}
          </div>
        </article>

        <article className="world-panel world-feed-panel">
          <div className="world-panel-heading"><div><span className="world-panel-index">04 / SIGNAL STREAM</span><h2>Latest signals</h2></div><span className="world-feed-total">{visibleSignals.length.toString().padStart(2, '0')} ITEMS</span></div>
          <div className="world-filter-list" role="group" aria-label="Filter signals by category">
            {filters.map((filter) => <button key={filter.key} type="button" className={selected === filter.key ? 'active' : ''} aria-pressed={selected === filter.key} onClick={() => setSelected(filter.key)}>{filter.label}</button>)}
          </div>
          <div className="world-signal-list" aria-live="polite">
            {visibleSignals.map((signal) => {
              const Icon = categoryIcon[signal.category]
              return <article className="world-signal-row" key={`${signal.region}-${signal.title}`}><span className={`world-signal-icon category-${signal.category}`}><Icon aria-hidden="true" /></span><div className="world-signal-copy"><div><span>{signal.region}</span><time>{signal.time}</time></div><b>{signal.title}</b><small>{signal.detail}</small></div><span className={`world-level level-${signal.level.toLowerCase()}`}>{signal.level}</span></article>
            })}
          </div>
          <footer className="world-feed-footer"><span><i /> DEMO FEED</span><span><ArrowDownRight aria-hidden="true" /> No external sources connected</span></footer>
        </article>
      </section>

      <p className="world-monitor-footnote">All values, locations, and topics shown here are illustrative sample data—not live reporting, forecasts, or a verified account of current events.</p>
    </div>
  )
}
