const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  lintOnSave: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter'
    })

    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
	 config.plugin('webpack-bundle-analyzer')
		.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // 设置图片去掉base64
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1,
      })
	  
	  
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // @是src的别名
        data: `
          @import "@/styles/common/__variable.scss";
          @import "@/styles/common/__mixins.scss";
        `
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 6006,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
   // proxyTable: {//利用代理服务器去解决跨域问题（本地开发的时候）vue中的方法
   //      '/api':{ 
   //        //'/api' 地址是自己定义的
   //        target:'http://localhost:6002', //你要解决跨域的地址
   //        changeOrigin:true,//在本地搭建一个虚拟服务，去发送种请求拦截服务
   //        pathRewrite:{//地址重写
   //          '^/api':'http://localhost:6002'
   //        }
   //      }
   //    },
  // 第三方插件配置
  pluginOptions: {
    // ...
    chunkFilename: 'chunks/[name]-[chunkhash:8].js',
  },
  // Gzip
  configureWebpack: config => {
	
  },
  // 预渲染
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV !== 'production') return;
  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin({
  //         // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
  //         staticDir: path.join(__dirname, 'dist'),
  //         // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
  //         routes: ['/', '/about','/life','/work'],
  //         // 这个很重要，如果没有配置这段，也不会进行预编译
  //         renderer: new Renderer({
  //           inject: {
  //             foo: 'bar'
  //           },
  //           headless: false,
  //           // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
  //           renderAfterDocumentEvent: 'render-event'
  //         })
  //       }),
  //     ],
  //   };
  // },
}
