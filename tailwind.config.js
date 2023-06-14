/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['baloo', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography')
  ],
}

