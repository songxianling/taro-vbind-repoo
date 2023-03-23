module.exports = {
  root: true,
  env: {
    browser: true,
    // 必填
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 8,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false
    }
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        printWidth: 160
      }
    ],
    'no-undef': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: []
      }
    ],
    'vue/v-on-event-hyphenation': 0, // html上的事件允许驼峰格式phoneCallback
    '@typescript-eslint/no-explicit-any': 0
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
