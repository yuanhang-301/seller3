import Vue from 'vue'
import App from './App.vue'
import router from 'router/router.js'
import store from "store/store.js"
import axios from "http/http"
import "@/mock"
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
