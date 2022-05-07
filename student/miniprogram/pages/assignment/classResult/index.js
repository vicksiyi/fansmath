const wxCharts = require("../../../utils/wxcharts.js");
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class: {
      id: 0,
      img: "../../../assets/image/math.jpeg",
      title: "高等数学（上）",
      classCount: "200",
      createdTime: "2020-01-29",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '高等数学一 课堂总成绩'
    })
    let _this = this;
    wx.getSystemInfo({
      success: (result) => {
        pieChart = new wxCharts({
          animation: true,
          canvasId: 'pieCanvas',
          type: 'pie',
          series: [{
            name: '线上考试成绩',
            data: 0.3,
          }, {
            name: '线下考试成绩',
            data: 0.5
          }, {
            name: '平时成绩',
            data: 0.2
          }],
          width: result.windowWidth,
          height: 200,
          dataLabel: true,
        });
      },
    })
  }
})