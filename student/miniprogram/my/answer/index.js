const app = getApp();
var time = null
const { $Message } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: [],
    showItem: true,
    maxNumber: 100,//可输入最大字数
    number: 0,//已输入字数
    imageNum: 0,
    userInfo: '',
    reviewText: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    
  },
  inputText: function (e) {
    let _this = this;
    let value = e.detail.value;
    let len = value.length;
    if (len > this.data.maxNumber) {
      _this.setData({
        'number': this.data.maxNumber
      })
      return;
    }
    this.setData({
      'number': len,
      'reviewText': value
    })
  }
})