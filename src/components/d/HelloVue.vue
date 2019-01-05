<template>
  <div id="vue">
{{ message }}
</div>
</template>

<script type="text/javascript">
  export default { 
    name: "HelloVue",
    data (){ 
      return {
        message: "登录成功！"
      }
    }
  }
</script>

<style type="text/css">
  #vue{
    color: green;
    font-size: 28px;
  }
</style>