/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#02040a',
        panel: '#07101f',
        panelSoft: '#0a1528',
        cyanCore: '#27e8ff',
        matrix: '#66ff99',
        plasma: '#b46cff',
        warning: '#f8d66d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 22px rgba(39, 232, 255, 0.22)',
        green: '0 0 20px rgba(102, 255, 153, 0.2)',
        plasma: '0 0 24px rgba(180, 108, 255, 0.2)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(39, 232, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(39, 232, 255, 0.07) 1px, transparent 1px)',
        scan:
          'linear-gradient(180deg, transparent 0%, rgba(39,232,255,0.08) 50%, transparent 100%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        trace: {
          '0%': { strokeDashoffset: '180' },
          '100%': { strokeDashoffset: '0' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        scanline: 'scanline 5s linear infinite',
        trace: 'trace 3.6s linear infinite',
        floatSoft: 'floatSoft 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
