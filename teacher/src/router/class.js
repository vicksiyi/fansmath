const route = [
    {
        path: '/class/chat',
        name: 'ClassChat',
        component: () => import("@/views/class/chat")
    },
    {
        path: '/class/invite',
        name: 'ClassInvite',
        component: () => import("@/views/class/invite")
    },
    {
        path: '/class/mine',
        name: 'ClassMine',
        component: () => import("@/views/class/mine")
    },
    {
        path: '/class/room',
        name: 'ClassRoom',
        component: () => import("@/views/class/room")
    },
    {
        path: '/class/myinvite',
        name: 'ClassMyInvite',
        component: () => import("@/views/class/myinvite")
    }
]

module.exports = route;