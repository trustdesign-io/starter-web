export interface Product {
  id: string
  name: string
  edition: string
  price: number
  remaining: number
}

export const PRODUCTS: Product[] = [
  { id: '001-A', name: 'DISSENT', edition: 'Drop 001 — A', price: 65, remaining: 4 },
  { id: '001-B', name: 'STATIC', edition: 'Drop 001 — B', price: 65, remaining: 0 },
  { id: '001-C', name: 'GHOST SIGNAL', edition: 'Drop 001 — C', price: 75, remaining: 2 },
  { id: '001-D', name: 'NO PLATFORM', edition: 'Drop 001 — D', price: 65, remaining: 8 },
  { id: '001-E', name: 'REWIRE', edition: 'Drop 001 — E', price: 70, remaining: 0 },
  { id: '001-F', name: 'BLACKOUT', edition: 'Drop 001 — F', price: 75, remaining: 1 },
]

export const totalRemaining = PRODUCTS.reduce((sum, p) => sum + p.remaining, 0)
