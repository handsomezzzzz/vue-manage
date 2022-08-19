import Vue from "vue";
import App from "./App.vue";
import {
  Container,
  Aside,
  Header,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Row,
  Button,
  Avatar,
  Empty,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Card,
  Col,
  Input,
  Dialog,
  Form,
  FormItem,
  Select,
  Option,
  OptionGroup,
  Switch,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Message,
  MessageBox
} from "element-ui";
import router from "../router";
import "element-ui/lib/theme-chalk/index.css";
import '../api/mock.js'//这里必须全局导入，不然mock不生效
import store from '../store/store.js'
import http from 'axios'
import qs from 'qs'

Vue.config.productionTip = false;
Vue.prototype.$http = http
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$qs = qs

Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Row);
Vue.use(Button);
Vue.use(Avatar);
Vue.use(Empty);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Card)
Vue.use(Col)
Vue.use(Input)
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

// 导航守卫，不能直接通过url跳转，不能再密码或者账号不正确的情况下跳转
router.beforeEach((to,from,next) => {
  console.log(to.name)
  store.commit('getToken')
  const token = store.state.login.token
  console.log(token)
  if(to.name !== 'Login' && !token){
    next({name : 'Login'})
  }else if(to.name === 'Login' && token){
    next({name: 'Home'})
    store.commit('clearToken')
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: (h) => h(App),
  created(){//因为添加的是动态的menu  ，这里处理为了，刷新页面时，在渲染vue之前的生命周期里就执行添加menu，防止刷新页面，menu丢失
    store.commit("addMenu", router);
  }
}).$mount("#app");
