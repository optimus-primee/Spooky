/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#090E35",
        secondary: "#B9E36B",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        mplus: ["M PLUS Rounded 1c", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        christmas: ["Mountains of Christmas", "cursive"],
      },
      
    },
    
  },
  plugins: [],
}