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
        neural1: "#A8DDD5B2",
        neural2: "#D5B1E8B2",
        neural3: "#F5F5F599",
      },
    },
  },
  plugins: [],
};
