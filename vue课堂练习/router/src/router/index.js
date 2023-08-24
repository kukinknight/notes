import { createRouter, createWebHistory } from 'vue-router'
import MyProduct from '../views/MyProduct.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: () => import('../views/MyHome.vue')
    },
    {
      path: '/MyProduct/:page?/:tag?', //产品 
      name: 'MyProduct',
      component: MyProduct,
    },
    {
      path: '/MyProduct/:id', // 产品详情页面 动态路径参数 以冒号开头
      name: 'ProductDetails',
      component: () => import('../views/ProductDetails.vue')
    },
    {
      path: '/MyContact', // 联系
      name: 'MyContact',
      component: () => import('../views/MyContact.vue')
    },
    {
      path: '/MyArticle', //文章
      name: 'MyArticle',
      component: () => import('../views/MyArticle.vue')
    },
    {
      path: '/PageView',
      name: 'PageView',
      component: () => import('../views/PageView.vue'),
    }
  ]
})

export default router
