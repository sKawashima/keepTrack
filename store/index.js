import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    necessary: 0,
    unnecessary: 0
  },
  mutations: {
    necessary (state, value) {
      state.necessary += value
    },
    unnecessary (state, value) {
      state.unnecessary += value
    }
  }
})

export default store
