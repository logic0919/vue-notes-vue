<template>
  <div id="app">
    <!-- 用添加属性的方法传值 -->
    <Son :name='name' :age='age' :car='car' @changeEvent="changeData"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'

export default {
  name: 'App',
  components: {
    Son,
  },
  // data要写成函数形式
  data(){
    return {
      name:'Paul',
      age:20,
      car:true,
    }
  },
  methods:{
    changeData(newData){
      this.car=newData
    }
  }
}
</script>


<style>

</style>
