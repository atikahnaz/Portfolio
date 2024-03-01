/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "pf-cream": "#FBFAF2",
        "pf-light-blue": "#4979F5",
        "pf-blue": "#102E69",
        "pf-yellow": "#FFF61E",
        "pf-numbers": "#748CBA",
        "pf-title": "#2D55A2",
      },
      fontFamily: {
        customFont: ["Roboto Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
