module.exports = {
  content: [
    "./content/**/*.{html,md}",
    "./layouts/**/*.html",
    "./themes/careercanvas/layouts/**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}
