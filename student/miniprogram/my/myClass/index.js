// pages/classList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    itemArr: [
      {
        id: 0,
        img: "/assets/image/math.jpeg",
        title: "高等数学（上）",
        classCount: "200",
        createdTime: "2020-01-29",
      }
    ],
  },

  toClassDetails: function () {
    wx.navigateTo({
      url: "/lecture/classDetails/index",
    });
  }
});