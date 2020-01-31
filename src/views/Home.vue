<template>
  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt=""/>
        <span>XXX后台管理系统</span>
      </div>
      <el-button class="info" @click="logout">登出</el-button>
    </el-header>
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <el-col :span="12">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#333744"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!--一级导航-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <!--二级导航-->
              <el-menu-item index="1-1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一.1</span>
                </template>
              </el-menu-item>
              <el-menu-item index="1-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一.2</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <!--展示区-->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Hello',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      this.$message.info('登出')
    }
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding-left: 0px;
    > div {
      display: flex;
      align-items: center;
      > img {
        width: 40px;
        height: 40px;
      }
    }
  }
  .el-aside {
    background-color: #333744;
  }
  .el-main {
    background-color: #eaedf1;
  }
</style>
