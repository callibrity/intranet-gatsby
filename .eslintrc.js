module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
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
          ['@wiki', './src/components/wiki'],
          ['@components', './src/components'],
          ['@globals', './src/globals'],
          ['@hooks', './src/hooks'],
          ['@images', './src/images'],
          ['@pages', './src/pages'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
