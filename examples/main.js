import Vue from 'vue'
import App from './App.vue'
import WQJ from '../packages/wqj.js'

Vue.config.productionTip = false

Vue.use(WQJ)

new Vue({
  render: h => h(App)
}).$mount('#app')
