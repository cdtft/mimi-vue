import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Hello from '../views/Hello'

Vue.use(VueRouter)

const routes = [
  // 设置路由
  { path: '/login', component: Login },
  // 重定向路由
  { path: '/', redirect: '/login' },
  { path: '/home', component: Hello }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  } else {
    let token = window.sessionStorage.getItem('token')
    if (!token) {
      return next('/login')
    }
  }
})

export default router
