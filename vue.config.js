const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dachun-project/'  // 這裡改成你的 GitHub repository 名稱
    : '/'
})