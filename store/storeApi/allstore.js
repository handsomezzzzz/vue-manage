import Cookie from 'js-cookie'
export default {
  state:{
    isCollapse: false,
    menu: []
  },
  mutations: {//只有通过mutation才能更改state状态，不能直接调用mutation，而是要用store.commit('collapseAside')等
    collapseAside(state){
      state.isCollapse = !state.isCollapse
    },
    setMenu(state,val){
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))  //防止刷新页面丢失menu ,与处理 token是一样的  ,存在cookie里面的应该都是json对象
    },
    clearMenu(state){
      state.menu = [],
      Cookie.remove('menu')
    },
    addMenu(state,val){
      if(!Cookie.get('menu')){
        return 
      }
      const menu = JSON.parse(Cookie.get('menu'))//如果cookie里面有menu,就直接拿来用，因cookie里面是JSON格式，所以转成对象处理
      state.menu = menu
      const menuArray = []
      const main = '../views'
      menu.forEach(item => {
        if(item.children){
          item.children.map(item => {
            return item
          })
          menuArray.push(...item.children)
        }else{
          menuArray.push(item)
        }
      })
    }
  }
}
