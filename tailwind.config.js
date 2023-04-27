module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fondo: '#010036',
        granrectangulo1: '#00365D',
        granrectangulo2: '#22153C',
        testimonios: '#130039',
        barra: '#00365D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
