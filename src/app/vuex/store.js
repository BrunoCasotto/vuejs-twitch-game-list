import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import Game from '_vuex/modules/game'

const store = new Vuex.Store({
  modules: {
    Game
  }
})

export default store
