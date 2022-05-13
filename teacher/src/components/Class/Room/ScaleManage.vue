<template>
  <div class="scale-manage">
    <!-- 添加比例 -->
    <el-button @click="addScale" type="primary">添加比例</el-button>
    <!-- 比例列表 -->
    <div v-for="(item, index) in values" :key="item.id" class="item-process">
      <h1>{{ item.title }}:</h1>
      <div class="process">
        <el-progress
          :text-inside="true"
          :stroke-width="22"
          :percentage="getScale(item.scale)"
          :status="index % 2 === 0 ? 'success' : ''"
        ></el-progress>
      </div>
    </div>
    <!-- 弹窗填写表单 -->
    <el-drawer title="添加比例" :visible.sync="drawer" :direction="direction">
      <div class="add-scales">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="比例名称" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="比例数值" prop="scale">
            <el-input v-model="ruleForm.scale"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="width: 100%"
              type="primary"
              @click="submitForm('ruleForm')"
              >添加</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "ScaleManage",
  computed: {
    all() {
      let total = this.values
        .map((value) => value.scale)
        .reduce((total, num) => total + num);
      return total;
    },
  },
  data() {
    const checkScale = (rule, value, callback) => {
      if (value === 0) {
        callback(new Error("比例不能为0"));
      } else {
        callback();
      }
    };
    return {
      values: [
        { title: "线上成绩", scale: 30 },
        { title: "线下成绩", scale: 50 },
        { title: "平时成绩", scale: 20 },
      ],
      drawer: false,
      direction: "rtl",
      ruleForm: {
        title: "",
        scale: 0,
      },
      rules: {
        title: [{ required: true, message: "请输入比例名称", trigger: "blur" }],
        scale: [
          {
            validator: checkScale,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    getScale(scale) {
      return (scale / this.all) * 100;
    },
    addScale() {
      this.drawer = true;
    },
  },
};
</script>

<style scoped>
.item-process {
  display: flex;
  flex-direction: row;
  height: 24px;
  line-height: 24px;
  margin-top: 20px;
}
.process {
  width: 80%;
  margin-left: 20px;
}
.add-scales {
  padding: 20px;
}
</style>
