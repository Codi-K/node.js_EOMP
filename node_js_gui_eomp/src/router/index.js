import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: "/watch/:watchID",
    name: "singlewatch",
    props: true,
    component: () => import("../views/ProductDisplayView.vue"),
  },
  {
    path: "/price",
    name: "price",
    component: () => import("../views/PriceView.vue"),
  },
  {
    path: "/name",
    name: "name",
    component: () => import("../views/NameView.vue"),
  },
  {
    path: "/rolex",
    name: "rolex",
    component: () => import("../views/RolexView.vue"),
  },
  {
    path: "/ap",
    name: "ap",
    component: () => import("../views/AudemarsPiguetView.vue"),
  },
  {
    path: "/pp",
    name: "pp",
    component: () => import("../views/PatekPhilippeView.vue"),
  },
  {
    path: "/hublot",
    name: "hublot",
    component: () => import("../views/HublotView.vue"),
  },
  {
    path: "/th",
    name: "th",
    component: () => import("../views/TagHeuerView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router