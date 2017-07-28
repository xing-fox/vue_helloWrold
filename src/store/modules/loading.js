'user strict';

const state = {
  show: true
}

const actions = {
  laodAsyncF({ commit }) {
    commit('loadChangef')
  },
  laodAsyncT({ commit }) {
    commit('loadChanget')
  }
}

const mutations = {
  loadChangef: state => state.show = false,
  loadChanget: state => state.show = true
}

const getters = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
