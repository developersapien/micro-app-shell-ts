const doctorXtheme = require('@doctorx/theme/doctorxTheme')

module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./build/*.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...doctorXtheme,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
