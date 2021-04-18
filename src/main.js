import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import About from './components/About.vue'


const app = createApp(App)
app.component('About', About)
app.use(router).mount('#app')
