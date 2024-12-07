import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#048C66",
          
"secondary": "#78BFA5",
          
"accent": "#B0D9CA",
          
"neutral": "#f2f2f2",
          
"base-100": "#F2F2F2",
          
"info": "#048C5A",
          
"success": "#00ff00",
          
"warning": "#ffff00",
          
"error": "#ff0000",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
