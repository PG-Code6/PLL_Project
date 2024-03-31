<template>
  <div class="root">
  <div class="container">
    <div class="header">
      <h1>登录</h1>
    </div>
    <div class="main">
        <span>
          <i class="el-icon-user"></i>
          <input type="text" id="userName" placeholder="账号">
        </span><br>
        <span>
          <i class="el-icon-lock"></i>
          <input type="password" id="pwd" placeholder="密码">
        </span><br>
        <el-button type="primary" id="login-button" v-on:click="Return">登录</el-button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods:{
    Return(){
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
.root {
  height: 100vh;
  width: 100vw;
  font-family: sans-serif;
  background-image: url("../assets/img/6.jpg");
  /*background-color: #0093E9;*/
  /*background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);*/
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
}

.container {
  width: 380px;
  margin: 15% auto;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 17px #333;
}

.header {
  text-align: center;
  padding-top: 75px;
}

.header h1 {
  color: #333;
  font-size: 45px;
}

.main {
  text-align: center;
}

.main input,
button {
  width: 300px;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 40px;
  box-sizing: border-box;
  font-size: 15px;
  color: #333;
  margin-bottom: 40px;
}

.main button {
  padding-left: 0;
  background-color: #83acf1;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 70px;
}

.p11{
  background: #aec7c7;
}

.main button:hover {
  box-shadow: 2px 2px 5px #555;
  background: #7799d4;
}

.main input:hover {
  box-shadow: 2px 2px 5px #555;
  background-color: #ddd;
}

.main span {
  position: relative;
}

.main i {
  position: absolute;
  left: 13px;
  color: #333;
  font-size: 20px;
  top: 2px;
}
</style>
