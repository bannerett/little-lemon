module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.html', 'legacy/**/*.js'],
      options: {
        tabWidth: 4,
        parser: 'html',
      },
    },
  ],
};
