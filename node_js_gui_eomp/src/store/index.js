import { createStore } from 'vuex'

const dataUrl = "empty_for_codi_to_put_stuff_in";


export default createStore({
  state: {
    // products
    watches: null
  },

  getters: {
  },

  mutations: {
    // products
    setWatches(state, watches) {
      state.watches = watches
    }
  },

  actions: {
  // products
  async fetchWatches(context) { 
    try {
      let res = await fetch(dataUrl)
      let {watches} = await res.json()
      context.commit('setWatches', watches)
    } catch (e) {
      console.log(e.message);
    }
  }
  },

  modules: {
  }
})