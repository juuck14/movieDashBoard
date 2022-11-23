<template>
    <div class="commonTitle ps-3 mb-3">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CommonTitle'
}
</script>

<style scoped>
.commonTitle{
    width: 100%;
    font-size: 2rem;
}
</style>