import { type Product, PRODUCTS } from '@/lib/raretee/products'
export type { Product }
export { PRODUCTS }

function ProductCard({ product }: { product: Product }) {
  const isSold = product.remaining === 0
  const headingId = `product-name-${product.id}`

  return (
    <article aria-labelledby={headingId} className="group flex flex-col border border-border hover:border-primary transition-colors">
      {/* Image placeholder */}
      <div className="aspect-square bg-secondary flex items-center justify-center relative overflow-hidden">
        <span
          className="font-heading text-5xl text-muted-foreground/20 select-none"
          aria-hidden
        >
          {product.name[0]}
        </span>
        {isSold && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
              Sold out
            </span>
          </div>
        )}
        {!isSold && product.remaining <= 3 && (
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
          <h3 id={headingId} className="font-heading text-2xl leading-none uppercase text-foreground">
            {product.name}
          </h3>
          <span className="text-sm text-foreground font-sans font-bold tabular-nums">
            £{product.price}
          </span>
        </div>
        <p className="text-xs text-muted-foreground tracking-widest uppercase font-sans">
          {product.edition}
        </p>
        {/* TODO: wire onClick to cart when commerce integration is added */}
        <button
          type="button"
          disabled={isSold}
          aria-label={isSold ? `${product.name} — sold out` : `Add ${product.name} to cart`}
          className="mt-2 w-full bg-primary text-primary-foreground text-xs tracking-widest uppercase py-2.5 font-sans font-bold hover:bg-primary/90 disabled:bg-border disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        >
          {isSold ? 'Sold out' : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}

export function RareteeProductGrid() {
  const totalRemaining = PRODUCTS.reduce((sum, p) => sum + p.remaining, 0)

  return (
    <section id="drops" className="px-6 py-24 border-b border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-heading text-6xl uppercase text-foreground">
            Drop 001
          </h2>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            {PRODUCTS.length} pieces — {totalRemaining} remaining
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
