const app = getApp();
const { $Message } = require('../../dist/base/index');
var timeHandle = null;
Page({
  data: {
    current: "tab1",
    tab1: true,
    id: '',
    deatilData: {
      title: "高等数学（上）",
      teachers: "王老师",
      videoUrl:"https://vd2.bdstatic.com/mda-ne63wwdievx4sm7s/sc/cae_h264_delogo/1651892099687886585/mda-ne63wwdievx4sm7s.mp4?v_from_s=hkapp-haokan-hnb&auth_key=1651905532-0-0-d40aa64051d071d27deb4277173ea6b4&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=0532774202&vid=5012546719982262509&abtest=101830_2-17451_2&klogid=0532774202",
      count: 200,
      courseIntroduct:
        "我是课程简介，主讲老师丰富的教学经验，在学习理论知识的同时，学会用数学的思维思考问题，混合式教学模式，开创了该课程教学创新的先河，欢迎同学学习~",
      courseOverview:
        "高等数学（上）在线课程除配有知识点视频外，还有与之配套的题目推送，包括在线练习，每章的在线自测练习、期中、期末考模拟题，以及师生互动和畅聊等环节 。高等数学（上）在线课程，教学内容设计合理，讲解深入浅出，难度适中。针对每一个知识点，突出基本概念、基本理论和基本方法；注重概念、定理的的提炼过程，引导及训练学生如何发现问题和解决问题；加强了教学内容与实际问题的结合。创新的理念和创新意识贯穿高等数学在线课程始终。选择合适的切入点，适当地加强了课程思政内容，让同学们做到德与智的全面发展。",
      courseTarget:
        "通过本课程的学习，不仅掌握“高等数学”（上）必备的基础知识，为学习其它课程打下基础，而且锻炼同学发现问题和解决实际问题的能力，获得必不可少的数学素质和修养。",
    },
    links: [
      {
        name: "高等数学参考资料",
        link: "https://"
      },
      {
        name: "参考资料",
        link: "https://"
      }
    ],
    time: 0
  },

  videoTabChange({ detail }) {
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
  copy: function (e) {
    let link = e.currentTarget.dataset.link;
    wx.setClipboardData({
      data: link,
      success: function (res) {
        $Message({
          content: '复制成功',
          type: 'success'
        })
      }
    })
  },
  onLoad: async function (options) {
    let _this = this;
    let id = options.id;
    // let deatilData = await this.getDetail(id);
    // let links = await this.getLink(id);
    // this.setData({
    //   id: options.id,
    //   deatilData: deatilData.data[0],
    //   links: links.data
    // })
    // // 开始计时
    // this.time();
  },
  getDetail: function (id) {
    wx.showLoading({
      title: '获取数据',
      mask: true
    })
    let data = {
      url: `http://${app.ip}:${app.port}/course/getDoubleChildChapter/${id}`,
      oauthPath: '../../signIn/index/index'
    }
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading()
    })
  },
  getLink: function (id) {
    wx.showLoading({
      title: '获取友情链接',
      mask: true
    })
    let data = {
      url: `http://${app.ip}:${app.port}/course/getChapterLinks/${id}`,
      oauthPath: '../../signIn/index/index'
    }
    return getRequest.PrivateRequest(data, () => {
      wx.hideLoading()
    })
  },
  time: function () {
    let _this = this;
    _this.setData({
      time: 0
    })
    timeHandle = setInterval(() => {
      if (_this.data.time == 60) {
        this.addLearningTime(60)
        clearInterval(timeHandle)
        _this.time();
      } else {
        _this.setData({
          time: _this.data.time + 1
        })
      }
    }, 1000);
  },
  addLearningTime: function (time) {
    let data = {
      url: `http://${app.ip}:${app.port}/log/learningTime`,
      oauthPath: '../../signIn/index/index',
      method: 'post',
      item: {
        doubleChildChapterId: this.data.deatilData.id,
        time: time
      }
    }
    return getRequest.PrivateRequest(data)
  },
  onUnload: function () {
    let time = this.data.time
    if (time > 0) {
      this.addLearningTime(time)
    }
    console.log('onUnload')
    clearInterval(timeHandle)
  }
});
