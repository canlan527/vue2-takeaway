import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: 'home',
    component: () => import('@/views/home')
  },
 {
   name: 'profile',
   path: '/profile',
   component: () => import('@/views/profile')
 }
]

const router = new VueRouter({
  routes
})

export default router
