import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/podcast',
    name: 'podcast',
    // route level code-splitting
    // this generates a separate chunk (podcast.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: () => import(/* webpackChunkName: "podcast" */ '../views/PodcastView.vue')
  },
  {
    path: '/ListeArtistes/:id',
    name: 'ListeArtistes',
    component: () => import('../views/ListeArtistes.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
