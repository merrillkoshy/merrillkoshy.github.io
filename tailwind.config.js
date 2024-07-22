/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      typescript: "#007acc",
      white: "#ffffff",
      black: "#000000",
      "typescript-dark": "#00539c",
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
      linkedin: {
        50: "#0e76a8",
        500: "#0077b5",
      },
      gmail: {
        50: "#C71610",
        500: "#C71610",
      },
      gelb: "#f7df1e",
    },
    extend: {},
  },
  plugins: [],
};
