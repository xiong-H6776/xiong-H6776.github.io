module.exports = {
  content: [
    "./content/**/*.{html,md}",
    "./layouts/**/*.html",
    "./themes/careercanvas/layouts/**/*.html"
  ],
  safelist: [
    "fade-in-visible"
  ],
  darkMode: "class",
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}
