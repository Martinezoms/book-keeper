module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": { min: "1536px" },
        xs: { max: "540px" },
        xxs: { max: "309px" }
      },
      width: {
        modal: "500px"
      }
    }
  },
  plugins: []
};
