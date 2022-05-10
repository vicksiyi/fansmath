<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="封面图片">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="课程名称" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="课程简介" prop="introduction">
        <el-input
          type="textarea"
          :rows="4"
          v-model="ruleForm.introduction"
        ></el-input>
      </el-form-item>
      <el-form-item label="课程概述" prop="overview">
        <el-input
          type="textarea"
          :rows="4"
          v-model="ruleForm.overview"
        ></el-input>
      </el-form-item>
      <el-form-item label="课程目标" prop="target">
        <el-input
          type="textarea"
          :rows="4"
          v-model="ruleForm.target"
        ></el-input>
      </el-form-item>
      <el-form-item label="申请备注" prop="desc">
        <el-input type="textarea" :rows="4" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 80%; margin: auto"
          type="primary"
          @click="submitForm('ruleForm')"
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
      imageUrl: "",
      ruleForm: {
        title: "",
        introduction: "",
        overview: "",
        target: "",
        desc: "",
      },
      rules: {
        title: [{ required: true, message: "请填写课程简介", trigger: "blur" }],
        introduction: [
          { required: true, message: "请填写课程概述", trigger: "blur" },
        ],
        overview: [
          { required: true, message: "请填写课程目标", trigger: "blur" },
        ],
        target: [
          { required: true, message: "请填写申请备注", trigger: "blur" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style scoped>
.submit {
  padding: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
