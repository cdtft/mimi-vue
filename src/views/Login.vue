<template>
  <div class="login_div">
    <div class="login_box">
      <div class="picture">
        <img src="../assets/logo.png" alt=""/>
      </div>
      <div class="login_form">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-s-opportunity"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="btn">
              <el-button type="primary" @click="login">登陆</el-button>
              <el-button type="info" @click="resetLoginForm">重置</el-button>
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
        username: 'admin',
        password: 'admin'
      },
      loginFormRules: {
        username: [
          { required: true, message: '登陆名不能为空', trigger: 'blur' },
          { min: 5, max: 12, message: '登陆名长度为5-12', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置表单，定义表单引用对象，获取引用对象
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login: function () {
      this.$refs.loginFormRef.validate(async isOK => {
        if (!isOK) {
          return
        }
        // 登陆请求
        const resp = await this.$http.post('/login', this.loginForm)
        if (resp.data.code === 200) {
          this.$message.success('登陆成功')
          window.sessionStorage.setItem('token', resp.data.data.token)
          this.$router.push('/hello')
        } else {
          this.$message.error('登陆失败')
        }
      })
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
    display: flex;
    justify-content: flex-end;
  }
}
</style>
