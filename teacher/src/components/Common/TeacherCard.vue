<template>
  <div class="teacher-card">
    <el-card>
      <el-descriptions class="margin-top" title="教师" :column="1" border>
        <template slot="extra">
          <el-button type="danger" :loading="true" v-if="isDelete" size="mini">删除</el-button>
          <el-button type="primary" :loading="true" v-if="isSearch" size="mini">添加</el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
          </template>
          江老师
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            邮箱
          </template>
          xxxxxxxxx@163.com
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            学校
          </template>
          <el-tag size="small">广东石油化工学院</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            职务
          </template>
          <el-tag size="success">教授</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TeacherCard",
  props: {
    isDelete: {
      type: Boolean,
      default: false,
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.teacher-card {
  margin-bottom: 20px;
}
</style>
