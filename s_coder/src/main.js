// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/validate.js'
import ElementUI from 'element-ui'
// import '../node_modules/element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem } from 'mint-ui';
import './assets/css/login.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'
import axios from 'axios'
import {time} from './assets/js/date'



Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(ElementUI)
Vue.use(axios)
Vue.filter('time', function (value) {
  return goodTime(value);
})


function goodTime(str){
 var now = new Date().getTime(),
 oldTime = new Date(str).getTime(),
 difference = now - oldTime,
 result='',
 minute = 1000 * 60,
 hour = minute * 60,
 day = hour * 24,
 halfamonth = day * 15,
 month = day * 30,
 year = month * 12,
 _year = difference/year,
 _month =difference/month,
 _week =difference/(7*day),
 _day =difference/day,
 _hour =difference/hour,
 _min =difference/minute;
 if(_year>=1) {result= "发表于 " + ~~(_year) + " 年前"}
 else if(_month>=1) {result= "发表于 " + ~~(_month) + " 个月前"}
 else if(_week>=1) {result= "发表于 " + ~~(_week) + " 周前"}
 else if(_day>=1) {result= "发表于 " + ~~(_day) +" 天前"}
 else if(_hour>=1) {result= "发表于 " + ~~(_hour) +" 个小时前"}
 else if(_min>=1) {result= "发表于 " + ~~(_min) +" 分钟前"}
 else result="刚刚";
 return result;
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   render: h => h(App)// 渲染视图 当前的页面
})
