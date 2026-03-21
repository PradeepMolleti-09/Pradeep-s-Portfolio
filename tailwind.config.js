/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['"Italianno"', 'cursive'],
      },
      colors: {
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
