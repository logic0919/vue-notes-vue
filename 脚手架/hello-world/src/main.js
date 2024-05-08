// 导入vue核心包
import Vue from 'vue'
// 导入app.vue根组件
import App from './App.vue'

// 提示当前处于什么环境（生产环境/开发环境）
Vue.config.productionTip = false

// vue实例化
new Vue({
  // el:'#app',作用$mount('#app')和一致
  render: h => h(App),
}).$mount('#app')
