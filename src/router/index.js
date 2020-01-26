import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  // 设置路由
  {
    path: '/login', component: Login
  },
  // 重定向路由
  {
    path: '/', redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
