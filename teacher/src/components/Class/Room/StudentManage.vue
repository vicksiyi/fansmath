<template>
  <div class="student-manage">
    <el-table :data="tableData" border style="width: 100%" height="400">
      <el-table-column sortable prop="date" label="加入时间" width="180">
      </el-table-column>
      <el-table-column label="头像" width="100">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </el-table-column>
      <el-table-column prop="name" label="昵称"></el-table-column>
      <el-table-column label="多长时间未在线">
        <template slot-scope="scope">
          <el-tag
            :type="
              scope.row.time > 12
                ? scope.row.time > 18
                  ? 'danger'
                  : 'warning'
                : 'success'
            "
            >{{ scope.row.time }}天前</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="管理" width="180">
        <template>
          <el-button type="success" @click="show" size="mini">信息</el-button>
          <el-button type="warning" size="mini">催学</el-button>
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

    <!-- 弹窗 -->
    <el-drawer
      title="学生信息"
      :visible.sync="drawer"
      :direction="direction"
    >
      <StudentCard></StudentCard>
    </el-drawer>
  </div>
</template>

<script>
import StudentCard from "@/components/Common/StudentCard";
export default {
  name: "StudentManage",
  components: { StudentCard },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      tableData: [
        {
          date: "2022-05-02 22:22:00",
          name: "王小虎1",
          time: 1,
        },
        {
          date: "2022-05-04 22:22:00",
          name: "王小虎2",
          time: 3,
        },
        {
          date: "2022-05-01 22:22:00",
          name: "王小虎3",
          time: 13,
        },
        {
          date: "2022-05-03 22:22:00",
          name: "王小虎4",
          time: 20,
        },
        {
          date: "2022-05-04 22:22:00",
          name: "王小虎2",
          time: 3,
        },
        {
          date: "2022-05-01 22:22:00",
          name: "王小虎3",
          time: 13,
        },
      ],
    };
  },
  methods: {
    show() {
      this.drawer = true;
    },
  },
};
</script>

<style scoped>
</style>
