import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { RareteeNav } from '@/components/raretee/nav'
import { RareteeHero } from '@/components/raretee/hero'
import { RareteeProductGrid } from '@/components/raretee/product-grid'
import { RareteeAbout } from '@/components/raretee/about'

// ─── Nav ─────────────────────────────────────────────────────────────────────

const navMeta: Meta<typeof RareteeNav> = {
  title: 'Raretee/Nav',
  component: RareteeNav,
  parameters: {
    layout: 'fullscreen',
  },
}

export default navMeta

type NavStory = StoryObj<typeof RareteeNav>

export const Navigation: NavStory = {}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const Hero: StoryObj = {
  render: () => <RareteeHero />,
  parameters: {
    layout: 'fullscreen',
  },
}

// ─── Product Grid ─────────────────────────────────────────────────────────────

export const ProductGrid: StoryObj = {
  render: () => <RareteeProductGrid />,
  parameters: {
    layout: 'fullscreen',
  },
}

// ─── About ───────────────────────────────────────────────────────────────────

export const About: StoryObj = {
  render: () => <RareteeAbout />,
  parameters: {
    layout: 'fullscreen',
  },
}

// ─── Full Page ────────────────────────────────────────────────────────────────

export const FullPage: StoryObj = {
  render: () => (
    <>
      <RareteeNav />
      <main>
        <RareteeHero />
        <RareteeProductGrid />
        <RareteeAbout />
      </main>
    </>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}
