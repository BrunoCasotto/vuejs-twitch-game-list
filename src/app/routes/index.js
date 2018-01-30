import Vue from 'vue'

import Router from 'vue-router'

import Home from '_components/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})