import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/gloable.css'
import axios from 'axios'

// 设置axios的默认路径
axios.defaults.baseURL = 'http://localhost:9911'
// 在请求头中带上token
axios.interceptors.request.use(request => {
  request.headers.Authorization = window.sessionStorage.getItem('token')
  return request
})
// 配置Vue组件可以使用axios
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
