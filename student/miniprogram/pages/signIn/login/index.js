const { $Message } = require("../../../dist/base/index");
const app = getApp();
Page({
  data: { account: "", password: "" },
  toLogin() {
    let _this = this;
    wx.showLoading({ title: "正在登录", mask: true });
    wx.navigateTo({ url: "../welcome/index" });
  },
  accountChange(e) {
    this.setData({
      account: e.detail.value,
    });
  },
  passwdChange(e) {
    this.setData({
      passwd: e.detail.value,
    });
  },
  toRegister() {
    wx.navigateTo({ url: '../register/index' })
  }
});
