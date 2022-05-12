<template>
  <div class="student-card">
    <!-- 头像 -->
    <div class="avatar">
      <el-avatar
        style="width: 80px; height: 80px"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
    <div class="content">
      <el-descriptions :column="1" title="学生信息">
        <el-descriptions-item label="昵称">kooriookami</el-descriptions-item>
        <el-descriptions-item label="学号">182241201xx</el-descriptions-item>
        <el-descriptions-item label="邮箱号">xxxxxxxx@163.com</el-descriptions-item>
        <el-descriptions-item label="学校">
          <el-tag size="small">广东石油化工学院</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="个人简介"
          >一个爱好学习数学的学生</el-descriptions-item
        >
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCard",
};
</script>

<style scoped>
.avatar {
  width: 80px;
  height: 80px;
  margin: 10px auto;
}
.content {
  padding: 20px;
}
</style>
