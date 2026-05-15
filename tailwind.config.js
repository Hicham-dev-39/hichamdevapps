/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./index.html", "./privacy-policy.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        ocean: "#0b3b66",
        mint: "#059669",
        mist: "#f8fafc",
        line: "#dbe4ef"
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(15, 23, 42, 0.28)"
      }
    }
  },
  plugins: []
};