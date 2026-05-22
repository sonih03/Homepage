/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030303',      // Deepest black
          card: '#0D0D0F',      // Card background
          cardHover: '#16161A', // Card hover background
          red: '#DC2626',       // Main Accent Red
          redHover: '#B91C1C',  // Hover Red
          light: '#F3F4F6',     // Light text
          gray: '#9CA3AF',      // Muted text
          border: '#1F2937',    // Border color
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

