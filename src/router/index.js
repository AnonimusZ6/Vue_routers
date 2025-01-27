import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import '@/assets/main.css';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/addTask",
    name: "AddTask",
    component: AddTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
