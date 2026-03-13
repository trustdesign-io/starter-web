interface Product {
  id: string
  name: string
  edition: string
  price: number
  remaining: number
  sold: boolean
}

const PRODUCTS: Product[] = [
  { id: '001-A', name: 'DISSENT', edition: 'Drop 001 — A', price: 65, remaining: 4, sold: false },
  { id: '001-B', name: 'STATIC', edition: 'Drop 001 — B', price: 65, remaining: 0, sold: true },
  { id: '001-C', name: 'GHOST SIGNAL', edition: 'Drop 001 — C', price: 75, remaining: 2, sold: false },
  { id: '001-D', name: 'NO PLATFORM', edition: 'Drop 001 — D', price: 65, remaining: 8, sold: false },
  { id: '001-E', name: 'REWIRE', edition: 'Drop 001 — E', price: 70, remaining: 0, sold: true },
  { id: '001-F', name: 'BLACKOUT', edition: 'Drop 001 — F', price: 75, remaining: 1, sold: false },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="group flex flex-col border border-border hover:border-primary transition-colors"
      aria-label={product.name}
    >
      {/* Image placeholder */}
      <div className="aspect-square bg-secondary flex items-center justify-center relative overflow-hidden">
        <span
          className="text-5xl text-muted-foreground/20 select-none"
          style={{ fontFamily: 'var(--font-bebas-neue)' }}
          aria-hidden
        >
          {product.name[0]}
        </span>
        {product.sold && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
              Sold out
            </span>
          </div>
        )}
        {!product.sold && product.remaining <= 3 && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground text-xs tracking-widest uppercase px-2 py-0.5 font-sans font-bold">
              Last {product.remaining}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 border-t border-border">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-2xl leading-none uppercase text-foreground"
            style={{ fontFamily: 'var(--font-bebas-neue)' }}
          >
            {product.name}
          </h3>
          <span className="text-sm text-foreground font-sans font-bold tabular-nums">
            £{product.price}
          </span>
        </div>
        <p className="text-xs text-muted-foreground tracking-widest uppercase font-sans">
          {product.edition}
        </p>
        <button
          disabled={product.sold}
          className="mt-2 w-full bg-primary text-primary-foreground text-xs tracking-widest uppercase py-2.5 font-sans font-bold hover:bg-primary/90 disabled:bg-border disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
        >
          {product.sold ? 'Sold out' : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}

export function RareteeProductGrid() {
  return (
    <section id="drops" className="px-6 py-24 border-b border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-12">
          <h2
            className="text-6xl uppercase text-foreground"
            style={{ fontFamily: 'var(--font-bebas-neue)' }}
          >
            Drop 001
          </h2>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            6 pieces — 2 remaining
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-background">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
