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
          50: '#effef7',
          100: '#dafeeb',
          200: '#b8fadd',
          300: '#81f4c3',
          400: '#43e5a0',
          500: '#1acd81',
          600: '#0fa968',
          700: '#108754',
          800: '#126b45',
          900: '#11583b',
          950: '#063122',
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

