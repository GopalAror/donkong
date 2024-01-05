/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bright': ' bright 3s infinite cubic-bezier(0.19, 1, 0.22, 1)',
        'jump': 'jump 4s infinite linear',
      },
      keyframes: {
        bright: {
          '0%': { right: '0%' },
          '100%': { right: '150%' }
        },
        jump: {
          '0%': { transform: 'translateY(0px)' },
          '50%' : { transform: 'translateY(-20px)'},
          '100%' : { transform: 'translateY(0px)'},

        }
      }
    },
    fontFamily: {
      azo: ["Azo Sans Uber W01 Regular"],
      montserrat: ["Montserrat"],
    },
    backgroundSize: {
      '100%': '100% 100%',
      'bg-center': 'cover',
    },
  },
  plugins: [],
}

