Apply a client brand to the project.

## Step 0 — Gather brand context (REQUIRED before touching any files)

Ask the user for the following four inputs before proceeding:

1. **Brand name** — e.g. "Acme" (used as the folder name in `design-system/`)
2. **Primary hex colour** — e.g. `#0369A1`
3. **Industry / product type** — e.g. "B2B SaaS project management platform"
4. **3 words describing the brand personality** — e.g. "bold, trustworthy, modern"

Do not proceed until all four are provided.

## Step 1 — Generate design system with ui-ux-pro-max

Run the design system generator with the collected context:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py \
  "<industry> <personality-words>" \
  --design-system \
  --persist \
  --stack shadcn \
  -p "<brand-name>" \
  -f markdown
```

This writes `design-system/<brand-name>/MASTER.md` — the source of truth for all
design decisions. Note the recommended **typography** (heading/body font) from the
output; you will use it in Step 4.

## Step 2 — Add palette to globals.css

The user will provide (or you derive from MASTER.md) a Tailwind 4 CSS variable
palette. Open `src/app/globals.css` and locate the `@theme` block. Add the
provided CSS variables inside it, after the `--font-sans` line. Keep
`--color-cod-gray-*` tokens intact — they are used for neutral UI surfaces.
Replace any previous brand palette (non-cod-gray color tokens) with the new ones.

## Step 3 — Map palette to shadcn/ui semantic variables

Open `src/app/globals.css` and update the `:root` block to map the new brand
palette to shadcn/ui's semantic colour variables:

```css
--primary: <brand-500-hex>;
--primary-foreground: <brand-50-hex>;
--ring: <brand-500-hex>;
```

Use the raw hex values from the palette (not Tailwind utility names). Keep all
other semantic variables (secondary, muted, accent, destructive, border, etc.)
unchanged — only override primary and ring.

Do not update the `.dark` block unless the user explicitly requests dark-mode
brand colours.

## Step 4 — Update font based on MASTER.md typography recommendation

Use the **Heading Font** / **Body Font** from `design-system/<brand-name>/MASTER.md`.

1. Open `src/app/layout.tsx`
2. Replace the existing font import with the recommended font, e.g.:
   ```ts
   import { PlusJakartaSans } from 'next/font/google'
   const plusJakartaSans = PlusJakartaSans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' })
   ```
3. Update the `<html>` className to use the new font variable
4. In `src/app/globals.css` inside the `@theme` block, update:
   ```css
   --font-sans: var(--font-plus-jakarta-sans);
   ```
   Also update the matching line in `@theme inline`.

If the user explicitly provided a Google Font name that differs from MASTER.md,
use their choice instead.

## Step 5 — Update docs/BRAND.md

Open `docs/BRAND.md` and update with the full brand summary:

- **Brand name** and personality description
- **Color Tokens** section: document the palette name, primary hex, and usage notes from MASTER.md
- **Typography** section: font name, variable name, and Google Fonts import URL from MASTER.md
- **Design System** section: note the path to `design-system/<brand-name>/MASTER.md` as the source of truth
- **Style** section: record the chosen UI style and key effects from MASTER.md

## Step 6 — Commit

```
git add src/app/globals.css src/app/layout.tsx docs/BRAND.md design-system/
git commit -m "brand: apply [brand name] brand tokens"
```

Replace `[brand name]` with the actual brand name provided by the user.
