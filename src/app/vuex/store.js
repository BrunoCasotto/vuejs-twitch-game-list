import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import Game from '_vuex/modules/game'

import Search from '_vuex/modules/search'

const store = new Vuex.Store({
  modules: {
    Game,
    Search
  }
})

export default store
