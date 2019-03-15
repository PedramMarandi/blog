module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint-config-airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-uses-react": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
}
