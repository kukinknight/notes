import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: () => import('@/views/Login.vue') },
  { path: '/register', component: () => import('@/views/Register.vue') },
  { path: '/detail/:id', component: () => import('@/views/Detail.vue') },
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    redirect: '/article',
    children: [
      { path: 'article', component: () => import('@/views/Layout/Article.vue') },
      { path: 'collect', component: () => import('@/views/Layout/Collect.vue') },
      { path: 'like', component: () => import('@/views/Layout/Like.vue') },
      { path: 'user', component: () => import('@/views/Layout/User.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
