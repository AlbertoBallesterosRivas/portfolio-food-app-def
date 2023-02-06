/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'orderItem': '0px 0px 15px -3px rgba(0,0,0,0.75)',
      }
    },
  },
  plugins: [],
}
