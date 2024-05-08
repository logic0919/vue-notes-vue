<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    <!-- 使用数据的第一种方法：$store.state.数据名 -->
    从vuex中获取的值: <label>{{$store.state.count}}</label>
    <br>
    <button @click='add(1)'>值 + 1</button>
    <button @click='add(5)'>值 + 5</button>
    <button @click='waitadd(10)'>等待1秒值 + 10</button>
    <br>
    list:{{$store.getters.filterlist}}
    <hr>
    <h4>对于模块的使用</h4>
    模块中的数据：{{$store.state.part1.age}}
    <br>
    模块中的getters:{{$store.getters['part1/upname']}}
    <br>
    模块中的mutations：<button @click='updateage(20)'>更改part1中的年龄为20</button>
    <br>
    模块中的actions：<button @click='changename()'>1秒后修改part1中的名字</button>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    add (n) {
      // 修改数据的第一种方法：this.$store.commit('add', n)
      // 第一个参数时对应的函数名，第二个是传给函数的参数，如果传多个参数，应将其封装成数组或对象形式
      // 如[a,b,c],{a:1,b:2,c:'hello}

      // 注意：修改数据不能用this.$store.state.count++，如果希望对这种错误报错，可以开启严格模式，即在仓库中写入语句strict:true
      this.$store.commit('add', n)
    },
    waitadd (n) {
      this.$store.dispatch('waitadd', n)
    },
    updateage (n) {
      // 默认模块中的 mutation 和 actions 会被挂载到全局，需要开启命名空间，才会挂载到子模块。
      // 使用模块中的mutations
      this.$store.commit('part1/change', n)
    },
    changename () {
      this.$store.dispatch('part1/changename')
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
