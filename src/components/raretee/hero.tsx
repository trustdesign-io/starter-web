export function RareteeHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 border-b border-border">
      <div className="max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8 font-sans">
          Limited run — drop 001
        </p>

        {/* Headline */}
        <h1
          className="font-heading text-[clamp(5rem,18vw,16rem)] leading-none uppercase text-foreground"
        >
          Wear{' '}
          <span className="text-primary">
            your
          </span>
          <br />
          stance.
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-sm text-muted-foreground max-w-md leading-relaxed font-sans">
          No algorithms. No fast fashion. No apologies.
          <br />
          Each drop is numbered, limited, and gone.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-12">
          <a
            href="#drops"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-sans font-bold hover:bg-primary/90 transition-colors"
          >
            View drop 001
            <span aria-hidden>→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            What is Raretee?
          </a>
        </div>

        {/* Ticker */}
        <div className="mt-20 pt-8 border-t border-border flex items-center gap-12 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          <span>12 pieces remaining</span>
          <span className="text-muted-foreground/40" aria-hidden>—</span>
          <span>Ships in 5–7 days</span>
          <span className="text-muted-foreground/40" aria-hidden>—</span>
          <span>No restock</span>
        </div>
      </div>
    </section>
  )
}
