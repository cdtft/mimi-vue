<template>
  <div class="login_div">
    <div class="login_box">
      <div class="picture">
        <img src="../assets/logo.png" alt=""/>
      </div>
      <div class="login_form">
        <el-form :model="loginForm">
          <el-form-item>
            <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-s-opportunity"></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <div class="btns-div">
              <el-button type="primary">登陆</el-button>
              <el-button type="info">重置</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      // 表单数据绑定
      loginForm: {
        username: 'wangcheng1',
        password: 'wangcheng'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_div {
  background: #2b4b6b;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_box {
  background: #fff;
  height: 350px;
  width: 500px;
  display: flex;
  justify-content: center;

  .picture {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    transform: translate(0, -50%);
    background-color: #ddd;
    // 元素选择
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .login_form {
    justify-content: center;
    margin-top: 100px;
    width: 100%;
    padding: 20px;
  }
  .btn {
    width: 160px;
    left: 10px;
  }
}
</style>
