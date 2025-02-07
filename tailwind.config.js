/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      "2md": "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      lp: "1700px",
    },
    extend: {},
  },
  plugins: [],
};
