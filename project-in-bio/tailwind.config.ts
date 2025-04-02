import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            "--color-background-primary": "#050505",
            "--color-background-secondary": "#0F0F10",
            "--color-background-tertiary": "#19191A",

            "--color-content-heading": "#FFF",
            "--color-content-body": "#CDCBCC",
            "--color-content-headline":"#B2B2B2",
            "--color-content-placeholder": "#827D7",

            "--color-accent-purple": "#4B2DBB",
            "--color-accent-purple-dark":"#171031",

            "--color-accent-blue": "#30B9E3",
            "--color-accent-blue-dark": "#102831",

            "--color-accent-green": "#87BB2D",
            "--color-accent-green-dark": "#222D26",

            "--color-accent-pink": "#B5446B",
            "--color-accent-pink-dark": "#2C1A22",

            "--color-accent-yellow":"#DCCB2E",
            "--color-accent-yellow-dark":"#282A0F",

            "--color-border-primary": "#19191A",
            "--color-border-secondary": "#323234",
            "--color-border-tertiary": "#97979B",
        }
    },
  },
  plugins: [],
}

export default config
