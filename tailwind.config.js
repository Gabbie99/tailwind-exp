/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      brightness:{
        "brightness":"20"
      },
      backgroundImage:{
        "perfect-suit":"url('/img/perfect suit.jpg')"
      },
      screens:{
        "sm":"480"
      },
      spacing:{
        "big":"48rem"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
