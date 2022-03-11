const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'src/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
