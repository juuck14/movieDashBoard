<template>
  <div id="app" style="overflow: hidden">
    <Header></Header>
    <Nuxt class="content"/>
  </div>
</template>


<script>
import Header from './header.vue'
export default {
  components: {Header}
}
</script>

<style scoped>
.content{
  margin-top: 50px;
  background-color: #fdf4f4;
}
</style>