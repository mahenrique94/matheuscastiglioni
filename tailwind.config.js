
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0A0F',
          card: '#141419',
          cyan: '#00C2CB',
          green: '#3DD56D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #00C2CB, #3DD56D)',
      }
    },
  },
  plugins: [],
}
