Page({
  /**
   * 页面的初始数据
   */
  data: {},
  toWelcome: function () {
    wx.switchTab({
      url: "../../lecture/classList/index",
    });
  }
});
