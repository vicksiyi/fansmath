const app = getApp();
const { $Message } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spinShow: false,
    token: '',
    start: 0,
    log: [{
      time: '2021-3-28 12:12:12',
      avatarUrl: 'https://file.iviewui.com/weapp/dist/e5da9fdc97a0b3fb16c115d379820583.jpg',
      nickName: '小微',
      system: 'IOS',
      model: 'Iphone',
      ip: '192.168.0.101',
      type: 1
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let _this = this;
    wx.getSystemInfo({
      success: (result) => {
        _this.setData({
          height: result.windowHeight
        })
      },
    })
  },
  tolower: async function () {
    $Message({
      content: '底线到了...',
      type: 'warning'
    })
  }
})