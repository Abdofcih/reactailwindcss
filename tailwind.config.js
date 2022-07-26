/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      screens: { sm: "480px" },
      fontFamily: ["Poppins", "sans-serif"],
      spacing: { "90%": "90%", "80%": "80%" }
    }
  },
  plugins: []
};
