<template>
    <div class="d-flex justify-content-center align-items-center w-100">
        <div class="addMovie">
            <h1 class="text-center my-4">영화 추가</h1>
            <InputText marginBottom="1.5rem" type="text" placeholder="제목" v-model="movieName"/>
            <InputImage styles="width: 100%; aspect-ratio: 1/1.414; margin-bottom: 1.5rem;" 
                @setImage="setImage" />
            <InputButton text="추가하기" @click.native="addMovie"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movieName: "",
            moviePoster: ""
        }
    },
    methods: {
        async addMovie() {
            const response = await this.$axios({
                method: "post",
                url: `${this.$axios.defaults.baseURL}/movie/add`,
                data: {
                    movieName: this.movieName,
                    moviePoster: this.moviePoster,
                }
            })

            if(!response.data.success){
                this.$toast.error("에러가 발생했습니다.");
                return false
            }
            
            location.href = `./${response.data.idx}`
        },

        setImage(val) {
            this.moviePoster = val
        }
    }
}
</script>

<style scoped>
.addMovie{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 390px;
  padding: 1rem;
}
</style>