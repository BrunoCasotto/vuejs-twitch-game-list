export default {
  state: {
    data: {}
  },
  mutations: {
    updateGame (state, data) {
      state.data = data
    }
  },
  actions: {
    updateGame (context, data) {
      context.commit('updateGame', data)
    }
  }
}
