<template>
  <div id="app" style="overflow: hidden">
    <Header></Header>
    <Nuxt />
  </div>
</template>


<script>
import Header from './header.vue'
export default {
  components: {Header}
}
</script>