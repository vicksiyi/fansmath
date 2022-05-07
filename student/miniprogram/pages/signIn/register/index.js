// pages/signIn/register/index.js
var emailTime = null;
const { $Message } = require("../../../dist/base/index");
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    maxNumber: 100, //可输入最大字数
    number: 0, //已输入字数
    desc: "",
    userInfo: {},
    password: "",
    password2: "",
    email: "",
    emailCode: "",
    isSendEmail: false,
    emailNum: 60,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let _this = this;
  },
  onShow: function () {
    let _this = this;
  },
  descChange: function (e) {
    let _this = this;
    let value = e.detail.value;
    let len = value.length;
    if (len > this.data.maxNumber) {
      _this.setData({ number: this.data.maxNumber });
      return;
    }
    this.setData({
      number: len,
      msg: value,
    });
  },
  submit: function () {
    let _this = this;
    wx.showLoading({ title: "正在注册", mask: true, });
  },
  sendEmail: async function () {
    let _this = this;
    wx.showLoading({ title: "正在发送", mask: true });
    if (result.data.type == "success") {
      _this.setData({ isSendEmail: true, emailNum: 60, });
      emailTime = setInterval(() => {
        if (_this.data.emailNum <= 0) {
          clearInterval(emailTime);
          _this.setData({ emailNum: 60, isSendEmail: false, });
        }
        _this.setData({ emailNum: _this.data.emailNum - 1 });
      }, 1000);
      $Message({ content: "邮箱验证码发送成功", type: "success" });
    }
  },
  emailCodeChange: function (e) {
    this.setData({
      emailCode: e.detail.detail.value,
    });
  },
  nickNameChange: function (e) {
    this.setData({
      [`userInfo.nickName`]: e.detail.detail.value,
    });
  },
  passwordChange: function (e) {
    this.setData({
      password: e.detail.detail.value,
    });
  },
  password2Change: function (e) {
    this.setData({
      password2: e.detail.detail.value,
    });
  },
  emailChange: function (e) {
    this.setData({
      email: e.detail.detail.value,
    });
  },
  onHide() {
    if (emailTime) clearInterval(emailTime);
  }
});
