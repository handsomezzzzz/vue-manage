// 认识axios，他是一个封装库，基于promise封装，基于xhr的二次封装
import axios from "axios";
import config from "@/config"

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequst {
  // 配置axios的相关信息
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  // 上面的过程是初始化过程
  
  // 定义axios的相关配置
  getInsideConfig(){
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }
  // 定义拦截器
  interceptors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        console.log(config)
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // 对响应数据做点什么
        console.log(response)
        return response;
      },
      function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }
  // 下面的函数，是当我们后续发送axios请求的时候，会调用的一个函数
  // request函数会接收一个相关配置(这些配置信息就是上面的 getInsideConfig() 函数定义的信息)
  request(options){
    // 首先对 axios 进行一个实例的创建
    const instance = axios.create()
    // 将配置的相关信息传给 options   下面的用法为es6语法中的解构语法，可以通过这种方式拿到里面的数据
    options = {...this.getInsideConfig(),...options}
    // 之后调用拦截器，对instance 也就是axios实例 进行拦截判断
    this.interceptors(instance)
    // 之后return到实例
    return instance(options)
  }
}

export default HttpRequst

// 上面就是  简单的axios 的二次封装  ：实现了基本的  配置与aixos 的结合  可以对当前环境进行判断 之后改变 请求地址
