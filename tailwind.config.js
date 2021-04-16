const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayblue: '#f0efeb',
        cream: {
          gray: '#eddcd2',
          light: '#fff1e6',
        },
        brown: {
          dark: '#cb997e',
          light: '#ddbea9',
        },
        green: {
          dark: '#a5a58d',
          light: '#b7b7a4',
          darkgreen: '#6b705c'
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}