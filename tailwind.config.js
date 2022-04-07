module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:theme=>({
        "hero-pattern":"url('/assets/background.png')",
      }),
    },
  },
  plugins: [],
}
