const app = getApp();
const wxCharts = require("../../utils/wxcharts.js");
var pieChart = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: 0,
    id: "",
    showMore: false,
    showClassMore: false,
    showClassModal: false,
    showAnswerModal: false,
    deatilData: {
      title: "高等数学（上）",
      teachers: "王老师",
      count: 200,
      courseIntroduct:
        "我是课程简介，主讲老师丰富的教学经验，在学习理论知识的同时，学会用数学的思维思考问题，混合式教学模式，开创了该课程教学创新的先河，欢迎同学学习~",
      courseOverview:
        "高等数学（上）在线课程除配有知识点视频外，还有与之配套的题目推送，包括在线练习，每章的在线自测练习、期中、期末考模拟题，以及师生互动和畅聊等环节 。高等数学（上）在线课程，教学内容设计合理，讲解深入浅出，难度适中。针对每一个知识点，突出基本概念、基本理论和基本方法；注重概念、定理的的提炼过程，引导及训练学生如何发现问题和解决问题；加强了教学内容与实际问题的结合。创新的理念和创新意识贯穿高等数学在线课程始终。选择合适的切入点，适当地加强了课程思政内容，让同学们做到德与智的全面发展。",
      courseTarget:
        "通过本课程的学习，不仅掌握“高等数学”（上）必备的基础知识，为学习其它课程打下基础，而且锻炼同学发现问题和解决实际问题的能力，获得必不可少的数学素质和修养。",
    },
    answerArr: [
      {
        avatar: "/assets/image/otherIcon/avatar.png",
        name: "李大都",
        school: "厦门大学",
        date: "2021.04.05",
        question: "可导与可微有何关系？",
        answer: "一元函数中可导与可微等价,它们与可积无关",
        viewCount: 165,
        lookCount: 29,
        answerCount: 3,
      },
      {
        avatar: "/assets/image/otherIcon/avatar.png",
        name: "孔礼第",
        school: "中山大学",
        date: "2021.03.24",
        question: "求积分上限函数的导数应注意什么？",
        answer: "一元函数中可导与可微等价,即为充分必要条件。",
        viewCount: 317,
        lookCount: 1,
        answerCount: 34,
      },
      {
        avatar: "/assets/image/otherIcon/avatar.png",
        name: "陈小薇",
        school: "清华大学",
        date: "2021.03.17",
        question: "加绝对值函数的连续性的关系？",
        answer:
          "多元函数可微必可导,而反之不成立,即可导是可微的充分不必要条件。",
        viewCount: 100,
        lookCount: 5,
        answerCount: 20,
      },
    ],
    bookArr: [{
      title:"高等数学一",
      author:"王教授",
      version:"一",
      press:"xxxxx",
      isbn:"xxxxx",
      img:"https://img1.baidu.com/it/u=3066637667,3550351465&fm=253&fmt=auto&app=138&f=JPEG?w=513&h=500"
    }],
    classArr: [
      {
        id: 0,
        firstTitle: "第一章 微积分纵览",
        secondData: [
          {
            id: 0,
            secondTitle: "1.1 微积分创立背景",
            thirdData: [
              {
                id: 0,
                thirdTitle: "1.1.1 平面图形面积",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
              {
                id: 1,
                thirdTitle: "1.1.2 平面曲线切线",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
              {
                id: 2,
                thirdTitle: "1.1.3 无穷多个数的和",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
            ],
          },
          {
            id: 1,
            secondTitle: "1.2 如何学习微积分",
            videoSrc: "video src test",
            pptSrc: "ppt src test",
          },
        ],
      },
      {
        id: 1,
        firstTitle: "第二章 如何做微积分",
        secondData: [
          {
            id: 0,
            secondTitle: "2.1 问题引入",
            thirdData: [
              {
                id: 0,
                thirdTitle: "2.1.1 界面简介",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
              {
                id: 1,
                thirdTitle: "2.1.2 基本运算与数",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
              {
                id: 2,
                thirdTitle: "2.1.3 函数与列表处理",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
            ],
          },
          {
            id: 1,
            secondTitle: "2.2 绘制图形",
            thirdData: [
              {
                id: 0,
                thirdTitle: "2.2.1 解方程与不等式",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
              {
                id: 1,
                thirdTitle: "2.2.2 导数与微分",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
              {
                id: 2,
                thirdTitle: "2.2.3 求积分与解微分方程",
                videoSrc: "video src test",
                pptSrc: "ppt src test",
              },
            ],
          },
        ],
      },
    ],
    height: 0,
    classAnswerArr: [
      {
        avatar: "/assets/image/otherIcon/avatar.png",
        name: "孔礼第",
        school: "中山大学",
        date: "2021.03.15",
        question: "讲课思路清晰，定理解释详细而生动，很好",
        good: 15,
        rate: 5,
      },
      {
        avatar: "/assets/image/otherIcon/avatar.png",
        name: "李大都",
        school: "汕头大学",
        date: "2021.03.03",
        question: "这是我目前听过的讲得最好的高数。",
        good: 28,
        rate: 5,
      },
      {
        avatar: "/assets/image/otherIcon/avatar.png",
        name: "陈小薇",
        school: "清华大学",
        date: "2021.02.03",
        question: "挺不错的课程",
        good: 99,
        rate: 5,
      },
    ],
    isScale: true,
    teachers: [
      {
        id: 0,
        img: "/assets/image/otherIcon/avatar.png",
        name: "王守中",
        title: "副教授",
      },
      {
        id: 1,
        img: "/assets/image/otherIcon/avatar.png",
        name: "江蓉",
        title: "副教授",
      },
      {
        id: 2,
        img: "/assets/image/otherIcon/avatar.png",
        name: "老师",
        title: "职位",
      },
      {
        id: 3,
        img: "/assets/image/otherIcon/avatar.png",
        name: "老师",
        title: "职位",
      },
      {
        id: 4,
        img: "/assets/image/otherIcon/avatar.png",
        name: "老师",
        title: "职位",
      },
    ],
  },

  toClassPPT: function (e) {
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: `../classPPT/index?url=https://www.rfc-editor.org/pdfrfc/rfc2616.txt.pdf`,
    });
  },

  toClassVideo: function (e) {
    wx.navigateTo({
      url: `../classVideo/index`,
    });
  },

  // 在线教程查看更多
  classToggle: function () {
    this.setData({
      showClassMore: !this.data.showClassMore,
    });
  },

  // 互动问答查看更多
  listToggle: function () {
    this.setData({
      showMore: !this.data.showMore,
    });
  },

  //跳转至教师详情页
  toTeacherDetails: function (e) {
    wx.navigateTo({
      url: `../teacherDetails/index`,
    });
  },

  // 打开课程大纲模块
  openClassModal: function () {
    this.setData({
      showClassModal: true,
    });
  },

  // 关闭课程大纲模块
  closeClassModal: function () {
    this.setData({
      showClassModal: false,
    });
  },

  // 打开问答回答模块
  openAnswerModal: function () {
    this.setData({
      showAnswerModal: true,
    });
  },

  // 关闭问答回答模块
  closeAnswerModal: function () {
    this.setData({
      showAnswerModal: false,
    });
  },

  preventTouchMove: function () { },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let _this = this;
    let scale = [{ name: "线上考试", data: 20 }, { name: "线下考试", data: 70 }, { name: "平时成绩", data: 10 }]
    // wx.showLoading({
    //   title: "正在加载数据",
    //   mask: true,
    // });
    // let _this = this;
    // let id = options.id;
    // let deatilData = await this.getCourse(id);
    // let result = await this.getScale(id);
    // let chapters = await this.getChapter(id);
    // let referenceBook = await this.getReferenceBook(id);
    // let teachers = await this.getTeachers(id);
    // let scale = [];
    // for (let i = 0; i < result.data.length; i++) {
    //   scale.push({
    //     name: result.data[i].name,
    //     data: result.data[i].scale,
    //   });
    // }
    wx.getSystemInfo({
      success: (result) => {
        _this.setData({
          height: result.windowHeight,
        });
        if (scale.length != 0) {
          _this.setData({
            isScale: true,
          });
          pieChart = new wxCharts({
            animation: true,
            canvasId: "pieCanvas",
            type: "pie",
            series: scale,
            width: result.windowWidth,
            height: 200,
            dataLabel: true,
          });
        }
      },
    });
    wx.hideLoading();
  },
  getCourse: function (id) {
    wx.showLoading({
      title: "获取课堂数据",
      mask: true,
    });
    let data = {
      url: `http://${app.ip}:${app.port}/course/getCourse/${id}`,
      oauthPath: "../../signIn/index/index",
    };
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading();
    });
  },
  getScale: function (id) {
    wx.showLoading({
      title: "占分比例",
      mask: true,
    });
    let data = {
      url: `http://${app.ip}:${app.port}/course/getScale/${id}`,
      oauthPath: "../../signIn/index/index",
    };
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading();
    });
  },
  getChapter: function (id) {
    wx.showLoading({
      title: "获取章节数据",
      mask: true,
    });
    let _this = this;
    let data = {
      url: `http://${app.ip}:${app.port}/course/getChapter/${id}`,
      oauthPath: "../../signIn/index/index",
    };
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading();
    });
  },
  getReferenceBook: function (courseId) {
    wx.showLoading({
      title: "获取参考教材",
      mask: true,
    });
    let data = {
      url: `http://${app.ip}:${app.port}/course/getReferenceBook/${courseId}`,
      oauthPath: "/signIn/index/index",
    };
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading();
    });
  },
  getTeachers: function (id) {
    wx.showLoading({
      title: "获取教师团队",
      mask: true,
    });
    let data = {
      url: `http://${app.ip}:${app.port}/course/getTeachers/${id}`,
      oauthPath: "../../signIn/index/index",
    };
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading();
    });
  },
});
