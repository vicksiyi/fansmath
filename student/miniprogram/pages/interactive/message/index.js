// pages/classList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    current: "tab1",
    tab1: true,
    msgChecked: false,
    answerArr: [
      {
        replied: true,
        date: "2021.01.30",
        class: "高等数学（上）",
        answer: "我是老师的回复，我也不知道什么是数列极限的定义啊。",
        name: "孔空空",
        school: "门头沟学院",
        question: "数列的性质是什么？",
      },
      {
        replied: false,
        date: "",
        class: "高等数学（上）",
        answer: "",
        name: "孔空空",
        school: "门头沟学院",
        question: "数列的性质是什么？",
      },
      {
        replied: false,
        date: "",
        class: "高等数学（上）",
        answer: "",
        name: "孔空空",
        school: "门头沟学院",
        question: "数列的性质是什么？",
      },
      {
        replied: false,
        date: "",
        class: "高等数学（上）",
        answer: "",
        name: "孔空空",
        school: "门头沟学院",
        question: "数列的性质是什么？",
      },
      {
        replied: false,
        date: "",
        class: "高等数学（上）",
        answer: "",
        name: "孔空空",
        school: "门头沟学院",
        question: "数列的性质是什么？",
      },
      {
        replied: false,
        date: "",
        class: "高等数学（上）",
        answer: "",
        name: "孔空空",
        school: "门头沟学院",
        question: "数列的性质是什么？",
      },
    ],
  },

  messageTabChange({ detail }) {
    var index = detail.key;
    this.setData({
      current: detail.key,
    });
    if (index == "tab1") {
      this.setData({
        tab1: true,
        tab2: false,
      });
    } else if (index == "tab2") {
      this.setData({
        tab1: false,
        tab2: true,
      });
    }
  },

  selectChange({ detail = {} }) {
    this.setData({
      msgChecked: detail.current,
    });
  },

  toMsgAnswer: function () {
    wx.navigateTo({
      url: "../msgAnswer/msgAnswer",
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});