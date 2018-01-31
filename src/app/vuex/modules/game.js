export default {
  state: {
    data: {},
    list: [],
    temp: []
  },
  mutations: {
    updateGame (state, data) {
      state.data = data
    },
    updateGameList (state, data) {
      state.list = data
    },
    updateGameTemp (state, data) {
      state.temp = data
    }
  },
  actions: {
    updateGame (context, data) {
      context.commit('updateGame', data)
    },
    updateGameList (context, data) {
      context.commit('updateGameList', data)
    },
    updateGameTemp (context, data) {
      context.commit('updateGameTemp', data)
    }
  }
}
