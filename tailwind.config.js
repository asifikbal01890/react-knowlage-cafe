/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "cafe-accent":"rgba(17, 17, 17, 0.15)"
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

