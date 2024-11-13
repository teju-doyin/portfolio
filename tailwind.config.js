/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#F2E9E4',
        'lavender': '#CEB2BD',
        'grayishPurple': '#8E7692',
        'purple': '#572E54',
        'deepPurple': '#BB445E',
        // 'deepPurple': '#58977F',
      },
    },
  },
  plugins: [],
}

