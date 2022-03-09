module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010101",
        "egg": "#E7E6E1",
        "creme": "#F7F6E7",
        "creamsicle": "#F2A154",
        // "sludge": "#314E52",
        "sludge": "#231A31",
      },

      fontFamily: {
        jost: ["Jost", "sans-serif"],
        sen: ["Sen", "sans-serif"],
      },

      screens: {
        custom: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
