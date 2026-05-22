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
          bg: '#F8F9FA',         // Off-white main background
          text: '#191F28',       // Premium Dark Gray main text
          textMuted: '#64748B',  // Slate subtext
          blue: '#3182F6',       // Premium Blue accent (Toss/Apple)
          blueHover: '#1B64DA',  // Hover Blue
          subTextGray: '#4E5968', // Toss-style Slate/Dark Gray subtext
          card: '#FFFFFF',       // Card background (Pure White)
          border: '#F1F5F9',     // Thin border slate-100
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

