const route = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/home/home")
    }
]

module.exports = route;