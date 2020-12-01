module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true
  },

  extends: [
    'plugin:vue/essential',
    // '@vue/prettier',
    '@vue/typescript'
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'warning',
    'vue/no-confusing-v-for-v-if': 'off',
    'vue/no-v-html': 'off',
    'vue/order-in-components': 'warning',
    'vue/arrow-spacing': 'warning',
    'vue/eqeqeq': 'error',
    "strict": 0,
    // 'prettier/prettier': [
    //   'warn',
    //   {
    //     printWidth: 100,
    //     tabWidth: 2,
    //     semi: false,
    //     useTabs: false,
    //     singleQuote: true,
    //     trailingComma: 'es5',
    //     endOfLine: 'auto',
    //     parser: 'babel'
    //   }
    // ]
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
};
