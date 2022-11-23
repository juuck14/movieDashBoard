const axios = require('axios');

export const state = () => ({
  movie_idx: null,
  movie_name: null
})

export const mutations = {
  SET_MOVIE: function (state, data) {
    state.movie_idx = data.movie_idx
    state.movie_name = data.movie_name
  }
}
