/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        otherShadow: '-2px -4px 8px 0 rgba(0, 0, 0, 0.5)',
      },
  
      colors: {
        primary: '#A50102',
        secondary: '#f9f9f9',
      },
      fontFamily:{
        customFont: ["Frutiger.tff"]
      },
    },
  },
  plugins: [],
}

