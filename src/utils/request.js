import axios from 'axios'
import $variables from './variables'
import qs from 'qs'
import Vue from 'vue'
import router from '@/router';

let vm = new Vue();

const service = axios.create({
  baseURL: vm.$variables.requestUrl, // api 的 base_url
  timeout: 10000,
})
// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


// 拦截请求头
service.interceptors.request.use(
  config => {
    if(config.method == 'POST'){
		config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// 拦截实体
service.interceptors.response.use(
  response => {
	if(response.data.code === '200'){
		
	}
	
	return response.data;

  },
  error => {
    return Promise.reject(error)
  }
)

export default service
