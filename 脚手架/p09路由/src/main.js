import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  /*
  以下这一行，如果冒号前后一样，就可以简写为：
  router
  如果不一样，也就是如果创建的路由对象不叫router，就不能简写
  */
  router: router
}).$mount('#app')
