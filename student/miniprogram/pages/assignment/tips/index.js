const app = getApp();
const { $Message } = require('../../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    token: '',
    statements: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {

  },
  nav: function () {
    wx.navigateTo({
      url: `../exam/index`,
    })
  }
})