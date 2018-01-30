window.$ = window.jQuery = require('jquery')
import 'es6-promise'

import Vue from 'vue'

import VueRouter from 'vue-router'

import gridWrapper from '_components/grid_wrapper.vue'

import store from './vuex/store'

const routes = [
  { path: '/', component: gridWrapper }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  router: router,
  el: '#app',
  store: store,
  components: {
    gridWrapper
  }
})
