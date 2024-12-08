import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-crimson)', 'serif'],
        body: ['var(--font-lora)', 'serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
} satisfies Config;
