import type { Config } from 'tailwindcss'

/**
 * Go Below palette.
 *
 * The brief is explicit that the first attempt went too dark and tactical.
 * So the darks here are WARM (brown-black, not blue-black) and the system
 * carries as much limestone and timber as it does charcoal. Photography is
 * meant to supply most of the colour; these are the surfaces it sits on.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm charcoals — the "underground at rest" surfaces
        ink: {
          DEFAULT: '#1A1714',
          deep: '#100E0C',
          soft: '#241F1B',
          raised: '#2E2823',
        },
        // Architectural concrete — structure, not decoration
        concrete: {
          DEFAULT: '#8B857D',
          light: '#B4ADA3',
          dark: '#5C574F',
        },
        // Off-white / limestone — the daylight surfaces
        limestone: {
          DEFAULT: '#F1EDE5',
          warm: '#E4DDD1',
          dim: '#C9C1B4',
        },
        // Natural timber
        timber: {
          DEFAULT: '#8A5E3B',
          light: '#B5875C',
        },
        // Restrained warm amber — engineered light, used sparingly
        amber: {
          DEFAULT: '#C4872F',
          soft: '#DDA95C',
        },
        // Planting and water — the things that make it not read as a bunker
        moss: '#4C5B43',
        water: '#3C5A66',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        brand: '0.38em',
      },
      maxWidth: {
        reading: '58ch',
      },
      transitionTimingFunction: {
        // Slow, architectural. Nothing springy.
        arch: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
export default config
