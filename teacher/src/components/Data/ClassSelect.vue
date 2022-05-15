<template>
  <div class="class-select">
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <!-- 导出数据 -->
    <div class="download">
      <i class="el-icon-download"></i>
      导出数据
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassSelect",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          // 设置为禁用的条件
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          }
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>

<style scoped>
.class-select{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.download{
  margin-right: 20px;
  font-size: 16px;
  cursor: pointer;
  color: #495060;
}
.download:hover{
  color: #5cadff;
}
</style>
