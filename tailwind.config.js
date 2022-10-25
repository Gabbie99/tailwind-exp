/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      brightness:{
        "brightness":"8"
      },
      backgroundImage:{
        "mini":"url('/img/mini.jpg')",
        "poster":"url('/img/mini2.jpg')" ,

      },
      screens:{
        "sm":"480"
      },
      spacing:{
        "big":"48rem"
      },
      backgroundColor:{
       "linear": "linear-gradient(146deg, rgba(45,58,87,1) 19%, rgba(45,58,87,1) 30%, rgba(45,58,87,1) 44%, rgba(24,39,71,1) 45%, rgba(255,255,255,1) 45%)"
      }
    },
    fontFamily:{
      bioRhyme:['BioRhyme', 'serif']
    }
  },
  plugins: [],
}
