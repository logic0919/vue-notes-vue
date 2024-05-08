<template>
  <button @click="add(20)">更改part1中的年龄为20</button>
</template>

<script>
export default {
  methods: {
    add (n) {
      // 第一个参数时对应的函数名，第二个是传给函数的参数，如果传多个参数，应将其封装成数组或对象形式
      // 如[a,b,c],{a:1,b:2,c:'hello}

      // 注意：修改数据不能用this.$store.state.count++，如果希望对这种错误报错，可以开启严格模式，即在仓库中写入语句strict:true
      this.$store.commit('add', n)
    }
  }
}
</script>

<style>
</style>
