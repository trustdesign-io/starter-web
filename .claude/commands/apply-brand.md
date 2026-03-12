Apply a client brand to the project end-to-end: colour scale generation,
design system, token application, typography, and documentation.

---

## INPUTS — Gather before touching any files

Ask the user for all four before proceeding. Do not proceed until all are provided.

| # | Input | Example |
|---|-------|---------|
| 1 | **Brand name** (lowercase, no spaces — used as palette name and folder name) | `acme` |
| 2 | **Primary hex colour** | `#2563eb` |
| 3 | **Industry / product type** | `B2B SaaS`, `fintech`, `healthcare` |
| 4 | **3 words describing the brand personality** | `trustworthy, modern, minimal` |

---

## Step 1 — Generate the colour scale

Derive a full 11-shade Tailwind 4 scale from the primary hex programmatically.
Do not ask the user to provide shades — compute them using this algorithm:

- **500** = the exact primary hex provided
- **Shades 50–400** — progressively mix toward white using these blend percentages:

  | Shade | White mix |
  |-------|-----------|
  | 50    | 95%       |
  | 100   | 90%       |
  | 200   | 75%       |
  | 300   | 60%       |
  | 400   | 40%       |

- **Shades 600–950** — progressively mix toward black:

  | Shade | Black mix |
  |-------|-----------|
  | 600   | 15%       |
  | 700   | 30%       |
  | 800   | 45%       |
  | 900   | 60%       |
  | 950   | 75%       |

To blend: for each channel R, G, B —
- Mix toward white: `result = round(channel + (255 - channel) * white_pct)`
- Mix toward black: `result = round(channel * (1 - black_pct))`

Output the scale as Tailwind 4 CSS variables named after the brand:

```css
--color-acme-50:  #f0f5ff;
--color-acme-100: #dce8fe;
--color-acme-200: #b3ccfd;
--color-acme-300: #89b0fb;
--color-acme-400: #5488f9;
--color-acme-500: #2563eb;  /* primary */
--color-acme-600: #1f53c7;
--color-acme-700: #1a42a4;
--color-acme-800: #143280;
--color-acme-900: #0e225c;
--color-acme-950: #081438;
```

---

## Step 2 — Run ui-ux-pro-max design system generator

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py \
  "<industry> <personality-word-1> <personality-word-2> <personality-word-3>" \
  --design-system \
  --persist \
  --stack shadcn \
  -p "<brand-name>" \
  -f markdown
```

This writes `design-system/<brand-name>/BRAND.md` — the source of truth for
all design decisions for this brand.

**After running:** note the recommended **Heading Font** and **Body Font** from
the output. You will use these in Step 4. If both heading and body are the same
font, use it for `--font-sans`. If they differ, use the body font for
`--font-sans` and apply the heading font via a separate `--font-heading` variable.

---

## Step 3 — Apply colour tokens to globals.css

Open `src/app/globals.css`.

### 3a — Add scale to `@theme`

Locate the `@theme` block. After the `--font-sans` line, add the generated
colour scale. Replace any previous brand palette (all non-`cod-gray` colour
tokens) with the new scale. Keep `--color-cod-gray-*` intact — it is the
neutral surface palette.

```css
@theme {
  /* ... existing font and cod-gray tokens ... */

  /* [Brand name] palette */
  --color-acme-50:  #f0f5ff;
  --color-acme-100: #dce8fe;
  /* ... all 11 shades ... */
  --color-acme-950: #081438;
}
```

### 3b — Map to shadcn semantic variables in `:root`

Update the `:root` block to map the brand palette to shadcn/ui semantic
variables using the computed hex values (not Tailwind utility class names):

```css
:root {
  --primary:            <acme-500-hex>;
  --primary-foreground: <acme-50-hex>;
  --ring:               <acme-500-hex>;
}
```

Leave all other semantic variables (`--secondary`, `--muted`, `--accent`,
`--destructive`, `--border`, `--background`, `--foreground`, etc.) unchanged.
Do not update the `.dark` block unless the user explicitly requests it.

---

## Step 4 — Apply typography from BRAND.md

Read `design-system/<brand-name>/BRAND.md` for the typography recommendation.

### Font name → Next.js import name

Convert the font name to its Next.js `next/font/google` export name:
- Remove spaces, capitalise each word: `"Plus Jakarta Sans"` → `Plus_Jakarta_Sans`
- The CSS variable should be kebab-case: `--font-plus-jakarta-sans`

### Updates required

1. **`src/app/layout.tsx`** — replace the existing font import:
   ```ts
   import { Plus_Jakarta_Sans } from 'next/font/google'
   const plusJakartaSans = Plus_Jakarta_Sans({
     subsets: ['latin'],
     variable: '--font-plus-jakarta-sans',
   })
   ```
   Update the `<html>` className to use the new variable:
   ```tsx
   <html lang="en" className={plusJakartaSans.variable}>
   ```

2. **`src/app/globals.css`** — update `--font-sans` in both `@theme` and
   `@theme inline`:
   ```css
   --font-sans: var(--font-plus-jakarta-sans);
   ```

If the user explicitly names a different font, use their choice over BRAND.md.

---

## Step 5 — Update docs/BRAND_GUIDE.md

Open `docs/BRAND_GUIDE.md` and update the following sections with the brand
details. Replace existing values rather than appending.

- **Project Identity** — brand name and personality words
- **Color Tokens** — palette name, primary hex, shade table (50–950 with hex
  and suggested usage), and the mapping to shadcn semantic variables
- **Typography** — font name, CSS variable, Google Fonts import URL from
  BRAND.md, and the `@theme` mapping
- **Design System** — path to `design-system/<brand-name>/BRAND.md` as the
  source of truth, UI style name, and key effects from BRAND.md

---

## Step 6 — Commit

Stage and commit all changed files:

```bash
git add \
  src/app/globals.css \
  src/app/layout.tsx \
  docs/BRAND_GUIDE.md \
  design-system/
git commit -m "brand: apply [brand-name] brand tokens and design system"
```

Replace `[brand-name]` with the actual brand name provided by the user.
