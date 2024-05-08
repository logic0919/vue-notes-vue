<script setup>
import { onMounted, provide, ref } from 'vue';
import propSon from './components/01propSon.vue'
import refTest from './components/02refTest.vue'
import center from './components/03centerTest.vue'

// 1.父子组件通信
const money = ref(0)
const add = () => {
  money.value+=20
}

const subMoney = (newMoney) => {
  money.value=newMoney
}

// 2.模板引用
const inp=ref(null)
const test = ref(null)

console.log(inp);//未渲染完成
console.log(inp.value);//null

onMounted(() => {
  console.log(inp);
  console.log(inp.value);
  console.log(test.value.age);
  test.value.sayHi()
})

const makeFocus = () => {
  inp.value.focus()
}

// 3.provide&inject
const count = ref(100)
// 传递
// 注意传递的是ref对象，而不是ref.value
provide('count', count)
provide('changeCount', (newCount) => {
  count.value=newCount
})
</script>

<template>
  <header>
    <h3>父子组件通信</h3>
    <propSon :money="money" @subMoney="subMoney"></propSon>
    <button @click="add">父挣钱</button>
    <hr>
    <h3>模板引用</h3>
    <input type="text" ref="inp">
    <button @click="makeFocus">点击聚焦input框</button>
    <refTest ref="test"></refTest>
    <hr>
    <h3>rovide&inject</h3>
    <h6>这是top</h6>
    <center></center>
  </header>
</template>

<style scoped>

</style>
