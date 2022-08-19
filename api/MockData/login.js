import Mock from "mockjs"
// 模拟菜单权限
export default {
  getMenu: config => {
    console.log(config)
    const {username,password} = JSON.parse(config.body)
    if(username === 'admin' && password === 'admin'){
      return {
        code:20000,
        menu: [
          {
            path: "/home",
            name: "Home",
            label: "首页",
            icon: "s-home",
            url: "/home/Home.vue",
          },
          {
            path: "/mall",
            name: "Mall",
            label: "商品管理",
            icon: "video-play",
            url: "/mall/Mall.vue",
          },
          {
            path: "/user",
            name: "User",
            label: "用户管理",
            icon: "user",
            url: "/user/User.vue",
          },
          {
            label: "其他",
            icon: "location",
            children: [
              {
                path: "/pageOne",
                name: "PageOne",
                label: "页面1",
                icon: "setting",
                url: "/other/PageOne.vue",
              },
              {
                path: "/pageTwo",
                name: "PageTwo",
                label: "页面2",
                icon: "setting",
                url: "/other/PageTwo.vue",
              },
            ],
          },
        ],
        token: Mock.Random.guid(),
        message:'获取成功'
      }
    }else if(username === 'xiaoxiao' && password === 'xiaoxiao'){
      return {
        code:20000,
        menu:[
          {
            path: "/home",
            name: "Home",
            label: "首页",
            icon: "s-home",
            url: "/home/Home",
          },
          {
            path: "/mall",
            name: "Mall",
            label: "商品管理",
            icon: "video-play",
            url: "/mall/Mall",
          }
        ],
        token: Mock.Random.guid(),
        message:'获取成功'
      }
    }else{
      return {
        code: -999,
        data:{
          message: '用户不存在,请重新输入'
        }
      }
    }
  }
}