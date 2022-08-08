/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
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
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    dropShadow: {
      'dark': '0px 0px 2px rgba(150, 150, 150, 0.5)',
      'light': '0px 0px 2px rgba(150, 150, 150, 0.5)',
    },
    extend: {
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
