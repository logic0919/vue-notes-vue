import Vue from 'vue'
import App from './App.vue'
// 先导入要全局注册的组件
import Button from './components/Button.vue'

Vue.config.productionTip = false

// 在main.js中进行全局注册组件
Vue.component('Button', Button)

new Vue({
  render: h => h(App),
}).$mount('#app')

