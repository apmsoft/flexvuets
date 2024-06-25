/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  darkMode: 'media',
  content: [
    "./debug/**/*.{html,js}"
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake","dim"],
  },
  theme: {
    extend: {
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8
      },
      minHeight : {
        '1/2' : '50%',
        '1/3' : '33.333333%',
        '2/3' : '66.666667%',
        '1/2vh' : '50vh',
        '1/3vh' : '33vh',
        '2/3vh' : '66vh'
      },
      maxHeight : {
        'max-h-screen-sm' : '640px',
        'max-h-screen-md' : '768px',
        'max-h-screen-lg' : '1024px'
      },
      colors :{
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked']
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
        'h4': { fontSize: theme('fontSize.md') },
        'h5': { fontSize: theme('fontSize.sm') },
        'h6': { fontSize: theme('fontSize.xs') },
      })
    }),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/typography"),
    require('daisyui'),
  ]
}