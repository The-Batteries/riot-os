import { Crown } from 'lucide-react'

const landingImage = '/images/moonwitness-pencil-sketch.png'

const storyCards = [
  { number: '01', title: 'A small town still looks up', place: 'Jakarta, ID', image: '/images/moonwitness-city-sketch.png' },
  { number: '02', title: 'Same moon, different dreams', place: 'Seoul, KR', image: '/images/moonwitness-portrait-sketch.png' },
  { number: '03', title: 'Far but under the same moon', place: 'Lisbon, PT', image: '/images/moonwitness-pencil-sketch.png' },
]

export default function LandingPage() {
  return (
    <main className="mw-landing">
      <header className="mw-public-nav">
        <a className="mw-wordmark" href="/" aria-label="Moonwitness home"><Crown aria-hidden="true"/> MOON<span>WITNESS</span></a>
        <nav aria-label="Main navigation"><a href="#stories">Stories</a><a href="/projects">Crew</a><a href="/mission-control">Signal</a><a href="#archive">Archive</a><a href="#about">About</a></nav>
        <a className="mw-nav-join" href="/login">Join the crew <span>→</span></a>
      </header>
      <section className="mw-landing-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(241,235,221,.96) 0%, rgba(241,235,221,.75) 43%, rgba(241,235,221,.08) 100%), url('${landingImage}')` }} aria-label="Moonwitness: Follow the Signal">
        <div className="mw-hero-copy"><span className="mw-kicker"><i/> REAL PEOPLE · UNFILTERED WORLDS</span><h1>MOON<span>WITNESS</span></h1><strong className="mw-yellow-swipe">FOLLOW THE SIGNAL</strong><p>Different people, same sky.<br/><em>Stories beyond borders.</em></p><div className="mw-hero-actions"><a className="mw-paint-button" href="#stories">Explore stories <span>→</span></a><a className="mw-video-link" href="#about"><span>▶</span> Watch manifesto <small>(1:20)</small></a></div></div>
        <div className="mw-hero-note">SAME MOON<br/>DIFFERENT PEOPLE<br/><b>✳</b></div>
        <div className="mw-hero-caption">A GLOBAL PLATFORM<br/>FOR REAL HUMAN STORIES.</div>
      </section>
      <section className="mw-story-strip" id="stories"><div className="mw-section-head"><div><span className="mw-index">01</span><h2>STORIES</h2><small>REAL PEOPLE. UNFILTERED WORLDS.</small></div><a href="/projects" aria-label="Explore all stories">→</a></div><div className="mw-story-cards">{storyCards.map(card => <a className="mw-story-card" href="/projects" key={card.number}><img src={card.image} alt={`${card.title} — pencil sketch`}/><span className="mw-card-number">{card.number} / FIELD NOTE</span><h3>{card.title}</h3><small>⌖ {card.place}</small></a>)}</div></section>
      <section className="mw-bottom-panels"><a className="mw-crew-tile" href="/projects"><span>02 / THE CREW</span><h2>PEOPLE<br/>MAKE THE SIGNAL.</h2><p>Different places. Same curiosity.</p><b>Meet the crew →</b></a><a className="mw-universe-tile" href="/mission-control"><span>03 / THE UNIVERSE</span><h2>ONE WORLD.<br/>MANY ORBITS.</h2><p>Stories, signals, worlds in motion.</p><b>Enter mission control →</b></a></section>
      <footer className="mw-public-footer" id="about"><span>© MOONWITNESS / CREATE · CURATE · PUBLISH</span><span>THE SKY BELONGS TO ALL OF US.</span><a href="/login">Crew access ↗</a></footer>
    </main>
  )
}
