import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BulkAgreementGroupView from '@/views/bottomViews/BulkAgreementServiceView/Group.vue'
import BulkAgreementOfferView from '@/views/bottomViews/BulkAgreementServiceView/Offer.vue'
import BulkAgreementQueryView from '@/views/bottomViews/BulkAgreementServiceView/Query.vue'
const routes = [
  {

  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
