const route = [
    {
        path: '/logs/class',
        name: 'LogsClass',
        component: () => import("@/views/logs/class")
    },
    {
        path: '/logs/login',
        name: 'LogsLogin',
        component: () => import("@/views/logs/login")
    },
    {
        path: '/logs/manage',
        name: 'LogsManage',
        component: () => import("@/views/logs/manage")
    }
]
module.exports = route;