Apply a client brand to the project.

The user will provide:
- A brand name (e.g. "acme")
- A primary colour palette in Tailwind 4 CSS variable format (from uicolors.app)
- Optionally: a secondary palette in the same format
- Optionally: a Google Font name (e.g. "Geist", "Montserrat")

Follow these steps exactly:

## 1. Add palette to globals.css

Open `src/app/globals.css` and locate the `@theme` block. Add the provided CSS
variables inside it, after the `--font-sans` line. Keep `--color-cod-gray-*` tokens
intact — they are used for neutral UI surfaces. Replace any previous brand palette
(non-cod-gray color tokens) with the new ones.

## 2. Update font (if provided)

If a Google Font name was provided:

1. Open `src/app/layout.tsx`
2. Replace the existing font import with the new one, e.g.:
   ```ts
   import { Montserrat } from 'next/font/google'
   const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
   ```
3. Update the `<html>` className to use the new font variable
4. In `src/app/globals.css` inside the `@theme` block, update:
   ```css
   --font-sans: var(--font-montserrat);
   ```
   Also update the matching line in `@theme inline`.

## 3. Update BRAND.md

Open `docs/BRAND.md` and update:
- The **Color Tokens** section: document the new palette name and its usage
- The **Typography** section: update the current font name and variable if it changed

## 4. Commit

```
git add src/app/globals.css src/app/layout.tsx docs/BRAND.md
git commit -m "brand: apply [brand name] brand tokens"
```

Replace `[brand name]` with the actual brand name provided by the user.
