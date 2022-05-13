<template>
  <div class="chapter-manage">
    <!-- 第一层 -->
    <div
      v-for="(first, firstIndex) in classArr"
      :key="first.id"
      class="first-container"
    >
      <div class="first-title-container right-container">
        <h1 v-if="isEdit(firstIndex)">{{ first.title }}</h1>
        <el-input
          v-else
          v-model="first.titleTemp"
          placeholder="请输入章节名称"
        ></el-input>
        <!-- 编辑按钮 -->
        <div class="btn-right">
          <el-button
            v-if="isEdit(firstIndex)"
            type="warning"
            size="mini"
            @click="edit(firstIndex)"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button
            v-else
            type="success"
            size="mini"
            @click="save(firstIndex)"
            icon="el-icon-check"
            circle
          ></el-button>
        </div>
      </div>
      <!-- 第二层 -->
      <div class="second-container">
        <div v-for="(second, secondIndex) in first.childrens" :key="second.id">
          <div class="second-title-container right-container">
            <h2 v-if="isEdit(firstIndex, secondIndex)">{{ second.title }}</h2>
            <el-input
              v-else
              v-model="second.titleTemp"
              placeholder="请输入子章节名称"
            ></el-input>
            <!-- 编辑按钮 -->
            <div class="btn-right">
              <el-button
                v-if="isEdit(firstIndex, secondIndex)"
                type="warning"
                size="mini"
                @click="edit(firstIndex, secondIndex)"
                icon="el-icon-edit"
                circle
              ></el-button>
              <el-button
                v-else
                type="success"
                size="mini"
                @click="save(firstIndex, secondIndex)"
                icon="el-icon-check"
                circle
              ></el-button>
            </div>
          </div>
          <!-- 第三层 -->
          <div class="third-container">
            <div
              v-for="(third, thirdIndex) in second.childrens"
              :key="third.id"
            >
              <div class="third-title-container right-container">
                <div v-if="isEdit(firstIndex, secondIndex, thirdIndex)">
                  <h3>{{ third.title }}</h3>
                </div>
                <el-input
                  v-else
                  v-model="third.titleTemp"
                  placeholder="请输入子子章节名称"
                ></el-input>
                <!-- 编辑按钮 -->
                <div class="btn-right">
                  <el-button
                    v-if="isEdit(firstIndex, secondIndex, thirdIndex)"
                    type="warning"
                    size="mini"
                    @click="edit(firstIndex, secondIndex, thirdIndex)"
                    icon="el-icon-edit"
                    circle
                  ></el-button>
                  <el-button
                    v-else
                    type="success"
                    size="mini"
                    @click="save(firstIndex, secondIndex, thirdIndex)"
                    icon="el-icon-check"
                    circle
                  ></el-button>
                </div>
              </div>
            </div>
            <div class="third-title-container right-container add-input">
              <el-input placeholder="请输入子子章节名称"></el-input>
              <div class="btn-right">
                <el-button
                  type="success"
                  size="mini"
                  icon="el-icon-plus"
                  circle
                ></el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="second-title-container right-container add-input">
          <el-input placeholder="请输入子章节名称"></el-input>
          <div class="btn-right">
            <el-button
              type="success"
              size="mini"
              icon="el-icon-plus"
              circle
            ></el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="first-title-container right-container add-input">
      <el-input placeholder="请输入章节名称"></el-input>
      <div class="btn-right">
        <el-button
          type="success"
          size="mini"
          icon="el-icon-plus"
          circle
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterManage",
  data() {
    return {
      classArr: [
        {
          id: 0,
          title: "第一章 微积分纵览",
          childrens: [
            {
              id: 0,
              title: "1.1 微积分创立背景",
              childrens: [
                {
                  id: 0,
                  title: "1.1.1 平面图形面积",
                  videoSrc: "",
                  pptSrc: "",
                },
                {
                  id: 1,
                  title: "1.1.2 平面曲线切线",
                  videoSrc: "",
                  pptSrc: "",
                },
                {
                  id: 2,
                  title: "1.1.3 无穷多个数的和",
                  videoSrc: "",
                  pptSrc: "",
                },
              ],
            },
            {
              id: 1,
              title: "1.2 如何学习微积分",
              videoSrc: "",
              pptSrc: "",
            },
          ],
        },
        {
          id: 1,
          title: "第二章 如何做微积分",
          childrens: [
            {
              id: 0,
              title: "2.1 问题引入",
              childrens: [
                {
                  id: 0,
                  title: "2.1.1 界面简介",
                  videoSrc: "",
                  pptSrc: "",
                },
                {
                  id: 1,
                  title: "2.1.2 基本运算与数",
                  videoSrc: "",
                  pptSrc: "",
                },
                {
                  id: 2,
                  title: "2.1.3 函数与列表处理",
                  videoSrc: "",
                  pptSrc: "",
                },
              ],
            },
            {
              id: 1,
              title: "2.2 绘制图形",
              childrens: [
                {
                  id: 0,
                  title: "2.2.1 解方程与不等式",
                  videoSrc: "",
                  pptSrc: "",
                },
                {
                  id: 1,
                  title: "2.2.2 导数与微分",
                  videoSrc: "",
                  pptSrc: "",
                },
                {
                  id: 2,
                  title: "2.2.3 求积分与解微分方程",
                  videoSrc: "",
                  pptSrc: "",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 判断使用那个图标
    isEdit(first, second = -1, third = -1) {
      let condition = null;
      if (third != -1) {
        condition =
          this.classArr[first].childrens[second].childrens[third].isEdit;
      } else if (second != -1) {
        condition = this.classArr[first].childrens[second].isEdit;
      } else {
        condition = this.classArr[first].isEdit;
      }
      return !(condition != undefined && condition);
    },
    // 点击编辑
    edit(first, second = -1, third = -1) {
      if (third != -1) {
        this.$set(
          this.classArr[first].childrens[second].childrens[third],
          "titleTemp",
          this.classArr[first].childrens[second].childrens[third].title
        );
        this.$set(
          this.classArr[first].childrens[second].childrens[third],
          "isEdit",
          true
        );
      } else if (second != -1) {
        this.$set(
          this.classArr[first].childrens[second],
          "titleTemp",
          this.classArr[first].childrens[second].title
        );
        this.$set(this.classArr[first].childrens[second], "isEdit", true);
      } else {
        this.$set(
          this.classArr[first],
          "titleTemp",
          this.classArr[first].title
        );
        this.$set(this.classArr[first], "isEdit", true);
      }
    },
    // 点击保存
    save(first, second = -1, third = -1) {
      if (third != -1) {
        this.$set(
          this.classArr[first].childrens[second].childrens[third],
          "title",
          this.classArr[first].childrens[second].childrens[third].titleTemp
        );
        this.$set(
          this.classArr[first].childrens[second].childrens[third],
          "isEdit",
          false
        );
      } else if (second != -1) {
        this.$set(
          this.classArr[first].childrens[second],
          "title",
          this.classArr[first].childrens[second].titleTemp
        );
        this.$set(this.classArr[first].childrens[second], "isEdit", false);
      } else {
        this.$set(
          this.classArr[first],
          "title",
          this.classArr[first].titleTemp
        );
        this.$set(this.classArr[first], "isEdit", false);
      }
    },
  },
};
</script>

<style scoped>
.chapter-manage {
  max-height: 500px;
  overflow-y: scroll;
}
h2 {
  font-size: 14px;
}
.first-title-container {
  height: 50px;
  line-height: 50px;
  background-color: #e8f7fd;
  padding-left: 20px;
}

.right-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btn-right {
  margin-right: 20px;
}
.add-input {
  padding-left: 20px;
}
.third-container,
.second-container {
  padding-left: 20px;
}

.third-title-container,
.second-title-container {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  color: #909399;
}
</style>
