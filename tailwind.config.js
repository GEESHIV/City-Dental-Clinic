/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0b1f3a',
          700: '#1e3a5f',
          800: '#13294b',
        },
        mist: {
          50: '#f5fafd',
          100: '#e8f4fa',
          200: '#d3e8f4',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(11, 31, 58, 0.28)',
      },
    },
  },
  plugins: [],
};
