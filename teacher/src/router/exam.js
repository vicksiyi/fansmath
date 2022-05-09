const route = [
    {
        path: '/exam/entry',
        name: 'ExamEntry',
        component: () => import("@/views/exam/entry")
    },
    {
        path: '/exam/release',
        name: 'ExamRelease',
        component: () => import("@/views/exam/release")
    },
    {
        path: '/exam/task',
        name: 'ExamTask',
        component: () => import("@/views/exam/task")
    }
]
module.exports = route;