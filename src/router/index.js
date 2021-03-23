import Vue from 'vue'
import VueRouter from 'vue-router'
import postiApp from '../views/posti-app.vue'
import userProfile from '../views/user-profile.vue'
// import postiNew from '../views/posti-new.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'postiApp',
    component: postiApp
  },

  {
    path: '/user/:userId',
    name: 'userProfile',
    component: userProfile
  },

  // {
  //   path: '/posti/new',
  //   component: postiNew
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
