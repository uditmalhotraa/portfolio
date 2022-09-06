/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'slate': '#F5F5F7',
      'lightgray': '#D6D6D6',
      'darkgray': '#333333',
      'black': '#000000',
    },
    fontWeight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    dropShadow: {
      'dark': '0px 0px 2px rgba(150, 150, 150, 0.5)',
      'light': '0px 0px 2px rgba(150, 150, 150, 0.5)',
    },
    extend: {
      boxShadow: {
        'boxy-light': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',     
        'boxy-dark': '0 10px 15px -3px rgb(155 155 155 / 0.5), 0 4px 6px -4px rgb(155 155 155 / 0.5)',    
      },
      width: {
        'double': '200%',
        'tripple': '300%',
      },
      animation: {
        'animate-bounce': 'bounce 5s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)', 'animation-timing-function': 'cubic-bezier(0.8, 0.8, 0.8, 1)' },
          '50%': { transform: 'translateY(0)', 'animation-timing-function': 'cubic-bezier(0.1, 0.1, 1, 1)'}
        }
      },
    },
  },
  plugins: [],
}
