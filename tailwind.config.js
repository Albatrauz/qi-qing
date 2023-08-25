module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
      screens: {
        xl: "1177px",
        lg: { max: "1176px" },
        md: { max: "900px" },
        sm: { max: "768px" },
        mob: { max: "600px" },
        xs: { max: "500px" },
    },
    extend: {
      fontFamily: {
        fontTitle: ['"Playfair Display"', 'serif'],
        fontText: ['"Jost"', 'sans-serif'],
      },
      colors: {
        'primary': '#6A0F02',
        'secondary': '#BEA6A0',
        'tertiary': '#D19F9D',
        'tint': 'D9D9D9',
        'text': '#484848',
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('autoprefixer'),
  ],
}
