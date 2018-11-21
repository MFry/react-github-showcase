// Guide to eslint config: https://eslint.org/docs/user-guide/configuring
//
// this js eslintrc is prioritized over other eslintrc formats
// ref: https://eslint.org/docs/user-guide/configuring#configuration-file-formats
// ref: https://medium.com/stephenkoo/how-to-set-up-create-react-app-redux-react-router-redux-thunk-prettier-scss-airbnb-eslint-dda0bba5616a
//
// This config brings prettier for formatting and eslint for best practices
//  together in harmony. (ref: https://stackoverflow.com/q/46201647/1771644)
//
//  Sometime useful rules
// "react/jsx-one-expression-per-line": 0,
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['flowtype', 'react', 'jsx-a11y', 'import', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', { parser: 'flow' }],
    'react/no-did-update-set-state': 0,
  },
};
