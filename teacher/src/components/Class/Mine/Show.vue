<template>
  <div class="show">
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column prop="time" label="申请时间" width="180">
      </el-table-column>
      <el-table-column prop="title" label="课程名称"> </el-table-column>
      <el-table-column prop="overview" label="课程简介"> </el-table-column>
      <el-table-column label="查看" width="80">
        <template>
          <el-button type="success" size="mini">查看</el-button>
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
          title: "高等数学一",
          overview:
            "我是课程简介，主讲老师丰富的教学经验，在学习理论知识的同时，学会用数学的思维思考问题，混合式教学模式，开创了该课程教学创新的先河，欢迎同学学习~",
        },
        {
          time: "2022-04-22 12:01:35",
          title: "线性代数",
          overview:
            "我是课程简介，主讲老师丰富的教学经验，在学习理论知识的同时，学会用数学的思维思考问题，混合式教学模式，开创了该课程教学创新的先河，欢迎同学学习~",
        },
        {
          time: "2022-04-22 12:01:35",
          title: "常微分",
          overview:
            "我是课程简介，主讲老师丰富的教学经验，在学习理论知识的同时，学会用数学的思维思考问题，混合式教学模式，开创了该课程教学创新的先河，欢迎同学学习~",
        },
        {
          time: "2022-04-22 12:01:35",
          title: "高等数学一",
          overview:
            "我是课程简介，主讲老师丰富的教学经验，在学习理论知识的同时，学会用数学的思维思考问题，混合式教学模式，开创了该课程教学创新的先河，欢迎同学学习~",
        },
        {
          time: "2022-04-22 12:01:35",
          title: "高等数学一",
          overview:
            "我是课程简介，主讲老师丰富的教学经验，在学习理论知识的同时，学会用数学的思维思考问题，混合式教学模式，开创了该课程教学创新的先河，欢迎同学学习~",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
