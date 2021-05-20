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
		setStorage: (key, data, type = 'localStorage')=> {
			let storeStr = JSON.stringify(data);
			return window[type].setItem(key, storeStr);
		},
		// 获取缓存
		getStorage: (key, type = 'localStorage')=> {
			return JSON.parse(window[type].getItem(key))
		},
		// 清除缓存
		removeStorage: (key, type = 'localStorage')=> {
			return window[type].removeItem(key)
		},
    }

  }
}
