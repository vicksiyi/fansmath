Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: '',
    professional: '',
    maxNumber: 100,//可输入最大字数
    number: 0,//已输入字数
    msg: '',
    userInfo: {},
    school: ''
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
      msg: value
    })
  }
})