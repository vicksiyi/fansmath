<template>
  <div class="room">
    <el-row :gutter="20">
      <el-col :span="8">
        <!-- 选择课程 -->
        <div class="select-course">
          <el-select v-model="value" clearable placeholder="选择课程">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <el-card>
          <Tools :tools="tools" :active="active" @activeChange="activeChange"></Tools>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <h1>{{ title }}</h1>
          <div class="content">
            <!-- 学生管理 -->
            <div v-if="active === 0"><StudentManage></StudentManage></div>
            <div v-if="active === 1"><ChapterManage></ChapterManage></div>
            <div v-if="active === 2">
              <IntroductionManage></IntroductionManage>
            </div>
            <div v-if="active === 3"><OverviewManage></OverviewManage></div>
            <div v-if="active === 4"><TargetManage></TargetManage></div>
            <div v-if="active === 5"><ScaleManage></ScaleManage></div>
            <div v-if="active === 6"><BookManage></BookManage></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { tools } from "@/data/room";
import StudentManage from "@/components/Class/Room/StudentManage";
import ChapterManage from "@/components/Class/Room/ChapterManage";
import IntroductionManage from "@/components/Class/Room/IntroductionManage";
import OverviewManage from "@/components/Class/Room/OverviewManage";
import TargetManage from "@/components/Class/Room/TargetManage";
import ScaleManage from "@/components/Class/Room/ScaleManage";
import BookManage from "@/components/Class/Room/BookManage";
import Tools from "@/components/Common/Tools";
export default {
  name: "ClassRoom",
  components: {
    StudentManage,
    ChapterManage,
    IntroductionManage,
    OverviewManage,
    TargetManage,
    ScaleManage,
    BookManage,
    Tools,
  },
  computed: {
    ...mapState({
      active: (state) => state.chapterManage.active,
    }),
    title() {
      return this.tools[this.active].title;
    },
  },
  data() {
    return {
      tools: tools,
      options: [
        {
          value: "0",
          label: "高等数学一",
        },
        {
          value: "1",
          label: "线性代数",
        },
      ],
      value: "",
    };
  },
  methods: {
    activeChange(index) {
      this.$store.commit("activeChange", index);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 18px;
  text-align: center;
}
.content {
  padding-top: 10px;
}
.select-course {
  /* margin-left: 20px; */
  margin-bottom: 20px;
}
</style>
