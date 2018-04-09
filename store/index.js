import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    necessary: 0,
    unnecessary: 0
  },
  mutations: {
    update_necessary (state, value) {
      state.necessary += eval(value)
    },
    update_unnecessary (state, value) {
      state.unnecessary += eval(value)
    }
  }
})

export default store
