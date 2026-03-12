# Brand Guidelines

> This document is filled in during project kickoff and updated as the brand evolves. Claude uses this file when writing copy, generating UI, or making design decisions.

## Project Identity

| | |
|--|--|
| **Project name** | [Name] |
| **Tagline** | [One line] |
| **Target audience** | [Who uses this] |
| **Core value** | [What problem it solves] |

## Brand Voice

### Tone
[e.g., Professional but approachable. Confident without being arrogant. Clear over clever.]

### Personality traits
[e.g., Helpful, direct, trustworthy, modern]

### Writing style
- Use active voice
- Short sentences and paragraphs
- Plain English — no jargon unless audience-appropriate
- UK English spelling (or specify US)
- Oxford comma: yes/no

### Do / Don't

| Do | Don't |
|----|-------|
| "You can..." | "Users are able to..." |
| "Sign in" | "Login" (as a verb) |
| [Add more] | [Add more] |

## Visual Identity

### Color Tokens

Palettes are generated at [uicolors.app](https://uicolors.app), exported in
**Tailwind 4** format (CSS variables), and pasted into the `@theme` block in
`src/app/globals.css`.

The default neutral palette is **cod-gray**, available as `cod-gray-50` through
`cod-gray-950` utilities. When applying a client brand, add a named primary (and
optionally secondary) palette alongside cod-gray. Do not remove cod-gray — it is
used for neutral UI surfaces.

#### Current brand palette: powder-blue

| Token | Hex | Usage |
|-------|-----|-------|
| `powder-blue-50` | `#f1faf9` | Tinted backgrounds, hover states |
| `powder-blue-100` | `#dbf1f2` | Subtle fills, badges |
| `powder-blue-200` | `#b1e0e2` | Borders on light backgrounds |
| `powder-blue-300` | `#8cd0d4` | Decorative, disabled states |
| `powder-blue-400` | `#56b3ba` | Secondary interactive elements |
| `powder-blue-500` | `#3b979f` | Primary brand colour |
| `powder-blue-600` | `#337b87` | Primary hover / focus |
| `powder-blue-700` | `#2f656f` | Dark interactive, icon fill |
| `powder-blue-800` | `#2e545c` | Dark surfaces |
| `powder-blue-900` | `#2a474f` | Very dark backgrounds |
| `powder-blue-950` | `#172e35` | Deepest shade |

Use `powder-blue-500` as the default primary action colour. Use `powder-blue-600`
for hover states and `powder-blue-700` for active/pressed states.

To apply a new brand palette:
1. Generate the palette at uicolors.app, export as Tailwind 4
2. Paste the CSS variables into the `@theme` block in `src/app/globals.css`
3. Update `docs/BRAND.md` with the palette name and usage notes

### Typography

**Default font:** Inter, loaded via `next/font/google` in `src/app/layout.tsx`.

The font is registered as a CSS variable `--font-inter` on the `<html>` element and
mapped to the `font-sans` Tailwind utility via `@theme { --font-sans: var(--font-inter); }`
in `src/app/globals.css`.

To change the font for a project:
1. Replace the `Inter` import in `src/app/layout.tsx` with the new Google Font
2. Update the `variable` option to match the font name (e.g. `variable: '--font-montserrat'`)
3. Update the `@theme` block in `globals.css`: `--font-sans: var(--font-montserrat);`

> Current font: **Inter** (`--font-inter`)

### Type scale

| Token | Size | Line height | Usage |
|-------|------|------------|-------|
| `text-xs` | 12px | 1.5 | Captions, labels |
| `text-sm` | 14px | 1.5 | Small body, secondary info |
| `text-base` | 16px | 1.5 | Body copy |
| `text-lg` | 18px | 1.4 | Large body, introductions |
| `text-xl` | 20px | 1.3 | Subheadings |
| `text-2xl` | 24px | 1.2 | Section headings |
| `text-3xl` | 30px | 1.2 | Page titles |
| `text-4xl+` | 36px+ | 1.1 | Hero headings |

### Spacing & Layout

- **Base unit:** 4px (Tailwind default)
- **Section padding:** `py-16` (64px) desktop, `py-10` (40px) mobile
- **Container max-width:** `max-w-7xl` (1280px) with `px-4 sm:px-6 lg:px-8`
- **Card padding:** `p-6` (24px)
- **Component gaps:** `gap-4` (16px) to `gap-8` (32px)

### Border radius

| Use | Value |
|-----|-------|
| Buttons | `rounded-md` (6px) |
| Cards | `rounded-xl` (12px) |
| Modals | `rounded-2xl` (16px) |
| Avatars | `rounded-full` |

### Icons

- Library: [e.g., Lucide React]
- Default size: `16px` (inline), `20px` (standalone), `24px` (feature icons)
- Stroke width: `1.5`

## Logo

| Version | Usage |
|---------|-------|
| Primary (colour) | Light backgrounds |
| Reversed (white) | Dark/colour backgrounds |
| Icon only | Favicons, small spaces |

Minimum size: [x]px
Clear space: equal to the height of the logo mark on all sides

## Imagery & Illustration

[Describe photography style, illustration style, or "TBD"]

## UI Component Defaults

When building UI, default to these patterns unless a specific design says otherwise:

- **CTA buttons:** `variant="default"` (primary colour), full text, no icons unless directional
- **Secondary actions:** `variant="outline"` or `variant="ghost"`
- **Destructive actions:** `variant="destructive"`, always require confirmation dialog
- **Forms:** Label above input, inline error messages below, no placeholder-as-label
- **Empty states:** Illustration/icon + heading + subtext + CTA button
- **Loading states:** Skeleton screens (not spinners) for content areas; spinner for buttons
