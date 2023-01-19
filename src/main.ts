import i18n from '@/locales'
import router from '@/router'
import pinia from '@/stores'
import 'normalize.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.less'
import icon from './global/register-icons'

const app = createApp(App)

app.use(i18n)
app.use(icon)
app.use(pinia)
app.use(router)

app.mount('#app')
