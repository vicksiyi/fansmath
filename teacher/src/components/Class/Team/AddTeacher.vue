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
    <TeacherCard
      style="margin-top: 20px"
      :isSearch="true"
      @action="addTeacher"
      :isAction="false"
    ></TeacherCard>
  </div>
</template>

<script>
import TeacherCard from "@/components/Common/TeacherCard";
export default {
  name: "AddTeacher",
  components: { TeacherCard },
  methods: {
    addTeacher() {
      this.$prompt("请输入申请备注", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "发送成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消申请",
          });
        });
    },
  },
};
</script>

<style scoped>
.add-teacher {
  padding: 20px;
}
</style>
