'use client'

import { useState } from 'react'
import { AudioLines, Headphones, Mic, Pause, Play, Radio, RadioTower, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stations = [
  { name: 'Moon Signal', genre: 'AMBIENT / FIELD NOTES', frequency: '88.4 FM' },
  { name: 'Noise Floor', genre: 'ELECTRONIC / NIGHT SHIFT', frequency: '92.1 FM' },
  { name: 'Worldline Radio', genre: 'GLOBAL / OPEN DESK', frequency: '104.7 FM' },
]

const rooms = ['Dispatch 01', 'Night watch', 'Field ops']

export function CommsRadioPanel() {
  const [stationIndex, setStationIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [roomIndex, setRoomIndex] = useState(0)
  const [transmitting, setTransmitting] = useState(false)
  const station = stations[stationIndex]

  return (
    <section className="comms-panel comms-radio-panel" aria-labelledby="comms-radio-title">
      <header className="comms-panel-heading">
        <div><span className="comms-index">01 / RADIO DECK</span><h2 id="comms-radio-title">Tune in, speak up</h2></div>
        <span className="comms-mock-tag comms-demo-only">SIMULATED</span>
      </header>
      <div className="comms-radio-grid">
        <div className="comms-station-area">
          <div className="comms-section-label"><Radio aria-hidden="true" /> INTERNET RADIO <span>3 STATIONS</span></div>
          <div className="comms-station-list" role="group" aria-label="Sample radio stations">
            {stations.map((item, index) => <button key={item.name} type="button" className={`comms-station ${stationIndex === index ? 'selected' : ''}`} aria-pressed={stationIndex === index} onClick={() => { setStationIndex(index); setPlaying(false) }}><span className="comms-station-frequency">{item.frequency}</span><b>{item.name}</b><small>{item.genre}</small></button>)}
          </div>
          <div className={`comms-now-playing ${playing ? 'is-playing' : ''}`}>
            <span className="comms-now-icon"><AudioLines aria-hidden="true" /></span>
            <div><small>{playing ? 'PLAYING · SIMULATED' : 'READY TO TUNE'}</small><b>{station.name}</b></div>
            <Button type="button" size="icon" variant="outline" className="comms-icon-button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pause sample station' : 'Play sample station'} aria-pressed={playing}>{playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}</Button>
            <Volume2 aria-hidden="true" className="comms-volume-icon" />
          </div>
          <p className="comms-mock-note">Station controls are a visual prototype; no audio stream is connected.</p>
        </div>
        <div className="comms-ptt-area">
          <div className="comms-section-label"><RadioTower aria-hidden="true" /> PUSH-TO-TALK <span>VOICE ROOM</span></div>
          <div className="comms-room-select"><Headphones aria-hidden="true" /><span>{rooms[roomIndex]}</span><button type="button" onClick={() => setRoomIndex((index) => (index + 1) % rooms.length)} aria-label="Switch sample radio room">SWITCH</button></div>
          <div className={`comms-ptt-display ${transmitting ? 'transmitting' : ''}`} aria-live="polite"><span className="comms-ptt-ring"><Mic aria-hidden="true" /></span><div><b>{transmitting ? 'TRANSMITTING' : 'CHANNEL CLEAR'}</b><small>{transmitting ? 'SIMULATED PUSH-TO-TALK' : 'PRESS TO TEST THE UI'}</small></div></div>
          <Button type="button" className={`comms-ptt-button ${transmitting ? 'is-transmitting' : ''}`} aria-pressed={transmitting} onClick={() => setTransmitting((value) => !value)}><Mic data-icon="inline-start" />{transmitting ? 'Release channel' : 'Hold to talk'}</Button>
          <p className="comms-mock-note">Microphone access and voice transport are not enabled in this mockup.</p>
        </div>
      </div>
    </section>
  )
}
