/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'cloudone': 'cloud_one 25.5s ease-in 5.9s infinite',
        'cloudtwo': 'cloud_two 18.5s ease-in .9s infinite',
      },
      keyframes: {
        cloud_one: {
          '0%': { transform: 'translateX(290%)' },
          '100%': { transform: 'translateX(-250%)' },
        },
        cloud_two: {
          '0%': { transform: 'translateX(160%)' },
          '100%': { transform: 'translateX(-250%)' },
        }
      },
      screens: {
        md: { max: "767px" },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        bc: "#1F1F23",
        primary: " #FFFFFF",
        secondary: "#D6E3E4",
        danger: "#F8EF12",
        lightGrey: "#3F3E41",
      },
      boxShadow: {
        custom: "0 0 10px #F8EF12",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require( 'tailwind-scrollbar'),
  ],
}
