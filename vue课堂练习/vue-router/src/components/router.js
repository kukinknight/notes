import {createRouter,createWebHashHistory} from 'vue-router'

import Home from './MyHome.vue'
import Movie from './MyMovie.vue'
import About from './MyAbout.vue'

const router  = createRouter({
   history:createWebHashHistory(),
   routes:[
    {path:'/home',component:Home},
    {path:'/movie',component:Movie},
    {path:'/about',component:About}
   ]
})

export default router