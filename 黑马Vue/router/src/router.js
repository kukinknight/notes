import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/MyHome.vue'
import About from './components/MyAbout.vue'
import Movie from './components/MyMovie.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/movie', component: Movie }
  ]
})

export default router
