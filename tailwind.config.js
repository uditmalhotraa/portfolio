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
      'lightgray': '#999',
      'darkgray': '#666',
      'black': '#000000',
      'accent-dark': '#672AE9',
      'accent-light': '#A000FE',
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
        'boxy-light': 'rgba(0, 0, 0, 0.1) 0px 3px 10px;',     
        'boxy-dark': 'rgba(255, 255, 255, 0.2) 0px 3px 10px;',    
        'mob': '0 -3px 6px -1px rgb(0 0 0 / 0.1), 0 -1px 4px -2px rgb(0 0 0 / 0.1);',
        'mob-dark': '0 -3px 6px -1px rgb(255 255 255 / 0.2), 0 -1px 4px -2px rgb(255 255 255 / 0.2);',
        'web-dark': '0 4px 6px -1px rgb(255 255 255 / 0.2), 0 2px 4px -2px rgb(255 255 255 / 0.2);',
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
