<template>
  <div class="class-detail">
    <!-- 封面图片 -->
    <div class="detail-item">
      <div class="title">
        <h1>封面图片</h1>
      </div>
      <div class="content">
        <el-image :src="img"></el-image>
      </div>
    </div>
    <!-- 课程名称 -->
    <div class="detail-item">
      <div class="title">
        <h1>课程名称</h1>
      </div>
      <div class="content">高等数学一</div>
    </div>
    <!-- 课程概述 -->
    <div class="detail-item">
      <div class="title">
        <h1>课程名称</h1>
      </div>
      <div class="content">
        高等数学（上）在线课程除配有知识点视频外，还有与之配套的题目推送，包括在线练习，每章的在线自测练习、期中、期末考模拟题，以及师生互动和畅聊等环节
        。高等数学（上）在线课程，教学内容设计合理，讲解深入浅出，难度适中。针对每一个知识点，突出基本概念、基本理论和基本方法；注重概念、定理的的提炼过程，引导及训练学生如何发现问题和解决问题；加强了教学内容与实际问题的结合。创新的理念和创新意识贯穿高等数学在线课程始终。选择合适的切入点，适当地加强了课程思政内容，让同学们做到德与智的全面发展。
      </div>
    </div>
    <!-- 授权目标 -->
    <div class="detail-item">
      <div class="title">
        <h1>课程名称</h1>
      </div>
      <div class="content">
        通过本课程的学习，不仅掌握“高等数学”（上）必备的基础知识，为学习其它课程打下基础，而且锻炼同学发现问题和解决实际问题的能力，获得必不可少的数学素质和修养。
      </div>
    </div>
    <!-- 申请备注 -->
    <div class="detail-item">
      <div class="title">
        <h1>申请备注</h1>
      </div>
      <div class="content">
        我想申请一下这个课堂，主要是为了更好的给学生进行自学
      </div>
    </div>
    <!-- 申请进度 -->
    <div class="detail-item">
      <div class="title">
        <h1>申请进度</h1>
      </div>
      <div class="content">
        <div class="steps">
          <el-steps :space="400" :active="3" finish-status="success">
            <el-step title="提交申请"></el-step>
            <el-step title="审核中"></el-step>
            <el-step title="已通过"></el-step>
          </el-steps>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassDetail",
  data() {
    return {
      img: require("@/assets/math.jpeg"),
    };
  },
};
</script>

<style scoped>
.class-detail {
  max-height: 500px;
  overflow-y: scroll;
}
.detail-item {
  margin-top: 20px;
}
.detail-item .title {
  margin-bottom: 10px;
}
.detail-item .content {
  padding: 10px;
  font-size: 14px;
  color: #909399;
}
.steps{
    margin: auto;
}
</style>
