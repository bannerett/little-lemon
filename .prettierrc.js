module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.html'],
      options: {
        tabWidth: 2,
        parser: 'html',
      },
    },
  ],
};
