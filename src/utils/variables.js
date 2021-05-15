// 全局变量
export default {
  install(Vue) {
    Vue.prototype.$variables = {
      requestUrl: 'http://127.0.0.1:6002'
    }

  }
}
