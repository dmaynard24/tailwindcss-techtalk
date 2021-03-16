const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      cyan: colors.cyan,
      blue: colors.blue,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
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
