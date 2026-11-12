'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Crown, Eye, EyeOff, Globe2, LockKeyhole, Mail } from 'lucide-react'

const loginArtwork = '/images/riot-zine-hero.png'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  return <main className="mw-login-page">
    <div className="mw-login-art" style={{ backgroundImage: `url('${loginArtwork}')` }} role="img" aria-label="Photocopied punk-zine collage in the Moonwitness R!OT style"><Link href="/" className="mw-login-wordmark"><Crown aria-hidden="true"/> MOON<span>WITNESS</span></Link><div className="mw-login-art-note">GOOD IDEAS<br/>BAD INFLUENCE<br/><b>MAKE SOME NOISE</b></div></div>
    <section className="mw-login-side"><Link href="/" className="mw-login-back">← ESCAPE TO THE MANIFESTO</Link><div className="mw-login-card"><span className="mw-login-crown"><Crown aria-hidden="true"/></span><span className="mw-kicker"><i/> NO SUITS · NO SILOS · NO BAD VIBES</span><h1>BACK IN THE<br/><em>CHAOS.</em></h1><p className="mw-login-intro">Your projects are waiting.<br/>Your chaos has a place now.</p><form onSubmit={event => event.preventDefault()}><label htmlFor="email">CREW EMAIL / HANDLE</label><div className="mw-login-input"><Mail/><input id="email" type="email" placeholder="you@riot.club" autoComplete="email"/></div><label htmlFor="password">SECRET HANDSHAKE</label><div className="mw-login-input"><LockKeyhole/><input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password"/><button type="button" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff/> : <Eye/>}</button></div><div className="mw-login-options"><label><input type="checkbox"/> Remember me</label><button type="button" className="mw-forgot-link">Forgot password?</button></div><button type="button" className="mw-login-submit" disabled>LET ME IN <ArrowRight/></button></form><p className="mw-login-notice"><LockKeyhole/> This is a visual mockup. Sign-in is not connected. Yet.</p><div className="mw-login-divider"><span/> <Crown aria-hidden="true"/> <span/></div><Link href="/" className="mw-login-footer"><Globe2/> MOONWITNESS <span>// R!OT OS · MAKE A MESS</span></Link></div><footer>Privacy <span>Terms</span><span>Support</span></footer></section>
  </main>
}
