<template>
  <div class="mall">
    <el-main>
      <el-card class="box-card">
        <div style="height: 250px" ref="Lecharts"></div>
      </el-card>
      <el-row>
        <el-col :span="12">
          <el-card class="box-card"> 
            <div style="height: 245px" ref="Vecharts"></div>
          </el-card></el-col>
        <el-col :span="12">
          <el-card class="box-card"> 
            <div style="height: 245px" ref="Uecharts"></div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
// 发送axios请求接口
import { getData } from "../../api/adress";
// 引入无版本echarts
import * as echarts from "echarts";
export default {
  name: "Mall",
  data() {
    return {};
  },
  // 一般axios请求会放在mounted() 下面
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        // 折线图
        const line = data.orderData;
        const xData = line.date;
        const series = [];
        const keyArray = Object.keys(line.data[0]);
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: line.data.map((item) => item[key]),
            type: "line",
          });
        });
        const Loption = {
          title:{
            text: '折线图'
          },
          xAxis: {
            data: xData,
          },
          yAxis: {},
          series,
          legend: {
            //框架提示
            data: keyArray,
          },
          tooltip: {
            //文本提示
            trigger: "axis",
          },
        };
        const L = echarts.init(this.$refs.Lecharts);
        L.setOption(Loption)
        //饼状图
        const video = data.videoData
        const Voption = {
          title: {
            text: '饼状图'
          },
          color:[
            '#0f78f4',
            '#dd536b',
            '#9462e5',
            '#a6a6a6',
            '#e1bb22',
            '#39c362',
            '#3ed1cf'
          ],
          tooltip:{
            trigger:'item'
          },
          series:[
            {
              data: video,
              type: 'pie'
            }
          ]
        }
        const V = echarts.init(this.$refs.Vecharts)
        V.setOption(Voption)
        // 柱状图
        const user = data.userData
        const uData = []
        const sData = []
        user.forEach(item => {
          uData.push(item.data)
          sData.push(item.active)
        })
        const Uoption = {
          title:{
            text:'柱状图'
          },
          xAxis: {
            data: uData
          },
          yAxis:{},
          series:[
            {
              type:'bar',
              data: sData
            }
          ],
          tooltip:{
            trigger: 'axis'
          }
        }
        const U = echarts.init(this.$refs.Uecharts)
        U.setOption(Uoption)
      }
    });
  },
};
</script>
<style>
.box-card {
  margin-bottom: 20px;
}
</style>
