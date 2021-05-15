import router from '@/router';

// 全局函数
export default {
  install(Vue) {
    Vue.prototype.$utils = {
        a: () => {
          return 'a'
        },
        routeTo: (path)=>{
          return router.push(path);
        },
		// 设置缓存
		setStorage: (key, data, type = 'sessionStorage')=> {
			let storeStr = JSON.stringify(data);
			return window[type].setItem(key, storeStr);
		},
		// 获取缓存
		getStorage: (key, type = 'sessionStorage')=> {
			return JSON.parse(window[type].getItem(key))
		},
		// 清除缓存
		removeStorage: (key, type = 'sessionStorage')=> {
			return window[type].removeItem(key)
		},
    }

  }
}
