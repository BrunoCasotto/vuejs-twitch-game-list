export default {
  state: {
    data: ''
  },
  mutations: {
    updateSearch (state, data) {
      state.data = data
    }
  },
  actions: {
    updateSearch (context, data) {
      context.commit('updateSearch', data)
    }
  }
}
