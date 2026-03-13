export function RareteeNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <span
        className="text-2xl tracking-widest text-foreground uppercase"
        style={{ fontFamily: 'var(--font-bebas-neue)' }}
      >
        Raretee
      </span>
      <div className="flex items-center gap-8 text-xs tracking-widest uppercase text-muted-foreground">
        <a href="#drops" className="hover:text-primary transition-colors">Drops</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a
          href="#drops"
          className="border border-primary text-primary px-4 py-1.5 text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Shop
        </a>
      </div>
    </nav>
  )
}
