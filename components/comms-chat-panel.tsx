'use client'

import { useState, type FormEvent } from 'react'
import { ArrowDown, Radio, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'
import { Message, MessageAvatar, MessageContent, MessageFooter, MessageHeader } from '@/components/ui/message'
import { MessageScroller, MessageScrollerButton, MessageScrollerContent, MessageScrollerItem, MessageScrollerProvider, MessageScrollerViewport } from '@/components/ui/message-scroller'

type ChatMessage = { id: number; name: string; initials: string; text: string; time: string; mine?: boolean }

const initialMessages: ChatMessage[] = [
  { id: 1, name: 'Mara Voss', initials: 'MV', text: 'North desk is green. Radio checks are coming through.', time: '09:38' },
  { id: 2, name: 'You', initials: 'MW', text: 'Copy. Pinning the dispatch topic to the board.', time: '09:39', mine: true },
  { id: 3, name: 'Jin Park', initials: 'JP', text: 'Webhook replay landed in the sample feed.', time: '09:41' },
]

export function CommsChatPanel() {
  const [messages, setMessages] = useState(initialMessages)
  const [draft, setDraft] = useState('')

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    setMessages((current) => [...current, { id: Date.now(), name: 'You', initials: 'MW', text, time: 'NOW', mine: true }])
    setDraft('')
  }

  return (
    <section className="comms-panel comms-chat-panel" aria-labelledby="comms-chat-title">
      <header className="comms-panel-heading">
        <div><span className="comms-index">02 / CREW CHAT</span><h2 id="comms-chat-title">Dispatch room</h2></div>
        <span className="comms-online-count"><i /> 04 HERE</span>
      </header>
      <div className="comms-chat-channel"><Radio aria-hidden="true" /><span># operations-desk</span><span className="comms-mock-tag">MOCK</span></div>
      <MessageScrollerProvider>
        <MessageScroller className="comms-message-scroller">
          <MessageScrollerViewport aria-label="Sample chat messages">
            <MessageScrollerContent className="comms-message-list">
              <MessageScrollerItem><Marker variant="separator" className="comms-chat-marker"><MarkerIcon><Radio /></MarkerIcon><MarkerContent>09:30 · simulated crew traffic</MarkerContent></Marker></MessageScrollerItem>
              {messages.map((message) => (
                <MessageScrollerItem key={message.id}>
                  <Message align={message.mine ? 'end' : 'start'} className="comms-message-row">
                    <MessageAvatar className="comms-message-avatar">{message.initials}</MessageAvatar>
                    <MessageContent className="comms-message-content">
                      <MessageHeader className="comms-message-header"><b>{message.name}</b><time>{message.time}</time></MessageHeader>
                      <Bubble align={message.mine ? 'end' : 'start'} variant={message.mine ? 'default' : 'secondary'} className="comms-bubble">
                        <BubbleContent className="comms-bubble-content">{message.text}</BubbleContent>
                      </Bubble>
                      {message.mine && <MessageFooter className="comms-message-receipt">SENT · MOCK</MessageFooter>}
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton direction="end" variant="outline" size="icon-sm" aria-label="Jump to latest message"><ArrowDown aria-hidden="true" /></MessageScrollerButton>
        </MessageScroller>
      </MessageScrollerProvider>
      <form className="comms-chat-compose" onSubmit={sendMessage}>
        <label className="sr-only" htmlFor="comms-message-draft">Write a message</label>
        <textarea id="comms-message-draft" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Send a sample dispatch…" rows={2} />
        <Button type="submit" size="sm" className="comms-send-button" aria-label="Send sample message"><Send data-icon="inline-start" /> Send</Button>
      </form>
      <p className="comms-mock-note">Messages are temporary UI state and disappear on refresh.</p>
    </section>
  )
}
