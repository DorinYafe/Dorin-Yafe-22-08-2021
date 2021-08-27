module.exports = {
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'react'
  ],
  parser: "babel-eslint",
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "rules": {
    "max-len": ["error", { "code": 120, "ignoreComments": true }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "comma-dangle": [
      "error",
      {
        "functions": "never"
      }
    ],
    "semi": [2, "always"],
    "no-unused-expressions": 0,
    "no-underscore-dangle": "off",
    "global-require": 0,
    "no-param-reassign": 0,
    "no-prototype-builtins": 0,
    "react/jsx-fragments": 0,
    "no-plusplus": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": false,
        "object": false
      }
    }],
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0
  }
};