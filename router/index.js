// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 下面涉及嵌套路由，要想实现页面跳转，必须在父路由对应的页面下，设置 router-view
const routes = [
  {
    path:'/',
    name:'Main',
    component: () => import('../views/Main'),
    children:[
      {
        path:'/home',
        name:'Home',
        component: () => import('../views/home/Home')
      },
      {
        path:'/mall',
        name:'Mall',
        component: () => import('../views/mall/Mall')
      },
      {
        path:'/user',
        name:'User',
        component: () => import('../views/user/User')
      },
      {
        path:'/pageOne',
        name:'PageOne',
        component: () => import('../views/other/PageOne')
      },
      {
        path:'/pageTwo',
        name:'PageTwo',
        component: () => import('../views/other/PageTwo')
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/login/Login')
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
