import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './routers'

createApp(App)
    .use(roteador)
    .mount('#app')
