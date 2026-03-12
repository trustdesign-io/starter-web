import type { Metadata } from 'next'
import { Caveat, Quicksand } from 'next/font/google'
import './globals.css'

const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' })

export const metadata: Metadata = {
  title: 'App',
  description: 'Built with the Trustdesign starter',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caveat.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  )
}
