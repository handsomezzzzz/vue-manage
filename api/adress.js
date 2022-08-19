import axios from 'axios'

// 调用接口,发送请求，获取对应接口的mock数据
export const getData = () =>{//这里默认就是 get请求
  return axios.request({
    url:'/mall/getData'
  })
}

export const getUser = (params) =>{
  return axios.request({
    url:'/user/getUser',
    method:'get',
    params
  })
}

// export const getMenu = ({params}) => {
//   return axios.request({
//     url:'/login/getMenu',
//     method:'post',
//     params
//   })
// }