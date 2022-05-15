<template>
  <div class="class-data-list">
    <el-table :data="tableData" height="400" style="width: 100%">
      <el-table-column prop="firstChapter" label="章节名称">
      </el-table-column>
      <el-table-column prop="secondChapter" label="子章节名称">
      </el-table-column>
      <el-table-column prop="thirdChapter" label="子子章节名称">
      </el-table-column>
      <el-table-column prop="look" sortable label="观看人数"> </el-table-column>
      <el-table-column prop="question" sortable label="问答数"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ClassDataList",
  data() {
    return {
      tableData: [
        {
          firstChapter: "第一章 微积分纵览",
          secondChapter: "1.1 微积分创立背景",
          thirdChapter: "1.1.1 平面图形面积",
          look: 100,
          question: 10,
        },
        {
          firstChapter: "第一章 微积分纵览",
          secondChapter: "1.1 微积分创立背景",
          thirdChapter: "1.1.2 平面曲线切线",
          look: 80,
          question: 5,
        },
        {
          firstChapter: "第一章 微积分纵览",
          secondChapter: "1.1 微积分创立背景",
          thirdChapter: "1.1.3 无穷多个数的和",
          look: 90,
          question: 20,
        },
        {
          firstChapter: "第二章 如何做微积分",
          secondChapter: "2.1 问题引入",
          thirdChapter: "2.1.1 界面简介",
          look: 100,
          question: 10,
        },
        {
          firstChapter: "第二章 如何做微积分",
          secondChapter: "2.1 问题引入",
          thirdChapter: "2.1.2 基本运算与数",
          look: 100,
          question: 10,
        }
      ],
    };
  },
};
</script>

<style scoped>
</style>
