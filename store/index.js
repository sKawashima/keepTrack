import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    necessary: 0,
    unnecessary: 0
  },
  mutations: {
    update_necessary (state, value) {
      if (value !== '') state.necessary += eval(value)
    },
    update_unnecessary (state, value) {
      if (value !== '') state.unnecessary += eval(value)
    },
    reset (state) {
      state.necessary = 0
      state.unnecessary = 0
    }
  }
})

export default store
