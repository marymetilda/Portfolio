/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-blue":
          "linear-gradient(200deg, #004040 0%, #ffffff 50%, #004040 100%)",
        "linear-blue-white":
          "linear-gradient(200deg, #ffffff 0%, #004040 50%, #ffffff 100%)",
          "linear-blue-white-mix":
          "linear-gradient(150deg, #ffffff 0%, #004040 20%, #ffffff 40%, #004040 60%, #ffffff 80%, #004040 100%)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
    fontFamily: {
      "great-vibes": ["Great Vibes"],
    },
    colors: {
      "grey-1": "#fcf6ff33",
      "white-1": "#fcf6f4",
      black: "#000",
      white: "#fff",
    },
    animation: {
      "flash-top": "animate-flash-top 2s linear",
      left: "animate-left 2s linear",
    },
    keyframes: {
      "animate-flash-top": {
        from: { opacity: 0, bottom: 0, transform: "translateY(20vh)" },
        to: { opacity: 1, bottom: 0, transform: "translateY(0)" },
      },
      "animate-left": {
        from: { opacity: 0, right: 0, transform: "translateX(20vw)" },
        to: { opacity: 1, right: 0, transform: "translateX(-5vw)" },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".my-rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });
    }),
  ],
};
