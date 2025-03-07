/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#26A6FB",
        secondary: "#020202",
        neural: "#F0C4A1B2",
      },
    },
  },
  plugins: [],
};
