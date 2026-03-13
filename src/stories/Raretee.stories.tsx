import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { RareteeNav } from '@/components/raretee/nav'
import { RareteeHero } from '@/components/raretee/hero'
import { RareteeProductGrid } from '@/components/raretee/product-grid'
import { RareteeAbout } from '@/components/raretee/about'

// Storybook requires a single default export. We use the FullPage composite as
// the primary entry and export individual component stories from it.
const meta: Meta = {
  title: 'Raretee/FullPage',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj

export const FullPage: Story = {
  render: () => (
    <>
      <RareteeNav />
      <main>
        <RareteeHero totalRemaining={15} />
        <RareteeProductGrid />
        <RareteeAbout />
      </main>
    </>
  ),
}

export const Nav: Story = {
  render: () => <RareteeNav />,
}

export const Hero: Story = {
  render: () => <RareteeHero totalRemaining={15} />,
}

export const ProductGrid: Story = {
  render: () => <RareteeProductGrid />,
}

export const About: Story = {
  render: () => <RareteeAbout />,
}
