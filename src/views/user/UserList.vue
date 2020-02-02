<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="12">
          <div>
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="showAddUserDialog">添加用户</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <div>
        <el-form :model="addUserForm" ref="addUserFormRef" :rules="addUserFormRule">
          <el-form-item label="用户名称:">
            <el-input v-model="addUserForm.username" prefix-icon="el-icon-s-custom"></el-input>
          </el-form-item>
          <el-form-item label="密码:  ">
            <el-input v-model="addUserForm.password" prefix-icon="el-icon-s-opportunity"></el-input>
          </el-form-item>
          <el-form-item label="邮件:  ">
            <el-input v-model="addUserForm.email" prefix-icon="el-icon-s-promotion"></el-input>
          </el-form-item>
          <el-form-item label="电话:  ">
            <el-input v-model="addUserForm.phoneNum" prefix-icon="el-icon-s-comment"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="createUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      dialogVisible: false,
      addUserForm: {
        username: 'wangcheng',
        password: '123456',
        email: '',
        phoneNum: ''
      },
      addUserFormRule: {
        username: [{
          required: true, message: '用户名不能为空'
        }],
        password: [],
        email: [],
        phoneNum: []
      }
    }
  },
  methods: {
    showAddUserDialog () {
      this.dialogVisible = true
    },
    createUser () {
      this.$refs.addUserFormRef.validate(async isOK => {
        if (!isOK) {
          return
        }
        const resp = await this.$http.post('/user', this.addUserForm)
        if (resp.data.code === 200) {
          this.$message.success('创建成功')
          this.dialogVisible = false
        } else {
          this.$message.error(resp.data.msg)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-col {
 margin-top: 3px;
}
</style>
