import { createRouter, createWebHashHistory } from 'vue-router'
import AcceuilView from '../views/AcceuilView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AcceuilView
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
    component: () => import('../views/ListeArtistesView.vue')
  },
  {
    path: '/artiste/:id',
    name: 'artiste',
    component: () => import('../views/ArtisteView.vue')
  },
  {
    path:'/radio',
    name: 'radio',
    component: () => import('../views/RadioView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
