export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: { config: './tailwindcss-config.js' },
    autoprefixer: {},
  },
}
