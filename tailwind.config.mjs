/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{astro, jsx, ts,tsx}",
    "./components/**/*.{astro, jsx, ts,tsx}",
    "./app/**/*.{astro, jsx, ts,tsx}",
    "./src/**/*.{astro, jsx, ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  darkMode: ["class"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
