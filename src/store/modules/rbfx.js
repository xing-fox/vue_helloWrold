'user strict';

const state = {
  rbfxRemeber: Object
}

const actions = {
  LocaldataAction ({ commit , state },arg) {
    commit({
      type: 'localDatas',
      amount: arg
    })
  }
}

const mutations = {
  localDatas: (state,arg) => {
    state.rbfxRemeber = Object.assign({},arg)
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
