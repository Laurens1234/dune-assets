/** @type {import('prettier').Config} */
const config = {
  tabWidth: 2,
  singleQuote: true,
  printWidth: 110,
  plugins: ['./node_modules/prettier-plugin-jsdoc/dist/index.js'],
  overrides: [
    {
      files: '*.svg',
      options: { parser: 'html' },
    },
  ],
};

export default config;
