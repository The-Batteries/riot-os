'use client'

import { useState } from 'react'
import { Bell, Check, Circle, Radio, Send, Webhook, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

type MockEvent = { id: number; topic: string; title: string; time: string; kind: 'WEBHOOK' | 'PUB/SUB' }

const initialEvents: MockEvent[] = [
  { id: 1, topic: 'crew.dispatch', title: 'Sample dispatch published', time: '09:41:08', kind: 'PUB/SUB' },
  { id: 2, topic: 'hooks.alerts', title: 'Incoming webhook accepted', time: '09:40:52', kind: 'WEBHOOK' },
  { id: 3, topic: 'radio.channel', title: 'Room status changed', time: '09:39:14', kind: 'PUB/SUB' },
]

const topics = ['crew.dispatch', 'radio.channel', 'alerts.weather']
const hookRoutes = [
  { id: 'ops', path: '/api/hooks/ops', name: 'Ops alert relay', events: 'ops.alert · ops.status' },
  { id: 'radio', path: '/api/hooks/radio', name: 'Radio bridge', events: 'radio.join · radio.leave' },
]

export function CommsOperationsPanel() {
  const [events, setEvents] = useState(initialEvents)
  const [enabledHooks, setEnabledHooks] = useState(['ops', 'radio'])
  const [subscribed, setSubscribed] = useState(['crew.dispatch', 'radio.channel'])
  const [unread, setUnread] = useState(true)

  function addEvent(kind: MockEvent['kind'], topic: string, title: string) {
    setEvents((current) => [{ id: Date.now(), kind, topic, title, time: 'NOW' }, ...current].slice(0, 5))
  }

  function toggleHook(id: string) {
    setEnabledHooks((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  function toggleTopic(topic: string) {
    setSubscribed((current) => current.includes(topic) ? current.filter((item) => item !== topic) : [...current, topic])
  }

  return (
    <aside className="comms-ops-column" aria-label="Notifications and event operations">
      <section className="comms-panel comms-notifications-panel" aria-labelledby="comms-notifications-title">
        <header className="comms-panel-heading">
          <div><span className="comms-index">03 / NOTIFICATIONS</span><h2 id="comms-notifications-title">Signal inbox</h2></div>
          {unread && <span className="comms-unread-count" aria-label="2 unread notifications">02</span>}
        </header>
        <div className="comms-notification-list" aria-live="polite">
          <article className={`comms-notification ${unread ? 'unread' : ''}`}><span className="comms-notification-icon"><Radio aria-hidden="true" /></span><div><b>Radio room opened</b><small>Dispatch 01 · 2 min ago</small></div><i aria-hidden="true" /></article>
          <article className={`comms-notification ${unread ? 'unread' : ''}`}><span className="comms-notification-icon webhook"><Webhook aria-hidden="true" /></span><div><b>Webhook test received</b><small>Ops alert relay · 6 min ago</small></div><i aria-hidden="true" /></article>
        </div>
        <Button type="button" variant="ghost" size="xs" className="comms-mark-read" onClick={() => setUnread(false)} disabled={!unread}><Check data-icon="inline-start" /> {unread ? 'Mark all read' : 'All caught up'}</Button>
      </section>

      <section className="comms-panel comms-webhooks-panel" aria-labelledby="comms-webhooks-title">
        <header className="comms-panel-heading">
          <div><span className="comms-index">04 / WEBHOOKS</span><h2 id="comms-webhooks-title">Inbound routes</h2></div>
          <span className="comms-mock-tag">MOCK</span>
        </header>
        <div className="comms-hook-list">
          {hookRoutes.map((hook) => {
            const enabled = enabledHooks.includes(hook.id)
            return <article className="comms-hook-row" key={hook.id}><div className="comms-hook-icon"><Webhook aria-hidden="true" /></div><div className="comms-hook-copy"><b>{hook.name}</b><code>POST {hook.path}</code><small>{hook.events}</small></div><button type="button" className={`comms-mini-toggle ${enabled ? 'on' : ''}`} aria-pressed={enabled} aria-label={`${enabled ? 'Disable' : 'Enable'} ${hook.name}`} onClick={() => toggleHook(hook.id)}><span /></button></article>
          })}
        </div>
        <Button type="button" size="xs" variant="outline" className="comms-replay-button" onClick={() => addEvent('WEBHOOK', 'hooks.alerts', 'Sample webhook replay received')}><Webhook data-icon="inline-start" /> Replay sample event</Button>
      </section>

      <section className="comms-panel comms-pubsub-panel" aria-labelledby="comms-pubsub-title">
        <header className="comms-panel-heading">
          <div><span className="comms-index">05 / PUB-SUB</span><h2 id="comms-pubsub-title">Topics & events</h2></div>
          <span className="comms-topic-count">{subscribed.length} SUBSCRIBED</span>
        </header>
        <div className="comms-topic-list" role="group" aria-label="Sample pub-sub topics">
          {topics.map((topic) => {
            const isSubscribed = subscribed.includes(topic)
            return <button type="button" className={`comms-topic-chip ${isSubscribed ? 'subscribed' : ''}`} key={topic} aria-pressed={isSubscribed} onClick={() => toggleTopic(topic)}><Circle aria-hidden="true" />{topic}<span>{isSubscribed ? 'ON' : 'OFF'}</span></button>
          })}
        </div>
        <Button type="button" size="xs" className="comms-publish-button" onClick={() => addEvent('PUB/SUB', subscribed[0] ?? 'crew.dispatch', 'Sample event published')}><Send data-icon="inline-start" /> Publish test event</Button>
        <div className="comms-event-stream" aria-live="polite" aria-label="Sample event stream">
          {events.map((event) => <div className="comms-event-row" key={event.id}><span className={`comms-event-kind ${event.kind === 'WEBHOOK' ? 'hook' : ''}`}>{event.kind === 'WEBHOOK' ? <Webhook aria-hidden="true" /> : <Zap aria-hidden="true" />}</span><div><small>{event.topic} <time>{event.time}</time></small><b>{event.title}</b></div></div>)}
        </div>
      </section>
    </aside>
  )
}
