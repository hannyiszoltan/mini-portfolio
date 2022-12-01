/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode:'class',
  theme: {
    extend: {
      animation:{
        'fade-in':'fade 2s'
      },
      keyframes:{
        fade:{
          '0%':{opacity:0},
          '100%':{opacity:1}
        }
      },
      fontSize:{
        xxs:'0.6rem'
      },
      fontFamily:{
        inter:['inter', 'serif'],

      }
    },
  },
  plugins: [],
};
