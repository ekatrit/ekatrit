module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ek-blue': '#33B0FF',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}