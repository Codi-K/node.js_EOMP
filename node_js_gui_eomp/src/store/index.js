import { createStore } from 'vuex'
import axios from "axios";

const dataUrl = "https://node-js-eomp.onrender.com/";


export default createStore({
  state: {
    // watches
    watches: null,
    // users
    users: null,
    // msg
    msg: null,
    // spinner
    spinner: null,
    // view more
    watch: null,
    // cookies
    token: null,
  },

  getters: {
  },

  mutations: {
    // watches
    setWatches(state, watches) {
      state.watches = watches
    },
    // watches
    setUsers(state, users) {
      state.users = users
    },
    // setMsg
    setMsg(state, msg) {
      state.msg = msg
    },
    // spinner
    setSpinner(state, value) {
      state.spinner = value;
    },
    // view more
    setWatch(state, watch) {
      state.watch = watch;
    },
    // cookies
    setToken(state, token) {
      state.token = token;
    },
  },

  actions: {
  // watches
  async fetchWatches(context) {
    try {
      const { data } = await axios.get(`${dataUrl}products`);
      context.commit("setWatches", data.results);
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
  // users
  async fetchUsers(context) {
    try {
      const { data } = await axios.get(`${dataUrl}users`);
      context.commit("setUsers", data.results);
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
  // view more
  async fetchWatch(context, watchID) {
    try {
      const { data } = await axios.get(`${dataUrl}product/${watchID}`);
      context.commit("setWatch", data.result);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  }
  },
  modules: {
  }
})