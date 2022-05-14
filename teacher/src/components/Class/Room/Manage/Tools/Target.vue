<template>
  <div class="target">
    <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入学习"
      v-model="value"
    >
    </el-input>
    <el-button style="float: right; margin: 20px" type="primary"
      >修改学习目标</el-button
    >
  </div>
</template>

<script>
export default {
  name: "Target",
  data() {
    return {
      value:
        "通过本课程的学习，不仅掌握“高等数学”（上）必备的基础知识，为学习其它课程打下基础，而且锻炼同学发现问题和解决实际问题的能力，获得必不可少的数学素质和修养。",
    };
  },
};
</script>

<style scoped>
</style>
