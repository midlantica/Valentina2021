module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/recommended", "eslint:recommended"],

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: false,
    },
  },

  rules: {
    "no-console": "off",
    "arrow-parens": 1,
    "generator-star-spacing": 0,
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-debugger": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "ignore",
      },
    ],
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
        },
      },
    ],
    "vue/html-quotes": "warn",
  },
}
