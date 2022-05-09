const route = [
    {
        path: '/data/class',
        name: 'DataClass',
        component: () => import("@/views/data/class")
    },
    {
        path: '/data/exam',
        name: 'DataExam',
        component: () => import("@/views/data/exam")
    },
    {
        path: '/data/study',
        name: 'DataStudy',
        component: () => import("@/views/data/study")
    }
]
module.exports = route;