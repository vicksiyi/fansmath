import Vue from 'vue'
import Router from 'vue-router'
import home from "./home";
import classRoute from "./class";
import dataRoute from "./data";
import examRoute from "./exam";
import logsRoute from "./logs";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/views/home"),
      children: [
        ...home,
        ...classRoute,
        ...dataRoute,
        ...examRoute,
        ...logsRoute
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import("@/views/login")
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import("@/views/register")
    },
    {
      path: '/forget',
      name: 'Forget',
      component: () => import("@/views/forget")
    },
    {
      path: '/*',
      name: 'notFound',
      component: () => import("@/views/service/notFound")
    }
  ]
})
