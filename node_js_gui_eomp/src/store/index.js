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
    // delete button watches
    deleteWatch(state, watchID) {
      state.watches = state.watches.filter(watch => watch.watchID !== watchID);
    },
    // delete button users
    deleteuser(state, userID) {
      state.users = state.users.filter(user => user.userID !== userID);
    },
    // add watch
    addWatch(state, newWatch) {
      state.watches.push(newWatch);
    },
    // add watch
    addUser(state, newUser) {
      state.users.push(newUser);
    },
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
    // delete button watches
    async deleteWatch(context, watchID) {
      try {
        await axios.delete(`${dataUrl}product/${watchID}`);
        context.commit("deleteWatch", watchID);
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    // delete button users
    async deleteUser(context, userID) {
      try {
        await axios.delete(`${dataUrl}user/${userID}`);
        context.commit("deleteUser", userID);
        location.reload()
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
  // add watch
  async addWatch(context, watchdata) {
    try {
      await axios.post(`${dataUrl}product`, watchdata);
      context.commit("addWatch", watchdata);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
  // add user
  async addUser(context, userdata) {
    try {
      await axios.post(`${dataUrl}user`, userdata);
      context.commit("addUser", userdata);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
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