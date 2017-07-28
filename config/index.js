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
      '/app/std_order/report/stdOrderSales_queryAccount.action': { //日报分析首页接口
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/blog/report/blogMainUsersList.action': { //日报分析自己和直属下级接口
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/blog/report/blogMainWeek.action': { //日报分析自己和直属下级接口
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/blog/report/blogPersonDetail.action': { //日报分析自己和直属下级接口
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/blog/report/subDepartments.action': { //日报分析下级接口
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryCost.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryShouldReceive.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryShouldReceiveById.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryHasReceive.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryShouldPaymentById.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryShouldPayment.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryBookBalance.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_querySaleProfit.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryPurchase.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/app/std_order/report/stdOrderSales_queryLossCustomers.action': {
        target: 'http://172.31.0.147:8080',
        changeOrigin: true,
        pathRewrite: {}
      }
    },
    cssSourceMap: false
  }
}
