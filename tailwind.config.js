/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Tumhare components yahi me hai
  ],
  darkMode: "class", // ✅ dark mode class-based
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
    },
  },

  plugins: [],
};
