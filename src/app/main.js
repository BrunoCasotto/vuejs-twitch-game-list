window.$ = window.jQuery = require('jquery')

import 'es6-promise'

import Vue from 'vue'

import store from './vuex/store'

import router from '_routes'

const app = new Vue({
  router,
  store
}).$mount('#app')
