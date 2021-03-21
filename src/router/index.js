import Vue from 'vue'
import VueRouter from 'vue-router'
import postiApp from '../views/posti-app.vue'
import userProfile from '../views/user-profile.vue'
import postiEdit from '../cmps/posti-edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'postiApp',
    component: postiApp
  },

  {
    path: '/user/:id',
    name: 'userProfile',
    component: userProfile
  },

  {
    path: '/posti/edit/:postiId?',
    component: postiEdit
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
