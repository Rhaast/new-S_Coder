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




Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(ElementUI)
Vue.use(axios)





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   render: h => h(App)// 渲染视图 当前的页面
})
