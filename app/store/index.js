
export const state = () => ({
    movieList: []
})

export const mutations = {
    SET_MENU: function (state, data) {
        state.movieList = data
    }
}
  
export const actions = {
    // nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
    async nuxtServerInit({ commit }, { req }) {
        console.log(111111111111)
	    const { data } = await this.$axios.get(`${this.$axios.defaults.baseURL}/movie/list`)
        console.log(22222222222222222)
	    if (!data.success) {
            throw new Error(data.msg)
		console.error(data.msg)
        }
        commit('SET_MENU', data.list)

	console.log(req.session)
        if (req.session && req.session.userId) {
            commit('auth/SET_USER', req.session.userId)
        }
    },
}
