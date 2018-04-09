import Vuex from 'vuex'
import localforage from 'localforage'

const db = localforage.createInstance({
  name: 'TOKT'
})

function setDB(value) {
  db.setItem('statistics', value)
    .then(() => {
      console.log('save')
    })
    .catch((e) => {
      console.log('error')
    })
}

const store = () => new Vuex.Store({
  state: {
    necessary: 0,
    unnecessary: 0
  },
  mutations: {
    set_necessary (state, statistics) {
      if (statistics['0'] !== '') state.necessary = eval(statistics['0'])
      if (statistics['1'] !== '') state.unnecessary = eval(statistics['1'])
      console.log(statistics)
    },
    update_necessary (state, value) {
      if (value !== '') state.necessary += eval(value)
      setDB([this.state.necessary, this.state.unnecessary])
    },
    update_unnecessary (state, value) {
      if (value !== '') state.unnecessary += eval(value)
      setDB([this.state.necessary, this.state.unnecessary])
    },
    reset (state) {
      state.necessary = 0
      state.unnecessary = 0
    }
  }
})

export default store
