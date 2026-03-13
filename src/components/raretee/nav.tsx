export function RareteeNav() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <span className="font-heading text-2xl tracking-widest text-foreground uppercase">
        Raretee
      </span>
      <div className="flex items-center gap-8 text-xs tracking-widest uppercase text-muted-foreground">
        <a href="#drops" className="cursor-pointer hover:text-primary active:text-primary/70 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">Drops</a>
        <a href="#about" className="cursor-pointer hover:text-primary active:text-primary/70 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">About</a>
        <a
          href="#drops"
          className="cursor-pointer border border-primary text-primary px-4 py-1.5 text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground active:bg-primary/80 active:text-primary-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        >
          Shop
        </a>
      </div>
    </nav>
  )
}
