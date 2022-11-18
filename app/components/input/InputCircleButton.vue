<template>
    <button type="button" class="inputButton">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "inputT2ext",
    props: ["text"],
}
</script>

<style scoped>
.inputButton{
    background-color: #fff;
    line-height: 1.2;
    display: block;
    width: 52px;
    height: 52px;
    border: none;
    outline: none;
    text-align: center;
    border-radius: 30px;
    box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
}
</style>
