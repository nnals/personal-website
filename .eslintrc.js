module.exports = {
  plugins: ['react', 'prettier', 'babel', 'jest'],
  extends: ['airbnb', 'react-app', 'prettier', 'plugin:jest/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
}
