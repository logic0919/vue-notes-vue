<template>
  <div id="app">
    <show1></show1>
    <show1>show1传参</show1>
    <show2>
      <template v-slot:name>andy</template>
      <template v-slot:age>20</template>
      <template #hobby>eat</template>
    </show2>
    <show3 :list=list>
      <template #default='allmsg'>
        <button @click='del(allmsg.row.id)'>删除</button>
      </template>
    </show3>
  </div>
  <!-- 插槽分类: 默认插槽(组件内定制一处结构) 具名插槽(组件内定制多处结构) -->
  <!-- 作用域插槽是插槽的一个传参语法作用 -->
</template>

<script>
import show1 from './components/show1.vue'
import show2 from './components/show2.vue'
import show3 from './components/show3.vue'

export default {
  name: 'App',
  components: {
    show1,
    show2,
    show3
  },
  data(){
    return{
      list:[{
        id:1,
        name:'paul',
        age:20
      },{
        id:2,
        name:'andy',
        age:18
      },{
        id:3,
        name:'siri',
        age:22
      }]
    }
  },
  methods:{
    del(id){
      this.list=this.list.filter(item=>item.id!=id)
    }
  }
}
</script>

<style>

</style>
