// 侧栏选择菜单
const menu = [
    {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "/home",
    },
    {
        label: "课程管理",
        icon: "setting",
        children: [
            {
                path: "/class/mine",
                name: "classMine",
                label: "我的课程",
                url: "/class/mine",
            },
            {
                path: "/class/team",
                name: "classTeam",
                label: "教学团队",
                url: "/class/team",
            },
            {
                path: "/class/room",
                name: "classRoom",
                label: "课程管理",
                url: "/class/room",
            },
            {
                path: "/class/chat",
                name: "classChat",
                label: "聊天管理",
                url: "/class/chat",
            },
            {
                path: "/class/invite",
                name: "classInvite",
                label: "我的邀请",
                url: "/class/invite",
            }
        ],
    },
    {
        label: "数据管理",
        icon: "data-line",
        children: [
            {
                path: "/data/class",
                name: "dataClass",
                label: "课程数据",
                url: "/data/class",
            },
            {
                path: "/data/study",
                name: "dataStudy",
                label: "学习数据",
                url: "/data/study",
            },
            {
                path: "/data/exam",
                name: "dataExam",
                label: "考试数据",
                url: "/data/exam",
            }
        ],
    },
    {
        label: "考试管理",
        icon: "medal",
        children: [
            {
                path: "/exam/entry",
                name: "examEntry",
                label: "录入分数",
                url: "/exam/entry",
            },
            {
                path: "/exam/release",
                name: "examRelease",
                label: "发布考试",
                url: "/exam/release",
            },
            {
                path: "/exam/task",
                name: "examTask",
                label: "改卷任务",
                url: "/exam/task",
            }
        ],
    },
    {
        label: "日志管理",
        icon: "discount",
        children: [
            {
                path: "/logs/login",
                name: "logsLogin",
                label: "登录日志",
                url: "/logs/login",
            },
            {
                path: "/logs/class",
                name: "logsClass",
                label: "课程日志",
                url: "/logs/class",
            },
            {
                path: "/logs/manage",
                name: "logsManage",
                label: "操作日志",
                url: "/logs/manage",
            }
        ],
    }
]

module.exports = { menu }