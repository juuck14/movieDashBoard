<template>
    <div class="dashboard">
        <img :src="movieInfo.movie_poster" class="poster"/>
            {{movieInfo.movie_name}}
        <div class="commentArea">
            <MovieComment v-for="comment in comments" :comment="comment" :isMine="$store.state.auth.userId === comment.id"/>
        </div>
        <div class="inputArea">
            <InputCircleButton class="me-2" style="width: 40px; height: 40px; ">
                <font-awesome-icon icon="fa-solid fa-camera"/>
            </InputCircleButton>
            <InputText ref="text" type="text" class="me-2" realPlaceholder="What do you think?..." styles="height: 40px" v-model="message" @enter="send"/>
            <InputCircleButton class="bg-success text-white" style="width: 40px; height: 40px; " @click.native="send">
                <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </InputCircleButton>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return {
            isLoaded: false,
            movie_name: "",
            message: "",
            comments: []
        }
    },
    async asyncData({ $axios, route, store }) {
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

        console.log(store)
        return response.data
    },
    fetch() {
        this.$store.commit('movie/SET_MOVIE', this.movieInfo)
    },
    methods: {
        makeIO() {
            const that = this
            this.socket = this.$nuxtSocket({
                name: 'main',
                channel: '/', 
                emitTimeout: 1000,
                cors: { origin: '*' }
            })

            this.socket.emit('joinRoomServer', { 
                room: this.$route.params.movieIdx,
                id: 'q',
                regdate: new Date()
            })

            this.socket.on('receive', async (data) => {
                const response = await this.$axios({
                    method: "post",
                    url: `${this.$axios.defaults.baseURL}/movie/addComment`,
                    data: data
                })

                if(!response.data.success){
                    this.$toast.error("에러가 발생했습니다.");
                    return false;
                }

                that.comments = [...that.comments, data]
                this.$refs.text.$refs.inputText.value = ''
                this.message = ''
                this.$refs.text.$refs.inputText.focus()
                setTimeout(() => {
                    window.scrollTo(0, document.body.scrollHeight);
                })
            })

            this.socket.on('joinRoomClient', async (data) => {
                console.log(data)
            })
        },
        send() {
            this.$refs.text.$refs.inputText.focus()
            this.socket.emit("send", { 
                movie_idx: this.$route.params.movieIdx,
                id: this.$store.state.auth.userId,
                text: this.message,
                image: null,
                regdate: new Date()
            })
        }
    },
    mounted() {
        this.makeIO();
    }
}
</script>

<style scoped>
.dashboard{
    min-height: calc(100vh - 50px);
}
.poster{
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}
.commentArea{
    padding-bottom: 75px;
    position: relative;
    z-index: 1;
}
.inputArea{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 1rem;
    position: fixed;
    bottom: 1rem;
    z-index: 2;
}
</style>