// pages/setting/studentOauth/studentOauth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2030],
    titlePickerShow: false,
    endTimeIndex: 0,
    levelIndex: 0,
    level: ['大专', '本科', '硕士'],
    levelPickerShow: false,
    myLevel: '',
    endTime: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  endTimePickerChange: function (e) {
    this.setData({
      endTimeIndex: e.detail.value,
    });
  },
  levelPickerChange: function (e) {
    this.setData({
      levelIndex: e.detail.value,
    });
  },
  openendTimePicker: function () {
    this.setData({
      endTimePickerShow: true,
    });
  },
  openlevelPicker: function () {
    this.setData({
      levelPickerShow: true,
    });
  },
  closeendTimePicker: function () {
    this.setData({
      endTimePickerShow: false,
    });
  },
  closeLevelPicker: function () {
    this.setData({
      levelPickerShow: false,
    });
  },
  sumbitendTimePicker: function () {
    this.setData({
      endTimePickerShow: false,
      endTime: `${this.data.years[this.data.endTimeIndex]}年`
    });
  },
  sumbitLevelPicker: function () {
    this.setData({
      levelPickerShow: false,
      myLevel: `${this.data.level[this.data.levelIndex]}`
    });
  }
})