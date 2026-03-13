import { RareteeNav } from '@/components/raretee/nav'
import { RareteeHero } from '@/components/raretee/hero'
import { RareteeProductGrid } from '@/components/raretee/product-grid'
import { RareteeAbout } from '@/components/raretee/about'

export default function RareteePage() {
  return (
    <>
      <RareteeNav />
      <main>
        <RareteeHero />
        <RareteeProductGrid />
        <RareteeAbout />
      </main>
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs tracking-widest uppercase text-muted-foreground font-sans">
          <span style={{ fontFamily: 'var(--font-bebas-neue)' }} className="text-base tracking-widest text-foreground">
            Raretee
          </span>
          <span>Drop 001 — No restock</span>
        </div>
      </footer>
    </>
  )
}
