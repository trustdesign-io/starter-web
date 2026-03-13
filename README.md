# starter-web

A Next.js 15 starter template with Supabase auth, Prisma ORM, Tailwind CSS, and shadcn/ui — ready to fork and customise for new projects.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + shadcn/ui |
| Database | Supabase (Postgres) |
| ORM | Prisma |
| Auth | Supabase Auth (Google OAuth) |
| State (client) | Zustand |
| State (server) | TanStack Query |
| Testing | Vitest + Playwright + React Testing Library |
| Deployment | Vercel |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in the values in `.env.local`. See `docs/SETUP.md` for full instructions on Supabase, Google OAuth, and first-login behaviour.

### 3. Run database migrations

```bash
npx prisma migrate dev
```

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run test         # Vitest unit tests
npm run test:e2e     # Playwright E2E tests
npm run lint         # ESLint check
npx prisma studio    # Browse the database
npx prisma migrate dev  # Run pending migrations
```

## Project Structure

```
src/
├── app/              # Next.js App Router — pages, layouts, API routes
├── components/       # Shared reusable components
│   └── ui/           # shadcn/ui base components (do not edit directly)
├── lib/              # Utilities, helpers, config, Prisma client
├── hooks/            # Custom React hooks
├── stores/           # Zustand stores
└── types/            # TypeScript type definitions
prisma/
├── schema.prisma     # Database schema
└── migrations/       # Auto-generated migration files
```

## Documentation

- `docs/SETUP.md` — full environment setup guide
- `CLAUDE.md` — conventions and AI coding instructions
