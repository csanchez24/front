const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  corePlugins: {},
};
