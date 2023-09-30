/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "376px",
    },
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        offWhite: "hsl(0, 0%, 94%)",
        lightGrey: "hsl(0, 0%, 86%)",
        smokeyGrey: "hsl(0, 1%, 44%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
      keyframes: {
        grow: {
          "0%": { rotate: "0deg", scale: "1.0", opacity: "0.0" },
          "50%": { rotate: "180deg", scale: "0.1", opacity: "0.1" },
          "100%": { rotate: "360deg", scale: "1.0", opacity: "1.0" },
        },
      },
      animation: {
        "grow-text": "grow 0.5s linear",
      },
    },
  },
  plugins: [],
};
