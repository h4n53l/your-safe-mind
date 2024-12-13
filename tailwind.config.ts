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
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'border-glow': 'border-glow 6s ease infinite',
        'gradient': 'gradient 6s ease infinite',
        'float-slower': 'float 16s ease-in-out infinite',
        'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'border-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(134, 239, 172, 0.5), 0 0 40px rgba(134, 239, 172, 0.2)'
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(134, 239, 172, 0.8), 0 0 80px rgba(134, 239, 172, 0.4)'
          }
        },
        'gradient': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
