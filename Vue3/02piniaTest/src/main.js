import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'

const pinia = createPinia()//创建pinia实例

// createApp(App).use(pinia).mount('#app')//链式

// 导入持久化插件并添加到pinia实例上
import persist from 'pinia-plugin-persistedstate'
pinia.use(persist)

const app=createApp(App)//创建根实例
app.use(pinia)//非链式
app.mount('#app')//视图的挂载
app.use(axios)