import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ArticleItem from '@/components/ArticleItem.vue'

import Vant from 'vant'
Vue.use(Vant)
import 'vant/lib/index.css'

Vue.component('ArticleItem', ArticleItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
