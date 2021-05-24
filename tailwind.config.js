module.exports = {
  
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main-background': "url('/images/background-photo.jpeg')",
      })
    },
  },
  variants: {
    extend: {
      justifyItems: ['hover', 'focus'],
    },
  },
  plugins: [],
}
