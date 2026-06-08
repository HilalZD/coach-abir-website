import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#A88C56',
          light: '#DCC086',
          lighter: '#F2E1B0',
          dark: '#8A6F3E',
          deep: '#3A2515',
          shadow: '#6B5530',
        },
        blush: {
          soft: '#FDE8F0',
          medium: '#F4C2D0',
          bright: '#F4A8C8',
          border: '#F7D6E0',
        },
        rose: {
          deep: '#A03060',
          muted: '#7A4E6E',
        },
        cream: {
          base: '#FFF9FB',
          alt: '#FEF0F5',
        },
        ink: {
          dark: '#2C1A30',
          body: '#3A2030',
          muted: '#B07090',
        },
      },
      fontFamily: {
        tajawal: ['var(--font-tajawal)', 'Tajawal', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      borderRadius: {
        photo: '120px 120px 80px 80px',
      },
    },
  },
  plugins: [],
}
export default config
