import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VideoView from '../views/VideoView.vue'
import MovieView from '../views/MovieView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Movie',
    name: 'Movie',
    component: MovieView
  },
  {
    path: '/Video',
    name: 'Video',
    component: VideoView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
