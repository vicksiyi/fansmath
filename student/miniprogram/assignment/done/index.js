// pages/assignment/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    current: 0,
    examList: [{
      title: '/assets/temp/1.png',
      A: '/assets/temp/2.png',
      B: '/assets/temp/3.png',
      C: '/assets/temp/4.png',
      D: '/assets/temp/5.png',
      type: 0,
      result: 5
    },
    {
      title: '/assets/temp/1.png',
      type: 1,
      result: 3
    },
    {
      title: '/assets/temp/1.png',
      type: 2,
      result: 6
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.setNavigationBarTitle({
      title: '1.1.2 平面曲线切线 章节考试'
    })
    wx.getSystemInfo({
      success: (result) => {
        _this.setData({
          height: result.windowHeight
        })
      },
    })
  },
  showImage: function (e) {
    console.log(e.currentTarget.dataset.url)
    wx.previewImage({
      urls: [e.currentTarget.dataset.url],
    })
  },
  swiperChange: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  pre: function () {
    if (this.data.current == 0) return;
    this.setData({
      current: this.data.current - 1
    })
  },
  next: function () {
    if (this.data.current > this.data.examList.length - 1) return;
    this.setData({
      current: this.data.current + 1
    })
  }
})