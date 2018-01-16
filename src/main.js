// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// vue
import Vue from 'vue'
// vue-router
import router from './router'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios
import axios from 'axios'
// components
import App from './App'


Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$axios = axios.create({
	baseURL: '/api'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
