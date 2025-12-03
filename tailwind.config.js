/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px) scale(0.4)" },
          "70%": { opacity: "1", transform: "translateY(0px) scale(1)" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        fadeUp: "fadeUp .5s cubic-bezier(.16,1,.3,1) forwards"
      },
      colors: {
        // Foreground text colors - ensure WCAG AA compliance
        fg: {
          primary: '#0f172a',     // slate-900 - highest contrast (12:1)
          secondary: '#1e293b',   // slate-800 - high contrast (7:1)
          tertiary: '#334155',    // slate-700 - good contrast (4.5:1)
          muted: '#475569',       // slate-600 - readable contrast
          subtle: '#64748b',      // slate-500 - subtle text
          disabled: '#94a3b8',    // slate-400 - disabled state
        },
        // Primary accent color (emerald green)
        accent: {
          400: '#459357',
          500: '#5cb270',  // DEFAULT - primary accent
          600: '#7dc28d',
          700: '#9dd1a9',
        },
        // Secondary accent color (canary yellow)
        secondary: {
          400: '#efeb27',
          500: '#f4f269',  // DEFAULT
          600: '#f6f486',
        },
        // Surface colors for cards and containers
        surface: {
          elevated: '#f8fafc',
        },
      },
      backdropBlur: {
        ios: '20px',
        'ios-lg': '30px',
      },
      backdropSaturate: {
        ios: '180%',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}