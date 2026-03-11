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

### Colours

> Update these in `tailwind.config.ts` under `theme.extend.colors` to make them available as utilities.

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `primary` | [Name] | `#XXXXXX` | CTAs, key actions, links |
| `primary-foreground` | | `#XXXXXX` | Text on primary backgrounds |
| `secondary` | [Name] | `#XXXXXX` | Secondary actions, accents |
| `secondary-foreground` | | `#XXXXXX` | Text on secondary backgrounds |
| `background` | | `#XXXXXX` | Page background |
| `foreground` | | `#XXXXXX` | Default text |
| `muted` | | `#XXXXXX` | Subdued backgrounds |
| `muted-foreground` | | `#XXXXXX` | Subdued text, labels |
| `destructive` | | `#XXXXXX` | Errors, delete actions |
| `border` | | `#XXXXXX` | Borders, dividers |

### Typography

| Use | Font family | Weights | Fallback |
|-----|------------|---------|---------|
| Headings | [e.g., Inter] | 600, 700 | sans-serif |
| Body | [e.g., Inter] | 400, 500 | sans-serif |
| Monospace | [e.g., JetBrains Mono] | 400 | monospace |

> Load fonts via `next/font` in `src/app/layout.tsx`.

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
