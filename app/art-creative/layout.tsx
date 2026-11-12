import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Art & Creative Studio | R!OT OS',
  description: 'Campaign art, brand systems, creative briefs, production, review, and social content in the R!OT creative workspace.',
}

export default function ArtCreativeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
