<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :collapse-transition="true"
    >
      <h1 style="padding-left: 25px; padding-right: 25px">
        {{ isCollapse ? "管理" : "通用后台管理系统" }}
      </h1>
      <el-menu-item
        :index="item.name"
        :key="item.name"
        v-for="item in nochildren"
        @click="changePage(item)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        :index="item.name"
        :key="item.name"
        v-for="item in haschildren"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group :key="item.name" v-for="item in item.children">
          <el-menu-item :index="item.name" @click="changePage(item)">{{
            item.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {
      menu: [
        // {
        //   path: "/home",
        //   name: "Home",
        //   label: "首页",
        //   icon: "s-home",
        //   url: "home/Home",
        // },
        // {
        //   path: "/mall",
        //   name: "Mall",
        //   label: "商品管理",
        //   icon: "video-play",
        //   url: "mall/Mall",
        // },
        // {
        //   path: "/user",
        //   name: "User",
        //   label: "用户管理",
        //   icon: "user",
        //   url: "user/User",
        // },
        // {
        //   label: "其他",
        //   icon: "location",
        //   children: [
        //     {
        //       path: "/pageOne",
        //       name: "PageOne",
        //       label: "页面1",
        //       icon: "setting",
        //       url: "other/PageOne",
        //     },
        //     {
        //       path: "/pageTwo",
        //       name: "PageTwo",
        //       label: "页面2",
        //       icon: "setting",
        //       url: "other/PageTwo",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    changePage(item) {
      // 实现路由跳转
      this.$router.push({
        name: item.name,
      });
    },
  },
  computed: {
    // 分类数据，高效处理数据
    nochildren() {
      return this.menuArray.filter((item) => !item.children);
    },
    haschildren() {
      return this.menuArray.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.allstore.isCollapse
    },
    menuArray() {
      return this.$store.state.allstore.menu
    }
  },
};
</script>
<style></style>
