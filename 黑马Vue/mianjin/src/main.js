import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Vant)

app.mount('#app')
