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

  rules: {},

  plugins: ['promise']

}
