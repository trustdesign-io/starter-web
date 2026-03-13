import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'

// Inject next/font CSS variables so font-heading and font-sans utilities resolve
// correctly in Storybook (next/font normally sets these on <html> at runtime).
if (typeof document !== 'undefined') {
  document.documentElement.style.setProperty('--font-bebas-neue', '"Bebas Neue"')
  document.documentElement.style.setProperty('--font-space-mono', '"Space Mono"')
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;