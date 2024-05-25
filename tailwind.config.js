/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://i.pinimg.com/originals/f4/34/e8/f434e86cdc40ef068b7783d150f8a65c.gif')",
        "linear-green": "linear-gradient(200deg, #004040 0%, #ffffff 100%)",
        "linear-blue":
          "linear-gradient(180deg, #004040 0%, #ffffff 50%, #004040 100%)",
        "linear-blue-vertical-middle":
          "linear-gradient(180deg, #000000 0%, #ffffff 30%, #004040 80%, #000000 100%)",
        "linear-blue-white":
          "linear-gradient(200deg, #ffffff 0%, #004040 50%, #ffffff 100%)",
        "linear-blue-white-mix":
          "linear-gradient(150deg, #ffffff 0%, #004040 20%, #ffffff 40%, #004040 60%, #ffffff 80%, #004040 100%)",
        "linear-blue-green":
          "linear-gradient(90deg, #013220 0%, #013220 60%, #ffffff 100%)",
        "linear-white-green":
          "linear-gradient(90deg, #ffffff 0%, #ffffff 60%, #013220 100%)",
        "linear-dark-blue":
          "linear-gradient(180deg, #000000 0%, #004040 50%, #000000 100%)",
        "linear-indigo":
          "linear-gradient(150deg, transparent 0%, #3f51b5 20%, #3f51b5 40%, #3f51b5 60%, #3f51b5 80%, transparent 100%)",
        "linear-violet":
          "linear-gradient(150deg, #a46ede 0%, #3f51b5 20%, #a46ede 40%, #3f51b5 60%, #a46ede 80%, #3f51b5 100%)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "grey-1": "#fcf6ff33",
        "white-1": "#fcf6f4",
        black: "#000",
        white: "#fff",
      },
    },
    fontFamily: {
      "great-vibes": ["Great Vibes"],
    },

    animation: {
      "flash-top": "animate-flash-top 2s linear",
      left: "animate-left 2s linear",
      "ltr-linear-infinite": "move-bg 10s linear infinite",
      appear: "animate-appear 1s ease-in-out",
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
      "move-bg": {
        "0%": { "background-position": "0 0" },
        "100%": { "background-position": "1000px 0" },
      },
      "animate-appear": {
        "0%": { opacity: 0 },
        "50%": { opacity: 0.5 },
        "100%": { opacity: 1 },
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
