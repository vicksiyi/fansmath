// pages/mine/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    select: [
      {
        title: '个人信息',
        nav: 'toMyInfo',
        img: '../../../assets/image/otherIcon/mine-person.png'
      },
      {
        title: '我的课堂',
        nav: 'toMyClass',
        img: '../../../assets/image/otherIcon/mine-myclass.png'
      },
      {
        title: '我的关注',
        nav: 'toMyForward',
        img: '../../../assets/image/otherIcon/mine-forward.png'
      },
      {
        title: '学习记录',
        nav: 'toMyLog',
        img: '../../../assets/image/otherIcon/mine-log.png'
      },
      {
        title: '反馈/客服',
        nav: 'toAnswer',
        img: '../../../assets/image/otherIcon/mine-service.png'
      },
      {
        title: '设置',
        nav: 'toSetting',
        img: '../../../assets/image/otherIcon/mine-set.png'
      }
    ],
    nickName: '哈哈',
    school: '广东石油化工学院'
  },

  // 跳转至个人信息页
  toMyInfo: function () {
    wx.navigateTo({
      url: "/my/myInfo/index",
    });
  },
  // 跳转至我的课堂
  toMyClass: function () {
    wx.navigateTo({
      url: "/my/myClass/index",
    });
  },
  // 跳转至我的关注
  toMyForward: function () {
    wx.navigateTo({
      url: "/my/myForward/index",
    });
  },
  // 跳转至学习记录
  toMyLog: function () {
    wx.navigateTo({
      url: "/my/myLog/index",
    });
  },
  // 跳转至反馈/客服
  toAnswer: function () {
    wx.navigateTo({
      url: "/my/answer/index",
    });
  },
  // 跳转至反馈/客服
  toSetting: function () {
    wx.navigateTo({
      url: "/my/setting/index",
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { }
});