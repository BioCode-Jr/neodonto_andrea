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
        'pink-grad-40': '#A7556B',
        'pink-grad-30': '#B75E76',
        'pink-grad-20': '#CD7089',
        'pink-grad-10': '#E18AA2',
        'pink-grad-05': '#f093ac',
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
