<script setup>
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'

import { useCounterStore } from './store/counter';
const counterStore = useCounterStore()

// 解构仓库
import { storeToRefs } from 'pinia';
// 数据通过storeToRefs解构，否则无法实现响应式
const { count, msg } = storeToRefs(counterStore)
// 方法直接结构即可
const {addCount,msgChange} =counterStore

// import { useChannelStore } from './store/channel';
// const channelStore = useChannelStore()

console.log(counterStore.count);
console.log(counterStore.count.value);//undefined，能否说明传过来的数据不是ref对象，而是普通数据
</script>

<template>
  <div>
    <h3>根实例-{{ counterStore.count }}</h3>
    <Son1></Son1>
    <Son2></Son2>
    <!-- <button @click="channelStore.getList">获取异步</button>
    {{channelStore.list}} -->
  </div>
</template>

<style scoped>

</style>
