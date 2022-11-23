const axios = require('axios');

export const state = () => ({
  sidebar: false,
  userId: null
})

export const mutations = {
  toggleSidebar: function (state) {
    state.sidebar = !state.sidebar
  },
  LOGIN: function (state, userId) {
    state.userId = userId
  },
  LOGOUT: function () {
    state.userId = null
  },
  SET_USER: function (state, userId) {
    state.userId = userId
  },
  SET_MENU: function (state, data) {
    state.topMenu = data.topMenu
    state.aside = data.aside
  }
}

export const actions = {
  async login({ commit }, { id, password, baseURL }) {
    let { data } = await this.$axios.post(`${baseURL}/login`, { id, password })
    if (!data.success) {
      throw new Error(data.msg)
    }
    commit('LOGIN', id)
  },
  async logout({ commit }) {
      await this.$axios.post('/logout')
      commit('LOGOUT')
  }
}