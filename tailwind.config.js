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
        // grey
        'grey-900': '#222222',
        'grey-800': '#3b3b3b',
        'grey-700': '#515151',
        'grey-600': '#626262',
        'grey-500': '#7e7e7e',
        'grey-400': '#9e9e9e',
        'grey-300': '#b1b1b1',
        'grey-200': '#cfcfcf',
        'grey-100': '#e1e1e1',
        'grey-50': '#f7f7f7',
        // purple 
        'purple-900': '#371f76',
        'purple-500': '#643b9f',
        'purple-300': '#C8A4D4',
      },
    },
  },
  plugins: [],
}

