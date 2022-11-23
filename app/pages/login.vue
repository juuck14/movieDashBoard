<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="login">
      <h1 class="text-center my-5 font-weight-bold">DORF</h1>
      <InputText ref="id" type="text" marginBottom="1.5rem" placeholder="아이디" v-model="id" />
      <InputText ref="password" type="password" marginBottom="3rem" placeholder="비밀번호" v-model="password" />
      <InputButton marginBottom="1.5rem" text="로그인" @click.native="login" />
      <a href="/register" class="text-center small text-secondary">가입하기</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  layout: 'empty',
  data() {
    return {
      id: "",
      password: ""
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', {
          id: this.id,
          password: this.password,
          baseURL: this.$axios.defaults.baseURL
        })
        this.$router.push("/")
      } catch (e) {
        console.error(e)
      }
    },
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 390px;
  height: 90vh;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 20px 0 rgb(0 0 0 / 10%);
  -moz-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .1);
  -webkit-box-shadow: 0 3px 20px 0 rgb(0 0 0 / 10%);
  -o-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .1);
}
</style>