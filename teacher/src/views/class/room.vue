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
          <div class="tools">
            <div
              v-for="(item, index) in tools"
              :key="item.id"
              @click="activeChange(index)"
              :class="`item ${index == active ? 'tools-selected' : ''}`"
            >
              <el-image
                style="width: 40px; height: 40px; margin: auto"
                :src="item.icon"
              ></el-image>
              <span>{{ item.title }}</span>
            </div>
          </div>
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
import { tools } from "@/data/room";
import StudentManage from "@/components/Class/Room/StudentManage";
import ChapterManage from "@/components/Class/Room/ChapterManage";
import IntroductionManage from "@/components/Class/Room/IntroductionManage";
import OverviewManage from "@/components/Class/Room/OverviewManage";
import TargetManage from "@/components/Class/Room/TargetManage";
import ScaleManage from "@/components/Class/Room/ScaleManage";
import BookManage from "@/components/Class/Room/BookManage";
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
  },
  computed: {
    title() {
      return this.tools[this.active].title;
    },
  },
  data() {
    return {
      tools: tools,
      active: 0,
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
      this.active = index;
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
.tools-selected {
  background: #c0c4cc;
}
.tools-selected span {
  color: #fff !important;
}
.tools {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.tools .item img {
  width: 40px;
  height: 40px;
  margin: auto;
}
.tools .item span {
  font-size: 12px;
  color: #495060;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.tools .item {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 10px 15px;
}
.tools .item:hover {
  -webkit-box-shadow: 0 0 0 2px #cff09e, 0 0 0 4px #ff0364;
  box-shadow: 0 0 0 0.5px #5cadff, 0 0 0 0.5px #5cadff;
  -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
  transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
  -webkit-animation: gelatine 0.5s 1;
  animation: gelatine 0.5s 1;
  opacity: 0.6;
  cursor: pointer;
}
</style>
