const { $Message } = require("../../dist/base/index");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: "",
    isIOS: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    let url = options.url;
    wx.getSystemInfo({
      success: (result) => {
        let isIOS = result.system.split(" ")[0] == "iOS";
        _this.setData({
          isIOS: isIOS,
        });
        if (!isIOS) {
          wx.showLoading({
            title: "正在打开",
            mask: true,
          });
          wx.downloadFile({
            url: url,
            success: function (res) {
              var Path = res.tempFilePath;
              wx.openDocument({
                filePath: Path,
                success: function (res) {
                  console.log("打开成功");
                },
                complete: function () {
                  wx.hideLoading();
                },
              });
            },
            fail: function (res) {
              console.log(res);
            },
          });
        }
      },
    });
    this.setData({
      url: url,
    });
  },
});
