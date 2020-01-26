<template>
  <div class="login_div">
    <div class="login_box">
      <div class="picture">
        <img src="../assets/logo.png" alt=""/>
      </div>
      <div class="login_form">
        <el-form :model="loginForm" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-bind="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-bind="loginForm.password"></el-input>
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
        username: 'wangcheng',
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
    margin-top: 150px;
  }
}
</style>
