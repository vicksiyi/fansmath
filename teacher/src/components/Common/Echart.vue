<template>
  <div :style="{ height: `${height}px` }" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Echart",
  props: {
    height: {
      type: Number,
      default: 220,
    },
    isLine: {
      type: Boolean,
      default: false,
    },
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          lData: [],
          series: [],
        };
      },
    },
  },
  data() {
    return {
      lineOptions: {
        xAxis: {
          data: [],
        },
        tooltip: {
          trigger: "axis",
        },
        yAxis: {},
        legend: {
          data: [],
        },
        series: [],
      },
      echart: null,
    };
  },
  watch: {
    chartData: {
      handler: function () {
        this.$nextTick(() => {
          this.initChart();
        });
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.chart); // 初始化
        this.echart.setOption(this.options); // 传入配置
      }
    },
    initChartData: function () {
      if (this.isLine) {
        this.lineOptions.xAxis.data = this.chartData.xData;
        this.lineOptions.legend.data = this.chartData.lData;
        this.lineOptions.series = this.chartData.series;
      }
    },
  },
  computed: {
    options() {
      if (this.isLine) return this.lineOptions;
    },
  },
};
</script>


<style scoped>
</style>
