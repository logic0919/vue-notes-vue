<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{count}}</label>
    <br />
    <button @click='sub(1)'>值 - 1</button>
    <button @click='sub(5)'>值 - 5</button>
    <button @click='waitsub(10)'>等待1秒值 - 10</button>
    <br>
    list:{{filterlist}}
    <hr>
    <h4>模块的使用</h4>
    模块中的数据：{{part2.goods}}-{{price}}
    <br>
    模块中的getters：{{upname}}<!-- {{part1/upname}}使用有问题 -->
    <br>
    <!-- 模块中的mutations：<button @click='part1/change(40)'>更改part1中的年龄为40</button>使用有问题 -->
    <br>
    模块中的mutations：<button @click='change(50)'>更改part1中的年龄为50</button>
    <br>
    模块中的actions：<button @click='changename()'>1秒后修改part1中的名字</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  methods: {
    ...mapMutations(['sub']),
    ...mapActions(['waitsub']),
    // 模块中的Mutations
    // 1.默认根级别的映射
    // ...mapMutations(['part1']),
    // 2.子模块的映射
    ...mapMutations('part1', ['change']),
    // 模块中的actions
    // 子模块的映射
    ...mapActions('part1', ['changename'])
  },
  computed: {
    // mapstate本质是一个函数，参数是数组
    // 数组元素是state中的元素，该函数生成的是一个对象，内容是函数
    // computed是一个对象，内容为多个函数
    // 所以这里用到了展开运算符
    ...mapState(['count']),
    ...mapGetters(['filterlist']),
    // 模块中的数据：
    // 第一种：默认根级别的映射
    ...mapState(['part2']),
    // 第二种：子模块的映射，需要开启命名空间
    ...mapState('part2', ['price']),
    // 模块中的getters
    // ...mapGetters(['part1']),
    ...mapGetters('part1', ['upname'])
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
