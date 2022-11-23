<template>
  <div class="d-flex flex-wrap py-3">
    <CommonTitle>영화</CommonTitle>
    <MovieLink v-for="movie in movieList" :movie="movie" @click.native="$router.push(`/movie/${movie.movie_idx}`)"/>
  </div>
</template>
<script>

export default {
  name: 'IndexPage',
  layout: 'empty',
  middleware: 'auth',
  async asyncData({ $axios }) {
    const response = await $axios.get(`${$axios.defaults.baseURL}/movie/list`)

    if(!response.data.success){
        this.$toast.error("에러가 발생했습니다.");
        return false;
    }

    return {
      movieList: response.data.list
    }
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('auth/logout')
        this.$router.push('/login')
      } catch (error) {
        console.error(error)        
      }
    },
  }
}
</script>
