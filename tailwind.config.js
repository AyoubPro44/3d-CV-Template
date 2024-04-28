/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myColor: '#4746FF', 
      },
    },
  },
  plugins: [],
}
