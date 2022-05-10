<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="课程名称" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="课程简介" prop="introduction">
        <el-input type="textarea" :rows="4" v-model="ruleForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="课程概述" prop="overview">
        <el-input type="textarea" :rows="4" v-model="ruleForm.overview"></el-input>
      </el-form-item>
      <el-form-item label="课程目标" prop="target">
        <el-input type="textarea" :rows="4" v-model="ruleForm.target"></el-input>
      </el-form-item>
      <el-form-item label="申请备注" prop="desc">
        <el-input type="textarea" :rows="4" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:80%;margin:auto;" type="primary" @click="submitForm('ruleForm')"
          >提出申请</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Submit",
  data() {
    return {
      ruleForm: {
        title: "",
        introduction: "",
        overview: "",
        target: "",
        desc: "",
      },
      rules: {
        title: [{ required: true, message: "请填写课程简介", trigger: "blur" }],
        introduction: [{ required: true, message: "请填写课程概述", trigger: "blur" }],
        overview: [{ required: true, message: "请填写课程目标", trigger: "blur" }],
        target: [{ required: true, message: "请填写申请备注", trigger: "blur" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
};
</script>

<style scoped>
.submit {
  padding: 10px;
}
</style>
