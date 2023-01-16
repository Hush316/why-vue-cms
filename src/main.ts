import router from '@/router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
const app = createApp(App)

app.use(createPinia())
app.use(router)

const info = {
  name: 'kabuto',
  age: 22,
}

app.mount('#app')
