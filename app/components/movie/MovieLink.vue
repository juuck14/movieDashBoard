<template>
    <div class="movieLink">
        <img :src="this.movie.movie_poster" class="poster"/>
        {{this.movie.movie_name}}
    </div>
</template>

<script>
export default {
    name: 'MovieLink',
    props: ['movie']
}
</script>

<style scoped>
.movieLink{
    width: 50%;
    height: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
}

.poster{
    width: 100%;
    position: absolute;
    z-index: -1;
    opacity: .5;
}
</style>