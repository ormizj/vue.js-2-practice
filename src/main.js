import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //adding routing to the application
  router
}).$mount('#app')
