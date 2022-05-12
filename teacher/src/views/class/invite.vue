<template>
  <div class="my-invite">
    <!-- 显示 -->
    <Show @showCourseDetail="showCourseDetail"></Show>
    <!-- 弹窗 -->
    <el-drawer title="课程详情" :visible.sync="drawer" :direction="direction">
      <div class="course-detail">
        <CourseDetail></CourseDetail>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Show from "@/components/Class/Invite/Show";
import CourseDetail from "@/components/Common/CourseDetail";
export default {
  name: "ClassMyInvite",
  components: { Show, CourseDetail },
  data() {
    return {
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {
    showCourseDetail() {
      this.drawer = true;
    },
  },
};
</script>

<style scoped>
.course-detail {
  padding: 20px;
}
</style>
