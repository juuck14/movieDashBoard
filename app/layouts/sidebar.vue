<template>
    <div class="d-flex flex-direction-column align-items-center" style="padding-top: 50px;overflow: auto;">
        <div class="d-flex mb-5">
            <div class="me-5 iconArea">
                <font-awesome-icon icon="fa-solid fa-user" />
            </div>
            <div class="iconArea">
                <font-awesome-icon icon="fa-solid fa-film" @click="$emit('closeSidebar');$router.push('/movie/add')"/>
            </div>
        </div>
        <div class="w-100 d-flex flex-wrap mb-5">
            <CommonTitle class="text-center">영화</CommonTitle>
            <MovieLink v-for="movie in $store.state.movieList" :movie="movie" @click.native="$emit('closeSidebar');$router.push(`/movie/${movie.movie_idx}`)"/>
        </div>
        <div class="text-center">
            <a href="#" @click="logout">
                로그아웃
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    methods: {
        async logout() {
            try {
                event.stopPropagation()
                await this.$store.dispatch('auth/logout')
                this.$router.push('/login')
            } catch (error) {
                console.error(error)        
            }
        },
    }
}
</script>

<style scoped>

.sidebar{
    display: flex;
    width: 300px;
    position: fixed;
    height: 100vh;
    background-color: #fdf4f4;
    top: 0;
    right: 0;
    z-index: 1001;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.35s ease;
}

.sidebar.active{
    transform: translateX(0%);
}

.iconArea{
    font-size: 2.5rem;
}
</style>