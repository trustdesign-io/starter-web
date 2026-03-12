# Brand Guide

> **Purpose:** This document explains the branding process, conventions, and UI defaults used in this project. It is a guide, not a token file.
>
> **The active brand design system for this project lives in `design-system/raretee/MASTER.md`** — that file is the source of truth for colours, typography, spacing, and component specs for the current client brand. When applying or reading brand tokens, go there first.

This guide is filled in during project kickoff and updated as the brand evolves. Claude uses this file when writing copy, generating UI, or making design decisions.

## Project Identity

| | |
|--|--|
| **Brand name** | raretee |
| **Industry** | Lifestyle / limited run punk t-shirts |
| **Personality** | punk, rebellion, cyber |
| **Palette relationship** | Complementary — magenta-purple (#df3ff6) paired with cyber green (#26db0a); accent in electric lime (#a8f524). Chosen by ui-ux-pro-max for Cyberpunk UI style. |
| **Design system** | `design-system/raretee/MASTER.md` |
| **UI style** | Cyberpunk UI — neon glow, glitch animations, scanlines, terminal fonts |

## Colour Tokens

### Active palette

| Scale | Base (500) | CSS prefix | Usage |
|-------|-----------|------------|-------|
| primary | `#df3ff6` | `--color-raretee-primary-*` | Interactive elements, links, focus rings, primary CTAs |
| secondary | `#26db0a` | `--color-raretee-secondary-*` | Secondary actions, badges, highlights |
| accent | `#a8f524` | `--color-raretee-accent-*` | High-energy CTAs, hover states, neon pops |
| success | `#16a34a` | `--color-raretee-success-*` | Success states, confirmations |
| destructive | `#ef4444` | `--color-raretee-destructive-*` | Errors, delete actions, warnings |

### shadcn semantic variable mapping

| Variable | Value |
|----------|-------|
| `--primary` | `#df3ff6` (raretee-primary-500) |
| `--primary-foreground` | `#fdf5ff` (raretee-primary-50) |
| `--secondary` | `#26db0a` (raretee-secondary-500) |
| `--secondary-foreground` | `#f4fdf3` (raretee-secondary-50) |
| `--accent` | `#a8f524` (raretee-accent-500) |
| `--accent-foreground` | `#fbfff4` (raretee-accent-50) |
| `--destructive` | `#ef4444` (raretee-destructive-500) |
| `--ring` | `#df3ff6` (raretee-primary-500) |

> Current brand palette: **raretee** (see full 55-token scale in `src/app/globals.css`)

| **Project name** | raretee |
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

#### Current brand palette: raretee (5-scale system)

The full 55-token palette lives in `src/app/globals.css`. Key tokens:

| Scale | 500 hex | Usage |
|-------|---------|-------|
| `raretee-primary` | `#df3ff6` | Primary CTAs, links, focus rings |
| `raretee-secondary` | `#26db0a` | Secondary actions, badges, cyber-green highlights |
| `raretee-accent` | `#a8f524` | High-energy hover states, neon pops |
| `raretee-success` | `#16a34a` | Success / confirmation states |
| `raretee-destructive` | `#ef4444` | Errors, delete actions |

> Palette generated programmatically from primary `#df3ff6` using complementary hue rotation.
> Run `/apply-brand` to regenerate or switch to a new brand.

### Typography

**Heading font:** Caveat (`--font-caveat`) — handwritten, personal, punk attitude.
**Body font:** Quicksand (`--font-quicksand`) — friendly, rounded, readable.
Both loaded via `next/font/google` in `src/app/layout.tsx`.

| Variable | Font | Role |
|----------|------|------|
| `--font-heading` | Caveat | Headlines, hero text, display copy |
| `--font-sans` | Quicksand | Body copy, UI labels, forms |

**Google Fonts URL:**
```
https://fonts.google.com/share?selection.family=Caveat:wght@400;500;600;700|Quicksand:wght@300;400;500;600;700
```

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap');
```

> Current fonts: **Caveat** (`--font-caveat` → `--font-heading`) + **Quicksand** (`--font-quicksand` → `--font-sans`)

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
