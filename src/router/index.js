import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Event from '../views/Event'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
