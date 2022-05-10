module.exports = {
  devServer: {
    /* 自动打开浏览器 */
    open: process.env.VUE_APP_PREVIEW,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE_URL,
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
