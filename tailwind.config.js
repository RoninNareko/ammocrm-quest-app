/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdx: {
          max: "667px",
        },
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
        miniFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#0E1014",
        lightText: "#E4E5EA",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#B09E54",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
