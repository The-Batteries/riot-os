'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Crown, Eye, EyeOff, Globe2, LockKeyhole, Mail } from 'lucide-react'

const loginArtwork = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XwpzOH9s36CYCIXGo1nOkBUJTgUcgb.png'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  return <main className="mw-login-page">
    <div className="mw-login-art" style={{ backgroundImage: `url('${loginArtwork}')` }} role="img" aria-label="Moonlit city illustration from the Moonwitness universe"><Link href="/" className="mw-login-wordmark"><Crown aria-hidden="true"/> MOON<span>WITNESS</span></Link><div className="mw-login-art-note">SAME MOON<br/>DIFFERENT PEOPLE<br/><b>FOLLOW THE SIGNAL</b></div></div>
    <section className="mw-login-side"><Link href="/" className="mw-login-back">← Back to Moonwitness</Link><div className="mw-login-card"><span className="mw-login-crown"><Crown aria-hidden="true"/></span><span className="mw-kicker"><i/> AUTHORIZED CREW ONLY</span><h1>ENTER THE<br/><em>SHADOW</em></h1><p className="mw-login-intro">Private command center for stories,<br/>research, posters, and publishing.</p><form onSubmit={event => event.preventDefault()}><label htmlFor="email">Email or username</label><div className="mw-login-input"><Mail/><input id="email" type="email" placeholder="crew@moonwitness.org" autoComplete="email"/></div><label htmlFor="password">Password</label><div className="mw-login-input"><LockKeyhole/><input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password"/><button type="button" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff/> : <Eye/>}</button></div><div className="mw-login-options"><label><input type="checkbox"/> Remember me</label><button type="button" className="mw-forgot-link">Forgot password?</button></div><button type="button" className="mw-login-submit" disabled>ENTER THE SHADOW <ArrowRight/></button></form><p className="mw-login-notice"><LockKeyhole/> Sign-in is a visual mockup. Authentication is not connected.</p><div className="mw-login-divider"><span/> <Crown aria-hidden="true"/> <span/></div><Link href="/" className="mw-login-footer"><Globe2/> Moonwitness <span>// Create · Curate · Publish</span></Link></div><footer>Privacy <span>Terms</span><span>Support</span></footer></section>
  </main>
}
