const route = [
    {
        path: '/class/chat',
        name: 'ClassChat',
        component: () => import("@/views/class/chat")
    },
    {
        path: '/class/team',
        name: 'ClassTeam',
        component: () => import("@/views/class/team")
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
        path: '/class/invite',
        name: 'ClassInvite',
        component: () => import("@/views/class/invite")
    }
]

module.exports = route;