import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    }
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        commit('SET_USERS', response.data)
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getSingleUser: state => id => {
      const singleUser = state.users.filter(item => item.id == id)
      return singleUser;
    }
  }

})