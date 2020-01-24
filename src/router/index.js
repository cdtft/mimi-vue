import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  // 设置路由
  {
    path: '/login', component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
