const app = getApp()
const { $Message } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: [{
      avatarUrl: '/assets/image/otherIcon/avatar.png',
      nickName: '王守中'
    }],
    token: '',
    start: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {

  },
  nav: function (e) {
    wx.navigateTo({
      url: `/lecture/teacherDetails/index`,
    })
  }
})