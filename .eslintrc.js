/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        semi: true,
        printWidth: 120,
        arrowParens: "always",
      },
    ],
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-floating-promises": "off",
  },
};
