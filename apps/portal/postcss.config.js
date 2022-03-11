const { join } = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    //'postcss-nested': {},
    'tailwindcss/nesting': 'postcss-nested',
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
