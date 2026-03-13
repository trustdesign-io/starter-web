export function RareteeAbout() {
  return (
    <section id="about" className="px-6 py-24 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6 font-sans">
              The manifesto
            </p>
            <h2
              className="font-heading text-[clamp(3rem,8vw,6rem)] leading-none uppercase text-foreground"
            >
              Not a brand.
              <br />
              <span className="text-primary">A stance.</span>
            </h2>
          </div>

          {/* Right — copy */}
          <div className="flex flex-col gap-6 pt-2 lg:pt-16">
            <p className="text-sm text-foreground leading-relaxed font-sans">
              Raretee exists because most clothing is noise. Fast, forgettable,
              algorithmically optimised for the scroll. We make the opposite.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Each drop is a numbered edition. No restock. No second chances.
              When it&apos;s gone, it&apos;s gone — and that&apos;s the point.
              You either wore it while it mattered, or you didn&apos;t.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              The designs are confrontational by intent. Every piece is a
              rejection of the beige consensus. Wear it as a signal, not a
              status symbol.
            </p>

            {/* Stats row */}
            <div className="mt-4 grid grid-cols-3 gap-px bg-border">
              {[
                { value: '001', label: 'Drops' },
                { value: '6', label: 'Pieces' },
                { value: '0', label: 'Restocks' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-background p-6 flex flex-col gap-1">
                  <span className="font-heading text-4xl leading-none text-primary">
                    {value}
                  </span>
                  <span className="text-xs tracking-widest uppercase text-muted-foreground font-sans">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
