<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="register"> 
      <h1 class="text-center my-5 font-weight-bold">DORF</h1>
      <InputText ref="id" type="text" marginBottom="1.5rem" placeholder="아이디" v-model="id"/>
      <InputText ref="password" type="password" marginBottom="1.5rem" placeholder="비밀번호" v-model="password"/>
      <InputText ref="username" type="text" marginBottom="3rem" placeholder="이름" v-model="username"/>
      <InputButton marginBottom="1.5rem" text="가입하기" @click.native="register"/>
      <a href="/login" class="text-center small text-secondary">로그인</a>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'RegisterPage',
  layout: 'template',
  data() {
    return {
      id: "",
      password: "",
      username: "",
    }
  },
  methods: {
    async register() {
      // for(let i of this.$children.filter(val => val._name === "<InputText>")){
      //   if(!i.$refs.inputText.value){
      //     this.$toast.error(`${i.placeholder}을(를) 입력해주세요.`);
      //     return false;
      //   }
      // }

      const isDuplicated = await this.isDuplicated();
      if(isDuplicated){
        if(isDuplicated === "error") this.$toast.error("에러가 발생했습니다.");
        else this.$toast.error("중복된 아이디입니다.");
        return false;
      }
      
      const response = await this.$axios({
        method: "post",
        url: `${this.$axios.defaults.baseURL}/register`,
        data: {
          id: this.id,
          password: this.password,
          username: this.username,
        }
      })

      if(!response.data.success){
        this.$toast.error("에러가 발생했습니다.");
        return false
      }

      location.href = "/login"

    },
    async isDuplicated() {
      const response = await this.$axios({
        method: "get",
        url: `${this.$axios.defaults.baseURL}/checkDuplicate`,
        params: {
          id: this.id
        }
      });

      if(!response.data.success){
        return "error";
      } 
      
      return response.data.duplicated;
    }
  }
}
</script>

<style scoped>
.register{
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 5vh 0;
  max-width: 390px;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 20px 0 rgb(0 0 0 / 10%);
  -moz-box-shadow: 0 3px 20px 0 rgba(0,0,0,.1);
  -webkit-box-shadow: 0 3px 20px 0 rgb(0 0 0 / 10%);
  -o-box-shadow: 0 3px 20px 0 rgba(0,0,0,.1);
}
</style>