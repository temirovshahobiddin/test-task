import Vue from 'vue'
import Vuex from 'vuex'

//modules
import auth from './modules/auth.module'
import appeals from './modules/appeals.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    appeals
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },

})
