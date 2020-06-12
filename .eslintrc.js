module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": ["eslint:recommended", "react-app", "plugin:react/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "jest"],
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "no-console": ["warn"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "react/jsx-uses-react": 1,
    "react/prop-types": 0,
    "jest/valid-expect": "error",
    "jest/no-disabled-tests": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/no-truthy-falsy": "error",
    "jest/no-test-prefixes": "error",
    "jest/prefer-hooks-on-top": "warn",
    "jest/no-commented-out-tests": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
