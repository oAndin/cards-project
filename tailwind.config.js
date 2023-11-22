/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark-grey': '#121212',
        'easy-white': '#fff'
      },
    },
  },
  plugins: [],
}

