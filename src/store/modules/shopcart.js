'user strict';

const state = {
  shopCartNum: []  
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
  Decrease: state => state.show = false,
  Increase: state => {
    
  }
}

const getters = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
