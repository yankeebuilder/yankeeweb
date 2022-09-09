import { createRouter, createWebHistory } from 'vue-router'
import BuiderView from '../views/BuilderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BuiderView
    }
  ]
})

export default router
