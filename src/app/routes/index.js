import Vue from 'vue'

import Router from 'vue-router'

import Home from '_components/home.vue'

import Details from '_components/details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
      {
      path: '/details',
      component: Details
    }
  ]
})