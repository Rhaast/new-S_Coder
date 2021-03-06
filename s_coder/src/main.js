// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import '../node_modules/element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import '../node_modules/mavon-editor/dist/css/index.css'
import { Swipe, SwipeItem ,Popup } from 'mint-ui';
import './assets/css/login.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'
import axios from 'axios'



Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.use(ElementUI)
Vue.use(axios)
Vue.use(mavonEditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   render: h => h(App)// 渲染视图 当前的页面
})
