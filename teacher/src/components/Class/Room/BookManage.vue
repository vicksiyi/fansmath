<template>
  <div class="book-manage">
    <!-- 添加 -->
    <el-button @click="add" type="primary">添加</el-button>
    <el-table
      :data="tableData"
      height="400"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column label="序号" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="img" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" srcset="" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="version" label="版本"> </el-table-column>
      <el-table-column prop="isbn" label="ISBN"></el-table-column>
      <el-table-column label="操作" width="80">
        <el-button type="danger" size="mini">删除</el-button>
      </el-table-column>
    </el-table>
    <!-- 抽屉 -->
    <el-drawer title="添加教材" :visible.sync="drawer" :direction="direction">
      <div class="form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="教材图片" prop="img">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="ruleForm.img" :src="ruleForm.img" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="教材名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="教材作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="教材版本" prop="version">
            <el-input v-model="ruleForm.version"></el-input>
          </el-form-item>
          <el-form-item label="教材ISBN" prop="isbn">
            <el-input v-model="ruleForm.isbn"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary">添加教材</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "BookManage",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      tableData: [
        {
          img: require("../../../assets/book.jpg"),
          name: "高等数学",
          author: "同济大学数学系",
          version: "第七版",
          isbn: "9787040396638",
        },
      ],
      ruleForm: {
        img: "",
        name: "",
        author: "",
        version: "",
        isbn: "",
      },
      rules: {
        img: [{ required: true, message: "请上传教材图片", trigger: "change" }],
        name: [{ required: true, message: "请输入教材名称", trigger: "blur" }],
        author: [
          { required: true, message: "请输入教材作者", trigger: "blur" },
        ],
        version: [
          { required: true, message: "请输入教材版本", trigger: "blur" },
        ],
        isbn: [{ required: true, message: "请输入教材ISBN", trigger: "blur" }],
      },
    };
  },
  methods: {
    add() {
      this.drawer = true;
    },
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
img {
  width: 100px;
  height: 150px;
}
.form {
  padding: 20px;
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
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
