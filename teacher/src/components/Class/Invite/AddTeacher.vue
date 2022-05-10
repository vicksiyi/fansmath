<template>
  <div class="add-teacher">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-input placeholder="请输入教师邮箱" v-model="input" clearable>
        </el-input>
      </el-col>
      <el-col :span="7">
        <el-button icon="el-icon-search" circle></el-button>
      </el-col>
    </el-row>
    <TeacherCard style="margin-top: 20px" :isSearch="true" :isAction="false"></TeacherCard>
  </div>
</template>

<script>
import TeacherCard from "@/components/Common/TeacherCard";
export default {
  name: "AddTeacher",
  components: { TeacherCard },
};
</script>

<style scoped>
.add-teacher {
  padding: 20px;
}
</style>
