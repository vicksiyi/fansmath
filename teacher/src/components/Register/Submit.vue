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
        <el-form-item label="登录密码" prop="passwd">
          <el-input
            type="password"
            v-model="ruleForm.passwd"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="passwd2">
          <el-input
            type="password"
            v-model="ruleForm.passwd2"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱号码" prop="email">
          <el-row>
            <el-col :span="16">
              <el-input
                v-model="ruleForm.email"
                placeholder="请输入邮箱号"
              ></el-input>
            </el-col>
            <el-col :span="6">
              <el-button :disabled="!isEmail" type="primary">发送</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input
            v-model="ruleForm.code"
            placeholder="请输入收到的验证码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >注册</el-button
            >
          </el-row>
        </el-form-item>
        <el-form-item>
          <div class="register-nav">
            <a href="/login">登录</a>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Submit",
  computed: {
    isEmail() {
      let email = this.ruleForm.email;
      return this.isCheckEmail(email);
    },
  },
  data() {
    let checkPasswd = function (rule, value, callback) {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.passwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let checkEmail = function (rule, value, callback) {
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (value === "") {
        callback(new Error("请输入邮箱号"));
      } else if (!reg.test(value)) {
        callback(new Error("邮箱号格式不对"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: "",
        passwd: "",
        passwd2: "",
        email: "",
        code: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入账号/邮箱号", trigger: "blur" },
        ],
        passwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
        passwd2: [{ required: true, validator: checkPasswd, trigger: "blur" }],
        email: [{ required: true, validator: checkEmail, trigger: "blur" }],
        code: [
          { required: true, message: "请输入收到的验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {},
    isCheckEmail(email) {
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      return reg.test(email);
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
.el-col:last-child {
  margin-left: 20px;
}
</style>