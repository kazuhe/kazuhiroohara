module.exports = {
  css: {
    // 全ページ共有のscssを読込
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/define.scss';`
      }
    }
  }
}
