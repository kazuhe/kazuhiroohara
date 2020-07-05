module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ["error", {
      "singleQuote": true, // singleQuoteを有効
      "semi": false, // セミコロンを禁止
      "no-extra-semi": "error", // 余分なセミコロンを禁止
      "no-unexpected-multiline": "error", // 意図に反して2つの文が接続された箇所を警告
    }]
  },
};
