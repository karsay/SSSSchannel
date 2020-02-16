import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isActive:1
  },
  mutations: {
    updateIsActive(state, payload) {
      state.isActive = payload.isActive
    }
  }
})

// store.commit('updateIsActive', {
//   isActive: 1
// })

export default store