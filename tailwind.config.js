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
          50: '#f7f9f0',
          100: '#eef3dc',
          200: '#dce6bd',
          300: '#c9d99e',
          400: '#b8cd80',
          500: '#b0c775',
          600: '#ACBF69',
          700: '#8ca54a',
          800: '#708638',
          900: '#5e6d33',
          950: '#2e3619',
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

