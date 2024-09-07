/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'dark-pink': '#8c0d3b',
        'pink-400': '#a6566b',
        'pink-300': '#d59195',
        'pink-200': '#e6b9b9',
        'light-pink': '#f2dce0',
      },
      fontFamily: {
        'tt-norms': ['"TT Norms Pro"', 'sans-serif'],
      },
      textDecorationThickness: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
      },
    },
  },
  plugins: [],
}
