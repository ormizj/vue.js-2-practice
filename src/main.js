import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false
//ignoring warnings for vue custom elements (not used in this app, custom-elements-should-be-seperated-with "-")
Vue.config.ignoredElements = [/-/];

new Vue({
  render: h => h(App),
  //adding routing to the application
  router

  //"$mount(#app)" is equivalent to "el: '#app'"
}).$mount('#app')
