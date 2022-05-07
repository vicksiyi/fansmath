const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    course: [{
      title: "高等数学(一)",
      img: "/assets/image/math.jpeg",
      num: 100,
      teacher: "江老师"
    }],
  },
  onLoad: async function (options) { },
  toClassDetails: function () {
    wx.navigateTo({ url: `/lecture/classDetails/index` });
  }
});
