import Vue from 'vue'
import Vuex from 'vuex'
import allstore from './storeApi/allstore'
import login from './storeApi/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {//这里是个对象，如果没有这个大括号，则没有反应
    allstore,
    login
  }
})
