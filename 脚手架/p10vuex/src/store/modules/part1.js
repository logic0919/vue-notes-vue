const state = {
  name: 'Andy',
  age: 10
}
const mutations = {
  change (state, n) {
    state.age = n
  },
  changeName (state, n) {
    state.name = n
  }
}
const actions = {
  changename (context, n) {
    setTimeout(() => {
      context.commit('changeName', 'Cindy')
    }, 1000)
  }
}
const getters = {
  upname (state) {
    return state.name.toUpperCase()
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
