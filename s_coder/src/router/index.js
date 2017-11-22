import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home'
import personal from '../components/personal/personal'
import type from '../components/type/type'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'app',
      component: app
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/type',
      name: 'type',
      component: type
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
