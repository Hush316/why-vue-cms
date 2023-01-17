import router from '@/router'
import pinia from '@/stores'
import 'normalize.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.less'
import registerIcons from './global/register-icons'

const app = createApp(App)

app.use(registerIcons)
app.use(pinia)
app.use(router)

app.mount('#app')
