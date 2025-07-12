/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'maroon': {
          50: '#fdf2f2',
          100: '#fde6e6',
          200: '#fbd1d1',
          300: '#f7acac',
          400: '#f18080',
          500: '#e85555',
          600: '#d43a3a',
          700: '#b22828',
          800: '#932525',
          900: '#800020',
        },
        'gold': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fed285',
          300: '#fdb347',
          400: '#fd9712',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s infinite',
        'scroll-up': 'scroll-up 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      }
    },
  },
  plugins: [],
};