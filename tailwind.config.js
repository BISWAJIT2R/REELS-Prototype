/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
        secondary: ["Teko", "sans-serif"],
        main: ["Rubik Mono One", "monospace"],
        sign: ["Tangerine", "cursive"],
      },
      gridTemplateColumns: {
        my: "repeat(4, 1fr)",
        "my-row": "minmax(100px, auto)",
      },
    },
    gridColumn: {
      "part": "1/3",
      "part2": "3/5"
    },
    gridRow: {
       "part": "1/4",
       "part2": "2/4"
    } 
  },
  plugins: [],
};
