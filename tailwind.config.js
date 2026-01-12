/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 ESSENCIAL
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#64748B",
      },
    },
  },
  plugins: [],
};
