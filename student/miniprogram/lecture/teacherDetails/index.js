const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    current: "tab1",
    tab1: true,
    answerArr: [
      {
        date: "2021.04.14",
        class: "高等数学（上）",
        reply:
          "先将积分限带入积分函数，再对积分限进行求导，如果积分函数带有自变量，想办法将其弄到积分号外面来。积分上限函数，设函数在区间上连续，并且设为上的一点，考察定积分。",
        studentName: "孔礼第",
        studentSchool: "中山大学",
        studentQuestion: "求积分上限函数的导数应注意什么？？",
      },
      {
        date: "2021.04.07",
        class: "高等数学（上）",
        reply:
          "可导和可微的关系：可微=>可导=>连续=>可积，在一元函数中，可导与可微等价。",
        studentName: "孔空空",
        studentSchool: "门头沟学院",
        studentQuestion: "数列的性质是什么？",
      },
    ],
    teacherId: "",
    teacherDetails: {
      avatarUrl: "/assets/image/otherIcon/avatar.png",
      name: "王教授",
      school: "广东石油化工学院",
      level: "教授",
      desc: "暂无简介"
    },
    teacherCourse: [
      { title: "高等数学一", img: "/assets/image/math.jpeg" }
    ],
  },

  handleChange({ detail }) {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let teacherId = options.teacherId;
    // console.log(teacherId);
    // let teacherDetails = await this.getDetail(teacherId);
    // let teacherCourse = await this.getTeacherCourse(teacherId);
    // this.setData({
    //   teacherId: teacherId,
    //   teacherDetails: teacherDetails.data[0],
    //   teacherCourse: teacherCourse.data,
    // });
  },
  getDetail: function (id) {
    wx.showLoading({
      title: "获取数据",
      mask: true,
    });
    let data = {
      url: `http://${app.ip}:${app.port}/course/getTeacherDetail/${id}`,
      oauthPath: "../../signIn/index/index",
    };
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading();
    });
  },
  getTeacherCourse: function (id) {
    wx.showLoading({
      title: "获取数据",
      mask: true,
    });
    let data = {
      url: `http://${app.ip}:${app.port}/course/getTeacherCourse/${id}`,
      oauthPath: "../../signIn/index/index",
    };
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading();
    });
  },
});
