'user strict';
const state = {
  show: true
}
const actions = {
  laodAsyncf({ commit }) {
    commit('loadChangef')
  },
  laodAsynct({ commit }) {
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
