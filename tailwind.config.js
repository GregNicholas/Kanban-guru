/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'main-purple': '#635FC7',
      'main-purple-hover': '#A8A4FF',
      'black': '#000112',
      'v-dark-gray': '#20212C',
      'd-gray': '#2B2C37',
      'd-lines': '#3E3F4E',
      'm-gray': '#828FA3',
      'l-lines': '#E4EBFA',
      'l-gray': '#F4F7FD',
      'white': '#FFFFFF',
      'red': '#EA5555',
      'red-hover': '#FF9898'
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
