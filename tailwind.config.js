module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      screens: {
        'lg': {'max': '1176px'},
        'md': '900px',
        'sm': '768px',
        'mob': '600px',
        'xs': '500px'
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
