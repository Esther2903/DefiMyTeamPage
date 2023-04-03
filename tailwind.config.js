/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '-0.045em',
    },
    extend: {
      fontFamily:{
        'sans':['Montserrat', 'sans-serif'],
        'PTSerif': ['PT Serif', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}