/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary" : ["DM Sans", "sans-serif"],
        "secondary": ["Teko", "sans-serif"],
        "main": ["Rubik Mono One", "monospace"],
        "sign": ["Tangerine", "cursive"]
      }
    },
  },
  plugins: [],
}

