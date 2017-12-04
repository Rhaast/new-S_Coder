import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home'
import personal from '../components/personal/personal'
import type from '../components/type/type'
import addnote from '../components/addnote/addnote'
import addquestion from '../components/addquetions/addquetion'
import mynote from '../components/mynote/mynote'
import myquestions from '../components/myquestions/myquestions'

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
    },
    {
      path: '/addnote',
      name: 'addnote',
      component: addnote
    },
    {
      path: '/addquestion',
      name: 'addquestion',
      component: addquestion
    },
    {
      path: '/mynote',
      name: 'mynote',
      component: mynote
    },
    {
      path: '/myquestions',
      name: 'myquestions',
      component: myquestions
    }
  ]
})
