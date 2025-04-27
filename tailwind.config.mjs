// tailwind.config.mjs

import typography from '@tailwindcss/typography'
import lineClamp from '@tailwindcss/line-clamp'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    lineClamp,
  ],
}

export default config
