import type { Metadata } from 'next'
import { RareteeNav } from '@/components/raretee/nav'
import { RareteeHero } from '@/components/raretee/hero'
import { RareteeProductGrid } from '@/components/raretee/product-grid'
import { RareteeAbout } from '@/components/raretee/about'

export const metadata: Metadata = {
  title: 'Raretee — Drop 001',
  description: 'Limited-run t-shirts. Rebellious by design.',
}

export default function RareteePage() {
  return (
    <>
      <a
        href="#drops"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase focus:font-sans focus:font-bold"
      >
        Skip to content
      </a>
      <RareteeNav />
      <main>
        <RareteeHero />
        <RareteeProductGrid />
        <RareteeAbout />
      </main>
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs tracking-widest uppercase text-muted-foreground font-sans">
          <span className="font-heading text-base tracking-widest text-foreground">
            Raretee
          </span>
          <span>Drop 001 — No restock</span>
        </div>
      </footer>
    </>
  )
}
