import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#050505",
        "background-secondary": "#0F0F10",
        "background-tertiary": "#19191A",

        "content-heading": "#FFF",
        "content-body": "#CDCBCC",
        "content-headline":"#B2B2B2",
        "content-placeholder": "#827D7",

        "accent-purple": "#4B2DBB",
        "accent-purple-dark":"#171031",

        "accent-blue": "#30B9E3",
        "accent-blue-dark": "#102831",

        "accent-green": "#87BB2D",
        "accent-green-dark": "#222D26",

        "accent-pink": "#B5446B",
        "accent-pink-dark": "#2C1A22",

        "accent-yellow":"#DCCB2E",
        "accent-yellow-dark":"#282A0F",

        "border-primary": "#19191A",
        "border-secondary": "#323234",
        "border-tertiary": "#97979B",
      },
    },
  },
  plugins: [],
};
export default config;
