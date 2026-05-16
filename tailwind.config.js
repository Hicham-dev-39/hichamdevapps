/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./index.html", "./privacy-policy.html"],
  theme: {
    extend: {
      colors: {
        ink: "#2f2116",
        ocean: "#8b5e3c",
        mint: "#a97956",
        mist: "#fff9f2",
        line: "#dec8b3"
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(15, 23, 42, 0.28)"
      }
    }
  },
  plugins: []
};