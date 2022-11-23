<template>
    <label>
        <input ref="file" type="file" class="d-none" @change="thumbnail"/>
        <div class="inputImage d-flex justify-content-center align-items-center" 
        :style="this.styles + ' overflow: hidden;'">
            <img ref="img" src="" class="w-100 h-100 d-none" style="object-fit: cover;" />
            <div ref="default" class="d-flex flex-column align-items-center text-secondary">
                <span style="font-size: 3rem;">
                    <font-awesome-icon icon="fa-solid fa-image"/>
                </span>
                대표 이미지 추가
            </div>
        </div>
    </label>
</template>

<script>
export default {
    name: "inputImage",
    props: ["styles"],
    data() {
        return{
            src: ""
        }
    },
    methods: {
        async thumbnail() {
            const src = await this.$base64(this.$refs.file.files[0]).catch(console.error);
            this.$refs.default.classList.remove("d-flex")
            this.$refs.default.classList.add("d-none")
            this.$refs.img.classList.remove("d-none")
            this.$refs.img.classList.add("d-flex")
            this.$refs.img.setAttribute("src", src)

            this.$emit("setImage", src);
        }
    }
}
</script>

<style scoped>
.inputImage{
    border-radius: 15px;
    box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
}
</style>
