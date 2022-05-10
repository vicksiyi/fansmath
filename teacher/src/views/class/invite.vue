<template>
  <div class="invite">
    <!-- 课程列表 -->
    <Show @show="show" @addTeacher="addTeacher"></Show>
    <!-- 弹窗 -->
    <el-drawer :title="isTitle" :visible.sync="drawer" :direction="direction">
      <Teachers v-if="isShowList"></Teachers>
      <AddTeacher v-else></AddTeacher>
    </el-drawer>
  </div>
</template>

<script>
import Show from "@/components/Class/Invite/Show";
import Teachers from "@/components/Class/Invite/Teachers";
import AddTeacher from "@/components/Class/Invite/AddTeacher";
export default {
  name: "ClassInvite",
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
