<template>
    <div :style="'position: relative; margin-bottom: ' + this.marginBottom" >
        <input ref="inputText" :type="type" class="inputText" @change="changeValue"
        @focusin="togglePlaceholder('in')" @focusout="togglePlaceholder('out')"/>
        <div ref="dynamicPlaceholder" class="dynamicPlaceholder">{{ this.placeholder }}</div>
    </div>
</template>

<script>
export default {
    name: "inputText",
    props: ["type", "marginBottom", "placeholder", "value"],
    methods: {
        togglePlaceholder(type) {
            if(type === "in") this.$refs.dynamicPlaceholder.classList.add("on")
            else if(this.$refs.inputText.value == '') this.$refs.dynamicPlaceholder.classList.remove("on")
        },
        changeValue() {
            this.$emit("input", this.$refs.inputText.value)
        }
    }
}
</script>

<style scoped>
.inputText{
    color: #4b2354;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 52px;
    background: 0 0;
    padding: 15px 20px 0 23px;
    background-color: #fff;
    border: none;
    outline: none;
    border-radius: 15px;
    box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
    transition: box-shadow 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.inputText:focus{
    box-shadow: 0 10px 50px 5px rgb(0 0 0 / 10%);
}
.dynamicPlaceholder{
    color: #9a8a9e;
    position: absolute;
    top: 50%;
    left: 23px;
    transform: translateY(-50%);
    transition: all .1s ease-out;
}
.dynamicPlaceholder.on{
    transform: translateY(-120%);
    font-size: 0.75rem;
}
</style>
