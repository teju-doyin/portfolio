/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rose': '#EDD8E2',
        'cherry': '#BF7896',
        'dahlia': '#DFB8CC',
        'raspberry': '#D895B1',
        'red-wine': '#9B5372',
      },
    },
  },
  plugins: [],
}

