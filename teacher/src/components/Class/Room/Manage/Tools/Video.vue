<template>
  <div class="video">
    <!-- 备注：以后升级为HLS -->
    <video v-if="video" width="100%" height="440" controls>
      <source :src="video" type="video/mp4" />
    </video>
    <el-empty v-else description="暂未上传视频"></el-empty>
    <!-- 管理 -->
    <div class="manage">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        ><el-button type="primary">上传视频</el-button></el-upload
      >
      <el-button type="primary">保存并修改</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      video: "https://show-yj.oss-cn-beijing.aliyuncs.com/test.mp4",
    };
  },
};
</script>

<style scoped>
.manage {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin: 20px auto;
}
</style>
