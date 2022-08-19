import Cookie from 'js-cookie'
export default {
  state:{
    token:''
  },
  mutations:{
    setToken(state,val){
      state.token = val
      Cookie.set('token',val) //cookie.set方法  生成 token
    },
    clearToken(state){
      state.token = ''
      Cookie.remove('token')//cookie.remove方法  删除token
    },
    getToken(state){
      state.token = this.state.token || Cookie.get('token')   //cookie.get方法  获取 token  
      //上面的意思是：当原来的state.token有东西的话，就直接用原来的state.token，没有的话就在cookie获取
    }
  }
}