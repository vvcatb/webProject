import Vue from 'vue'
import Vuex from './kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1
  },
  mutations: {
    add (state) {
      state.counter++
    }
  },
  actions: {
    add ({ commit }) {
      commit('add')
    }
  },
  modules: {},
  getters: {
    getCounter: (state) => state.counter
  }
})
