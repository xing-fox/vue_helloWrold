var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 3001,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/blog/report/blogMainSubmit.action': { //日报分析首页接口
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/blog/report/blogMainUsersList.action': { //日报分析自己和直属下级接口
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/blog/report/subDepartments.action': { //日报分析下级接口
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      }
    },
    cssSourceMap: false
  }
}
