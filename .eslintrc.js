/* eslint-disable quotes */
/* eslint-disable quote-props */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "require-await": "off",
    curly: ["error", "multi"],
    "prefer-const": "off",
    "no-var": "error",
    "no-console": "warn",
    indent: ["error", 2],
    "vue/no-unused-vars": "off",
    "no-unused-vars": "warn",
    "no-useless-constructor": "off"
  }
}
