module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // allow debugger during development
    // allow paren-less arrow functions
    'arrow-parens': 1,
    // INDENT DEFAULT AT 2 SPACES
    'vue/html-quotes': ['error', 'single', { avoidEscape: false }],
    // indent: ['error', 2],
    // 'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'generator-star-spacing': 0,
    quotes: ['error', 'single', 'avoid-escape'],
    // quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'space-before-function-paren': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'ignore',
      },
    ],
  },
}
