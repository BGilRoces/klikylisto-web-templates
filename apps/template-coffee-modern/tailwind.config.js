/* eslint-disable no-undef */
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
          50: '#f7f3f0',
          100: '#ede1d8',
          200: '#dbc3b1',
          300: '#c5a085',
          400: '#b08660',
          500: '#9d6b47',
          600: '#8b5a3c',
          700: '#744834',
          800: '#5f3d30',
          900: '#4d342a',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf7ee',
          200: '#faeedd',
          300: '#f6dfbe',
          400: '#f0ca94',
          500: '#e8b568',
          600: '#dda145',
          700: '#c4882f',
          800: '#a06d2a',
          900: '#825828',
        }
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
