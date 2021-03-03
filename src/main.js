import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// 把router实例挂载到根实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
