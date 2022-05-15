<template>
  <div class="class">
    <!-- 选择课程 -->
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in courses"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="data-analysi">
      <!-- 总体 -->
      <Tools :tools="tools"></Tools>
      <!-- 折线图 -->
      <el-tabs style="margin-top: 20px" type="card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-pie-chart"></i> 趋势图</span>
          <ClassSelect></ClassSelect>
          <Echart
            v-if="isChart"
            :isLine="true"
            :chartData="echartData"
            :height="400"
          ></Echart>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 数据列表</span>
          <ClassSelect></ClassSelect>
          <ClassDataList></ClassDataList>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { tools } from "@/data/data";
import Mock from "mockjs";
import Tools from "@/components/Data/Tools";
import Echart from "@/components/Common/Echart";
import ClassDataList from "@/components/Data/ClassDataList";
import ClassSelect from "@/components/Data/ClassSelect";
export default {
  name: "DataClass",
  components: { Tools, ClassDataList, ClassSelect, Echart },
  data() {
    return {
      value: "高等数学一",
      tools: tools,
      courses: [
        { value: "高等数学一", label: "高等数学一" },
        { value: "线性代数", label: "线性代数" },
      ],
      echartData: [],
      isChart: false,
    };
  },
  mounted() {
    let List = [];
    for (let i = 0; i < 7; ++i) {
      List.push({
        "观看人数": Mock.Random.float(100, 200, 0, 0),
        "问答数": Mock.Random.float(0, 50, 0, 0),
        "加入人数": Mock.Random.float(0, 20, 0, 0),
      });
    }
    let lines = {
      date: ['2022-05-08', '2022-05-09', '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14'],
      data: List,
    };
    let xData = lines.date;
    let keyArray = Object.keys(lines.data[0]);
    let series = [];
    keyArray.forEach((key) => {
      series.push({
        name: key,
        data: lines.data.map((item) => item[key]),
        type: "line",
        smooth: true
      });
    });
    this.echartData.xData = xData;
    this.echartData.lData = keyArray;
    this.echartData.series = series;
    this.isChart = true;
  },
};
</script>

<style>
</style>
