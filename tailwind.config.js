/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#fffdff',
        'offWhite': '#f7f3f5',
        'pink': '#e22c75',
        'lavender': '#ea95d3', //for the about me background text
        'deepBlue': '#061d40',
        'blackish': '#282626',
        'green': '#77c4ab',
        'gray': '#36424d',
      },
    },
  },
  plugins: [],
}

