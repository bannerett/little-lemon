module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'comma-dangle': [2, { arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline' }],
    'max-len': [2, 120],
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration', unnamedComponents: 'function-expression' },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 0,
    semi: [2, 'always'],
  },
};
