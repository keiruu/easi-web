/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#2196F3',
        'primary': '#232253',
        'light': '#C6CBDE',
      }
    },
  },
  plugins: [],
}
