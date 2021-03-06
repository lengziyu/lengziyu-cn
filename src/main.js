import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 全局函数
import utils from './utils/utils'
Vue.use(utils);

// 全局变量
import variables from './utils/variables'
Vue.use(variables)

// 重置默认样式
import 'normalize.css/normalize.css'

// 动画库
import 'animate.css' 

// 全局样式
import '@/styles/app.scss'



new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
