<template>
  <div class="submit-login">
    <div class="logo">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" srcset="" />
        <div class="logo-righ">
          <div class="logo-first">
            <span>数学迷-教师端</span>
          </div>
          <div class="logo-second">
            <span>FansMath - Teacher end</span>
          </div>
        </div>
      </div>
    </div>
    <div class="submit-form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="登录账号" prop="account">
          <el-input
            v-model="ruleForm.account"
            placeholder="请输入账号/邮箱号"
          ></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
          </el-row>
        </el-form-item>
        <el-form-item>
          <div class="register-nav">
            <a href="/forget">忘记密码？</a>
            <a href="/register">注册</a>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Submit",
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入账号/邮箱号", trigger: "blur" },
        ],
        password: [{ required: true, message: "请选择密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.register-nav a:first-child {
  color: #909399;
}
.register-nav a:last-child {
  float: right;
  color: #409eff;
}
.submit-login {
  width: 600px;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 40px;
}
.el-button {
  width: 100%;
}
.logo {
  margin: auto;
  display: flex;
  justify-content: flex-start;
}
.logo img {
  width: 60px;
  height: 60px;
  margin: 10px;
  border-radius: 50%;
}
.logo .logo-righ {
  /* float: right; */
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin-top: 12px;
  /* margin-left: 10px; */
}
.logo .logo-righ .logo-first {
  font-size: 25px;
  color: #303133;
  font-weight: 400;
}
.logo .logo-righ .logo-second {
  font-size: 15px;
}

.submit-form {
  margin-top: 30px;
}
</style>