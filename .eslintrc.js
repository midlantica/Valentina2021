module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    "prettier",
    "prettier/vue",
  ],
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2020,
      "ecmaFeatures": {
      "jsx": false
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': 1,
    'generator-star-spacing': 0,
    quotes: ['error', 'single', 'avoid-escape'],
    semi: [
      'error',
      'never'
    ],
    'prettier/prettier': ['error', { singleQuote: true, parser: 'vue' }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'ignore'
      }
    ],
    // "vue/html-indent": "error",
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": false,
      "ignores": []
    }],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "any"
        }
      }
    ]
  },

}
