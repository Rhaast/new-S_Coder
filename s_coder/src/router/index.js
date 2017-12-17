import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import personal from '@/components/personal/personal'
import type from '@/components/type/type'
import addnote from '@/components/addnote/addnote'
import addquestion from '@/components/addquetions/addquetion'
import mynote from '@/components/mynote/mynote'
import myquestions from '@/components/myquestions/myquestions'
import mynotedetail from '@/components/mynotedetail/mynotedetail'
import changenickname from '@/components/changenickname/changenickname'
import changepersonSign from '@/components/changepersonSign/changepersonSign'
import comment from '@/components/comment/comment'
import nestedreview from '@/components/Nestedreview/nestedreview'
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
      path: '/changenickname',
      name: 'changenickname',
      component: changenickname
    },
      {
      path: '/changepersonSign',
      name: 'changepersonSign',
      component: changepersonSign
    },
    {
      path: '/comment',
      name: 'comment',
      component:comment
    },
    {
      path: '/nestedreview',
      name: 'nestedreview',
      component:nestedreview
    },
    {
      path: '/addquestion',
      name: 'addquestion',
      component: addquestion
    },
    {
      path: '/mynote',
      name: 'mynote',
      component: mynote,
    },
    {
      path: '/mynotedetail/',
      name: 'mynotedetail',
      component: mynotedetail
    },

    {
      path: '/myquestions',
      name: 'myquestions',
      component: myquestions
    }
  ]
})
