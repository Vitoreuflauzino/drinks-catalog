import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DrinkDetail from '../views/DrinkDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/drink/:id', component: DrinkDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router