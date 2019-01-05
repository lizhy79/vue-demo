<template>
  <div class="hello">
    <h2>注册</h2>
    <p>用户名 <input type="text" v-model="id"></p>
    <p>密码 <input type="password" v-model="pw1"></p>
    <p>确认密码 <input type="password" v-model="pw2"></p>
    <button @click="signup">确定</button>
    <p v-if="seen1">注册成功</p>
    <p v-if="seen2">密码不一致</p>
    <p><router-link to="/">返回</router-link></p>
    
  </div>
</template>

<script>
export default {
  name: 'Sign_up',
  data () {
    return {
      id:'',
      pw1:'',
      pw2:'',
      seen1:false,
      seen2:false,
    }
  },
  methods:{
    signup:function(){
    if(this.pw1==this.pw2)
    {this.seen1=true;this.seen2=false;}
    else{this.seen2=true;this.seen1=false;}
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}
</style>
