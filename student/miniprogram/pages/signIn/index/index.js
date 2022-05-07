const { $Message } = require('../../../dist/base/index');
Page({
  data: {},
  onLoad: async function () {},
  toLogin: function (res) {
    let _this = this
    // $Message({ type: 'warning', content: '用户拒绝' });
    wx.navigateTo({
      url: "../welcome/index",
    });
  },
  toAccountLogin: function () {
    wx.navigateTo({
      url: "../login/index",
    });
  },
});
