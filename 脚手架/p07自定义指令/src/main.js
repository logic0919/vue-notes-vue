import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局注册自定义指令
// 指令名，配置项
// Vue.directive('focus', {
//   // inserted 会在 指令所在的元素被插入到页面中时触发
//   inserted(el) {
//     // el 就是指令所绑定的元素
//     el.focus()
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
