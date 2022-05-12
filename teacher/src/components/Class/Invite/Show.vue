<template>
  <div class="show">
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column sortable prop="time" label="申请时间" width="180">
      </el-table-column>
      <el-table-column label="申请人" prop="name" width="180">
      </el-table-column>
      <el-table-column prop="desc" label="申请备注"> </el-table-column>
      <el-table-column label="课程详情" width="80">
        <template>
          <el-button type="primary" @click="showCourseDetail" size="mini"
            >查看</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template>
          <el-row>
            <el-col :span="12"
              ><el-button type="success" @click="agree" size="mini"
                >同意</el-button
              ></el-col
            >
            <el-col :span="12"
              ><el-button type="danger" @click="reject" size="mini"
                >拒绝</el-button
              ></el-col
            >
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px"
      background
      layout="prev, pager, next"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      tableData: [
        {
          time: "2022-04-22 12:01:35",
          name: "江老师",
          desc: "这是我申请的一个在线课程，希望您能加入",
        },
        {
          time: "2022-04-22 12:01:35",
          name: "江老师",
          desc: "这是我申请的一个在线课程，希望您能加入",
        },
        {
          time: "2022-04-22 12:01:35",
          name: "江老师",
          desc: "这是我申请的一个在线课程，希望您能加入",
        },
        {
          time: "2022-04-22 12:01:35",
          name: "江老师",
          desc: "这是我申请的一个在线课程，希望您能加入",
        },
        {
          time: "2022-04-22 12:01:35",
          name: "江老师",
          desc: "这是我申请的一个在线课程，希望您能加入",
        },
        {
          time: "2022-04-22 12:01:35",
          name: "江老师",
          desc: "这是我申请的一个在线课程，希望您能加入",
        },
        {
          time: "2022-04-22 12:01:35",
          name: "江老师",
          desc: "这是我申请的一个在线课程，希望您能加入",
        },
        {
          time: "2022-04-22 12:01:35",
          name: "江老师",
          desc: "这是我申请的一个在线课程，希望您能加入",
        },
      ],
    };
  },
  methods: {
    showCourseDetail() {
      this.$emit("showCourseDetail");
    },
    agree() {
      this.$confirm("是否同意邀请, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功同意!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
    reject() {
      this.$confirm("是否拒绝邀请, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功拒绝!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
  },
};
</script>

<style scoped>
</style>
