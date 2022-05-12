<template>
  <div class="mine">
    <!-- 开展课程 -->
    <el-button type="primary" @click="addCourse">开展课程</el-button>
    <!-- 目前课程 -->
    <el-row style="margin-top: 10px" :gutter="20">
      <el-col :span="16">
        <el-card>
          <Show></Show>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div class="course-detail">
            <CourseDetail></CourseDetail>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 弹窗开展课程 -->
    <el-drawer title="开展课程" :visible.sync="drawer" :direction="direction">
      <Submit></Submit>
    </el-drawer>
  </div>
</template>

<script>
import Show from "@/components/Class/Mine/Show";
import CourseDetail from "@/components/Common/CourseDetail";
import Submit from "@/components/Class/Mine/Submit";
export default {
  name: "ClassMine",
  components: { Show, CourseDetail, Submit },
  data() {
    return {
      drawer: false,
      direction: "rtl",
    };
  },
  methods: {
    addCourse() {
      this.drawer = true;
    },
  },
};
</script>

<style scoped>
.course-detail {
  max-height: 600px;
  overflow-y: scroll;
}
</style>
