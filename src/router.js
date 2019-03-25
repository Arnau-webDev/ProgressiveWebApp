import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Schedule from './views/Schedule.vue'
import Teams from './views/Teams.vue'



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/schedule/:name',
      name: "schedule",
      component: Schedule,
      props: true
    },
    {
      path: '/teams',
      name: "teams",
      component: Teams
    }
  ]
})
