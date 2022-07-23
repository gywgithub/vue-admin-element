import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/table1',
    name: 'Table1',
    component: () => import('../views/Table1.vue')
  },
  {
    path: '/table2',
    name: 'Table2',
    component: () => import('../views/Table2.vue')
  },
  {
    path: '/table3',
    name: 'Table3',
    component: () => import('../views/Table3.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
