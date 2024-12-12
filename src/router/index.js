import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'  // 改成和組件名稱一致

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage  // 使用導入的 HomePage 組件
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/viewParagraph/:id',
    name: 'viewParagraph',
    component: () => import('../views/viewParagraph.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router