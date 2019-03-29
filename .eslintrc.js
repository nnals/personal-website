module.exports = {
  plugins: ['react', 'prettier', 'babel', 'jest'],
  extends: ['airbnb', 'react-app', 'prettier', 'plugin:jest/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-brace-presence': 0,
    'jsx-a11y/label-has-for': 0, // deprecated
    'jsx-a11y/label-has-associated-control': 0,
  },
}
