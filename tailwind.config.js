/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    letterSpacing: {
      'close':'-0.0125em',
      'closer':'-0.015625em',
      'closest':'-0.020625em',
    },
    lineHeight: {
      '19': '1.1875rem',
      '20': '1.25rem',
      '22': '1.375rem',
      '23': '1.4375rem',
      '26': '1.625rem',
      '29': '1.8125rem',
      '35': '2.1875rem',

    },
    fontSize: {
      '13x': '0.8125rem',
      '14x': '0.875rem',
      '15x': '0.9375rem',
      '16x': '1rem',
      '18x': '1.125rem',
      '20x': '1.25rem',
      '24x': '1.5rem',
    },

    extend: {



      colors: {
        'fuchisia-bold': '#AD1FEA',
        'indigo-blue': '#4661E6',
        'slate-bolder': '#373F68',
        'violet-white': '#F2F4FF',
        'slate-white': '#F7F8FD',
        'slate-bold': '#3A4374',
        'slate-gray':'#647196',
        'orange-fade': '#F49F85',
        'cyan-fade': '#62BCFA',
        'red-bold': '#D73737',


      },

    },
  },
  plugins: [],
}
