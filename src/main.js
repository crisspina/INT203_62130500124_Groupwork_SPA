import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import ModelBlock from './components/ModelBlock.vue'


const app = createApp(App)
app.component('box', ModelBlock)
app.use(router).mount('#app')
