import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta = {
  title: 'Brand/Tokens',
  parameters: {
    layout: 'padded',
  },
}

export default meta

type Story = StoryObj

// ─── Colour tokens ──────────────────────────────────────────────────────────

const COD_GRAY_SCALE = [
  { label: '50', hex: '#fafafa', token: '--color-cod-gray-50', textDark: true },
  { label: '100', hex: '#f5f5f5', token: '--color-cod-gray-100', textDark: true },
  { label: '200', hex: '#e6e6e6', token: '--color-cod-gray-200', textDark: true },
  { label: '300', hex: '#d3d3d3', token: '--color-cod-gray-300', textDark: true },
  { label: '400', hex: '#a3a3a3', token: '--color-cod-gray-400', textDark: true },
  { label: '500', hex: '#727272', token: '--color-cod-gray-500', textDark: false },
  { label: '600', hex: '#535353', token: '--color-cod-gray-600', textDark: false },
  { label: '700', hex: '#404040', token: '--color-cod-gray-700', textDark: false },
  { label: '800', hex: '#272727', token: '--color-cod-gray-800', textDark: false },
  { label: '900', hex: '#1a1a1a', token: '--color-cod-gray-900', textDark: false },
  { label: '950', hex: '#111111', token: '--color-cod-gray-950', textDark: false },
]

const SEMANTIC_COLORS = [
  { label: 'background', token: '--background' },
  { label: 'foreground', token: '--foreground' },
  { label: 'primary', token: '--primary' },
  { label: 'primary-foreground', token: '--primary-foreground' },
  { label: 'secondary', token: '--secondary' },
  { label: 'secondary-foreground', token: '--secondary-foreground' },
  { label: 'muted', token: '--muted' },
  { label: 'muted-foreground', token: '--muted-foreground' },
  { label: 'accent', token: '--accent' },
  { label: 'accent-foreground', token: '--accent-foreground' },
  { label: 'destructive', token: '--destructive' },
  { label: 'border', token: '--border' },
  { label: 'input', token: '--input' },
  { label: 'ring', token: '--ring' },
]

function SwatchRow({
  swatches,
}: {
  swatches: Array<{ label: string; hex?: string; token: string; textDark?: boolean }>
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {swatches.map(({ label, hex, token }) => (
        <div key={token} className="flex flex-col gap-1 w-24">
          <div
            className="h-14 w-full rounded-lg border border-border shadow-sm"
            style={{ background: hex ?? `var(${token})` }}
          />
          <p className="text-xs font-medium leading-tight">{label}</p>
          {hex && <p className="text-xs text-muted-foreground font-mono">{hex}</p>}
          <p className="text-[10px] text-muted-foreground font-mono truncate">{token}</p>
        </div>
      ))}
    </div>
  )
}

// ─── Typography specimens ────────────────────────────────────────────────────

const TYPE_SCALE = [
  { label: 'Display', className: 'text-4xl font-bold', specimen: 'Build faster.' },
  { label: 'Heading 1', className: 'text-3xl font-semibold', specimen: 'Platform overview' },
  { label: 'Heading 2', className: 'text-2xl font-semibold', specimen: 'Active projects' },
  { label: 'Heading 3', className: 'text-xl font-medium', specimen: 'Team settings' },
  { label: 'Heading 4', className: 'text-base font-medium', specimen: 'Billing details' },
  { label: 'Body', className: 'text-base', specimen: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Body SM', className: 'text-sm', specimen: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Caption', className: 'text-xs text-muted-foreground', specimen: 'Last updated 2 minutes ago' },
  {
    label: 'Mono',
    className: 'text-sm font-mono',
    specimen: 'const greeting = "hello, world"',
  },
]

// ─── Stories ─────────────────────────────────────────────────────────────────

export const CodGrayScale: Story = {
  name: 'Colour — Cod Gray Scale',
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold mb-1">Cod Gray</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Primary brand colour scale. Used for text, backgrounds, and borders.
        </p>
        <SwatchRow swatches={COD_GRAY_SCALE} />
      </div>
    </div>
  ),
}

export const SemanticColors: Story = {
  name: 'Colour — Semantic Tokens',
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold mb-1">Semantic tokens</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Role-based tokens mapped from the Cod Gray scale. Values reflect the current theme (light/dark).
        </p>
        <SwatchRow swatches={SEMANTIC_COLORS} />
      </div>
    </div>
  ),
}

export const Typography: Story = {
  name: 'Typography — Type Scale',
  render: () => (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h2 className="text-base font-semibold mb-4">Type scale · Inter</h2>
        <div className="flex flex-col gap-6 divide-y divide-border">
          {TYPE_SCALE.map(({ label, className, specimen }) => (
            <div key={label} className="pt-4 first:pt-0 flex items-baseline gap-6">
              <span className="text-xs text-muted-foreground w-24 shrink-0">{label}</span>
              <span className={className}>{specimen}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const RadiusScale: Story = {
  name: 'Radius — Scale',
  render: () => {
    const radii = [
      { label: 'sm', cls: 'rounded-sm' },
      { label: 'md', cls: 'rounded-md' },
      { label: 'lg', cls: 'rounded-lg' },
      { label: 'xl', cls: 'rounded-xl' },
      { label: '2xl', cls: 'rounded-2xl' },
      { label: '3xl', cls: 'rounded-3xl' },
      { label: 'full', cls: 'rounded-full' },
    ]
    return (
      <div>
        <h2 className="text-base font-semibold mb-4">Border radius</h2>
        <div className="flex flex-wrap gap-4 items-end">
          {radii.map(({ label, cls }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className={`w-16 h-16 bg-primary ${cls}`}
              />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
}
