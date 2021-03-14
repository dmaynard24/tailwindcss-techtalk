const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray,
      cyan: colors.cyan,
      blue: colors.blue,
    },
    extend: {
      colors: {
        'tailwind-blue': '#3cb6d4'
      },
      outline: {
        cyan: `1px solid ${colors.cyan['300']}`
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      pointerEvents: ['disabled'],
      borderWidth: ['focus'],
      outline: ['focus'],
    },
  },
  plugins: [],
}
