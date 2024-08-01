/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'filter': "linear-gradient(rgba(40, 60, 90, 0.9), rgba(40, 60, 90, 0.9)), url('../public/img/cta-bg.jpg')",
      },
    }
  },
  plugins: [],
}

