import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import MyComponent from '../views/MyComponent.vue'
import Ping from '../views/Ping.vue'
import Pong from '../views/Pong.vue'
import HelloName from '../views/HelloName.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/myComponent',
    name: 'MyComponent',
    component: MyComponent
  },
  {
    path: '/ping',
    name: 'Ping',
    component: Ping
  },
  {
    path: '/pong',
    name: 'Pong',
    component: Pong
  },
  {
    path: '/hello/:name',
    name: 'HelloName',
    component: HelloName
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
