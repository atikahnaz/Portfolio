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
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
        "fade-text": "fade-up 1s",
        "fade-letter": "fade-up 1.5s",
      },
    },
  },
  plugins: [],
};
