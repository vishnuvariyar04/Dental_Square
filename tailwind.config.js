/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f6f7f2',
          100: '#e8ebdc',
          200: '#d3d8bc',
          300: '#b7bf93',
          400: '#9ba670',
          500: '#7a8c54',
          600: '#556b2f',
          700: '#475a28',
          800: '#3c4923',
          900: '#343e21',
          950: '#1a200f',
        },
        sand: {
          50: '#fbf9f4',
          100: '#f6f2e7',
          200: '#ece3ce',
          300: '#dfceaa',
          400: '#d0b583',
          500: '#c39d63',
          600: '#a87f4c',
          700: '#86613e',
          800: '#6f5038',
          900: '#5b4231',
          950: '#332319',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
};

