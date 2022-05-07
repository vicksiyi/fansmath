const app = getApp();
const { $Message } = require('../../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    itemArr: [
      {
        id: 0,
        img: "../../../assets/image/math.jpeg",
        title: "高等数学（上）",
        classCount: "200",
        createdTime: "2020-01-29",
      }
    ],
    examList: [
      { type: 1, title: "高等数学" }
    ],
    token: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow: async function () {
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  navTab1: function (e) {
    wx.navigateTo({
      url: `../tips/index`,
    })
  },
  navTab2: function () {
    wx.navigateTo({
      url: '../submit/index',
    })
  },
  navTab3: function () {
    wx.navigateTo({
      url: '../done/index',
    })
  },
  navTab4: function () {
    wx.navigateTo({
      url: '../classResult/index',
    })
  }
})