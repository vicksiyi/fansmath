<template>
  <div class="overview-manage">
    <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入概述"
      v-model="value"
    >
    </el-input>
    <el-button style="float: right; margin: 20px" type="primary"
      >修改概述</el-button
    >
  </div>
</template>

<script>
export default {
  name: "OverviewManage",
  data() {
    return {
      value: "高等数学（上）在线课程除配有知识点视频外，还有与之配套的题目推送，包括在线练习，每章的在线自测练习、期中、期末考模拟题，以及师生互动和畅聊等环节 。高等数学（上）在线课程，教学内容设计合理，讲解深入浅出，难度适中。针对每一个知识点，突出基本概念、基本理论和基本方法；注重概念、定理的的提炼过程，引导及训练学生如何发现问题和解决问题；加强了教学内容与实际问题的结合。创新的理念和创新意识贯穿高等数学在线课程始终。选择合适的切入点，适当地加强了课程思政内容，让同学们做到德与智的全面发展。",
    };
  },
};
</script>

<style scoped>
</style>
