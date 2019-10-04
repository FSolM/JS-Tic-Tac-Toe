module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 2018 },
  extends: 'airbnb-base',
  rules: {
    'no-shadow': 0,
    'no-param-reassign': 0,
    'eol-last': 0,
    'linebreak-style': 0,
    'space-before-function-paren': ['error', 'always'],
  },
};
