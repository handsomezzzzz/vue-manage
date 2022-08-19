// 进行mock配置
import Mock from 'mockjs'
// 拿mock数据
import MallData from './MockData/mall.js'
import UserData from './MockData/user.js'
import RouterData from './MockData/login.js'
// Mock.mock(n1,n2)，如果接口正确，则向浏览器端发送数据,
// n1可以是直接写一个确切的地址，也可以是一个正则表达式  n2是一个回调函数（存放mock数据的函数）
Mock.mock('/mall/getData',MallData.getStatisticalData) //因为 给出的接口已经处理过请求方式，这里就没有必要再写请求方式
Mock.mock('/user/add','post',UserData.crateUser)
Mock.mock('/user/edit','post',UserData.updataUser)
Mock.mock(RegExp('/user/del'),'get',UserData.deleteUser)

Mock.mock(RegExp('/user/getUser'),'get',UserData.getUserList)
// Mock.mock('/user/getUser','post',UserData.getUserList)

Mock.mock('/login/getMenu','post',RouterData.getMenu)
