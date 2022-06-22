/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      false,
      {
        astrologyTheme: {
          primary: '#0e59ed',
          secondary: '#011742',
          accent: '#ffffff',
          neutral: '#3d4451',
          'base-100': '#ebf1fc',
          'base-200': '#a5b3d1',
        },
      },
    ],
  },
}
