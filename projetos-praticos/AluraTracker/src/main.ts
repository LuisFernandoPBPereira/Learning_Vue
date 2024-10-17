import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './routers'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(roteador)
app.mount('#app')

