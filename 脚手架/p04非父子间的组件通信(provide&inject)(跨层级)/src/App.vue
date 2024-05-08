<template>
  <div id="app">
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'

export default {
  name: 'App',
  components: {
    SonA,
    SonB
  },
  data(){
    return {
      name:'andy',
      inf:{
        age:20,
        hobby:'running'
      }
    }
  },
  // provide跨层级共享数据
  provide(){
    return {
      // 普通类型数据是非响应式的
      name:this.name,
      // 复杂类型数据是响应式的
      inf:this.inf
    }
  }
}
</script>

<style>
#app {
  width: 300px;
  height: 600px;
}
</style>
