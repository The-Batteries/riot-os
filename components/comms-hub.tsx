'use client'

import { Activity, Bell, Radio, RadioTower, Users, Webhook } from 'lucide-react'
import { CommsChatPanel } from '@/components/comms-chat-panel'
import { CommsOperationsPanel } from '@/components/comms-operations-panel'
import { CommsRadioPanel } from '@/components/comms-radio-panel'

export function CommsHub() {
  return (
    <div className="comms-hub">
      <header className="comms-page-heading">
        <div>
          <span className="comms-kicker"><i /> R!OT OPS / SIGNAL ROOM</span>
          <h1>COMMS <em>WITHOUT THE LAG</em></h1>
          <p>Radio, crew chat, webhooks, notifications and pub/sub — one signal desk.</p>
        </div>
        <div className="comms-demo-banner"><span>UI PROTOTYPE</span><b>SIMULATED ACTIVITY</b><small>No network or audio connection</small></div>
      </header>

      <section className="comms-stat-grid" aria-label="Mock communications summary">
        <article className="comms-stat-card"><div><span>CREW ONLINE</span><Users aria-hidden="true" /></div><strong>08</strong><small><i /> Sample presence only</small></article>
        <article className="comms-stat-card"><div><span>RADIO ROOMS</span><Radio aria-hidden="true" /></div><strong>03</strong><small>PTT interface preview</small></article>
        <article className="comms-stat-card"><div><span>HOOK ROUTES</span><Webhook aria-hidden="true" /></div><strong>02</strong><small>Example endpoint cards</small></article>
        <article className="comms-stat-card"><div><span>EVENTS / MIN</span><Activity aria-hidden="true" /></div><strong>24</strong><small><Bell aria-hidden="true" /> Example stream count</small></article>
      </section>

      <CommsRadioPanel />
      <div className="comms-workspace-grid">
        <CommsChatPanel />
        <CommsOperationsPanel />
      </div>
      <footer className="comms-page-foot"><RadioTower aria-hidden="true" /><span>All controls and activity are mock data held in page state; no microphone, server, webhook or subscription is connected.</span></footer>
    </div>
  )
}
