/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      "left": "animate-left 2s linear",
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
  plugins: [],
};
