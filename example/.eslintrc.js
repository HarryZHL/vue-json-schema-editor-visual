module.exports = {

  root: true,

  parserOptions: {

    parser: 'babel-eslint'

  },

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', '@vue/standard'],

  // add your custom rules here

  // it is base on https://github.com/vuejs/eslint-config-vue

  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  plugins: ['promise']

}
