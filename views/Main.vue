<template>
  <div class="main">
    <el-container>
      <el-aside width="none">
        <aside-component></aside-component>
      </el-aside>
      <el-container>
        <el-header>
          <header-component></header-component>
        </el-header>
        <el-main>
          <router-view></router-view>
          <!-- 下面实现嵌套路由 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import AsideComponent from '@/components/AsideComponent.vue'
export default {
  name: "Main",
  data() {
    return {};
  },
  components:{
    AsideComponent,
    HeaderComponent
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;

}

.el-aside {
  background-color:#545c64;
  height: 100vh;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 20px;
}
</style>
