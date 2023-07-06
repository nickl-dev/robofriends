/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'japanese-robot': ['Japanese Robot']
    },
    extend: {
      height: {
        '500': '500px' 
      }
    },
  },
  plugins: [],
}

