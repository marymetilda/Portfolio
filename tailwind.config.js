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
  },
  plugins: [],
};
