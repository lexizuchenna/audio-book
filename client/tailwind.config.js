/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#090638",
          90: "#100A64",
          80: "#191179",
          70: "#261C96",
          60: "#3528B3",
          50: "#4838D1",
          40: "#7466E3",
          30: "#9487F1",
          20: "#BBB1FA",
        },
        accent: {
          100: "#480A0D",
          90: "#761016",
          80: "#8F1C1B",
          70: "#B1362A",
          60: "#D4553E",
          50: "#F77A55",
          40: "#FAA47F",
          30: "#FCBE99",
          20: "#FED9BB",
        },
        neutral: {
          100: "#0F0F29",
          90: "#1C1C4D",
          80: "#2E2E5D",
          70: "#494974",
          60: "#6A6A8B",
          50: "#9292A2",
          40: "#B8B8C7",
          30: "#B8B8C7",
          20: "#D5D5E3",
          5: "#F5F5FA",
        },
        black: {
          DEFAULT: "#000",
          100: "#010104",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        light: ["light", "sans-serif"],
        black: ["black", "sans-serif"],
        regular: ["regular", "sans-serif"],
        medium: ["medium", "sans-serif"],
        bold: ["bold", "sans-serif"],
        semibold: ["semibold", "sans-serif"],
        extrabold: ["extrabold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
