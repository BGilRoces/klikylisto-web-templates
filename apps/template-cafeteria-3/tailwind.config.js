/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf7f0',
          100: '#faebd7',
          200: '#f4d5ae',
          300: '#ecb882',
          400: '#e39754',
          500: '#d97b2f',
          600: '#c8611d',
          700: '#a54b1a',
          800: '#853c1b',
          900: '#6d331a',
          950: '#3a180c',
        },
        cream: {
          50: '#fefdfb',
          100: '#fef9f4',
          200: '#fdf2e9',
          300: '#fbe8d3',
          400: '#f7d6b3',
          500: '#f1bd85',
          600: '#e8a055',
          700: '#dc8733',
          800: '#b8702b',
          900: '#945c28',
          950: '#502f13',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'steam': 'steam 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        steam: {
          '0%': { opacity: 0, transform: 'translateY(0) scale(1)' },
          '50%': { opacity: 1, transform: 'translateY(-30px) scale(1.1)' },
          '100%': { opacity: 0, transform: 'translateY(-60px) scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
