/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Charcoal / graphite (neutral dark base)
        ink: '#15171b',
        abyss: '#1b1e23',
        deep: '#24272e',
        // Graphite mid-tones
        sea: '#2f333b',
        tide: '#444b56',
        current: '#6f7682',
        spray: '#aab2bd',
        // Light surfaces (hybrid theme)
        foam: '#eef2f8',
        paper: '#ffffff',
        cloud: '#f3f6fb',
        line: '#e2e8f1',
        slate: '#51607a',
        mist: '#f6f3ec',
        sand: '#e6dcc7',
        // Premium brass accent (avoids generic tech gradients)
        brass: '#c6a15b',
        'brass-light': '#e2c486',
        'brass-deep': '#9a7836',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes
        'display-sm': ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.75rem, 7vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3.25rem, 9vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
      },
      spacing: {
        // Strict 8pt-based spacing scale extensions
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        38: '9.5rem',
        46: '11.5rem',
      },
      maxWidth: {
        shell: '88rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        glass: '0 1px 0 0 rgba(255,255,255,0.12) inset, 0 20px 60px -20px rgba(10,11,13,0.65)',
        lift: '0 30px 80px -30px rgba(12,13,16,0.7)',
        brass: '0 18px 50px -18px rgba(198,161,91,0.55)',
        card: '0 1px 2px rgba(18,20,26,0.04), 0 14px 36px -16px rgba(18,20,26,0.16)',
        'card-hover': '0 2px 4px rgba(18,20,26,0.05), 0 28px 60px -24px rgba(18,20,26,0.28)',
      },
      backgroundImage: {
        'sea-fade': 'linear-gradient(180deg, #15171b 0%, #1b1e23 45%, #24272e 100%)',
        'glass-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 70%)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'sail-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        marquee: 'sail-marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
