// 路由模块封装

import Vue from 'vue'
import find from '../views/find.vue'
import my from '../views/my.vue'
import friend from '../views/friend.vue'
import notfound from '../views/notfound.vue'

/*
以上为相对路径，可以改为用绝对路径，即用@，@表示src：
import find from '@/views/find.vue'
import my from '@/views/my.vue'
import friend from '@/views/friend.vue'
*/


/*
VueRouter的使用步骤5 + 2
1.下载 npm i vue - router@3.6.5
2.引入 import VueRouter from 'vue-router'
3.安装注册 Vue.use(VueRouter)
4.创建路由对象 const router = new VueRouter()
5.注入 new Vue({
  render: h => h(App),
  router
}).$mount('#app')

1.创建需要的组件(view目录)，配置路由规则
2.配置导航，配置路由出口
*/
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // 路由重定向
    { path: '/', redirect: '/find' },
    { path: '/find', component: find, name: 'find' },
    // 以下这一行，要是没有?表示必须传参数，加?表示可以没有参数
    { path: '/my/:words?', component: my, name: 'my' },
    { path: '/friend', component: friend, name: 'friend' },
    { path: '*', component: notfound }
  ],
  // hash路由(默认) 例如: http://localhost:8080/#/home
  // historv路由(常用) 例如: http://localhost:8080/home (以后上线需要服务器端支持)
  mode: 'history',
  // 以下可以为默认的高亮的类名换名字
  linkActiveClass: 'high',
  linkExactActiveClass: 'exactHigh'
})
// 导出
export default router