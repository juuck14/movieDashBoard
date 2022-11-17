<template>
    <button type="button" class="inputButton" :style="'margin-bottom: ' + this.marginBottom">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "inputT2ext",
    props: ["marginBottom", "text"],
}
</script>

<style scoped>
.inputButton{
    color: #fff;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 52px;
    background: 0 0;
    padding: 0 20px 0 23px;
    background: -webkit-linear-gradient(right,#00dbde,#fc00ff);
    border: none;
    outline: none;
    border-radius: 30px;
    box-shadow: 0 5px 30px 0 rgb(3 216 222 / 20%);
    transition: box-shadow 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
