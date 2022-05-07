const { $Message } = require('../../../dist/base/index');
Page({
  data: {},
  onLoad: async function () {},
  getUserProfile: function (res) {
    let _this = this
    $Message({ type: 'warning', content: '用户拒绝' });
  },
  toLogin: function () {
    wx.navigateTo({
      url: "../login/index",
    });
  },
});
