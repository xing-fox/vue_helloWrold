import Vue from 'vue'
import Vuex from 'vuex'
import Rbfx from './modules/rbfx'
import Load from './modules/loading'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Rbfx,
    Load
  },
  strict: true,
  strict: process.env.NODE_ENV !== 'production'
})
