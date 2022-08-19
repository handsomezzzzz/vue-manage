<template>
  <div>
    <el-row type="flex" class="row-bg">
      <el-button type="primary" icon="el-icon-menu" @click="changeAside"></el-button>
      <div>
        <el-dropdown trigger="click">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="closePage">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods:{
    changeAside(){
      return this.$store.commit('collapseAside')
    },
    closePage(){
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$router.push({
        name:'Login'
      })
    }
  }
};
</script>
<style>
.row-bg {
  justify-content: space-between;
  align-content: center;
}
.el-button {
  padding: 0px;
  width: 40px;
  height: 40px;
  position: relative;
  top: 10px;
}
.el-avatar {
  width: 40px;
  height: 40px;
  border: 1px solid white;
  box-shadow: 0px 0px 10px 2px white;
  border-radius: 50%;
  position: relative;
  top: 10px;
}
</style>

      
    