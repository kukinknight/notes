import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsisV, faEdit, faTimes)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).mount('#app')
