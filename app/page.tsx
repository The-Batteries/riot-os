import { ArrowDownRight, ArrowRight, Crown } from 'lucide-react'
import { RiotVectorField } from '@/components/moonwitness-shell'

const landingImage = '/images/riot-zine-hero.png'

const projectCards = [
  { number: '01', title: 'THE BATTERIES', place: 'SPRINT 04 · IN MOTION', image: '/images/riot-project-poster.png' },
  { number: '02', title: 'ZILL: PILOT DROP', place: 'DEADLINE FRIDAY · NEEDS A PUSH', image: '/images/riot-crew-xerox.png' },
  { number: '03', title: 'PENDETA-ONLINE', place: 'WORLD BUILDING · ON DECK', image: '/images/riot-zine-hero.png' },
]

export default function LandingPage() {
  return (
    <main className="mw-landing">
      <header className="mw-public-nav">
        <a className="mw-wordmark" href="/" aria-label="Moonwitness R!OT home"><Crown aria-hidden="true"/> MOON<span>WITNESS</span><small>R!OT OS</small></a>
        <nav aria-label="Main navigation"><a href="#projects">The projects</a><a href="/projects">The pit</a><a href="/mission-control">Task riot</a><a href="#manifesto">Manifesto</a></nav>
        <a className="mw-nav-join" href="/login">GET IN THE PIT <span>↗</span></a>
      </header>
      <section className="mw-landing-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.95) 0%, rgba(10,10,10,.82) 43%, rgba(10,10,10,.18) 100%), url('${landingImage}')` }} aria-label="Moonwitness R!OT: project management for people who hate project management"><RiotVectorField/>
        <div className="mw-hero-copy"><span className="mw-kicker"><i/> PROJECT MANAGEMENT FOR THE UNMANAGEABLE</span><h1>MAKE<br/><span>GOOD TROUBLE.</span></h1><strong className="mw-yellow-swipe">NO GANTT. NO GURU. JUST SHIPPED.</strong><p>Turn the 2 a.m. brain-splinter into a real thing.<br/><em>Dump it. Break it. Build it. Ship it.</em></p><div className="mw-hero-actions"><a className="mw-paint-button" href="/projects">START A PROJECT <ArrowRight aria-hidden="true"/></a><a className="mw-video-link" href="#manifesto"><ArrowDownRight aria-hidden="true"/> READ THE RIOT RULES</a></div></div>
        <div className="mw-hero-note">IDEAS GET LOUD<br/>DEADLINES GET REAL<br/><b>R!OT</b></div>
        <div className="mw-hero-caption">A LITTLE CHAOS.<br/>A LOT OF FOLLOW-THROUGH.</div>
      </section>
      <section className="mw-story-strip" id="projects"><div className="mw-section-head"><div><span className="mw-index">01 / THE WORK</span><h2>PROJECTS WITH TEETH.</h2><small>MESSY IDEAS. MOVING TARGETS. REAL FINISH LINES.</small></div><a href="/projects" aria-label="See all projects">↗</a></div><div className="mw-story-cards">{projectCards.map(card => <a className="mw-story-card" href="/projects" key={card.number}><img src={card.image} alt={`${card.title} punk-zine project artwork`}/><span className="mw-card-number">{card.number} / ACTIVE RIOT</span><h3>{card.title}</h3><small>{card.place}</small></a>)}</div></section>
      <section className="mw-bottom-panels" id="manifesto"><a className="mw-crew-tile" href="/projects"><span>02 / THE POSSE</span><h2>GOOD PEOPLE.<br/>BAD INFLUENCE.</h2><p>Bring the weirdos. Give them a lane.</p><b>FIND YOUR PEOPLE ↗</b></a><a className="mw-universe-tile" href="/mission-control"><span>03 / THE METHOD</span><h2>CHAOS IN.<br/>SHIPPED OUT.</h2><p>Tasks, blockers, deadlines. None of the beige.</p><b>OPEN THE RIOT BOARD ↗</b></a></section>
      <footer className="mw-public-footer" id="about"><span>© MOONWITNESS / R!OT OS · ANTI-MANAGEMENT MANAGEMENT</span><span>MAKE A MESS. MAKE A MOVE.</span><a href="/login">CREW LOGIN ↗</a></footer>
    </main>
  )
}
