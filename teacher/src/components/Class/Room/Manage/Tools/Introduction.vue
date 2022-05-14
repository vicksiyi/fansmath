<template>
  <div class="introduction">
    <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入简介"
      v-model="value"
    >
    </el-input>
    <el-button style="float: right; margin: 20px" type="primary"
      >修改内容简介</el-button
    >
  </div>
</template>

<script>
export default {
  name: "Introduction",
  data() {
    return {
      value:
        "我是课程简介，主讲老师丰富的教学经验，在学习理论知识的同时，学会用数学的思维思考问题，混合式教学模式，开创了该课程教学创新的先河，欢迎同学学习",
    };
  },
};
</script>

<style scoped>
</style>
