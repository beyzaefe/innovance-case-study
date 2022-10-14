/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#111419",
        main: "#0D0E10",
        mainBlue: "#1F2937",
        white: "#FFFFFF",
        grey1: "#565B63",
        grey2: "#93979D",
        grey3: "#C7CAD0",
        grey4: "#F1F2F4",
        grey5: "#9CA3AF",
        orange: "#FF725C",
        bodyText: "#2D3748",
        loginBackground: "#E5E5E5",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
