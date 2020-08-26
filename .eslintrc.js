module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.test.jsx', './config/setupTests.js'] }],
    'linebreak-style': 0,
    'max-len': 0,
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-console': 'off'
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@home', './src/components/home'],
          ['@navbar', './src/components/navbar'],
          ['@people', './src/components/people'],
          ['@portfolio', './src/components/portfolio'],
          ['@components', './src/components'],
          ['@globals', './src/globals'],
          ['@hooks', './src/hooks'],
          ['@images', './src/images'],
          ['@pages', './src/pages'],
          ['@api', './src/api'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
