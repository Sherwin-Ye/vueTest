// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/test.css'
import AppStart from './AppStart'
import AppExtension from './AppExtension'
import AppNav from './AppNav'



Vue.config.productionTip = false
Vue.use(iView)
// Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,AppStart,AppExtension,AppNav },
  // template: '<App/>'
  template: '<AppExtension/>'
})
