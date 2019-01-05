<template>
  <div class="hello">
    <h1>welcome!</h1>
    <p>{{ msg1 }} <input type="text" v-model="id"></p>
    <p>{{ msg2 }} <input type="password" v-model="pw"></p>
    <button @click="sign_in">登录</button>
    <button @click="sign_up">注册</button>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg1: '用户名',
      msg2: '密码  ',
      id:'',
      pw:'',
    }
  },
  methods:{
    sign_in:function(){this.$router.push('/d')},
    sign_up:function(){this.$router.push('/signup')}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
