<template>
    <div class="dashboard">
        <img :src="movie_poster" class="poster"/>
        this is movie chanel
        |{{ $route.params.movieIdx }}|{{movie_name}}
        <div class="inputArea">
            <InputCircleButton class="me-3" style="width: 40px; height: 40px; ">
                <font-awesome-icon icon="fa-solid fa-camera"/>
            </InputCircleButton>
            <InputText type="text" class="me-3" realPlaceholder="What do you think?..." styles="height: 40px"/>
            <InputCircleButton class="bg-success text-white" style="width: 40px; height: 40px; ">
                <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </InputCircleButton>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $axios, route }) {
        console.log(route.params.movieIdx)
        const response = await $axios({
            method: "get",
            url: `${$axios.defaults.baseURL}/movie/info`,
            params: {
                movieIdx: route.params.movieIdx
            }
        })

        if(!response.data.success){
            this.$toast.error("에러가 발생했습니다.");
            return false
        }

        return response.data.data[0]
    },
    data() {
        return {
            movie_name: ""
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.dashboard{
    min-height: 100vh;
}
.poster{
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
.inputArea{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    position: fixed;
    bottom: 1.5rem;
}
</style>