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
          <el-menu
            :default-active="activePath"
            background-color="#333744"
            text-color="#fff"
            active-text-color="#3e8fbc"
            :unique-opened="true" :router="true">
            <!--一级导航-->
            <el-submenu :index="firstMenu.id + ''" v-for="firstMenu in menuList" :key="firstMenu.id">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>{{ firstMenu.authName }}</span>
              </template>
              <!--二级导航-->
              <el-menu-item :index="secondMenu.path" v-for="secondMenu in firstMenu.children" :key="secondMenu.id" @click="saveActivePath(secondMenu.path)">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{ secondMenu.authName }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
      </el-aside>
      <!--展示区-->
      <el-main>
         <!--路由占位符-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Hello',
  created () {
    this.getAllMenu()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  data () {
    return {
      menuList: [],
      activePath: ''
    }
  },
  methods: {
    logout () {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
      return this.$message.info('登出')
    },
    async getAllMenu () {
      const { data: resp } = await this.$http.get('/menu/list')
      this.menuList = resp.data
    },
    saveActivePath (path) {
      window.sessionStorage.setItem('activePath', path)
      this.activePath = path
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
  .el-menu {
    border-right: 0px;
  }
</style>
