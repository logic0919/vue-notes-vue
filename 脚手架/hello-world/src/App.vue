<template>
<!-- 有且只能有一个根元素 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  <div class="box"></div>
  </div>
</template>

<script>
// 导入局部组件，从components中，components文件夹存放的就是局部组件
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang=less>
/*
让style支持Iess
1.给style加上 lang="less'
2.安装依赖包 less less-loader
yarn add less less-loader -D (开发依赖)
*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .box{
    width: 100px;
    height: 100px;
    background: #2c3e50;
  }
}
</style>
