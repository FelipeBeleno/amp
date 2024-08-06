/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      xs: { max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      width: {
        "50vw": "50vw",
        "w-90vw": "90vw",
      },
      height: {
        "75vh": "75vh",
      },
      colors: {
        customOrange: "#f2b805",
        customBlue: "#033e8c",
        customGray: "rgba(243,243,246,255)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
