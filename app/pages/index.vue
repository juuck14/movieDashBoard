<template>
  <div>this is
    {{ user }}
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const response = await $axios.get(`${$axios.defaults.baseURL}api/`);
    const user = response.data;
    return { user }
  }
}
</script>
