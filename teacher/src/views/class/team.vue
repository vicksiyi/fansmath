<template>
  <div class="team">
    <!-- 课程列表 -->
    <Show @show="show" @addTeacher="addTeacher"></Show>
    <el-pagination
      style="margin-top: 20px"
      background
      layout="prev, pager, next"
      :total="1000"
    >
    </el-pagination>
    <!-- 弹窗 -->
    <el-drawer :title="isTitle" :visible.sync="drawer" :direction="direction">
      <Teachers v-if="isShowList"></Teachers>
      <AddTeacher v-else></AddTeacher>
    </el-drawer>
  </div>
</template>

<script>
import Show from "@/components/Class/Team/Show";
import Teachers from "@/components/Class/Team/Teachers";
import AddTeacher from "@/components/Class/Team/AddTeacher";
export default {
  name: "ClassTeam",
  components: { Show, Teachers, AddTeacher },
  computed: {
    isTitle() {
      return this.isShowList ? "教师团队" : "添加教师";
    },
  },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      isShowList: false,
    };
  },
  methods: {
    show() {
      this.drawer = true;
      this.isShowList = true;
    },
    addTeacher() {
      this.drawer = true;
      this.isShowList = false;
    },
  },
};
</script>

<style scoped>
</style>
